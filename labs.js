window.DETLENG_LABS = [
  {
    id: "model-behaviour",
    order: 1,
    category: "Foundations",
    title: "Predict vs Generate",
    publicTitle: "Service Request Intelligence",
    route: "foundations/model-behaviour/",
    decision: "MERGE",
    status: "LIVE",
    accent: "lime",
    purpose: "Understand, route and prepare a controlled response to a customer request. Open the anatomy only when you want to inspect prediction, confidence and generation mechanics.",
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
    purpose: "Turn normal business instructions into validated action objects and proposed tool arguments before any real workflow is allowed to execute.",
    capability: "Language → Structured Action Architecture",
    reusable: ["TokenViewer", "SpanHighlighter", "StructuredOutputViewer", "PipelineTrace", "SchemaValidator"]
  }
];
