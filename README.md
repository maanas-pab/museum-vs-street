# Museum vs. The Street 🥔⚡

**Live site: https://maanas-pab.github.io/museum-vs-street/**

A pop-art infographic asking: **how many loaves is a Van Gogh?**

Side-by-side comparison:

| | 1885 · Nuenen | Today |
|---|---|---|
| Painting | *The Potato Eaters* — unsold | Major Van Gogh benchmark **~$70M** |
| Era anchor | 400 francs (~$80) — *The Red Vineyard* sale, 1890 | Record $117.2M (*Orchard with Cypresses*, 2022) |
| Worker | $1.50/day · $450/yr | $1,204/wk median · $62,608/yr (BLS 2025) |
| Bread | 5¢/loaf → **1,600 loaves** per painting | $3/loaf → **23.3M loaves** per painting |
| Houses | ~$2k → **0.04 houses** per painting | $412k → **170 houses** per painting |
| Labour cost | **53 workdays (0.18 yrs)** | **1,118 yrs (290k workdays)** |

Visualised as 🍞 stacks and 🏠 rows, with an interactive "years of *your* wage" calculator. Zero dependencies, works from `file://`.

## Quick start

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.

## Project layout

```text
index.html          # infographic page
styles.css          # pop-art theme (halftone, panels, viz)
script.js           # derived math + slider + calculator (fetches data/figures.json, falls back inline)
data/figures.json   # single source of truth for every number
METHODS.md          # honesty notes: what "price then" means, Dutch vs US wages, no inflation-adjust claim
SOURCES.md          # museum, BLS, Christie's, NYT citations
```

## Data honesty in one paragraph

*The Potato Eaters* never sold and now lives in the Van Gogh Museum — so "price then" uses the closest market anchor (400 fr for *The Red Vineyard*, 1890 ≈ $80). "Price now" uses a conservative $70M major-Van Gogh benchmark (record is $117.2M, Nov 2022). Wages then are US day-rates ($1.50/day) with the cheaper Dutch ~ƒ1/day footnoted; wages now are BLS median $1,204/wk. Full caveats in `METHODS.md`.

## Deploy

Any static host works. For GitHub Pages: push `main`, then Settings → Pages → Deploy from branch → `/ (root)`.
