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
- Multi-currency selector
- About Us and Contact pages
- Minimal API route for Stripe Checkout integration (placeholder)

## Theme & Design
- **Colors:** Red, Black, White, Blue, Green, Yellow, Ochre, Olive Green, Deep Brown
- **Typography:** Montserrat/Poppins (headings), Source Sans Pro (body)
- **UI:** Clean, minimal, rounded, modern, with generous whitespace and glassmorphism

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
- Shop (with sticky category dropdown)
- Product Details (dynamic)
- Cart (modern overlay)
- Wishlist
- User Account (login/register/profile)
- About Us
- Contact
- 404

## Customization
- Theme colors and fonts are set in `tailwind.config.js` and `globals.css`.
- Add or update products and images in the `public/` directory and product data files.

## Design Rationale
This site is designed to be an experience: clean, modern, and inspired by African safari aesthetics. The color palette and typography evoke authenticity and warmth, while interactive features and smooth animations create a delightful shopping journey for international tourists.

---

**Note:** Framer Motion is no longer used; all animations are handled with Tailwind CSS transitions and keyframes for performance and simplicity.

**Ready for backend API integration and further customization!**
