---
layout: page
title: Green Space Accessibility for Affordable Housing
description: Interactive dashboard analyzing disparities in access to high-quality public parks near affordable housing buildings in Chicago
img: assets/img/ProjectDemo.webm
importance: 1
category: work
github: uchicago-2025-capp30122/30122-project-treehuggers
tags: [spatial-analysis, policy, data-visualization, python, dash, gis]
year: 2025
---

## Overview

**Green Space Accessibility for Affordable Housing** is a data science project that analyzes disparities in access to high-quality public parks near affordable housing buildings in Chicago. By combining housing data, census tract information, and spatial/ratings data on city green spaces, we developed an Accessibility Index that quantifies access based on park ratings, size, and proximity.

## What It Does

The project includes:
- **Accessibility Index**: A quantitative measure combining park ratings, size, and proximity to affordable housing
- **Interactive Dashboard**: Built with Python Dash to visualize the Accessibility Index and enable exploration of green space access patterns
- **Spatial Analysis**: Integration of OpenStreetMap park data, Yelp/Google Places API reviews, and U.S. Census Bureau ACS data
- **Inequity Identification**: Reveals patterns of inequity in green space access across Chicago neighborhoods

## Why I Made It

This project was developed for **CAPP 30122: Data Science for Public Policy** at the University of Chicago. Public parks and green spaces are vital to community well-being, providing spaces for recreation, social connection, and mental health. Ensuring equitable access to high-quality green spaces is a key responsibility for urban planners and policymakers—especially for residents of affordable housing.

## Technologies & Skills

- **Python** for data processing and analysis (Pandas, GeoPandas)
- **OSMnx API** for extracting OpenStreetMap data on Chicago parks
- **Yelp & Google Places APIs** for park ratings and reviews
- **U.S. Census Bureau ACS API** for census tract data
- **Python Dash** for interactive dashboard development
- **Spatial Analysis** using GeoPandas for proximity calculations and spatial joins
- **Data Pipeline Design** integrating multiple data sources (housing, parks, reviews, census)

## Real-World Impact

The interactive dashboard empowers planners and decision-makers with a data-driven approach to:
- **Identify areas with limited access** to quality parks near affordable housing
- **Promote more equitable urban green space planning** through evidence-based insights
- **Support policy decisions** on park development and resource allocation

## Team & My Role

**Collaboration:** Begum Akkas, Andrés Camacho, Evan Fantozzi, Grace Kluender

**My contributions:**
- Designed and developed the end-to-end data pipeline architecture integrating multiple data sources
- Created the interactive Python Dash dashboard with accessibility index visualizations
- Developed Kepler.gl maps for spatial visualization of green space accessibility patterns
- Implemented OpenStreetMap data extraction workflows using OSMnx API
- Built Google Places API integration for park ratings and reviews data collection
- Developed comprehensive pytest test suite for key dashboard functionalities and data pipeline components
- Processed and cleaned multi-source data (housing developments, park locations, reviews, census tracts)

## Source Code

**Repository:** [uchicago-2025-capp30122/30122-project-treehuggers](https://github.com/uchicago-2025-capp30122/30122-project-treehuggers)

## Data Sources

- **OpenStreetMap Chicago Parks Data** - Extracted via OSMnx API for Python
- **Affordable Rental Housing Developments** - City of Chicago data portal
- **Yelp Business Search API** - Park ratings and reviews
- **Google Places Nearby Search API** - Additional park ratings data
- **U.S. Census Bureau ACS** - Census tract demographic and economic data
