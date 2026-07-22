# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Design Mentor primarily serves junior designers and design students who are reviewing UI work, learning visual design principles, and deciding what to improve next. They need feedback that teaches without making them feel graded or judged.

## Product Purpose

Design Mentor is a supportive learning platform for improving UI design. A user shares an interface screenshot, receives a structured Design Review grounded in visible evidence, and follows progress across iterations. Success means the user understands why a design choice matters, can choose a practical next step, and becomes more confident making design decisions independently.

## Positioning

Design Mentor behaves like an experienced designer sitting beside the user rather than an automated critic or scoring authority. It combines screenshot-based observations, transparent reasoning, encouraging recommendations, and version-to-version learning. Scores summarize visible review criteria; they are never presented as an absolute measure of usability or design quality.

## Operating Context

The core workflow is: upload a screenshot, add project context, open a Design Review, inspect annotated observations and recommendations, compare versions, and choose the next improvement. Reviews cover visible hierarchy, layout and spacing, accessibility indicators, consistency, and visual design heuristics. The uploaded screenshot and its Design Review are the primary artifacts.

## Capabilities and Constraints

- Use the product name **Design Mentor** and the tagline **Your second pair of eyes for better UI design.**
- Call the output a **Design Review**. Use **observations**, **what we noticed**, **areas to improve**, and **opportunities to strengthen** instead of critique, findings, issues, failures, or analysis report.
- Reviews can evaluate visible screenshot evidence but cannot confirm interactions, task success, technical accessibility, or user-research findings.
- Confidence and priority are separate concepts. Color never carries status meaning alone.
- The current implementation is a Next.js 15, React 19, TypeScript, and Tailwind CSS web application.

## Brand Commitments

The product voice is warm, friendly, encouraging, calm, thoughtful, creative, modern, and minimal. It explains rather than judges and offers options rather than prescribing one correct answer. It must not feel corporate, enterprise, formal, editorial, cold, AI-first, chatbot-like, or like a dense analytics dashboard.

## Evidence on Hand

- Dashboard and review examples: `app/page.tsx` and `components/`.
- Implemented visual system and responsive behavior: `app/globals.css`.
- Living component showcase: `app/design-system/page.tsx`.
- Representative uploaded interface artwork: `public/fitness-app-redesign.svg`.
- The application uses demonstration content and scores. No testimonials, customer logos, benchmark claims, or production usage evidence are present; future work must not invent them.

## Product Principles

1. **Guide, never judge.** Use direct but supportive language that protects the learner's agency.
2. **Show evidence before advice.** Connect every recommendation to something visible and explain why it may matter.
3. **Prefer progress over grades.** Help users learn across iterations rather than optimize for a perfect score.
4. **Make uncertainty visible.** State what a screenshot can and cannot establish.
5. **Keep the work in focus.** The user's screenshot and Design Review should lead; product chrome and metrics remain secondary.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Normal text must meet at least 4.5:1 contrast; large text, controls, and focus indicators must meet at least 3:1. All workflows should be keyboard operable, retain visible focus, use logical reading order, avoid color-only meaning, respect reduced-motion preferences, and describe screenshot-based accessibility feedback as an indicator rather than certification.
