# Nour & Farah wedding invitation

A static GitHub Pages wedding invitation with the original floral artwork, page layout and a live countdown. The exact page and social preview title is **Nour&Farahweddinginvitation**.

## Included

- Original invitation layout and downloaded artwork, served locally from `assets/`.
- A browser-based countdown to **18 December 2026, 4:00 PM in Cairo (UTC+02:00)**. It updates every second, recalculates after returning to the tab, and stops at zero.
- Responsive scaling of the original design for phone and desktop screens.
- The original RSVP and Google Maps destinations.
- A clickable music control that opens the original YouTube track, plus the invitation’s local decorative animation.

The invitation page does not embed Canva and its countdown does not require an external timer service. RSVP continues to use the original Canva RSVP page; music requires YouTube and the location link opens Google Maps. These external destinations must remain available.

## Publish on GitHub Pages

Under **Settings → Pages**, select **Deploy from a branch**, the default branch, and **/(root)**. There is no build command or dependency installation. `.nojekyll` bypasses Jekyll processing.

Use a URL-safe repository name such as `NourAndFarahWeddingInvitation`. The visible page title retains `&`. WhatsApp can display the configured preview title but still shows a URL in an ordinary chat message.

## Files

`index.html` holds the original design markup, `design.css` its styles, `site.css` responsive and interactive additions, and `invitation.js` the countdown and music controls. All design artwork is in `assets/`.

`dist/` is a local preview copy excluded from Git, as is `.openai/hosting.json`.

## Asset optimization

Original artwork uses lossless WebP wherever it is smaller than the source. Each conversion was verified for identical decoded pixels and unchanged dimensions. The social preview remains JPEG for link-sharing compatibility. The original regular and italic invitation fonts are served locally from `assets/`.
