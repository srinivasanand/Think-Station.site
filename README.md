# Think-Station.site — Lab-Grade Tech Experiments

A modern, visually striking **single-page** landing site designed for **GitHub Pages**. It showcases experiments from a fictitious engineering team with a glossy-futuristic aesthetic, accessible components, and no build step.

> **Brand line:** _“Think-Station – Experiments that ship.”_

---

## 📸 Screenshots

- `assets/og-cover.png` — used by social previews (placeholder PNG included).  
- You can export a higher-fidelity cover from `assets/illustrations/hero-bg.svg` (see below).

---

## 🧭 Structure

```
/
├─ index.html
├─ assets/
│  ├─ logo.svg
│  ├─ favicon.svg
│  ├─ favicon-32.png      (Base64 placeholder PNG in repo)
│  ├─ favicon-512.png     (Base64 placeholder PNG in repo)
│  ├─ og-cover.png        (Base64 placeholder PNG in repo)
│  └─ illustrations/
│     ├─ hero-bg.svg
│     ├─ features-cubes.svg
│     ├─ roadmap-steps.svg
│     └─ footer-badge.svg
│     └─ avatar.svg
├─ css/
│  └─ styles.css
├─ js/
│  └─ app.js
└─ README.md
```

---

## 🧪 Tech Choices

- **Pure static**: no Node/webpack.  
- **Custom CSS** (no Tailwind) with **CSS variables** for palette and theming.  
- Optional **Inter** font via Google Fonts; everything else is local.  
- **Accessible** components: skip link, keyboardable FAQ, visible focus.  
- **Performance** minded: small CSS/JS, images are SVG-first.

---

## 🖌️ Customization Guide

### Colors & Theme
Edit the CSS variables in `css/styles.css`:

```css
:root {
  --primary: #4f46e5; /* indigo */
  --accent:  #10b981; /* emerald */
  --bg:      #ffffff;
  --text:    #0f172a;
  /* ... */
}
html[data-theme="dark"] { /* dark overrides */ }
```

Use the sun icon in the header to toggle **light/dark** (persisted via `localStorage`).

### Branding & Copy
- **Logo**: replace `assets/logo.svg` with your wordmark (keep dimensions similar).  
- **Headings & text**: edit `index.html` section copy.  
- **Feature cards & Showcase slides**: add/remove cards in their sections.  
- **Social links**: update the `href="#"` values in the footer.

### Icons & Graphics
All artwork is **vector SVG**. Add your own to `assets/illustrations/` and reference them in `index.html`.

---

## 🖼️ Social / Favicon Assets

The repo ships **placeholder** PNGs for:
- `assets/favicon-32.png`
- `assets/favicon-512.png`
- `assets/og-cover.png`

For high-fidelity outputs:

1. Open `assets/illustrations/hero-bg.svg` in an editor (Inkscape, Figma, Illustrator).
2. Export a **1200×630** PNG named `assets/og-cover.png`.
3. Export 32×32 and 512×512 PNGs from `assets/favicon.svg` as `assets/favicon-32.png` and `assets/favicon-512.png`.

(Keeping file names the same means **no HTML changes** required.)

---

## 🖥️ Local Preview

Open `index.html` directly in a browser **or** run a tiny server:

```bash
# Python 3
python -m http.server 5173
# then visit http://localhost:5173
```

---

## 🚀 Deploy to GitHub Pages

1. Commit files to a repo (branch: `main`).  
2. In GitHub: **Settings → Pages**  
   - **Source**: `Deploy from a branch`  
   - **Branch**: `main` / `/ (root)`  
3. Wait for Pages to publish at `https://<your-username>.github.io/<repo>/`.

> Update `<link rel="canonical">` in `index.html` to match your Pages URL (see below).

---

## 🧰 Maintenance Tips

- **Run Lighthouse** in Chrome DevTools (aim for ≥95 Perf, ≥90 A11y/SEO/BP).  
- **Optimize images** (SVGs are already tiny; export clean, remove unused defs).  
- **Add Sections**: duplicate a `.section` block in `index.html`, add an anchor to the nav, and wire it in `js/app.js` if needed for observers.  
- **Respect motion preferences**: heavy animations belong behind `prefers-reduced-motion`.  

---

## 📜 License (MIT)

```
MIT License

Copyright (c) 2025 Think-Station

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
