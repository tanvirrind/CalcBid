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
