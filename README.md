# Sadanand Maurya — Portfolio

A modern, responsive developer portfolio built with **Next.js 14 (App Router)**,
**TypeScript** and **Tailwind CSS**, with a high-end **3D + motion** experience
powered by an animated particle field and **Framer Motion**.

## Features

- ⚡ Fast, SEO-friendly, fully responsive (mobile → desktop)
- 🎨 Modern dark UI with an animated 3D particle background + aurora glow
- 🧲 Interactive motion — 3D tilt cards, magnetic buttons, scroll progress,
  rotating role text and a floating 3D hero scene
- 🧩 Sections: Hero, About, Skills, Experience, Projects, Contact
- ♿ Respects `prefers-reduced-motion`
- ☁️ One-click **Vercel** deployment

---

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 2. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to **https://vercel.com** → **Add New → Project** → import the repo.
3. Click **Deploy**. Done — your portfolio is live. 🚀

No environment variables are required.

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
| Animation | Framer Motion + Canvas 3D particle field |
| Hosting   | Vercel                                  |
