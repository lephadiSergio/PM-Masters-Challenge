const ALL_QUESTIONS_BANK = [
  {
    topic: "Scope Management",
    question: "A key stakeholder requests a minor feature addition during an active sprint that was not part of the agreed sprint goal. What is the PM's best first action?",
    answers: [
      "Directly add it to the active sprint backlog to keep the stakeholder happy.",
      "Reject the request immediately as it violates the Agile manifesto rules.",
      "Log the feature request in the product backlog for prioritization during the next planning session.",
      "Escalate the stakeholder's behavior directly to the project sponsor."
    ],
    correct: 2,
    explanation: "Product scope alterations in Agile must go through proper product backlog management rather than disrupting an active sprint commitment."
  },
  {
    topic: "Risk Management",
    question: "Your team identifies a critical regulatory dependency that might delay the software release by two months. What strategy represents risk mitigation?",
    answers: [
      "Buying project insurance to cover the financial losses of the delay.",
      "Allocating an extra developer to run parallel validation tasks early to clear dependencies faster.",
      "Updating the timeline and accepting that the project will simply finish late.",
      "Moving the entire project operations to a country without that regulatory body."
    ],
    correct: 1,
    explanation: "Mitigation involves taking proactive steps to reduce the probability or impact of a risk before it occurs, such as running parallel tracks."
  },
  {
    topic: "Stakeholder Engagement",
    question: "An influential executive frequently misses steering committee meetings but complains about project outcomes via email. How should the PM classify them on the Power/Interest Grid?",
    answers: [
      "Low Power / Low Interest (Monitor only)",
      "High Power / Low Interest (Keep Satisfied)",
      "Low Power / High Interest (Keep Informed)",
      "High Power / High Interest (Manage Closely)"
    ],
    correct: 1,
    explanation: "Executives hold high power. Missing meetings shows low active engagement/interest, but their complaints mean they must be kept satisfied to avoid project disruption."
  },
  {
    topic: "Resource Management",
    question: "Two senior database architects are locked in an aggressive technical disagreement regarding data schema architecture. What conflict resolution method creates a win-win scenario?",
    answers: [
      "Smoothing: Emphasizing areas of agreement and ignoring the differences.",
      "Forcing: Pushing one architect's opinion over the other using managerial authority.",
      "Collaborating: Hosting an architecture workshop to synthesize a new optimal solution together.",
      "Compromising: Finding an answer that partially satisfies both but leaves both sub-optimized."
    ],
    correct: 2,
    explanation: "Collaborating incorporates multiple viewpoints to reach a consensus, leading to true problem-solving and a win-win outcome."
  },
  {
    topic: "Schedule Management",
    question: "The critical path of your project has a total float of zero days. A non-critical task with 5 days of total float gets delayed by 3 days. What happens to the overall completion date?",
    answers: [
      "The project completion date is delayed by 3 days.",
      "The project completion date remains entirely unchanged.",
      "The critical path changes and shifts to this delayed task.",
      "The project completion date accelerates by 2 days."
    ],
    correct: 1,
    explanation: "Since the delayed task has 5 days of float, a delay of only 3 days does not exceed its buffer, meaning it will not impact the final project delivery timeline."
  },
  {
    topic: "Procurement Management",
    question: "The project scope is loosely defined and expected to change significantly as research develops. Which contract type is safest for the buyer?",
    answers: [
      "Firm-Fixed-Price (FFP)",
      "Cost-Plus-Fixed-Fee (CPFF)",
      "Time and Materials (T&M)",
      "Fixed-Price-Economic-Price-Adjustment (FP-EPA)"
    ],
    correct: 1,
    explanation: "When scope is highly uncertain, Fixed-Price contracts force sellers to over-bid safely or drop quality. Cost-Reimbursable (Cost-Plus) contracts allow flexibility safely for buyers."
  },
  {
    topic: "Quality Management",
    question: "A quality control chart reveals that seven consecutive data points are falling on one side of the mean line, but remain within control limits. What does this indicate?",
    answers: [
      "The process is perfectly stable because no points are outside control limits.",
      "The Rule of Seven applies; the process is out of control and requires immediate investigation.",
      "The mean line was calculated incorrectly and must be shifted upwards.",
      "The equipment needs to be shut down and replaced immediately."
    ],
    correct: 1,
    explanation: "The 'Rule of Seven' dictates that if seven or more consecutive points fall on one side of the mean, it signifies a non-random systemic issue that demands investigation."
  },
  {
    topic: "Agile Frameworks",
    question: "During a daily standup, a developer reports a major block that requires coordination with an external vendor. Who is responsible for removing this obstacle?",
    answers: [
      "The developer who discovered the block.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Project Sponsor."
    ],
    correct: 1,
    explanation: "The Scrum Master is explicitly responsible for serving the team by removing systemic impediments and blockers that hinder development velocity."
  },
  {
    topic: "Cost Management",
    question: "Your project has an Earned Value (EV) of $40,000 and an Actual Cost (AC) of $45,000. What is your Cost Performance Index (CPI) and project financial status?",
    answers: [
      "CPI = 1.125; The project is under budget.",
      "CPI = 0.888; The project is over budget.",
      "CPI = -5,000; The project has lost capital.",
      "CPI = 1.000; The project is precisely on budget."
    ],
    correct: 1,
    explanation: "CPI = EV / AC ($40,000 / $45,000) = 0.888. A CPI value less than 1.0 indicates that the project is getting less value than spent, putting it over budget."
  },
  {
    topic: "Communications Management",
    question: "A project team expands from 4 members to 7 members. How many new communication channels have been added to the project matrix?",
    answers: [
      "3 new channels",
      "15 new channels",
      "21 new channels",
      "6 new channels"
    ],
    correct: 1,
    explanation: "Channels formula is N(N-1)/2. For 4 players: 4(3)/2 = 6 channels. For 7 players: 7(6)/2 = 21 channels. 21 - 6 = 15 new communication channels added."
  },
  {
    topic: "Change Control",
    question: "A formal change request has been approved by the Change Control Board (CCB). What should the project manager do next?",
    answers: [
      "Implement the change immediately in the production environment.",
      "Update the project baselines and communicate the approved change to stakeholders.",
      "Ask the customer for final validation before adjusting any parameters.",
      "Submit the change request to the development team for an impact analysis."
    ],
    correct: 1,
    explanation: "Once a change is approved by the CCB, the PM must update the project baselines and document/communicate it before executing the work."
  },
  {
    topic: "Earned Value",
    question: "If your Schedule Variance (SV) is a positive value, what does this tell you about your performance parameters?",
    answers: [
      "The project is ahead of schedule.",
      "The project is behind schedule.",
      "The project is spending money faster than expected.",
      "The project has experienced massive scope creep."
    ],
    correct: 0,
    explanation: "SV = EV - PV. A positive Schedule Variance means you have earned more progress value than originally planned for that date, indicating you are ahead of schedule."
  }
];

function getRandomQuestions(num) {
  let shuffled = [...ALL_QUESTIONS_BANK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
