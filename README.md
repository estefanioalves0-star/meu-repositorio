# Premium Digital Store

Static storefront for landing page templates and digital AI prompt collections. Customer-facing pages are written in US English.

## Products and pricing

The catalog and demos are defined in `js/script.js`. When prices and Gumroad links are available, fill in `price` and `checkoutUrl` for each product. The Buy button remains disabled until a checkout link is configured.

Prompt pack thumbnails in `assets/prompt-covers/` were created from the first page of each PDF. The complete PDFs are not included in the public site or repository, so paid materials are only delivered through checkout.

## Landing page demos

Open `landing-preview.html?id=ai-startup`, `landing-preview.html?id=saas`, `landing-preview.html?id=marketing-agency`, `landing-preview.html?id=real-estate`, or `landing-preview.html?id=dental-clinic` to view the five complete demos. The customization button opens WhatsApp with a link to the selected demo.

Buy buttons stay disabled until their checkout links are configured.

No build step is required. On Netlify, use the repository root (`.`) as the publish directory.
