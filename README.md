This is a [Next.js](https://nextjs.org) portfolio project.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase setup (Ratings Section)

The `RatingsSection` reads/writes ratings from Supabase and subscribes to live inserts.

1. Create a Supabase project.
2. In Supabase SQL Editor, run: `supabase/ratings.sql`.
3. Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Restart the Next.js dev server after adding env vars.

### Notes

- `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe to expose in browser apps.
- The SQL script enables RLS policies for public read/insert and enables realtime on `public.ratings`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
