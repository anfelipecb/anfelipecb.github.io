---
layout: page
title: Grove, an ADHD-Aware Goal & Task App
description: Production full-stack TypeScript app with Next.js 14, Supabase/PostgreSQL, a Node.js worker, and an AI Coach that turns messy intentions into small, actionable tasks
img: assets/img/Grove.png
importance: 3
category: personal
github: anfelipecb/Grove
website: https://grove-azure-three.vercel.app/
tags: [software, ai-agents]
year: 2026
---

## Overview

**Grove** is an ADHD-aware productivity app built around a simple insight: follow-through failure for ADHD users comes from friction and context-switching, not from missing ambition. Grove helps users turn one messy intention into a few small tasks they can start today.

I built Grove solo, end to end: product design, full-stack development, database schema, AI integration, testing, and deployment. It is live in production at [grove-azure-three.vercel.app](https://grove-azure-three.vercel.app/).

## Core Features

- **Coach**: an AI assistant that converts informal, vague goal descriptions into structured tasks with clear next actions (Groq-powered LLM inference with prompt engineering for goal-to-task decomposition)
- **Today**: a daily prioritized task view surfacing required anchors and goal tasks, designed to reduce decision fatigue
- **Community**: a social layer for shared goals and group accountability

## Architecture

A pnpm monorepo with three packages:

- `apps/web`: Next.js 14 frontend (App Router, React 18, TypeScript 5.7), deployed on Vercel
- `apps/worker`: Node.js TypeScript background worker for jobs and event processing, deployed on Railway
- `packages/core`: shared TypeScript types and Zod schemas

**Backend**: Supabase (PostgreSQL) with 5+ schema migrations covering users, goals, tasks, communities, XP events, and onboarding; row-level security policies; real-time subscriptions for live updates.

**Stack highlights**: Clerk authentication, dnd-kit drag-and-drop task reordering, Tailwind CSS, Zod validation end to end, Husky git hooks, and a Playwright E2E suite that includes production smoke tests.

## Product Philosophy

Grove is built for users the mainstream productivity market underserves. It normalizes rough days and avoids streak-based shame spirals: accessibility as a product principle, not an afterthought.
