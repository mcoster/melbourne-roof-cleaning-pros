# Sydney Roof Cleaning Pros

Professional roof cleaning services website for Sydney and surrounding areas.

## 🌐 Live Site
[www.sydneyroofcleaningpros.com.au](https://www.sydneyroofcleaningpros.com.au)

## 🚀 Technology Stack
- **Framework:** Astro (Static Site Generation)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Hosting:** Netlify

## 📱 Services
- Tile Roof Cleaning
- Metal Roof Cleaning (including Colorbond)
- Solar Panel Cleaning
- Gutter Cleaning & Clearing
- Moss & Lichen Removal
- Soft Washing Services

## 📍 Service Area
Sydney and surrounding suburbs within 35km radius of Sydney CBD

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm

### Package Version Lock
**IMPORTANT:** This site is locked to a stable version of `@mcoster/astro-local-package`:
- **Version:** v1.0.18
- **Commit:** `ffc68c03a98bc982928300d4e6d088ebea3f9a50`
- **Locked on:** September 9, 2025

This ensures the site remains stable even if breaking changes are made to the package.

#### To Update the Package (if needed):
```bash
# Update to latest main branch (use with caution)
npm install github:mcoster/astro-local-package#main

# Or lock to a specific commit (recommended)
npm install github:mcoster/astro-local-package#[commit-hash]

# After updating, always test thoroughly
npm run build
npm run preview
```

### Local Development
```bash
# Install dependencies
npm install

# Start development server
NODE_OPTIONS="--max-old-space-size=8192" npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Content Management
- Service pages: `/src/content/services/`
- Business configuration: `/config/business.yaml`
- Images: `/public/images/`

## 🔧 Environment Variables
Required environment variables for production:
- `GOOGLE_MAPS_API_KEY` - For interactive maps
- Form notification endpoints (configured in Netlify)

## ⚠️ Configuration Notes
The following items in `config/business.yaml` need to be updated with actual values:
- **Email address** - Currently placeholder
- **Owner name** - Currently placeholder
- **Social media links** - Currently placeholder

## 📞 Contact
- **Phone:** (02) 5564 2922
- **Email:** info@sydneyroofcleaningpros.com.au
- **Address:** Suite 6/68 Sir John Young Cres, Woolloomooloo NSW 2011

## 🕐 Business Hours
- Monday - Sunday: 7:00 AM - 7:00 PM

---

© 2025 Sydney Roof Cleaning Pros. All rights reserved.