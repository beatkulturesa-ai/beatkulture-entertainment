# BeatKulture Entertainment - Full DJ & Event Booking Platform

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green.svg)

## 🎵 Overview

BeatKulture Entertainment is a premium, modern web application for DJ and event entertainment booking. It combines a beautiful client-facing platform with a powerful admin dashboard.

**Live Demo**: Coming soon at `beatkulture.co.za`

## ✨ Key Features

### Client Features
- 🎵 **MixCloud Music Player** - Stream your DJ mixes directly
- 📦 **Smart Package Selection** - Browse premium DJ packages
- 💰 **Instant Quote Calculator** - Get custom quotes with add-ons
- 🎁 **Premium Add-Ons** - Lighting, lasers, smoke effects, kids corner, song requests
- 🎫 **QR Song Requests** - Guests scan QR to request songs
- 📅 **Event Planning Tools** - Budget planner, countdown timer, checklist
- 💳 **Flexible Payment** - Full payment or 30% deposit option
- 🌟 **Premium Client Portal** - Unlock after booking

### Admin Features
- 👥 **User Management** - Manage clients and bookings
- 📦 **Package Management** - Create and edit packages
- 🖼️ **Equipment Catalog** - Upload and manage equipment images
- 💰 **Quote Management** - Review, edit, and approve quotes
- 💳 **Payment Tracking** - Monitor payment status
- 🎉 **Promotions & Specials** - Create and manage discounts
- 📊 **Analytics Dashboard** - Track bookings and revenue
- ⚙️ **Event Settings** - Manage review URLs and QR sessions

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS + Framer Motion
- **Backend**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **PDF Generation**: jsPDF
- **QR Codes**: qrcode.react
- **Music**: MixCloud Integration
- **Forms**: React Hook Form + Zod
- **Query Management**: TanStack React Query
- **Deployment**: Vercel

## 📋 What's Implemented

### Core Features ✅
- [x] Authentication (Sign up, Login, Password reset)
- [x] Client Dashboard with MixCloud player
- [x] Package display with auto-select to quote
- [x] Smart Quote Calculator with add-ons
- [x] Equipment Showcase with images
- [x] Effects Showcase (Lighting, Lasers, Smoke, etc.)
- [x] YouTube video integration for tutorials
- [x] QR-based song request system
- [x] Bark.com review URL integration
- [x] Professional PDF quotes and invoices
- [x] Admin dashboard with full management
- [x] Payment system foundation
- [x] Event planning tools
- [x] Premium client mode

### Special Features
- 🎬 **YouTube Integration** - Watch equipment tutorials
- 🎨 **Professional PDFs** - Embedded company logo
- 🔗 **Bark.com Reviews** - Direct review links from QR codes
- 📸 **Equipment Images** - Admin-uploaded product photos
- 🎵 **Music Marketing** - Showcase your production

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (free tier works)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/beatkulturesa-ai/beatkulture-entertainment.git
cd beatkulture-entertainment
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
Create `.env.local`:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BARK_REVIEW_URL=https://www.bark.com/your-business
VITE_COMPANY_NAME=BeatKulture Entertainment
VITE_COMPANY_EMAIL=info@beatkulture.com
VITE_COMPANY_PHONE=your-phone-number
VITE_YOUTUBE_CHANNEL_URL=https://www.youtube.com/@your-channel
```

4. **Run development server**
```bash
npm run dev
```
Visit `http://localhost:5173`

## 📱 Customization Guide

### Add Your YouTube Videos

Edit `src/pages/EffectsShowcase.tsx` and replace video IDs:

```typescript
const effects: Effect[] = [
  {
    id: "uplighting",
    youtubeId: "YOUR_ACTUAL_VIDEO_ID",
    // ...
  },
  // Replace all OTHER_* placeholders with your video IDs
];
```

### Add Your Logo to PDFs

1. Convert logo PNG to base64: https://www.base64-image.de/
2. Replace in `src/services/generateQuotePdf.ts`
3. Replace in `src/services/generateInvoicePdf.ts`

```typescript
const LOGO_BASE64 = 'data:image/png;base64,[YOUR_BASE64_HERE]';
```

### Update Company Information

Edit in both PDF files:
```typescript
const COMPANY_INFO = {
  name: 'BeatKulture Entertainment',
  tagline: 'Your tagline',
  email: 'your-email@beatkulture.com',
  phone: 'your-phone',
  address: 'Your address'
};
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Select `beatkulture-entertainment` repo
   - Add environment variables
   - Click "Deploy"

3. **Connect Your Domain**
   - In Vercel: Settings → Domains
   - Add `beatkulture.co.za`
   - Add DNS records to HostAfrica
   - Wait 15-30 minutes for DNS propagation

## 📚 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── QuoteCalculator.tsx
│   ├── EquipmentShowcase.tsx
│   ├── SongRequestQR.tsx
│   └── ui/             # shadcn/ui components
├── pages/              # Route pages
│   ├── Index.tsx       # Home page
│   ├── Dashboard.tsx   # Client dashboard
│   ├── Admin.tsx       # Admin panel
│   ├── EffectsShowcase.tsx  # Equipment effects
│   ├── SongRequest.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useAuth.ts
│   ├── usePackages.ts
│   └── useEquipmentCatalog.ts
├── services/           # API and utilities
│   ├── generateQuotePdf.ts
│   ├── generateInvoicePdf.ts
│   └── ...
├── types/              # TypeScript types
├── lib/                # Utilities
└── App.tsx            # Main app component
```

## 🎨 Design Features

- Modern gradient backgrounds (purple, blue, gold)
- Glassmorphism cards
- Smooth animations and transitions
- Mobile-first responsive design
- Large, touch-friendly buttons
- Professional color palette
- Accessible component hierarchy

## 💳 Payment Integration

Payment system framework ready for:
- Stripe
- PayPal
- EFT transfers
- Other payment processors

## 🔐 Security

- Supabase Row Level Security (RLS)
- Secure authentication
- Protected admin routes
- Encrypted sensitive data
- CORS protection

## 📞 Support

For issues or questions:
1. Check existing issues
2. Create a new issue with details
3. Include error messages and steps to reproduce

## 📄 License

MIT License - Feel free to use and modify for your business!

## 🎉 Ready to Go Live?

Your app is production-ready! Follow the deployment guide above to launch on your domain.

---

**Made with 💜 for BeatKulture Entertainment**
