# Africana Stores Frontend

A modern, visually stunning, African-inspired eCommerce website for authentic Kenyan safari decorative products. Built with Next.js and Tailwind CSS.

## Features
- Responsive, mobile-first layouts
- Sticky dark navbar: hamburger menu on mobile, full horizontal menu on desktop/tablet
- Wishlist icon on all devices
- Modern, solid cart drawer with smooth slide-in, sticky subtotal/checkout, and card-style product items
- Glassmorphic, animated currency selector
- SEO-friendly, accessible (WCAG 2.1 AA)
- Next.js Image optimization, lazy-loading, code-splitting
- Card-based layouts, soft shadows, generous whitespace
- Interactive features: product zoom, add-to-cart animation, live cart preview, quick view modal, search autocomplete, swipable carousels
- Multi-currency selector (mocked for development)
- About Us, Contact, FAQ, Privacy Policy, Terms, Shipping & Returns pages
- Admin dashboard scaffolding
- Newsletter signup and live chat widget (UI only)
- Product filtering by category (sticky, hides on scroll down)
- Custom 404 page
- Accessibility features: skip to content, ARIA, keyboard navigation

## Directory Structure
```
africana_stortes/
├── src/
│   ├── app/           # Next.js app directory (pages, layouts)
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utilities, API helpers
│   └── styles/        # Custom styles (if needed)
├── public/            # Static assets (images, icons)
├── tailwind.config.js # Tailwind CSS config
├── postcss.config.mjs # PostCSS config
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Getting Started
1. **Install dependencies:**
   ```bash
   cd africana_stortes
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Navigation
- Home
- Shop (with sticky, auto-hiding category filter)
- Product Details (dynamic)
- Cart (modern overlay)
- Wishlist
- User Account (login/register/profile)
- About Us
- Contact
- FAQ, Privacy Policy, Terms, Shipping & Returns
- 404

## Customization
- Theme colors and fonts are set in `tailwind.config.js` and `globals.css`.
- Add or update products and images in the `public/` directory and product data files.

## Design Rationale
This site is designed to be an experience: clean, modern, and inspired by African safari aesthetics. The color palette and typography evoke authenticity and warmth, while interactive features and smooth animations create a delightful shopping journey for international tourists.

---

## Troubleshooting & Common Errors

### 1. **Invalid Hook Call (React)**
- **Error:** `Invalid hook call. Hooks can only be called inside of the body of a function component.`
- **Cause:**
  - The file was missing the `"use client"` directive at the very top.
  - Multiple versions of React in `node_modules`.
- **Solution:**
  - Ensure `"use client"` is the first line in all client components.
  - Run `npm ls react` and `npm ls react-dom` to check for duplicates.
  - Restart the dev server after changes.

### 2. **API Access Key/JSON Errors**
- **Error:** `missing_access_key` or `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`.
- **Cause:**
  - The forex API key was missing, invalid, or sent in the wrong way.
  - The API returned an HTML error page instead of JSON (e.g., 502/524 from Cloudflare).
- **Solution:**
  - For apilayer/exchangeratesapi.io, send the key as a header: `{ apikey: 'YOUR_KEY' }`.
  - For development, mock the rates in `fetchForexRates` to always return `{ USD: 1, EUR: 1 }`.

### 3. **Cart/Wishlist State Loss**
- **Error:** Cart or wishlist state resets on navigation.
- **Cause:**
  - Cart/Wishlist context providers not at the top level.
  - Navigation using `<a>` instead of Next.js `<Link>`.
- **Solution:**
  - Ensure providers are in `layout.tsx`.
  - Use `<Link href="...">` for all navigation.

### 4. **Sticky Filter Bar Not Hiding/Showing**
- **Error:** Category filter bar does not hide/show on scroll.
- **Cause:**
  - Scroll logic not using `useRef` for last scroll position.
- **Solution:**
  - Use the improved scroll logic with `useRef` as shown in `ShopClientWrapper.tsx`.

---

**Note:** Framer Motion is no longer used; all animations are handled with Tailwind CSS transitions and keyframes for performance and simplicity.

**Ready for backend API integration and further customization!**
