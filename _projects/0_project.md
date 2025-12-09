---
layout: page
title: From Roots to Removals
description: Interactive data visualization exploring migrations and deportations in the United States through historical trends and enforcement patterns
img: assets/img/migrationinteractive.webm
importance: 0
category: work
github: anfelipecb/migr_deport_interactive
website: https://anfelipecb.github.io/migr_deport_interactive/
tags: [data-visualization, d3.js, policy, immigration, storytelling]
year: 2025
---

## Overview

**From Roots to Removals** is an interactive data visualization that explores the complex relationship between immigration and deportation in the United States. This storytelling project traces the journey of migrants from historical immigration patterns (1850-2024) through the modern deportation pipeline, revealing the human impact of enforcement policies.

## What It Does

The interactive visualization combines multiple data narratives:

- **Historical Migration Trends**: Visualizes the growth of the foreign-born population from 2.2 million (9.7%) in 1850 to 50.2 million (14.8%) in 2024
- **The Deportation Pipeline**: Interactive Sankey diagram showing the flow of individuals through ICE's enforcement system (arrests → detentions → removals) from 2023-2025
- **Timeline of Deportations**: Monthly counts of arrests, detentions, and removals over time, filterable by country of citizenship
- **The Journey of Removal**: Geographic visualization tracing 527,346 removals from state of arrest to country of destination
- **Paths Through Detention**: Network visualization revealing the complex system of transfers between detention facilities, with individual stories of people moved through multiple facilities

## Why I Made It

This project was developed for **CAPP 30239: Data Visualization for Policy Analysis** at the University of Chicago. The goal was to create an engaging, data-driven narrative that humanizes immigration enforcement statistics and makes complex policy data accessible to both academic and public audiences. The visualization demonstrates how deportation policies affect real individuals and families, revealing patterns that might not be apparent in raw statistics alone.

## Technologies & Skills

- **D3.js** for interactive visualizations, Sankey diagrams, and data binding
- **MapLibre GL JS** for interactive geographic visualizations and particle flows
- **Python** for data processing and analysis (Pandas, NumPy)
- **Data Pipeline Design** processing ICE enforcement data from FOIA requests
- **HTML/CSS/JavaScript** for the interactive web interface and storytelling structure
- **Geospatial Analysis** linking detention facilities, removal flows, and geographic coordinates

## Real-World Impact

This visualization makes complex immigration enforcement data accessible to:

- **Policy Makers**: Understanding the scale and patterns of deportations
- **Advocates**: Visualizing the human cost of detention transfers and enforcement
- **Researchers**: Exploring trends in immigration enforcement over time
- **General Public**: Learning about the history and current state of immigration in America

The project reveals critical insights:
- Over 176,000 individuals were detained in more than one facility
- People traveled an average of 493 miles (793 km) between detention facilities
- The visualization tracks 527,346 removals between September 2023 and July 2025

## Team & My Role

**Solo Project:** Andrés Felipe Camacho (data scientist, visualization developer, storyteller)

**My contributions:**
- Designed and implemented the end-to-end data processing pipeline cleaning ICE enforcement data from FOIA requests
- Built all interactive D3.js visualizations including Sankey diagrams, timeline charts, and network graphs
- Developed MapLibre GL JS visualizations for geographic removal flows and detention facility networks
- Created the storytelling narrative structure and user experience design
- Processed and analyzed ICE data covering arrests, detentions, and removals (2023-2025)
- Integrated multiple data sources including Migration Policy Institute historical data and Vera Institute facility data
- Implemented particle flow visualizations representing transfer events and removal flows

## Source Code

**Repository:** [anfelipecb/migr_deport_interactive](https://github.com/anfelipecb/migr_deport_interactive)

**Live Visualization:** [anfelipecb.github.io/migr_deport_interactive/](https://anfelipecb.github.io/migr_deport_interactive/)

## Data Sources

- **ICE Enforcement Data**: Arrests, detentions, and removals data from the Deportation Data Project (FOIA requests), covering September 2023 to July 2025
- **Historical Immigration Population**: Migration Policy Institute Data Hub estimates of foreign-born population in the United States from 1850 to 2024
- **Detention Facilities**: Geographic coordinates and facility information from the Vera Institute of Justice ICE Detention Trends repository

