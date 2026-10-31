# DPI Picnic Vote

A polished picnic-place voting board for **Dinajpur Polytechnic Institute's CST department**, built for **1st, 2nd, 4th, and 6th semester students** choosing a destination for the **November 10, 2026 picnic**. Its redesigned, photo-led home hero and welcome carousel preview the destinations. It also includes bilingual destination-card highlights, a live countdown, destination cards with Wikimedia Commons photos and credits, approximate DPI road-distance and bus-time planning ranges, Google Maps route links, a mixed English + Bangla default with English-only and Bangla-only options, a bilingual voting pass, semester/shift/roll/phone fields, generated student tokens, a photo-led developer and picnic-details footer, subtle scroll reveals, theme switching, a local student ledger, Excel-compatible CSV export, responsive styling, search/filter controls, vote toggling, and a suggestion dialog. Animations respect the visitor's reduced-motion preference.

## Run it

No install or build step is needed. Open `index.html` directly in any modern browser, or serve this folder with a local static server if preferred.

```text
picnic-vote/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Notes

- No packages or build step are needed. The welcome popup and destination cards use Wikimedia Commons photos; visible photo credits link to the original file and license. Map links open Google Maps. These external features need an internet connection.
- The developer's footer portrait is stored locally at `assets/developer-profile.png`.
- Distance and bus-time ranges are rough, one-way planning estimates from Dinajpur Polytechnic Institute; routes, traffic, and pickup points affect actual travel. Check the linked live directions before planning.
- The student ledger and Excel export are local to the current browser/device. To collect real votes from every student in one shared list, connect the form to Supabase or Firebase with authentication and shared persistence.
- Vote counts start at zero and change only when a student submits a voting pass or deliberately clicks a Vote button. There are no seeded or simulated votes.
