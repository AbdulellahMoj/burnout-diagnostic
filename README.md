# Burnout Diagnostic

A React + Vite burnout self-assessment app with a supportive AI chat assistant.

## Prerequisites

- Node.js 20+
- npm 10+

## Local Development

1. Install dependencies:

   npm install

2. Create a local env file:

   copy .env.example .env.local

3. Set your Gemini key in `.env.local`:

   GEMINI_API_KEY=your_key_here

4. Start dev server:

   npm run dev

## Build and Type Check

- Type check:

  npm run lint

- Production build:

  npm run build

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. In Vercel, import the GitHub repo.
3. Add environment variable in Vercel project settings:

   GEMINI_API_KEY=your_key_here

4. Deploy.

Notes:
- The app includes a Vercel serverless endpoint at `/api/chat` for Gemini calls.
- `vercel.json` is configured with SPA fallback routing for React Router.
