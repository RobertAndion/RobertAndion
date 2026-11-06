---
title: Enterprise GenAI Advisor Platform
description: First enterprise AI advisor assistant at a major wealth manager, from architecture to firm-wide production in under three months.
date: 2026-08-01
featured: true
tags: [Java 17, Spring Boot, AWS Bedrock, SageMaker, Oracle, Datadog]
---

<!-- TODO: expand this write-up in your own words; check with your employer what can be public. -->

Led a team of three engineers to deliver a chatbot grounded in proprietary firm data, now serving 40,000+ advisors with real-time access to client insights, compliance guidance and market intelligence.

## What I built

- A Java 17 / Spring Boot microservice backbone behind the assistant.
- High-throughput REST APIs specified in OpenAPI 3.0, backed by Oracle using domain-driven design.
- Generative-AI responses over internal knowledge via Amazon Bedrock and SageMaker.
- Observability in Datadog, Dynatrace and Splunk, and a Jenkins/Maven/Flyway pipeline from build through deployment.

## Results

- Concept to full firm-wide production in under 3 months.
- Load-tested to 3× general-availability volume (120,000+ advisors) while holding response-time SLAs.
