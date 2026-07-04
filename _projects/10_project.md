---
layout: page
title: PRiSMA, Recidivism Risk Prediction for Pretrial Detention
description: XGBoost risk models (AUC 0.77-0.89) built at the Attorney General of Colombia on 994K criminal events across 3 national databases to support prosecutors' pretrial detention decisions
img: assets/img/Prisma.png
importance: 6
category: work
website: https://anfelipecb.github.io/assets/pdf/Prisma%20Paper%20VEng.pdf
tags: [ml, research]
year: 2024
---

## Overview

**PRiSMA** (Risk Profile for Recidivism for pretrial measures) is an ML-powered risk assessment tool built at the Attorney General's Office of Colombia to support prosecutors deciding on ~230,000 pretrial detention requests each year. Decisions were being made with incomplete, non-uniform information: 54.3% of low-risk defendants were requested for detention while 39.3% of high-risk defendants were not, with decisions heavily weighted toward current offense severity over criminal history patterns.

The full methodology is documented in the [technical paper (PDF)]({{ '/assets/pdf/Prisma Paper VEng.pdf' | relative_url }}).

## What It Does

PRiSMA estimates the probability that a defendant re-offends within two years, with four separate XGBoost models by crime category: general, economic (theft, fraud, extortion), violent (homicide, assault, sexual offenses, domestic violence), and other crimes (drug and weapons trafficking, conspiracy). Predictions are surfaced to prosecutors as decision support, not as an automated decision.

## Data

- **5.9M criminal events** (2005-2019), of which **994K charged events** across **744K unique individuals** were analyzed
- Integration of **3 national databases**: SPOA (Prosecutor's Office case management), SIEDCO (National Police arrests), and SISIPEC (National Penitentiary System)
- Feature engineering from longitudinal criminal histories: prior arrests, accumulated days in custody, historical crime severity, resocialization program participation

## Modeling and Results

- Gradient boosting (XGBoost) with 5-fold cross-validation, 70/30 train/test split
- **AUC 0.77 (general crime) to 0.89 (economic crime)**; the highest-risk decile re-offends at 65% within 2 years versus 3.6% in the lowest-risk decile
- **Selective labels problem** addressed with the Kleinberg et al. (2018) contraction methodology: 1,256 prosecutor severity quintile cells, training on the most lenient quintile and evaluating on stricter ones, to validate that unobservable characteristics do not systematically bias predictions
- Feature importance audited for bias (gender ranked low in importance)

## Policy Impact

Applied to 2018 decisions, the tool could have delivered **up to a 25% reduction in recidivism** at the same detention rate, or alternatively a **36% reduction in detentions** (about 9,000 fewer prison spaces annually) at the same crime level, by correcting the current-offense bias in requests.

## My Role

Within a 3-person team, I built the initial model and the data pipeline and cleaning across the three national databases, implemented the selective labels correction based on Kleinberg et al., developed the XGBoost models, and co-wrote the technical paper.
