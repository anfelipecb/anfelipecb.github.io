---
layout: page
title: Adversarial AI Committees for Competency Development
description: Personalized multi-agent feedback system using Qwen2.5-7B (4-bit quantized) that matches adversarial personas to student thesis weaknesses across 6 competency dimensions, achieving 4.15-point improvement in methodological reasoning
img: assets/img/Adversarial.png
importance: 2
category: student-work
github: anfelipecb/AI-Agents-Final-Project
tags: [ai-agents, ml]
year: 2025
---

## Overview

**"It's the Student, Not the Thesis"** rethinks how AI feedback systems should work. Instead of generic suggestions that students mechanically copy-paste, the system diagnoses each student's specific competency gaps and assembles a committee of adversarial AI personas specialized in targeting those weaknesses. The core insight: personalized adversarial feedback produces deeper engagement and better research outcomes than one-size-fits-all advice.

Read the full article on [Substack](https://open.substack.com/pub/afcamachob/p/its-the-student-not-the-thesis).

## Experimental Framework

**Three Conditions Compared:**
1. **Single Agent (C1)**: Traditional single AI advisor providing generic feedback
2. **Random Committee (C2)**: Three AI agents assigned randomly to debate the thesis
3. **Prescribed Committee (C3)**: Three AI agents matched to the student's diagnosed weaknesses

**Six Competency Dimensions Assessed:**
1. **Argument Construction**: Thesis claims, logical flow, coherence
2. **Evidence Evaluation**: Source credibility, data integration
3. **Methodological Reasoning**: Research design, validity threats
4. **Theoretical Integration**: Framework application, literature grounding
5. **Self-Reflexivity**: Bias acknowledgment, positionality
6. **Receptivity**: Openness to critique, iterative improvement

## Agent Personas

Six specialized adversarial critics matched to competency gaps:
- **Methods Skeptic**: Challenges research design and validity
- **Theory Purist**: Demands deeper theoretical engagement
- **Evidence Hawk**: Scrutinizes source quality and data interpretation
- **Structural Critic**: Focuses on logical flow and argumentation
- **Reflexivity Coach**: Pushes for self-awareness and positionality
- **Devil's Advocate**: Challenges assumptions and biases

## Results

**Validation on 345 weekly research memos from 41 student authors:**
- **Methodological reasoning**: 4.15-point improvement (highest gain)
- **Mechanical reliance reduction**: 23% across the cohort
- Prescribed committees (C3) showed the lowest mechanical reliance (0.80 vs 0.84 single agent, 0.89 random committee)
- Self-reflexivity and scope showed smaller but consistent gains (2.0-2.6 points)

**Mechanical reliance** is measured as cosine similarity to a generic baseline using sentence-transformers embeddings. Lower scores mean students engaged more substantively rather than copying suggestions.

## Technologies & Skills

- **Qwen2.5-7B** (4-bit quantized via bitsandbytes) deployed locally for cost efficiency
- **GPT-4-mini** for competency scoring verification
- **sentence-transformers** (all-MiniLM-L6-v2) for mechanical reliance measurement
- **Python** with HuggingFace `transformers` library
- **UV** package manager for dependency management
- **pytest** for testing and validation
- Google Colab notebooks for cloud execution (T4/A100 GPU)

## Data Sources

- **MACSS Thesis Corpus**: ~80 theses from UChicago Knowledge repository (pilot validation)
- **GitHub Memo Corpus**: 345 weekly memos from 41 student authors, Weeks 2-9 (ecological validation)

## Team & My Role

**Solo Project:** Andres Felipe Camacho, AI Agents course final project, University of Chicago

## Source Code

**Repository:** [anfelipecb/AI-Agents-Final-Project](https://github.com/anfelipecb/AI-Agents-Final-Project)

**Article:** [It's the Student, Not the Thesis (Substack)](https://open.substack.com/pub/afcamachob/p/its-the-student-not-the-thesis)
