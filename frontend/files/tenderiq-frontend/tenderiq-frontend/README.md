# TenderIQ AI - Frontend

React + Vite + TypeScript frontend for TenderIQ AI, an AI-powered tender intelligence and bid-readiness platform.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons
- **Recharts** - Charts

## Setup

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Environment

Copy `.env.example` to `.env.local` and update values:

```bash
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── layouts/         # Layout wrappers
├── context/         # React context (auth, etc)
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── types/           # TypeScript types
├── assets/          # Static assets
└── App.tsx          # Main app component
```

## Features

- **Landing Page** - Hero, features, CTA
- **Authentication** - Login/Register
- **Dashboard** - Overview of tenders
- **Tender Upload** - Drag-and-drop PDF upload
- **Analysis Views** - Eligibility, requirements, risks, deadlines
- **Responsive Design** - Desktop to mobile

## Notes

- Backend API should run on `http://localhost:8000`
- All API calls require authentication token
- Uses Tailwind CSS for styling
- Static data in components should be marked as "TODO: Replace with API"

## Development with Figma

When building from Figma design:

1. Extract design tokens (colors, fonts, spacing)
2. Map Figma components to React components
3. Use Code Connect for component mapping
4. Keep design consistency across pages

---

**Status**: Frontend scaffold created. Ready for page-by-page implementation.
