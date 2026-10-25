# Countries — Standalone Portfolio Edition

Jorge Toso’s original Full Stack individual project, adapted to run as a static frontend.

## Run

Use Node.js 24.x. From this directory:

```bash
npm ci
npm start
```

Open the address printed by Vite. The backend, PostgreSQL, environment variables and API keys are not required.

```bash
npm run build
npm run preview
npm test
```

## Deploy on Vercel

Select this directory as the project root. Framework: Vite. Build: `npm run build`. Output: `dist`. Node: 24.x. The included `vercel.json` provides client-route fallback.

## Behavior

- 250 country records are bundled in `src/data/countries.json`.
- Search, continent and activity filters combine; sorting does not mutate Redux state.
- Activities are stored under `countries-portfolio:activities:v1` in localStorage, with country associations.
- Each browser/origin has its own activities. Data is not shared across devices and can be lost when browser data is cleared. Storage errors are reported instead of showing a successful save.
- Country details and activities no longer call a backend.
- The landing uses the compressed video (2.86 MB).
- Original visual styles are retained; this is a functional migration, not a visual redesign.

## Country data and attribution

The bundled data is a historical snapshot normalized from the legacy REST Countries repository:
https://github.com/restcountries/restcountries/blob/master/src/main/resources/countriesV3.1.json

Retrieved on 2026-10-23. Retrieval date is NOT the date of the population figures. This demo is not a current statistical or geopolitical reference. The new v5 authenticated API is not queried by the app.

The original repository is distributed under MPL-2.0; see `RESTCOUNTRIES-LICENSE.txt`. The normalized country data retains that notice. Original flag URLs are retained: flag images require internet and remain subject to their source availability. The rest of the country data is bundled locally.

## Replacing the old frontend

Keep a copy or branch of the academic full stack submission. Use this folder as a separate frontend project; do not combine old CRA configuration or its lockfile with this version. The included package-lock matches the new package.json.

This version retains React 17, React Router 5 and Redux to minimize application changes, replacing Create React App 4 with Vite. A future React upgrade can be handled separately.
