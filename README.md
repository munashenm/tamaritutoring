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

1. Upload `index.html`, `about.html`, `contact.html`, `styles.css`, `logo.png`, `favicon.png`, the `fonts` folder and the `photos` folder to the document root (often `public_html`).
2. Point the DNS for `tamaritutoring.com` at that host, using the A record or CNAME the host gives you. Add `www` as well if you want both names.
3. Turn on HTTPS in the host’s control panel. The page’s canonical address is `https://tamaritutoring.com/`.
4. Open the live site, use About, Subjects, Contact and Enrolment, confirm **Email Us to Enrol** opens a message to admin@tamaritutoring.com, and confirm **Parents Login** opens https://app.schoolhubsa.co.za/tamaritutoring. The About page holds the service details and the photographs.

### Cloudflare Pages or Netlify

1. Connect this repository. The publish directory is the repository root. Leave the build command empty.
2. Add the custom domain `tamaritutoring.com` and follow the DNS steps the host shows.
3. Confirm the certificate is active, then check the enrolment email link on a phone and on a desktop.

The contact form on `contact.html` posts to [FormSubmit](https://formsubmit.co/) and delivers messages to admin@tamaritutoring.com, the same address as the enrolment button. The first time someone uses it, FormSubmit emails that address with a confirmation link. The form starts delivering after that link is opened.

Fees, lesson times, a phone number and a street address are not on the site. Add them only when they are confirmed.
