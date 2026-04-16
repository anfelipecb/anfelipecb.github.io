---
layout: page
title: DevOps Pipeline for Microservices Platform
description: Production-grade CI/CD pipeline with Git Flow, Jenkins, Docker, Terraform, Kubernetes (3 environments), and Prometheus/Grafana monitoring for a microservices e-commerce platform
img: assets/img/FinalPrDevVOps.png
importance: 7
category: student-work
tags: [terraform, devops, cloud]
year: 2025
---

## Overview

A complete, production-grade **DevOps pipeline** for a microservices-based e-commerce platform. The project implements the full lifecycle from version control through staging to production: Git Flow branching, Jenkins CI/CD, Docker containerization, Terraform infrastructure-as-code, Kubernetes orchestration across three environments, and Prometheus/Grafana monitoring.

You can read the full project documentation [here]({{ '/assets/pdf/sol_final_proj.pdf' | relative_url }}).

## Architecture

**Four Microservices:**
- **Frontend**: React web UI for product browsing and order creation
- **Product Service**: Express REST API for product catalog (port 3001)
- **Order Service**: Express REST API for order management (port 3002)
- **Database**: PostgreSQL 15 for data persistence

**Three Environments:**
- **Dev** (ecomm-dev): Automatic deploys on push to `develop`
- **Staging** (ecomm-staging): Triggered on release branch creation
- **Prod** (ecomm-prod): Manual trigger with approval gate

Each environment runs in its own Minikube profile with isolated namespaces, resource quotas, and port ranges.

## CI/CD Pipeline

**Jenkins pipeline stages per service:**
1. Detect environment (branch analysis)
2. Build and validate
3. Run tests (unit + integration)
4. Security scan (Trivy container scanning)
5. Docker build and push to Docker Hub
6. Validate Kubernetes manifests (`kubectl dry-run`)
7. Approve production deploy (manual gate)
8. Deploy to Kubernetes

**Image tagging:** `{BUILD_NUMBER}-git-{GIT_COMMIT}-v{VERSION}` for full traceability and rollback capability.

A **Jenkins Shared Library** enforces consistent pipeline practices across all service repositories.

## Infrastructure as Code

**Terraform** provisions all local infrastructure through 4 modular configurations:
- **local-dev**: Docker network creation
- **minikube**: Kubernetes cluster provisioning per environment
- **postgresql**: Database container management with persistent volumes
- **jenkins**: CI/CD server with persistent home directories

Workspace management (`terraform workspace`) separates dev/staging/prod state files.

## Git Flow & Branching

- **main**: Production-ready code, every commit tagged as a release
- **develop**: Integration branch for ongoing work
- **feature/\***: New functionality, branches from develop
- **release/\***: Release preparation, merges to main + back to develop
- **hotfix/\***: Critical production fixes from main

Protected branches require pull requests. Direct pushes blocked.

## Kubernetes Deployment

- **Rolling updates** for application services (maxSurge: 1, maxUnavailable: 0)
- **Recreate** strategy for database (PersistentVolume constraints)
- ClusterIP for internal service-to-service communication
- NodePort for external access
- Resource quotas: Dev (2 CPU / 2Gi per pod), Prod (8 CPU / 8Gi per pod)

## Monitoring

- **Prometheus** for metrics collection with ConfigMaps for scrape targets
- **Grafana** dashboards for visualization
- Metrics endpoints exposed from Product and Order services

## Technologies & Skills

- **Terraform** for infrastructure provisioning
- **Kubernetes** (Minikube) for container orchestration
- **Jenkins** for CI/CD pipelines
- **Docker** & Docker Compose for containerization
- **Trivy** for container security scanning
- **Git Flow** branching model
- **Prometheus** & **Grafana** for monitoring
- **PostgreSQL** for data persistence
- **React**, **Express**, **Node.js** for application services

## Repositories

- [ecomm_front_end](https://github.com/anfelipecb/ecomm_front_end)
- [ecomm_product_service](https://github.com/anfelipecb/ecomm_product_service)
- [ecomm_order_service](https://github.com/anfelipecb/ecomm_order_service)
- [ecomm_database](https://github.com/anfelipecb/ecomm_database)
- [ecomm_jenkins-shared-library](https://github.com/anfelipecb/ecomm_jenkins-shared-library)

## Team & My Role

**Solo Project:** Andres Felipe Camacho, DevOps course final project, University of Chicago
