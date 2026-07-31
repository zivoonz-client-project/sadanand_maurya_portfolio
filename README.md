# Sadanand Maurya — Portfolio

A modern, responsive developer portfolio built with **Next.js 14 (App Router)**,
**TypeScript** and **Tailwind CSS**, with a live **Client Reviews** feature backed
by **Upstash Redis**.

## Features

- ⚡ Fast, SEO-friendly, fully responsive (mobile → desktop)
- 🎨 Modern dark UI with smooth Framer Motion animations
- 🧩 Sections: Hero, About, Skills, Experience, Projects, **Client Reviews**, Contact
- ⭐ **Client Reviews** — visitors/clients submit a text review + star rating; it
  appears instantly for everyone. Includes basic validation + honeypot anti-spam.
- ☁️ One-click **Vercel** deployment

---

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

> The site works immediately. Without a database it uses a temporary in-memory
> store for reviews (they reset when the server restarts). Add Upstash (below) to
> make reviews permanent and shared across all visitors.

---

## 2. Set up the reviews database (Upstash Redis — free)

1. Go to **https://upstash.com** and sign up (free).
2. Create a new **Redis** database (any region near you).
3. Open the database → **REST API** section → copy:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Create a file named `.env.local` in the project root:

```env
UPSTASH_REDIS_REST_URL=your-url-here
UPSTASH_REDIS_REST_TOKEN=your-token-here
```

Restart `npm run dev`. Reviews are now saved permanently. ✅

---

## 3. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to **https://vercel.com** → **Add New → Project** → import the repo.
3. In **Environment Variables**, add the same two keys from step 2:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Click **Deploy**. Done — your portfolio is live. 🚀

> Deploying without the env vars still works; only the reviews won't persist.
> You can add the variables later in **Vercel → Settings → Environment Variables**
> and redeploy.

---

## Editing your content

All portfolio content lives in **`lib/data.ts`** — name, roles, skills,
experience, projects, education, contact links. Edit that one file to update the
whole site. No component changes needed.

## Tech stack

| Layer     | Tech                                    |
| --------- | --------------------------------------- |
| Framework | Next.js 14 (App Router), React 18, TS   |
| Styling   | Tailwind CSS                            |
| Animation | Framer Motion                          |
| Reviews   | Next.js API Routes + Upstash Redis      |
| Hosting   | Vercel                                  |
