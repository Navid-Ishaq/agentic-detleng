window.DETLENG_LABS = [
  {
    id: "model-behaviour",
    order: 1,
    category: "Foundations",
    title: "Predict vs Generate",
    publicTitle: "Service Request Intelligence Anatomy",
    route: "foundations/model-behaviour/",
    decision: "MERGE",
    status: "LIVE",
    accent: "lime",
    purpose: "Inspect how one request can require bounded decisions, confidence gates and generative output inside the same workflow.",
    capability: "Decision + Generation Architecture",
    reusable: ["ClassScoreInspector", "ConfidenceGate", "GenerationTrace", "ExecutionTimeline"]
  },
  {
    id: "text-to-structure",
    order: 2,
    category: "Language & Structure",
    title: "Text → Structure",
    publicTitle: "Natural Language Operations Gateway",
    route: "nlp/text-to-structure/",
    decision: "BUILD NOW",
    status: "LIVE",
    accent: "cyan",
    purpose: "Turn human instructions into inspectable, validated machine-ready structure before any tool or business action is allowed.",
    capability: "Language → Structured Action Architecture",
    reusable: ["TokenViewer", "SpanHighlighter", "StructuredOutputViewer", "PipelineTrace", "SchemaValidator"]
  }
];
