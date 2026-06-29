# Wanderwise - Travel Agency Website

A modern, production-ready travel agency website built with Vite, React 18, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Elegant Design**: Warm editorial aesthetic inspired by high-end travel magazines
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Scroll-triggered reveal animations with stagger effects
- **Optimized Performance**: Built with Vite for lightning-fast load times
- **Type-Safe**: Full TypeScript implementation
- **Accessible**: WCAG AA compliant with semantic HTML and ARIA labels

## 🎨 Design System

### Color Palette
- **Primary**: #1A4D2E (deep forest green)
- **Secondary**: #D97757 (warm terracotta)
- **Accent**: #F4A261 (golden sand)
- **Background**: #FEFAF6 (warm cream)
- **Surface**: #F5EFE7 (lighter cream)

### Typography
- **Headings**: Cormorant Garamond (serif display)
- **Body**: DM Sans (clean sans-serif)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Sticky navigation with mobile menu
│   ├── HeroSection.tsx         # Asymmetric hero with parallax
│   ├── AboutSection.tsx        # Company story and values
│   ├── FeaturedPackages.tsx    # Trip packages with filters
│   ├── HowItWorks.tsx          # 3-step process
│   ├── DestinationHighlights.tsx # Popular destinations grid
│   ├── Testimonials.tsx        # Customer reviews
│   ├── Contact.tsx             # Contact form and WhatsApp
│   └── Footer.tsx              # Comprehensive footer
├── lib/
│   └── siteContent.ts          # All copy and data (typed)
├── hooks/
│   └── useScrollReveal.ts      # Intersection Observer hook
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles and animations
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Sections

1. **Hero** - Full-width asymmetric split with compelling headline
2. **About** - Image grid + company values
3. **Featured Packages** - 6 destination cards with category filters
4. **How It Works** - 3-step process with icons
5. **Destination Highlights** - Asymmetric grid layout
6. **Testimonials** - Customer reviews with ratings
7. **Contact** - Form + WhatsApp CTA
8. **Footer** - Links, social media, copyright

## 🛠️ Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, DM Sans)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- AA contrast ratios
- Alt text on all images

## 🎭 Animation System

- Scroll-triggered reveals using Intersection Observer
- Staggered animations on card grids (0.1s delay per item)
- Smooth hover transitions (scale, shadow, color)
- Custom cubic-bezier easing: cubic-bezier(0.4, 0, 0.2, 1)

## 📝 Content Management

All site content is centralized in `src/lib/siteContent.ts` for easy updates. This includes:
- Navigation links
- Hero copy
- Package details
- Testimonials
- Contact information
- Footer content

## 🌐 Deployment

This site is optimized for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

Simply run `npm run build` and deploy the `dist/` folder.

## 📄 License

MIT License - feel free to use this template for your projects.

---

**Built with passion by the Wanderwise team** ✈️
