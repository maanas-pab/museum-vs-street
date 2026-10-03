# Methods & honesty notes

This page is an **illustrated comparison**, not an appraisal. Every number is an anchor with error bars. Here's exactly what we did.

## What "price then" means

*The Potato Eaters* (Apr–May 1885, Nuenen) never sold in Van Gogh's lifetime. It sits in the Van Gogh Museum today.

So we don't pretend it had a price tag. We use the closest honest market anchor:

- **400 francs (~$80 in 1890 dollars)** — the price Anna Boch paid for *The Red Vineyard* at Brussels in early 1890, the one sale Van Gogh made through an official show to a non-relative.
- Van Gogh also bartered work for food and supplies, and took an early commission from his uncle Cor — those aren't market prices, so we don't chart them.

> If you see "≈ $80 / 53 days' wages / 1,600 loaves" for 1885, read it as: *a Van Gogh-scale canvas in that world cost about what a labourer earned in two months.*

## Wages, then

No single "average wage" existed in 1885. We anchor to US reports because they're the best-tabulated, and footnote the Dutch figure:

- US farm hands: **$1.50–1.75/day** excl. board (Michigan/railroad reports, 1885).
- US manufacturing: **$1.44–1.61/day** (Weeks Report vs Aldrich Report, 1885).
- Netherlands day-labourer: **~ƒ1/day (~$0.40)** (US Consular *Money and Prices in Foreign Countries*, vol. 8, 1885, p. 54).
- We chart **$1.50/day, $450/year (300 workdays)** and label it "US street anchor". Using the Dutch ƒ1 figure would make the painting look ~2.5× *more* expensive in labour terms — we call that out in the UI footnote rather than hiding it.

## Prices, then

- Bread: **~5¢/loaf** (US city bakery, mid-1880s). A workday bought ~30 loaves.
- Modest house: **~$2,000** (US wood-frame, $1,000–2,500 range). A year’s wage bought ~1/4 of a house.

## Price, now

*The Potato Eaters* is collection-held — literally priceless / not for sale. We chart a **representative major-Van Gogh transaction benchmark of $70M**, per the brief, with context:

- Record: **$117.2M** — *Orchard with Cypresses* (1888), Christie's New York, 9 Nov 2022 (Paul Allen sale).
- **$81.3M** — *Laboureur dans un champ* (1889), Christie's, 13 Nov 2017.
- **$71.5M** — *Self-Portrait Without Beard* (1889), 1998.
- **~$70M** private offer reported for *Vase with Daisies and Poppies* (NYT, May 2023).

$70M is therefore conservative against the record and honest as "what a big Van Gogh costs when one moves".

## Wages & prices, now

- Worker: **$1,204/week median full-time → $62,608/year** (BLS CPS, 2025 annual average). Mean is $69,770 (BLS OEWS May 2025) — we show the median because half of workers earn less.
- Bread: **$3.00/loaf** (US sandwich loaf, 2025–26).
- House: **$412,000** (approx. US median existing-home price, 2025).

## The headline math

- Then: $80 / $1.50 ≈ **53 workdays (0.18 years)**. $80 / $0.05 = **1,600 loaves**.
- Now: $70,000,000 / $62,608 ≈ **1,118 years (290,680 workdays)**. $70M / $3 = **23.3M loaves**. $70M / $412k ≈ **170 houses**; one year's median wage buys **0.15 houses**.

All derived figures are recomputed live in `script.js` from `data/figures.json` — the JSON is the single source of truth.

## What this doesn't claim

- No inflation adjustment (francs → dollars → 2026 dollars would need a price index we don't trust across 140 years at this granularity).
- No claim *The Potato Eaters* would fetch exactly $70M. It's the market it belongs to, not a lot number.
- US wages stand in for "the street" for comparability; Dutch/French 1885 wages were lower, which would only steepen the contrast.
