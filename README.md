# Westeros Chronicle UI

A cinematic, fan-made interactive UI project inspired by *A Song of Ice and Fire*. The goal is to feel less like a wiki and more like a dark historical archive: a place where visitors can walk through dynasties, wars, rebellions, dragonlords, ruined empires, and the long collapse of power across Westeros and Essos.

## Project Concept

Westeros Chronicle UI is a UX, content strategy, and interactive storytelling case study. The first version focuses on a polished timeline homepage that introduces the voice of the archive through short, original historical notes.

The experience should feel premium, editorial, and atmospheric: illuminated manuscript details, royal archive structure, old-map textures, dark backgrounds, parchment-like panels, and restrained gold, red, and green accents.

## Key Features

- Cinematic homepage hero with an "Enter the Chronicle" call to action
- Timeline preview built from reusable data in `src/data/timeline.js`
- Reusable `TimelineCard` component for era, period, location, figures, significance, and emotional tone
- Featured era panels for a museum-like archive preview
- Early house cards that can later support house and relationship views
- Original short-form summary copy written for a fan-made portfolio project

## Tech Stack

- React
- Vite
- JavaScript
- Regular CSS

## Copyright and Fan Project Disclaimer

This is an unofficial fan-made UI and storytelling project created for educational and portfolio purposes. It is not affiliated with George R. R. Martin, HBO, Warner Bros., or any official *A Song of Ice and Fire* property. No copyrighted book text, scanned pages, long excerpts, or PDF content is reproduced in this repository.

All written content in this project should remain original: summaries, labels, interpretive notes, and UI copy only.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```text
src/
  data/
    timeline.js
    houses.js
    characters.js
  components/
    Layout.jsx
    Hero.jsx
    Timeline.jsx
    TimelineCard.jsx
    EraSection.jsx
    HouseCard.jsx
  pages/
    Home.jsx
  styles/
    global.css
    timeline.css
```

## Roadmap

- Phase 1: Static homepage and timeline prototype
- Phase 2: Expand Targaryen dynasty timeline
- Phase 3: Add houses and character relationship views
- Phase 4: Add interactive maps and filters
- Phase 5: Add reading-path mode and historical archive mode
