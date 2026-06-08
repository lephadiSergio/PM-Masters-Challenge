// data/questions.js
const PM_QUESTIONS = [
  {
    topic: "Chapter 1: Foundations",
    question: "A company implements a new software system across all departments. Once live, the IT team maintains it daily. Which part is the project?",
    answers: ["The daily maintenance", "The initial implementation", "Both are projects", "Neither are projects"],
    correct: 1,
    explanation: "A project is a temporary endeavor to create a unique result (the implementation). Maintenance is an ongoing operation."
  },
  {
    topic: "Chapter 4: Integration",
    question: "You are assigned to a new initiative. Before you can start assigning resources or spending budget, what document must be approved?",
    answers: ["Project Management Plan", "Work Breakdown Structure (WBS)", "Project Charter", "Risk Register"],
    correct: 2,
    explanation: "The Project Charter formally authorizes the project and grants the Project Manager the authority to use resources."
  },
  {
    topic: "Chapter 5: Scope Management",
    question: "The client asks for a 'small extra feature' that isn't in the original plan. If you add it without formal approval, what is this called?",
    answers: ["Gold Plating", "Scope Creep", "Progressive Elaboration", "Value Engineering"],
    correct: 1,
    explanation: "Scope Creep is the uncontrolled expansion to product or project scope without adjustments to time, cost, and resources."
  },
  {
    topic: "Chapter 5: Scope Management",
    question: "What is the primary purpose of the Work Breakdown Structure (WBS)?",
    answers: ["To assign dates to tasks", "To decompose the total scope into manageable chunks", "To list all project risks", "To define the project budget"],
    correct: 1,
    explanation: "The WBS is a hierarchical decomposition of the total scope of work to be carried out by the project team."
  },
  {
    topic: "Chapter 11: Risk Management",
    question: "A project manager identifies a possible supplier delay and decides to contract a backup supplier just in case. Which risk strategy is this?",
    answers: ["Acceptance", "Avoidance", "Mitigation", "Transfer"],
    correct: 2,
    explanation: "Mitigation reduces the probability and/or impact of an adverse risk event. Having a backup reduces the impact of a delay."
  },
  {
    topic: "Chapter 6: Schedule Management",
    question: "What defines the 'Critical Path' in a project schedule?",
    answers: ["The sequence of activities with the highest risks", "The longest sequence of tasks determining the shortest time to complete the project", "The tasks that cost the most money", "The path with the most float"],
    correct: 1,
    explanation: "The critical path is the longest duration path through a network diagram and determines the shortest time to complete the project."
  },
  {
    topic: "Chapter 2: Organizational Influences",
    question: "In which organizational structure does the Project Manager have the LEAST amount of authority?",
    answers: ["Projectized", "Strong Matrix", "Functional", "Weak Matrix"],
    correct: 2,
    explanation: "In a functional organization, the functional manager has the power, and the PM acts more like an expediter or coordinator."
  },
  {
    topic: "Chapter 12: Procurement",
    question: "Which contract type carries the highest risk for the BUYER?",
    answers: ["Firm Fixed Price (FFP)", "Cost Plus Percentage of Cost (CPPC)", "Time and Materials (T&M)", "Fixed Price Incentive Fee (FPIF)"],
    correct: 1,
    explanation: "In a Cost Plus Percentage of Cost contract, the buyer pays all costs plus a percentage, meaning the seller has no incentive to control costs."
  },
  {
    topic: "Chapter 8: Quality Management",
    question: "What is the difference between Quality Assurance (QA) and Quality Control (QC)?",
    answers: ["QA prevents defects; QC identifies defects", "QA is for products; QC is for processes", "QA happens at the end; QC happens at the start", "There is no difference"],
    correct: 0,
    explanation: "QA is process-focused and aims to prevent defects. QC is product-focused and aims to identify existing defects."
  },
  {
    topic: "Chapter 9: Resource Management",
    question: "Your team is currently experiencing heavy conflict, arguing over roles and project direction. Which stage of team development is this?",
    answers: ["Forming", "Storming", "Norming", "Performing"],
    correct: 1,
    explanation: "According to Tuckman's ladder, 'Storming' is characterized by intragroup conflict as team members assert themselves."
  },
  {
    topic: "Chapter 10: Communications",
    question: "If you have 5 stakeholders on your project (including yourself), how many potential communication channels exist?",
    answers: ["5", "10", "20", "25"],
    correct: 1,
    explanation: "The formula is N(N-1)/2. So 5(4)/2 = 20/2 = 10 channels."
  },
  {
    topic: "Chapter 7: Cost Management",
    question: "If your Schedule Performance Index (SPI) is 0.8 and your Cost Performance Index (CPI) is 1.2, what is your project status?",
    answers: ["Ahead of schedule, over budget", "Behind schedule, under budget", "Ahead of schedule, under budget", "Behind schedule, over budget"],
    correct: 1,
    explanation: "SPI < 1 means behind schedule. CPI > 1 means under budget. So you are late, but saving money."
  },
  {
    topic: "Chapter 3: Process Groups",
    question: "In which process group is the largest portion of the project budget typically spent?",
    answers: ["Initiating", "Planning", "Executing", "Closing"],
    correct: 2,
    explanation: "The Executing process group is where the actual work of the project is performed, consuming the most time and resources."
  },
  {
    topic: "Chapter 11: Risk Management",
    question: "Purchasing insurance for your project is an example of which risk response?",
    answers: ["Mitigate", "Avoid", "Transfer", "Accept"],
    correct: 2,
    explanation: "Transferring risk involves shifting the financial impact of a risk to a third party, such as an insurance company."
  },
  {
    topic: "Chapter 2: The PMO",
    question: "What is the primary function of a Project Management Office (PMO)?",
    answers: ["To replace project managers", "To fire underperforming staff", "To standardize project governance and facilitate resource sharing", "To approve the project budget"],
    correct: 2,
    explanation: "A PMO standardizes project-related governance processes and facilitates the sharing of resources, methodologies, tools, and techniques."
  }
];

// Randomize questions for every game so it's a real test!
function getRandomQuestions(num) {
  const shuffled = [...PM_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
