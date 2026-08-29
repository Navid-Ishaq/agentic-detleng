# DeTLeng Agentic Systems Lab

Live site: `https://agentic.detleng.com/`

## Purpose

This repository is the public implementation surface for DeTLeng Agentic Systems Lab. The Lab does **not** create one page per lecture. Technical inputs are evaluated as `BUILD NOW`, `MERGE`, or `REFERENCE`, then transformed into original working implementations and reusable capability.

Core method:

`DISSECT → BUILD → BREAK → COMPARE → TRANSFORM → DEPLOY`

Public design rule:

**Use the system first. Inspect how it worked second.**

## Current structure

```text
agentic-detleng/
├── index.html                         # Agentic Systems Lab Hub
├── labs.js                            # Central registry for live labs
├── foundations/
│   └── model-behaviour/
│       └── index.html                 # Predict vs Generate (MERGE)
├── nlp/
│   └── text-to-structure/
│       └── index.html                 # Natural Language Operations Gateway (BUILD NOW)
├── CNAME
└── README.md
```

## Live labs

### 01 — Foundations / Model Behaviour

**Predict vs Generate**  
Decision: `MERGE`  
Capability: Decision + Generation Architecture

Route: `/foundations/model-behaviour/`

Reusable primitives include:

- `ClassScoreInspector`
- `ConfidenceGate`
- `GenerationTrace`
- `ExecutionTimeline`

### 02 — Language & Structure

**Text → Structure / Natural Language Operations Gateway**  
Decision: `BUILD NOW`  
Capability: Language → Structured Action Architecture

Route: `/nlp/text-to-structure/`

Reusable primitives include:

- `TokenViewer`
- `SpanHighlighter`
- `StructuredOutputViewer`
- `PipelineTrace`
- `ConfidenceInspector`
- `SchemaValidator`

## Browser-safe V1 policy

The current labs are designed to run as static GitHub Pages content. Transparent browser-side demonstration engines are explicitly labelled as lab engines. They must not be presented as production model probabilities or hidden AI inference.

Never expose secret provider API keys in public HTML. A future real-model implementation should use a secure server-side or serverless endpoint and preserve the same inspectable interface.

## Growth rule

New inputs should add pages only when technical value justifies them. Prefer shared inspectors, validators, traces and system primitives over one-off lecture pages.
