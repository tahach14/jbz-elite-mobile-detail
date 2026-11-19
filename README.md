# Reliable Car Wash & Detailing — PERN Website

A premium, responsive multi-page website starter for Reliable Car Wash & Detailing, serving Illinois.

## Stack
- PostgreSQL — lead / appointment request storage
- Express + Node.js — REST API
- React + Vite — frontend
- React Router — page navigation
- React Helmet Async — page-level SEO metadata

## Pages
Home, Services, About, Gallery, Contact / Book Now, and a dedicated service detail page.

## Run locally
### 1. Database
Create a PostgreSQL database, then run:
```bash
psql -d reliable_detailing -f server/schema.sql
```
### 2. API
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
Set `DATABASE_URL` in `.env`. The API runs on port 5000 by default.

### 3. Frontend
In a second terminal:
```bash
cd client
npm install
npm run dev
```
Vite runs on http://localhost:5173 and proxies `/api` to the Express server.

## Business details to confirm before launch
- Phone supplied: `(000) 000-0000` — placeholder, replace with the real number.
- Location supplied: Illinois — add the exact city/service radius and street address.
- Add real opening hours, prices, booking availability, and social links.
- Replace the sample gallery imagery with the business's own before/after photos.
- Configure a production domain, database, HTTPS, and deployment environment variables.

## SEO included
- Unique title and meta description for each route
- Canonical URL placeholder
- Open Graph / Twitter metadata
- LocalBusiness + AutoWash JSON-LD with Illinois as the service area
- Semantic headings, descriptive image alt text, sitemap and robots files
- `llms.txt` starter

The website intentionally does not invent a street address, reviews, opening hours, or prices.
