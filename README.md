# Firestone Concrete LLC website

Static website for Firestone Concrete LLC, Nampa, Idaho. Plain HTML, CSS and a little JavaScript. No build step.

## Files
- `index.html`, `services.html`, `work.html`, `about.html`, `contact.html`, `thanks.html`: the pages
- `tokens.css`, `styles.css`: styles
- `site.js`: mobile menu and form checks
- `*.jpg`: job photos (kept next to the pages, no subfolder)
- `sitemap.xml`, `robots.txt`: for search engines

## Put it online with GitHub Pages
1. Upload every file in this folder to the root of your repository. There are no subfolders, so select all files and drag them in together.
2. In the repository, go to Settings > Pages, choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
3. To use firestoneconcretellc.com: enter it under Settings > Pages > Custom domain, then point the domain's DNS at GitHub Pages as GitHub shows you. Turn on "Enforce HTTPS" once it is available.

## Estimate form
The form on `contact.html` sends to novelafrancisco37@hotmail.com through FormSubmit (formsubmit.co).
The first time someone sends it, FormSubmit emails that inbox an activation link. The owner must click it once, or requests will not arrive.
To use a different email, change the address in the form's `action` URL in `contact.html`.
