# DeTLeng Agentic Systems Lab

Custom-domain static repository for `https://agentic.detleng.com/`.

## Public architecture

The Lab is business-first: visitors operate a useful system first and open technical anatomy second. Technical postmortems contribute reusable capability; they do not become lecture pages automatically.

### Live System 01 — Service Request Intelligence
Route: `/foundations/model-behaviour/`

Public use: understand, route and prepare a controlled response to a service request.

Technical anatomy: Predict vs Generate, route scores, confidence gates and generation behaviour.

### Live System 02 — Natural Language Operations Gateway
Route: `/nlp/text-to-structure/`

Public use: turn human business instructions into validated action objects and proposed tool arguments before execution.

Technical anatomy: tokenization, spans, normalization, POS, entities and language-to-structure inspection.

## Lab principle

**Use the system first. Inspect how it worked second.**

The site follows the implementation rhythm:

`DISSECT → BUILD → BREAK → COMPARE → TRANSFORM → DEPLOY`

## Current files

- `index.html` — Agentic Systems Lab hub
- `labs.js` — central live-system registry
- `foundations/model-behaviour/index.html` — Service Request Intelligence
- `nlp/text-to-structure/index.html` — Natural Language Operations Gateway
- `CNAME` — custom domain
