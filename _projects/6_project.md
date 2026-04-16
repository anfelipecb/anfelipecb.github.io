---
layout: page
title: Event-Driven E-Commerce Architecture
description: Microservices e-commerce platform with asynchronous order processing using Redis Streams, FastAPI gateway, and React frontend with real-time Server-Sent Events
img: assets/img/EventDriven.png
importance: 6
category: student-work
github: anfelipecb/ecommerce_event_driven
tags: [devops]
year: 2025
---

## Overview

This project demonstrates **event-driven microservices architecture** for e-commerce order processing. Instead of synchronous calls between services, three independent microservices (Inventory, Payment, Shipment) communicate asynchronously through a **Redis Streams** message broker. A React TypeScript frontend shows the event chain in real time using Server-Sent Events (SSE).

## Architecture

**Event Flow:**
1. Client submits order via the React UI
2. **FastAPI Gateway** publishes `order.created` to Redis Streams
3. **Inventory Service** reads the order, reserves stock, publishes `inventory.reserved`
4. **Payment Service** reads the reservation, processes charge, publishes `payment.processed`
5. **Shipment Service** reads the payment, creates a shipping label, publishes `shipment.created`
6. Gateway streams all events back to the client in real time via SSE

Each service runs independently, processes one event at a time using Redis consumer groups, and publishes results back to the stream. If a service goes down, messages wait in Redis until it recovers.

## Why Event-Driven Matters

**Resilience:** If Shipment crashes, payment events wait in Redis until it restarts. No lost messages, no broken orders.

**Scalability:** Services scale independently. Run 3 Payment containers and 1 Inventory container based on actual bottlenecks.

**Deployment:** Independent CI/CD per service. A buggy Inventory release does not affect Payment or Shipment. Zero-downtime updates since new containers pick up pending events.

## Technologies & Skills

| Component | Technology |
|-----------|-----------|
| Gateway | **FastAPI** + uvicorn (async Python) |
| Message Broker | **Redis 7** Streams with consumer groups |
| Frontend | **React** + TypeScript + Vite |
| Real-time | **Server-Sent Events** (SSE via sse-starlette) |
| Orchestration | **Docker Compose** (6 containers with health checks) |
| Services | Python + redis-py (Inventory, Payment, Shipment) |

## Resilience Demo

The project includes a practical demonstration:
1. Start the full system with `docker-compose up --build`
2. Submit an order, watch events flow through the pipeline in real time
3. Stop the Shipment service: `docker-compose stop shipment`
4. Submit another order: events proceed up to `payment.processed` but no shipment
5. Restart Shipment: `docker-compose start shipment`
6. The pending `shipment.created` event appears automatically

## Team & My Role

**Solo Project:** Andres Felipe Camacho, DevOps course presentation, University of Chicago

## Source Code

**Repository:** [anfelipecb/ecommerce_event_driven](https://github.com/anfelipecb/ecommerce_event_driven)
