# Deliz website editing guide

The site is deliberately kept as a small, dependency-free storefront. Open `index.html` in a browser to preview it; no build command or package installation is required.

## Where to make each change

| You want to change | Edit this file | What to look for |
| --- | --- | --- |
| Product name, price, description, option, or image | `script.js` | `CONTENT: product catalogue` |
| Gallery photos | `script.js` | `CONTENT: customer order gallery` |
| WhatsApp recipient number | `script.js` | `const WHATSAPP` |
| Website sections and messages | `script.js` | `PAGE TEMPLATES` |
| Cart, checkout, buttons, or interactions | `script.js` | `CART`, `INTERACTIONS`, or `CHECKOUT` |
| Fonts, global colors, layout, and component styles | `style.css` | Base styling |
| Mobile-only layout rules | `media-queries.css` | `@media` blocks |
| Bakery color theme | `bakery-theme.css` | Theme variables and component overrides |
| Final premium visual adjustments | `bakery-polish.css` | `Premium visual system` |
| Photos and logo | `assets/` | Keep the same filename when replacing an image |

## Simple preview from the command line

From the project folder, run either command and then open the printed local address in a browser:

```powershell
python -m http.server 8000
```

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the preview with `Ctrl+C`.

## Safe editing rules

- Keep image paths relative to `assets/`, for example `assets/product-cookie.jpg`.
- Every product needs an `id`, `name`, `category`, `price`, `unit`, `description`, and `image`.
- Do not change a product `id` after customers may have saved carts; it is used by the cart.
- Add optional size/price choices using the existing `options` pattern in `script.js`.
- CSS files are loaded in this order: `style.css`, `media-queries.css`, `bakery-theme.css`, then `bakery-polish.css`. Later files intentionally override earlier ones.
- No design or shopping logic was altered while organizing the code; the comments are navigation aids only.