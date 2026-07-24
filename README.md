# The Enclave Milton — Site D (`theenclavemilton.homes`)

SEO-focused alternate landing site for **The Enclave / The Enclave Milton / The Enclave Milton Townhomes / The Enclave Milton Sundial Homes**. Same forms, floor-plan data, and Supabase backend as Sites A–C — new moss-mist visual design (Bricolage Grotesque + Manrope).

| | |
|---|---|
| Canonical | `https://www.theenclavemilton.homes` |
| Supabase `source` | `theenclavemilton.homes` |
| `form_name` | `Site D Registration` (hidden) |
| Leads table | `public.enclave` (shared) |

## Local

```bash
npm install
cp .env.example .env.local   # add SUPABASE_SERVICE_ROLE_KEY
npm run dev
```

## Deploy

1. Link Vercel project; point domain `www.theenclavemilton.homes` (apex → www).
2. Set `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, optional `REGISTRATION_WEBHOOK_URL`.
3. `npm run vercel:deploy`
