# Burnout Diagnostic Awareness Project

## Project Purpose

This project is an awareness and education website about burnout.

It was created for Assignment 4 in the CBI course (Work Environment Skills) to:

- spread awareness about occupational and academic burnout,
- help users reflect on their own current state,
- provide practical, supportive guidance for recovery and prevention.

This is intentionally not a highly technical product. The goal is clear communication, accessibility, and useful public awareness.

## AI and Vibe-Coded Context

This project was built with AI assistance and vibe-coded iteration.

The intention is educational impact: sharing knowledge in a practical and engaging way so users can learn, reflect, and discuss burnout more openly.

## Important Scope Note

This app is an educational screener, not a clinical diagnosis tool.

- Results are guidance-oriented and should not replace professional medical or mental-health care.
- If someone feels overwhelmed, unsafe, or in crisis, they should contact a licensed professional or local emergency support immediately.

## Features

- Burnout learning content in a scan-friendly format
- Adaptive burnout self-assessment (expanded question set with consistency checks)
- Confidence indicators for contradictory or rushed responses
- Action-focused recommendations by risk profile
- Printable reflection PDF for classroom/team discussion
- Supportive AI chat for psychoeducation-style conversation

## Tech Stack (Simple and Practical)

- React + Vite
- TypeScript
- Tailwind CSS
- Vercel Serverless Function for AI chat endpoint

## Local Run

Prerequisites:

- Node.js 20+
- npm 10+

Steps:

1. Install dependencies

   npm install

2. Create local env file

   copy .env.example .env.local

3. Add your API key

   GEMINI_API_KEY=your_key_here

4. Run locally

   npm run dev

## Validation

- Type check:

  npm run lint

- Production build:

  npm run build

## Deploy (Vercel)

1. Import this GitHub repository in Vercel
2. Add environment variable in Vercel settings:

   GEMINI_API_KEY=your_key_here

3. Deploy

Notes:

- AI chat is served from /api/chat
- vercel.json includes SPA fallback routing

## Scientific and Trust References

Core concepts and educational guidance in this project are based on established burnout literature:

1. Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: recent research and its implications for psychiatry. World Psychiatry, 15(2), 103-111.
2. World Health Organization. (2019). Burn-out an occupational phenomenon (ICD-11).
3. Salvagioni, D. A. J., et al. (2017/2021 updates). Physical, psychological and occupational consequences of job burnout: A systematic review.
4. Leiter, M. P., & Maslach, C. (2009). Nurse turnover: the mediating role of burnout.
5. Schaufeli, W. B., Leiter, M. P., Maslach, C., & Jackson, S. E. Work on MBI and MBI-General Survey (MBI-GS) dimensions (Exhaustion, Cynicism, Professional Efficacy).

Readers are encouraged to verify and explore these references directly.
