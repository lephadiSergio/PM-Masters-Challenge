const ALL_QUESTIONS_BANK = [
  {
    topic: "Cost Management",
    question: "Calculate the Cost Variance (CV) if Earned Value (EV) is $20,000 and Actual Cost (AC) is $25,000.",
    answers: [
      "+$5,000",
      "-$5,000",
      "$45,000",
      "0.8"
    ],
    correct: 1,
    explanation: "Cost Variance formula is CV = EV - AC. Therefore: $20,000 - $25,000 = -$5,000 (which means the project is currently over budget)."
  },
  {
    topic: "Communications Management",
    question: "A project team size increases from 3 to 5 members. How many total communication channels exist now?",
    answers: [
      "2 channels",
      "6 channels",
      "10 channels",
      "15 channels"
    ],
    correct: 2,
    explanation: "The communication channels formula is N(N-1)/2. For 5 members: 5(4)/2 = 10 total channels."
  },
  {
    topic: "Cost Management",
    question: "Calculate the Cost Performance Index (CPI) if Earned Value (EV) is $10,000 and Actual Cost (AC) is $8,000.",
    answers: [
      "1.25",
      "0.80",
      "$2,000",
      "-$2,000"
    ],
    correct: 0,
    explanation: "CPI formula is EV / AC. Therefore: $10,000 / $8,000 = 1.25 (a value above 1.0 means under budget performance)."
  },
  {
    topic: "Scope Management",
    question: "Definition: What is the term for uncontrolled expansion to product or project scope without adjustments to time, cost, and resources?",
    answers: [
      "Gold Plating",
      "Scope Creep",
      "Scope Baseline",
      "Decomposition"
    ],
    correct: 1,
    explanation: "Scope Creep is the specific term used for unauthorized, progressive additions to project scope without corresponding changes to timeline or funding."
  },
  {
    topic: "Quality Management",
    question: "Definition: Which quality tool uses the 80/20 rule to show that a large majority of problems are produced by a few key causes?",
    answers: [
      "Control Chart",
      "Pareto Diagram",
      "Fishbone Timeline",
      "Scatter Plot"
    ],
    correct: 1,
    explanation: "A Pareto Diagram is a histogram ordered by frequency of occurrence, illustrating the principle that 80% of defects stem from 20% of causes."
  },
  {
    topic: "Schedule Management",
    question: "Definition: What is the specific term for the sequence of dependent tasks that determines the shortest possible duration of a project?",
    answers: [
      "Critical Path",
      "Lag Time",
      "Crashing Track",
      "Float Buffer"
    ],
    correct: 0,
    explanation: "The Critical Path is defined as the longest path through a network diagram, possessing zero total float, which dictates the overall end date."
  },
  {
    topic: "Earned Value Management",
    question: "Calculate the Schedule Variance (SV) if Earned Value (EV) is $15,000 and Planned Value (PV) is $12,000.",
    answers: [
      "-$3,000",
      "+$3,000",
      "1.25",
      "0.80"
    ],
    correct: 1,
    explanation: "Schedule Variance formula is SV = EV - PV. Therefore: $15,000 - $12,000 = +$3,000 (positive means ahead of schedule)."
  },
  {
    topic: "Risk Management",
    question: "Definition: What is the term for a risk response strategy where the project team shifts the ownership and impact of a threat to a third party?",
    answers: [
      "Mitigate",
      "Avoid",
      "Transfer",
      "Accept"
    ],
    correct: 2,
    explanation: "Risk Transfer involves passing the accountability and financial impact of a risk to an outside vendor or insurance company."
  },
  {
    topic: "Resource Management",
    question: "Definition: What conflict resolution technique forces a resolution by incorporating multiple viewpoints to achieve a true win-win consensus?",
    answers: [
      "Smoothing",
      "Forcing",
      "Compromising",
      "Collaborating"
    ],
    correct: 3,
    explanation: "Collaborating (or problem-solving) combines diverse perspectives to forge an optimal, unified solution that completely satisfies all parties."
  },
  {
    topic: "Schedule Management",
    question: "Calculate the total float of a task if its Late Start (LS) is Day 14 and its Early Start (ES) is Day 9.",
    answers: [
      "23 days",
      "5 days",
      "1.5 days",
      "0 days"
    ],
    correct: 1,
    explanation: "Float formula is Float = Late Start - Early Start (LS - ES) or LF - EF. Therefore: 14 - 9 = 5 days of total float/buffer."
  },
  {
    topic: "Scope Management",
    question: "Definition: What is the approved, complete hierarchical framework used to break down the total scope of project work into manageable components?",
    answers: [
      "Scope Statement",
      "Product Backlog",
      "Work Breakdown Structure (WBS)",
      "Requirements Matrix"
    ],
    correct: 2,
    explanation: "The Work Breakdown Structure (WBS) is a deliverable-oriented hierarchical decomposition of the total scope to be executed by the project team."
  },
  {
    topic: "Quality Management",
    question: "Definition: What is the term when a team member adds extra features or functionality to a deliverable that was never explicitly requested by the client?",
    answers: [
      "Scope Creep",
      "Gold Plating",
      "Value Engineering",
      "Quality Assurance"
    ],
    correct: 1,
    explanation: "Gold Plating is intentionally adding extra features to deliverables outside the formal contract specifications, often increasing risks or costs unnecessarily."
  }
];

function getRandomQuestions(num) {
  let shuffled = [...ALL_QUESTIONS_BANK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
