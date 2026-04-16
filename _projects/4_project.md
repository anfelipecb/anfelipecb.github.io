---
layout: page
title: AI-Augmented Deliberative Committee
description: Multi-agent deliberation system using Claude Opus/Haiku with 7 expert jurors and 8 demographically-grounded community stakeholders (ACS 2022) to evaluate Chicago urban policy proposals
img: assets/img/AiCommittee.webm
importance: 1
category: student-work
github: anfelipecb/AI-Augmetnted-Deliberative-Committee
website: https://ai-augmetnted-deliberative-committee-hpic.streamlit.app/
tags: [ai-agents, ml, research]
year: 2025
---

## Overview

The **AI-Augmented Deliberative Committee** addresses a fundamental governance challenge: how do you incorporate diverse voices when convening 2.7 million Chicagoans in one room is not feasible? The system simulates a deliberative panel of expert jurors and community stakeholders to evaluate stadium deals, public subsidies, and urban development proposals through structured multi-round deliberation.

## What It Does

The system orchestrates two types of AI agents through a three-round deliberation protocol:

**Expert Jury (7 members):**
- Public Finance & Municipal Governance Expert
- Urban Economist
- Community Organizer
- Sports & Entertainment Industry Analyst
- Environmental Sustainability Expert
- Political Strategist & Legislative Affairs
- Youth & Education Policy Specialist

**Community Stakeholders (8 "digital doubles"):**
Demographically representative personas grounded in **ACS 2022 5-year census data** across Chicago neighborhoods (Pilsen, Bronzeville, Austin, Rogers Park, South Loop, Lincoln Park, Englewood, Near West Side). Each persona is built from real census tables: income (B19013), housing tenure (B25003), commute patterns (B08301), education (B15003), and occupation (C24010).

**Three-Round Protocol:**
1. **Round 1**: Individual scoring on Impact, Fiscal Responsibility, and Sustainability (1-10 scale) with written justifications
2. **Round 2**: Agents see each other's scores and deliberate in character, surfacing disagreements and tradeoffs
3. **Round 3**: Final verdicts and a synthesis report capturing consensus, tensions, and conditions for recommendation

## Technical Architecture

**Two-Tier LLM Design:**
- **Claude Opus**: Summarizes proposals up to 200K characters into structured summaries
- **Claude Haiku**: Cost-efficient deliberation across all three rounds

**Key Engineering Decisions:**
- Anthropic **structured outputs** (JSON schema) enforce valid scoring format in Rounds 1 and 3
- Conversation history passed between rounds to maintain deliberation context
- Regex fallback parsing if JSON extraction fails
- Rate limiting (2.5s delays) to stay under API limits
- Context windowing: 200K chars for summarization, 120K for deliberation

## Technologies & Skills

- **Python** with Anthropic SDK for LLM orchestration
- **Streamlit** for interactive web interface
- **Docker** & Docker Compose for containerization
- **UV** package manager for dependency management
- **pytest** with integration test markers
- **Ruff** for linting and formatting
- Jupyter notebooks for demo and analysis

## Team & My Role

**HPIC AI Challenge submission** (Harris Public Policy Challenge, March 2026)

**My contributions:** All code, architecture, agent design, deployment, evaluation suite, and documentation. The original team created the policy proposal that the system evaluates.

## Source Code

**Repository:** [anfelipecb/AI-Augmetnted-Deliberative-Committee](https://github.com/anfelipecb/AI-Augmetnted-Deliberative-Committee)

**Live Application:** [Streamlit App](https://ai-augmetnted-deliberative-committee-hpic.streamlit.app/)
