const STUDY_CONCEPTS_BANK = [
  {
    topic: "Scope Definition",
    question: "Definition: What is the term for unauthorized, progressive additions to project scope without modifications to time, cost, or resources?",
    answers: ["Gold Plating", "Scope Creep", "Scope Baseline", "Decomposition"],
    correct: 1,
    explanation: "Scope Creep refers to uncontrolled changes or growth in a project's scope without corresponding adjustments to its constraints."
  },
  {
    topic: "Quality Definitions",
    question: "Definition: Which specialized chart uses the 80/20 rule to demonstrate that a vast majority of defects stem from a few critical causes?",
    answers: ["Control Chart", "Pareto Diagram", "Ishikawa Diagram", "Scatter Plot"],
    correct: 1,
    explanation: "A Pareto Diagram organizes data by frequency to show that roughly 80% of problems are caused by 20% of the underlying issues."
  }
];

const EXAM_LEVEL_1_BANK = [
  {
    topic: "Earned Value Math (Level 1)",
    question: "Calculate the Cost Variance (CV) if Earned Value (EV) = $20,000 and Actual Cost (AC) = $25,000.",
    answers: ["+$5,000", "-$5,000", "$45,000", "0.80"],
    correct: 1,
    explanation: "Formula: CV = EV - AC. Therefore: $20,000 - $25,000 = -$5,000. Negative means the project is over budget."
  },
  {
    topic: "Communication Networks (Level 1)",
    question: "A project team size grows from 3 to 5 active members. How many total communication channels exist in the matrix now?",
    answers: ["2 channels", "6 channels", "10 channels", "15 channels"],
    correct: 2,
    explanation: "Formula: N(N-1)/2. For 5 members: 5(4)/2 = 10 unique channels."
  }
];

const EXAM_LEVEL_2_BANK = [
  {
    topic: "Schedule Matrix (Level 2)",
    question: "Calculate the total float of an engineering task if its Late Start (LS) is Day 14 and its Early Start (ES) is Day 9.",
    answers: ["23 days", "5 days", "1.5 days", "0 days"],
    correct: 1,
    explanation: "Formula: Float = Late Start - Early Start. Therefore: 14 - 9 = 5 days of total buffer time."
  }
];

const EXAM_LEVEL_3_BANK = [
  {
    topic: "Performance Forecasting (Level 3)",
    question: "Your project has an EV of $10,000 and AC of $8,000. Calculate the Cost Performance Index (CPI) and identify budget status.",
    answers: ["CPI = 1.25 (Under Budget)", "CPI = 0.80 (Over Budget)", "CPI = -$2,000", "CPI = 1.00 (On Budget)"],
    correct: 0,
    explanation: "Formula: CPI = EV / AC. Therefore: 10,000 / 8,000 = 1.25. Values above 1.0 indicate excellent under-budget efficiency."
  }
];

function getSelectedLobbyDataset(mode, tier) {
  if (mode === "study") return [...STUDY_CONCEPTS_BANK];
  if (tier === "level2") return [...EXAM_LEVEL_2_BANK];
  if (tier === "level3") return [...EXAM_LEVEL_3_BANK];
  return [...EXAM_LEVEL_1_BANK]; // Default fallback to level 1
}
