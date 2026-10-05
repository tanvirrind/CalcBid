# CalcBid

Trade calculators plus client-ready quoting for contractors. Calculate the job,
send a professional quote, get paid.

## MVP scope

- **Landing page** (`/`) — positioning, how it works, trades roadmap, pricing teaser, waitlist capture
- **Paint calculator** (`/calculator`) — room dimensions in, gallons and job cost out
- **Quote generator** (`/quote`) — business/client details, line items, live
  professional preview, shareable link, print/PDF, download

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy

- **Vercel (recommended):** import this repo, defaults work, add `calcbid.com` as a custom domain.
- **Node host / Hostinger VPS:** `npm run build && npm start` (needs Node 18+).
- **Static shared hosting:** set `output: 'export'` in `next.config.mjs`, then upload the `out/` folder.

## Roadmap (not built yet)

- [ ] Accounts + saved quotes (Auth.js + Postgres via Supabase/Neon)
- [ ] Real send-by-email (Resend) instead of mailto
- [ ] Stripe subscriptions ($19 / $49)
- [ ] More trades: roofing, tile & flooring, deck & fence, HVAC/BTU
- [ ] Wire the waitlist form to a real backend (currently demo-only)

## Database (Hostinger MySQL)

Auth, saved customers, quotes, and rate cards live in MySQL via Prisma.

1. hPanel → **Databases → MySQL Databases** — create a database + user.
2. Copy `.env.example` to `.env` and fill in `DATABASE_URL`
   (`mysql://USER:PASSWORD@localhost:3306/DATABASE` — `localhost` when the
   app runs on the same Hostinger account).
3. Set `NEXTAUTH_URL` to the deployed domain and generate a secret:
   `openssl rand -base64 32` → `NEXTAUTH_SECRET`.
4. Create the tables:
   ```bash
   npm run db:push
   ```
   (On the Hostinger server, run this once over SSH / Web Terminal, or point
   `DATABASE_URL` at the server temporarily from your machine.)
5. Never commit `.env`. On Hostinger, put these in hPanel → your Node.js app →
   **Environment variables**.

Auth routes: `/signin`, `/signup`, `/api/auth/[...nextauth]`.
