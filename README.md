# Elegant & Romantic Wedding Website

A responsive bilingual (Myanmar + English) wedding invitation built with plain HTML, CSS and JavaScript. It is suitable for free static hosting such as GitHub Pages.

## Files
- `index.html` — page structure and invitation text
- `style.css` — responsive layout, colors, typography and animation
- `script.js` — couple/event details, mobile navigation, gallery lightbox and RSVP demo

## 1. Preview on your laptop
1. Extract the ZIP file.
2. Open the `wedding-website` folder.
3. Double-click `index.html` to open it in your browser.
4. Internet is needed to load the Google Fonts and sample gallery photographs.

## 2. Customize the couple and event details
Open `script.js` in VS Code or another text editor. Edit the `weddingConfig` object near the top:

```js
const weddingConfig = {
  groomName: "မောင်အေးမင်းစိုး",
  brideName: "မခင်ချိုတင့်",
  dateText: "DATE TO BE ANNOUNCED",
  dateLong: "Date to be announced",
  timeText: "Time will be announced soon",
  venueName: "Venue to be announced",
  venueAddress: "Location details will be shared soon.",
  googleMapsUrl: "",
  dressCode: "Elegant & festive"
};
```

Replace each placeholder with confirmed details. For `googleMapsUrl`, paste the Google Maps share link for the venue. Save the file and refresh the browser.

### Replace sample gallery photographs
In `index.html`, look for the `gallery-grid` section. Replace the image `src` and `data-image` URLs with image URLs you are allowed to use, or put your own photos in a folder such as `images/` and use paths such as `images/photo-1.jpg`. If you use personal photos, make sure the couple is happy for them to be public.

## 3. Publish free with GitHub Pages
1. Create/sign in to an account at https://github.com/.
2. Create a **Public** repository, for example `wedding-website`.
3. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not hidden inside another nested folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then click **Save**.
7. Wait a few minutes, then use the URL shown in the Pages section. It usually looks like `https://YOUR-USERNAME.github.io/wedding-website/`.
8. Open the URL on both your laptop and phone.

The hosting is free for eligible public repositories, and you do not need to purchase a custom domain. GitHub Pages serves static files; it does not run a backend server.

## Important: RSVP form
The current RSVP form is a **front-end demo only**. It displays a confirmation in the browser but does not store or send guest responses anywhere. To collect actual responses, connect a form service such as Formspree or Google Forms, or use a backend/database. Check the service's current free-plan limits and privacy terms before using it for guest information. Do not put private API keys in this public repository.

## Notes
- The gallery uses sample images hosted on Unsplash. Replace them with the couple's own approved photos for the final version.
- Google Fonts and remote images need an internet connection.
- Test the site on a phone after publishing.
