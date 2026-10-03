// Museum vs. The Street — single source of truth lives in data/figures.json,
// but we inline defaults so file:// opens still work without fetch.

const DEFAULTS = {
  then_price: 80,
  then_daily: 1.5,
  then_annual: 450,
  then_loaf: 0.05,
  now_price: 70000000,
  now_weekly_median: 1204,
  now_annual_median: 62608,
  now_loaf: 3.0,
  now_house: 412000,
  then_house: 2000,
};

const fmt = {
  int: (n) => Math.round(n).toLocaleString("en-US"),
  money: (n) =>
    n >= 1e6 ? `$${(n / 1e6).toLocaleString("en-US", { maximumFractionDigits: 1 })}M` : `$${fmt.int(n)}`,
};

function derived(d = DEFAULTS) {
  return {
    thenWorkdays: d.then_price / d.then_daily,
    thenYears: d.then_price / d.then_annual,
    thenLoaves: d.then_price / d.then_loaf,
    thenWageLoaves: d.then_annual / d.then_loaf,
    nowYears: d.now_price / d.now_annual_median,
    nowWorkdays: (d.now_price / d.now_annual_median) * 260,
    nowLoaves: d.now_price / d.now_loaf,
    nowWageLoaves: d.now_annual_median / d.now_loaf,
    nowHouses: d.now_price / d.now_house,
    nowWageHouses: d.now_annual_median / d.now_house,
  };
}

// Render headline numbers (in case JSON tweaks them later)
async function loadFigures() {
  try {
    const res = await fetch("data/figures.json");
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null; // file:// — fall back to DEFAULTS
  }
}

function renderBread(loavesThen, loavesNow, perIcon, cap = 120) {
  const thenEl = document.getElementById("bread-then");
  const nowEl = document.getElementById("bread-now");
  const thenCap = document.getElementById("bread-then-cap");
  const nowCap = document.getElementById("bread-now-cap");
  if (!thenEl || !nowEl) return;

  const nThen = Math.max(1, Math.round(loavesThen / perIcon));
  const nNowFull = Math.round(loavesNow / perIcon);
  const nNow = Math.min(nNowFull, cap);

  thenEl.textContent = "🍞".repeat(Math.min(nThen, cap));
  nowEl.textContent = "🍞".repeat(nNow);
  if (thenCap) thenCap.textContent = `${fmt.int(loavesThen)} loaves ÷ ${fmt.int(perIcon)}/icon = ${fmt.int(nThen)} icons shown.`;
  if (nowCap)
    nowCap.textContent =
      nNowFull > cap
        ? `${fmt.int(loavesNow)} loaves ÷ ${fmt.int(perIcon)}/icon = ${fmt.int(nNowFull)} icons, capped at ${cap} so your browser survives. Slide right to compress.`
        : `${fmt.int(loavesNow)} loaves ÷ ${fmt.int(perIcon)}/icon = ${fmt.int(nNow)} icons.`;
}

function renderHouses(n = 170) {
  const el = document.getElementById("house-now");
  const cap = document.getElementById("house-now-cap");
  if (!el) return;
  el.textContent = "🏠".repeat(Math.round(n));
  if (cap) cap.textContent = `${fmt.int(n)} median houses ($412k each) = $70M. A median worker buys 0.15 houses/year.`;
}
