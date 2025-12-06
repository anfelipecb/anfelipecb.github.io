---
layout: page
title: Heat, Households, and Human Development
description: Interactive data visualization exploring the relationship between rising temperatures and impacts on family life and child development
img: assets/img/ClimateEffects.png
importance: 2
category: work
github: anfelipecb/climate-development
website: https://anfelipecb.github.io/climate-development/
tags: [satellite-imagery, research, vega-altair, data-visualization]
year: 2025
related_publications: cuartas2025high
---

## Overview

**Heat, Households, and Human Development** is an interactive data story that visualizes the relationship between rising temperatures and their impacts on family life and child development. This project links climate data with household survey data to explore two critical questions: (1) How does heat exposure affect parenting behaviors and discipline practices? (2) How does heat influence early childhood development outcomes?

## What It Does

The interactive visualization combines:
- **Global temperature trends** from ERA5-Land climate reanalysis (1950-present)
- **Spatial data linkage methodology** connecting ~21,000 children across 6 countries to precise climate data
- **Exploratory patterns** that motivated two research papers on heat's effects on violent child punishment and developmental delays

The visualizations reveal that temperature impacts are not uniformly distributed—they concentrate among vulnerable populations including poorer households, urban dwellers, and communities without adequate water and sanitation infrastructure.

## Why I Made It

This project was developed for **CAPP 30239: Data Visualization for Policy Analysis** at the University of Chicago. The goal was to create an engaging, accessible data story that communicates complex research findings to both academic and policy audiences. The visualization demonstrates how climate change is not just an environmental issue, but a human development crisis affecting the most vulnerable children from their earliest years.

## Technologies & Skills

- **D3.js** for interactive visualizations and data binding
- **Python** for data processing and analysis (Pandas, NumPy)
- **Geospatial analysis** linking ERA5-Land climate grids (~0.1° resolution) with UNICEF MICS survey clusters
- **HTML/CSS/JavaScript** for the interactive web interface
- **Data pipeline design** processing 250+ GB of climate and survey data

## Real-World Impact

This visualization supports two peer-reviewed research papers:

1. **Cuartas, J., & Camacho, A. (2025).** High temperatures and violent child punishment at home: Evidence from six countries. *Psychology of Violence*, 15(6), 670–681. [View publication](https://psycnet.apa.org/record/2026-64418-001)

2. **Cuartas, J., Balza, L. H., Camacho, A., & Gómez-Parra, N. (2025).** Ambient Heat and Early Childhood Development: A Cross-National Analysis. *Journal of Child Psychology and Psychiatry* (forthcoming)

The research findings have policy implications for:
- Climate adaptation strategies targeting vulnerable families
- Social service systems that account for seasonal heat stress
- Equity-focused interventions addressing heat impacts on child development

## Team & My Role

**Collaboration:** Jorge Cuartas (lead researcher), Andrés Felipe Camacho (data scientist & visualization developer)

**My contributions:**
- Designed and implemented the end-to-end data pipeline linking ERA5-Land climate data with MICS survey clusters
- Built the interactive D3.js visualizations showing temperature trends, anomalies, and spatial patterns
- Developed the geospatial linkage methodology connecting ~3,600 geographic clusters to precise climate grids
- Created the web interface and data story narrative structure
- Processed and analyzed 250+ GB of climate reanalysis data

## Source Code

**Repository:** [anfelipecb/climate-development](https://github.com/anfelipecb/climate-development)

**Live Visualization:** [anfelipecb.github.io/climate-development/](https://anfelipecb.github.io/climate-development/)

## Data Sources

- **UNICEF Multiple Indicator Cluster Surveys (MICS)** - Geocoded household and child-level microdata from 6 countries (2017-2020)
- **ERA5-Land Climate Reanalysis** - 2-meter maximum temperature at ~0.1° spatial resolution (1950-present)
- **WMO Climatological Normals** - 1991-2020 baseline for temperature anomaly calculations
