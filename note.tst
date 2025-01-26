src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   └── Spinner.tsx
│   ├── forms/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── CheckoutForm.tsx
│   └── product/
│       ├── ProductCard.tsx
│       ├── ProductGrid.tsx
│       └── ProductDetails.tsx
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.ts
│   │   │   ├── register.ts
│   │   │   └── reset-password.ts
│   │   ├── cart.ts
│   │   ├── checkout.ts
│   │   ├── products.ts
│   │   └── orders.ts
│   ├── auth/
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── forgot-password.tsx
│   │   └── reset-password.tsx
│   ├── cart.tsx
│   ├── checkout.tsx
│   ├── index.tsx
│   ├── products/
│   │   ├── index.tsx
│   │   └── [slug].tsx
│   ├── orders/
│   │   ├── index.tsx
│   │   ├── [id].tsx
│   │   └── track.tsx
│   ├── wishlist.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── support.tsx
│   ├── terms.tsx
│   └── privacy.tsx
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   ├── banners/
│   │   └── products/
│   └── uploads/
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── Product.module.css
│   └── Cart.module.css
├── utils/
│   ├── apiClient.ts
│   ├── constants.ts
│   ├── helpers.ts
│   └── validation.ts
├── types/
│   ├── product.ts
│   ├── user.ts
│   ├── order.ts
│   └── cart.ts
└── .env.local
