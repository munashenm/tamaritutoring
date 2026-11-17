# Tamari Tutorial Service

Website for Tamari Tutorial Service, Grade 4 to Grade 7 tutorials in Mathematics, English and Combined Science in Chitungwiza, Zimbabwe.

The site is static HTML and CSS. There is no build step.

## Preview locally

From this folder:

```bash
python3 -m http.server 8000
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Publish to tamaritutoring.com

Upload the contents of this folder so that `index.html` is at the site root. Keep the `fonts` folder next to `styles.css`. Do not run a build.

### Existing web hosting

1. Upload `index.html`, `styles.css`, `logo.png`, `favicon.png` and the `fonts` folder to the document root (often `public_html`).
2. Point the DNS for `tamaritutoring.com` at that host, using the A record or CNAME the host gives you. Add `www` as well if you want both names.
3. Turn on HTTPS in the host’s control panel. The page’s canonical address is `https://tamaritutoring.com/`.
4. Open the live site, use About, Subjects and Enrolment, confirm **Email Us to Enrol** opens a message to admin@tamaritutoring.com, and confirm **Parents Login** opens https://app.schoolhubsa.co.za/tamaritutoring.

### Cloudflare Pages or Netlify

1. Connect this repository. The publish directory is the repository root. Leave the build command empty.
2. Add the custom domain `tamaritutoring.com` and follow the DNS steps the host shows.
3. Confirm the certificate is active, then check the enrolment email link on a phone and on a desktop.

Fees, lesson times, a phone number and a street address are not on the site. Add them only when they are confirmed.
