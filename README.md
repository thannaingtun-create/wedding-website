# Elegant & Romantic Wedding Website

Responsive bilingual (Myanmar + English) wedding invitation using plain HTML, CSS and JavaScript.

## Files
- `index.html` — page structure and invitation text
- `style.css` — responsive design and typography
- `script.js` — couple/event details, navigation, gallery lightbox and RSVP demo
- `images/` — optional folder for your own photographs

## Customize
Edit the `weddingConfig` object near the top of `script.js`. Change the couple names, date, time, venue, address, Google Maps share URL and dress code.

## Replace photos
In `index.html`, find `gallery-grid`. Replace the sample Unsplash URLs in both `src` and `data-image` with your own approved photos. For a photo uploaded to the `images` folder, use a path such as `images/photo-1.jpg`.

## Publish with GitHub Pages
1. Create a Public repository.
2. Upload the contents of this folder to the repository root. Keep `index.html` at the root.
3. Open Settings → Pages.
4. Choose Deploy from a branch, branch `main`, folder `/(root)`, then Save.
5. Wait for the Pages URL to appear.

## RSVP
The RSVP form is a front-end demo only. It does not send or save responses. Connect a form service or backend to collect actual replies. Do not put private API keys in this public repository.

Google Fonts and sample Unsplash images require internet access.
