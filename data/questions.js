const STUDY_CONCEPTS_BANK = [
  {
    topic: "System of Systems",
    question: "Based on the Maier and De Laurentis characteristics, which of the following is a defining feature of a \"System of Systems\" (SoS) that a Large/Complex System does NOT necessarily possess?",
    answers: [
      "Elements are interconnected and interdependent.",
      "It produces emergent properties and system-level results.",
      "Managerial and Operational Independence of the constituent elements.",
      "It is composed of hardware, software, and human elements.",
      "It has a defined physical boundary."
    ],
    correct: 2,
    explanation: "Large/Complex systems (like the human body) have interconnected elements and emergent properties, but they lack the Operational and Managerial Independence of their constituent elements. A System of Systems requires that components can operate and be managed independently."
  },
  {
    topic: "Systems Thinking",
    question: "According to Systems Thinking principles, which of the following is a basic skill or behaviour required to solve complex problems?",
    answers: [
      "Accounting Analysis",
      "Closed-mindedness to alternative solutions",
      "Abstract Thinking",
      "Component-level micro-management",
      "Focusing purely on linear, single-cause-and-effect relationships"
    ],
    correct: 2,
    explanation: "Abstract Thinking is a core basic skill associated with Systems Thinking. Accounting Analysis and closed-mindedness are directly contrary to holistic problem solving."
  },
  {
    topic: "Cognitive Frameworks",
    question: "In the context of Systems Thinking and De Bono’s Six Thinking Hats, which hat is correctly matched with its description?",
    answers: [
      "White Hat - Focuses on intuition, feelings, and gut instinct.",
      "Red Hat - Focuses on information, facts, and figures.",
      "Black Hat - Focuses on creative thinking and alternative solutions.",
      "Green Hat - Focuses on risks, problems, and safety.",
      "Blue Hat - Focuses on process control, the big picture, agenda, and time management."
    ],
    correct: 4,
    explanation: "Based on De Bono's Six Thinking Hats: White is information/facts, Red is feelings, Black is risks/safety, Green is creativity, and Blue manages process control and the big picture."
  },
  {
    topic: "Systems Engineering",
    question: "Based on the INCOSE definition, which of the following statements does NOT accurately describe Systems Engineering?",
    answers: [
      "It is an interdisciplinary approach to enable the realization of successful systems.",
      "It integrates all disciplines and specialty groups into a team effort.",
      "It proceeds from concept to production to operation.",
      "It focuses purely on independent component design without regard for environmental integration.",
      "It considers both business and technical needs to provide a quality product."
    ],
    correct: 3,
    explanation: "Systems Engineering heavily emphasizes holism and environmental integration. Focusing purely on independent component isolation is the exact antithesis of the discipline."
  },
  {
    topic: "Systems Classification",
    question: "Consider the following: 1) A group of people at a bus shelter, 2) A baked chocolate chip cookie, 3) An Organisation (with employees, departments, and IT software). Which of the above can be formally classified as a true \"System\"?",
    answers: [
      "1 and 2",
      "3 only",
      "1 and 3",
      "2 and 3",
      "All of the above"
    ],
    correct: 1,
    explanation: "An organization has interacting elements with a collective functional purpose and emergent results. A group of people at a shelter are unlinked by interdependent roles, and a baked cookie performs no processing or transformation functions."
  },
  {
    topic: "Hierarchy Architecture",
    question: "A system that requires you to go 3 or more levels down its hierarchy to encounter real atomic parts, and typically has more than 90 constituent elements, is classified as a:",
    answers: [
      "Simple System",
      "Complicated System",
      "Complex System",
      "Chaotic/Anarchy System",
      "Hard System"
    ],
    correct: 2,
    explanation: "Based on hierarchy depth and element count frameworks, a Complex System scales 3+ levels deep with structural density (>60-90 elements), like an automobile."
  },
  {
    topic: "System Topology",
    question: "Which of the following best describes a \"Soft System\"?",
    answers: [
      "It is deterministic, highly physical, and easy to model mathematically.",
      "It consists purely of mechanical and electrical components with no humans.",
      "It is people-intensive, management-oriented, and has multifaceted, complex objectives.",
      "It operates in a vacuum with absolutely no environmental interaction.",
      "It is an anarchy system that is neither knowable nor predictable, like traffic in Lagos."
    ],
    correct: 2,
    explanation: "Hard systems are deterministic and physical (like a structural bridge). Soft systems are explicitly human-centric, management-driven, and possess highly multifaceted, ambiguous goals."
  },
  {
    topic: "Systems Architecture",
    question: "In \"The Poached Egg\" Conceptual Architecture Diagram used for Systems Definition, what does the \"Egg White\" represent?",
    answers: [
      "The System-of-Interest (SoI)",
      "The internal Sub-systems",
      "The Sibling Systems with which the SoI must interface",
      "The Containing System",
      "3rd Party Influencers outside the environment"
    ],
    correct: 2,
    explanation: "In D.K. Hitchins' framework, the core Yolk is the System-of-Interest, the Sub-systems reside inside the Yolk, the surrounding Egg White maps the Sibling Systems, and the outer Pan is the Containing System."
  },
  {
    topic: "Functional Requirements",
    question: "When defining a system's function, it should be expressed as a solution-neutral statement to foster creativity. Which of the following is an example of a solution-neutral statement?",
    answers: [
      "Microwaving",
      "Telephoning",
      "Trucking",
      "Cargo transporting",
      "Brainstorming"
    ],
    correct: 3,
    explanation: "Solution-neutral syntax clarifies *what* must be done rather than *how*. 'Cargo transporting' is neutral; 'Trucking' prematurely forces the design vector to use physical trucks."
  },
  {
    topic: "Emergent Properties",
    question: "Which of the following statements is TRUE regarding \"Emergent Properties\" in a system?",
    answers: [
      "They are the specific, isolated properties of the individual atomic parts.",
      "They are always completely predictable and desired by the engineers.",
      "They are the consequence of holism and interaction, which only become apparent when the system is placed in different environments.",
      "They remain completely static and unchanging throughout the system's entire \"Cradle to Grave\" lifecycle.",
      "They only exist in Chaotic/Anarchy systems."
    ],
    correct: 2,
    explanation: "Emergent properties stem directly from system holism and component interactions. They cannot be isolated to individual standalone pieces and can change dynamically based on environments."
  },
  {
    topic: "System Taxonomy",
    question: "Which of the following is an example of a true System of Systems (SoS)?",
    answers: [
      "A swarm of 500 light-show drones controlled simultaneously by one central computer.",
      "The human body (e.g., the nervous and digestive systems operating together).",
      "A smartphone loaded with independently managed and operated apps (like WhatsApp and Facebook).",
      "A single passenger jet airplane.",
      "A pile of rocks."
    ],
    correct: 2,
    explanation: "A smartphone with apps is an SoS because the host hardware and individual software apps retain distinct managerial and operational lifecycles. Drones linked to a central controller lack individual managerial independence."
  },
  {
    topic: "Boundary Architecture",
    question: "When defining the system boundary for the NASA Shuttle Radar Topography Mission (SRTM) from the perspective of the Data Collector (NASA), which elements sit INSIDE the primary System-of-Interest boundary?",
    answers: [
      "The Urban Designer (Customer) and their local PC.",
      "The Satellite and the Image Processing System.",
      "The entire Earth's atmosphere.",
      "The 3rd party regulatory influencers only.",
      "The external Data Library network only."
    ],
    correct: 1,
    explanation: "Boundaries shift depending on perspective. For the Data Collector role, the physical scope boundaries encapsulate the Satellite and Image Processing pipelines, while the end Customer is positioned outside."
  },
  {
    topic: "Scope Engineering",
    question: "What is the primary purpose of defining the \"Containing System\" during the Systems Definition phase?",
    answers: [
      "To detail the exact software code used in the system's micro-processors.",
      "To calculate the Expected Time (te) of the project schedule.",
      "To develop an understanding of the overarching environment in which the System-of-Interest and its sibling systems operate.",
      "To identify the internal sub-components of the lowest Work Breakdown Structure (WBS) work package.",
      "To create a chronological project plan."
    ],
    correct: 2,
    explanation: "Mapping the Containing System (the Pan) provides necessary structural exposure to the overarching environmental parameters that govern the System-of-Interest, neutralizing the risks of requirements drift."
  }
];

const EXAM_LEVEL_1_BANK = [
  {
    topic: "Project Definition",
    question: "What is the fundamental definition of a project?",
    answers: [
      "A continuous, repetitive process to produce standard goods.",
      "A temporary endeavor undertaken to create a unique product, service, or result.",
      "The ongoing business-as-usual (BAU) operations of an organization.",
      "A set of processes aimed at maximizing long-term shareholder wealth."
    ],
    correct: 1,
    explanation: "A project is defined by its temporary nature and unique output, distinguishing it from operational continuity."
  },
  {
    topic: "Work Breakdown Structure",
    question: "In the WBS, what is the term used to describe the elements at the very lowest level where costs and schedules can be reliably estimated?",
    answers: ["Control accounts", "WBS deliverables", "Work packages", "Sibling systems"],
    correct: 2,
    explanation: "Work packages are situated at the lowest level of a WBS branch where work can be scheduled, budgeted, and monitored."
  },
  {
    topic: "Systems Engineering",
    question: "According to the International Council on Systems Engineering (INCOSE), Systems Engineering is defined as:",
    answers: [
      "A purely technical discipline focusing solely on software development.",
      "An interdisciplinary approach and means to enable the realization of successful systems.",
      "The process of managing financial budgets for large-scale construction.",
      "A methodical approach for retiring obsolete systems only."
    ],
    correct: 1,
    explanation: "INCOSE treats it as an interdisciplinary path to guide systemic integration successfully."
  },
  {
    topic: "Schedule Crashing",
    question: "If the normal cost to complete an activity is R15 000, and the crash cost to finish it one week earlier is R22 000, what is the cost to crash the activity per week?",
    answers: ["R15 000", "R22 000", "R37 000", "R7 000"],
    correct: 3,
    explanation: "Crash Cost per unit of time = (Crash Cost - Normal Cost) -> R22 000 - R15 000 = R7 000."
  },
  {
    topic: "Systems Architecture",
    question: "In 'The Poached Egg' diagram used for Systems Definition, what does the 'Yolk' represent?",
    answers: ["The Containing System", "The Sibling Systems", "The System-of-Interest (SoI)", "The 3rd Party Influencers"],
    correct: 2,
    explanation: "The interior core Yolk of the Poached Egg abstraction explicitly represents the core System-of-Interest (SoI)."
  },
  {
    topic: "Organizational Design",
    question: "Which organizational structure gives the Project Manager the LEAST amount of formal authority?",
    answers: ["Functional Organization", "Projectized Organization", "Strong Matrix Organization", "Composite Organization"],
    correct: 0,
    explanation: "Functional structures isolate staff within traditional silos; the PM has little to no formal authority and acts more as a coordinator."
  },
  {
    topic: "PERT Statistics",
    question: "When applying the PERT formula for Expected Time (te), which time estimate is given the heaviest weighting?",
    answers: ["Optimistic Time (a)", "Pessimistic Time (b)", "Most Likely Time (m)", "Standard Deviation (sigma)"],
    correct: 2,
    explanation: "The classic PERT formula is (a + 4m + b) / 6. The Most Likely Time (m) carries a heavy 4x mathematical weight."
  },
  {
    topic: "Systems Classification",
    question: "Based on systems classification, a stove-top kettle typically has between 2 and 9 parts and only goes down 1 level of hierarchy. What type of system is this?",
    answers: ["Complicated System", "Complex System", "Chaotic System", "Simple System"],
    correct: 3,
    explanation: "Systems with low component counts, clear boundaries, and minimal hierarchical degradation are classified as Simple Systems."
  },
  {
    topic: "Risk vs Issue",
    question: "What is the key difference between a 'Risk' and an 'Issue'?",
    answers: [
      "An issue has a 100% chance of happening (it has been realized), while a risk has a probability between 0% and 100%.",
      "Risks are only negative, while issues are only positive.",
      "Issues only affect the budget, while risks only affect the schedule.",
      "There is no difference; they are interchangeable terms."
    ],
    correct: 0,
    explanation: "Risks represent future uncertainties; an issue is an active, currently realized project challenge."
  },
  {
    topic: "Resource Leveling",
    question: "Do material resources (like concrete, bricks, or steel) typically need to be leveled during project scheduling?",
    answers: [
      "Yes, they must be levelled to avoid exhausting the supplier.",
      "Yes, they are levelled exactly the same way as human labour.",
      "No, materials generally do not need to be levelled because they stay permanently in the project.",
      "No, materials are only levelled in Agile projects."
    ],
    correct: 2,
    explanation: "Resource leveling targets finite, variable usage rates (like labor or specialized machinery), not physical materials that remain integrated into the build."
  }
];

const EXAM_LEVEL_2_BANK = [
  {
    topic: "System Topology",
    question: "A local construction company is contracted to build a new unique warehouse for R45 million. Using product type and production volume, identify the generic type of manufacturing/service system adopted here.",
    answers: ["Continuous processing", "Line production", "Batch processing", "Project-based system"],
    correct: 3,
    explanation: "High uniqueness combined with a production volume of one establishes it as a project-based execution system."
  },
  {
    topic: "PERT Estimation",
    question: "You are estimating the duration of 'Activity C'. The optimistic time (a) is 6 weeks, the most likely time (m) is 9 weeks, and the pessimistic time (b) is 18 weeks. What is the expected time (te)?",
    answers: ["11 weeks", "10 weeks", "9 weeks", "18 weeks"],
    correct: 1,
    explanation: "Using PERT: (6 + (4 * 9) + 18) / 6 = (6 + 36 + 18) / 6 = 60 / 6 = 10 weeks."
  },
  {
    topic: "Statistical Variance",
    question: "Using the same estimates from Question 12 (a=6, b=18), what is the variance (v) for Activity C?",
    answers: ["4.00", "2.00", "12.00", "36.00"],
    correct: 0,
    explanation: "Variance formula v = ((b - a) / 6)^2. Thus: ((18 - 6) / 6)^2 = (12 / 6)^2 = 2^2 = 4.00."
  },
  {
    topic: "System of Systems",
    question: "According to Maier and De Laurentis, which of the following scenarios truly qualifies as a 'System of Systems' (SoS)?",
    answers: [
      "A single smartphone with various independently managed apps (e.g., WhatsApp, Facebook).",
      "The human body (nervous system, digestive system).",
      "A swarm of 500 light-show drones controlled by one central computer.",
      "A pile of rocks."
    ],
    correct: 0,
    explanation: "The smartphone and independently provisioned apps exhibit operational and managerial independence, key markers of an SoS."
  },
  {
    topic: "Network Floats",
    question: "You are managing a project with an R12 million budget. The critical path is 29 weeks long. Activity E is on a non-critical path that takes a total of 21 weeks to complete. What is the total float (slack) for Activity E?",
    answers: ["0 weeks", "8 weeks", "12 weeks", "29 weeks"],
    correct: 1,
    explanation: "Total Float = Critical Path Length - Non-Critical Path Length. 29 - 21 = 8 weeks."
  },
  {
    topic: "Professional Profiles",
    question: "Which of the following is NOT one of the 4 C's of a successful Project Engineer?",
    answers: ["Collaboration", "Cost-cutting", "Communication", "Creativity"],
    correct: 1,
    explanation: "The core engineering competencies (the 4 C's) are Communication, Collaboration, Creativity, and Critical Thinking."
  },
  {
    topic: "Risk Engineering",
    question: "You identify a risk that expensive technical equipment could be damaged during transit. You decide to purchase specialized transport insurance for R15 000. Which risk response strategy is this?",
    answers: ["Avoidance", "Mitigation", "Transfer", "Assumption/Acceptance"],
    correct: 2,
    explanation: "Purchasing insurance transfers the financial consequences of the risk to a third party."
  },
  {
    topic: "INCOSE Taxonomy",
    question: "According to INCOSE, the possibility that a program will fail to meet scheduled milestones is classified as what specific type of risk?",
    answers: ["Technical Risk", "Cost Risk", "Schedule Risk", "Programmatic Risk"],
    correct: 2,
    explanation: "Risks directly tied to milestone achievement timelines fall under Schedule Risk."
  },
  {
    topic: "Resource Optimization",
    question: "When manually levelling resources on a network diagram, which activities are the primary targets to have their start dates shifted?",
    answers: [
      "Activities with zero float (critical activities).",
      "Activities with the highest cost.",
      "Activities that require no human labour.",
      "Non-critical activities that have float (slack time)."
    ],
    correct: 3,
    explanation: "Shifting activities with positive float allows you to level resource peaks without extending the project end date."
  },
  {
    topic: "Project Volatility",
    question: "A project schedule has a critical path consisting of Activities A, C, and F. Their individual variances are 1.0, 4.0, and 4.0 respectively. What is the standard deviation (sigma) for the overall project?",
    answers: ["9.0", "3.0", "1.0", "81.0"],
    correct: 1,
    explanation: "Total Variance = 1.0 + 4.0 + 4.0 = 9.0. Standard Deviation = sqrt(Variance) = sqrt(9.0) = 3.0."
  }
];

const EXAM_LEVEL_3_BANK = [
  {
    topic: "Probability Calculations",
    question: "You are managing an IT upgrade project with a total budget of R4 500 000. Management states that you will receive a bonus of R500 000 if the project is finished in 35 weeks. The project's expected completion time is 40 weeks, with a standard deviation of 5 weeks. Calculate the Z-score for finishing in 35 weeks.",
    answers: ["Z = 1.0", "Z = -1.0", "Z = 0.5", "Z = -5.0"],
    correct: 1,
    explanation: "Z-score = (Target Time - Mean Time) / Standard Deviation -> (35 - 40) / 5 = -5 / 5 = -1.0."
  },
  {
    topic: "Applied Probability",
    question: "Based on the Z-score calculated in Question 21 (Z = -1.0), approximately what is the probability of earning the R500 000 bonus? (Note: A Z-score of -1.0 corresponds to roughly 15.9%)",
    answers: ["84.1%", "50.0%", "15.9%", "0.0%"],
    correct: 2,
    explanation: "A Z-score of -1.0 corresponds to a probability of approximately 15.9% for completing the work within that shortened timeframe."
  },
  {
    topic: "Economic Optimizations",
    question: "The total normal cost of your project is R61 600 000. You need to crash the project by 1 week to avoid an R3 000 000 late penalty. Activity B is on the critical path and can be crashed by 1 week for an additional cost of R1 000 000. Activity D is NOT on the critical path and can be crashed for R500 000. What is the most cost-effective decision?",
    answers: [
      "Crash Activity D because it is cheaper (R500 000).",
      "Crash Activity B for R1 000 000 because only crashing critical path activities shortens the project duration.",
      "Crash neither and pay the R3 000 000 penalty.",
      "Crash both for a total of R1 500 000."
    ],
    correct: 1,
    explanation: "Crashing activities off the critical path does not reduce the project duration. You must crash Activity B for R1 000 000 to save the R3 000 000 penalty, netting an optimization of R2 000 000."
  },
  {
    topic: "Cost Engineering",
    question: "Assume a Project Engineer costs the company R1 500 per hour. She manages two sites 100 km apart. Travel costs R5.00 per km. She spends 4 hours at Site A and 4 hours at Site B in one day (8 hours total work, plus 2 hours of driving). Overtime is paid at 1.5x normal rate. What is her total cost to the company for this day?",
    answers: ["R12 000", "R17 000", "R15 000", "R17 500"],
    correct: 1,
    explanation: "Normal pay: 8 hrs * R1 500 = R12 000. Overtime driving: 2 hrs * (R1 500 * 1.5) = R4 500. Travel cost: 100 km * R5.00/km = R500. Total = R12 000 + R4 500 + R500 = R17 000."
  },
  {
    topic: "Trade-off Logic",
    question: "Continuing from the previous scenario: If hiring a second engineer to stay permanently at Site B costs R12 000 per day (8 hours at R1 500/hr), is it cheaper to have the single engineer travel between sites, or to hire the second engineer?",
    answers: [
      "It is cheaper to have the single engineer travel (Cost: R17 000 vs R24 000 for two engineers).",
      "It is cheaper to hire the second engineer.",
      "The costs are exactly the same.",
      "Cannot be determined without a WBS."
    ],
    correct: 0,
    explanation: "One traveling engineer costs R17 000/day. Two stationary engineers would cost R12 000 + R12 000 = R24 000/day. Traveling remains the more cost-effective choice."
  },
  {
    topic: "Silo Capacity Tracking",
    question: "In week 4 of a project, Activities B, C, and D run simultaneously. Activity B requires 6 workers, C requires 12 workers, and D requires 8 workers. Your company limits sites to 20 workers for safety. By how many workers are you exceeding the limit?",
    answers: ["You are not exceeding the limit.", "6 workers", "26 workers", "2 workers"],
    correct: 1,
    explanation: "Total headcount allocation = 6 + 12 + 8 = 26 workers. Limit = 20. Over-allocation = 6 workers."
  },
  {
    topic: "Conflict Mitigation",
    question: "To fix the resource violation in the previous scenario, you look at your schedule. Activity B has 0 float. Activity C has 0 float. Activity D has 8 weeks of float. Which action should you take to level the resources without delaying the project?",
    answers: [
      "Shift Activity B's start date forward.",
      "Shift Activity C's start date forward.",
      "Shift Activity D's start date forward until B or C is finished.",
      "Fire 6 workers."
    ],
    correct: 2,
    explanation: "Activity D has 8 weeks of float, meaning its start date can be shifted without delaying the project completion date."
  },
  {
    topic: "Boundary Demarcations",
    question: "You are working on the NASA Shuttle Radar Topography Mission (SRTM). From the perspective of the ultimate customer (an urban designer), where is the system boundary drawn using the 'Poached Egg' framework?",
    answers: [
      "Around the Satellite and the Image Processing System only.",
      "Around the urban designer, their personal computer, and the Data Library they pull from.",
      "Around the entire NASA organization.",
      "Around the sun and the Earth."
    ],
    correct: 1,
    explanation: "The system boundary shifts based on user perspective. For an urban designer, the system includes their local tools and accessible data interfaces."
  },
  {
    topic: "Compression Methodologies",
    question: "A manufacturing plant in KZN is given 16 weeks to install an R15 000 000 air pollution control system or face closure. The critical path takes 18 weeks. Management asks you to find the least expensive way to shorten the project by 2 weeks. This process is called:",
    answers: ["Resource Levelling", "Fast-Tracking", "Project Crashing", "Scope Creep"],
    correct: 2,
    explanation: "Project Crashing refers to adding resources to critical path activities to shorten the duration for the lowest incremental cost."
  },
  {
    topic: "Emergent Properties",
    question: "Which of the following best demonstrates the concept of 'Emergent Properties' in Systems Engineering?",
    answers: [
      "A single car tire costs R2 500.",
      "A car engine produces heat.",
      "A steering wheel, engine, chassis, and tires are integrated, resulting in a vehicle capable of transporting a family at 120 km/h.",
      "A project manager creating a Gantt chart."
    ],
    correct: 2,
    explanation: "Emergent properties are system-level capabilities that arise from the integration of components, which no single component can achieve on its own."
  }
];

// Helper to seed-shuffle an array so EVERY player gets the exact same random order
function seedShuffleArray(array, seedString) {
  let tempArray = [...array];
  let seed = 0;
  
  for (let i = 0; i < seedString.length; i++) {
    seed += seedString.charCodeAt(i);
  }

  for (let i = tempArray.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    let rnd = seed / 233280;
    let j = Math.floor(rnd * (i + 1));
    
    let temp = tempArray[i];
    tempArray[i] = tempArray[j];
    tempArray[j] = temp;
  }
  return tempArray;
}

function getSelectedLobbyDataset(mode, tier, lobbyNodeName = "default_lobby") {
  let baseQuestions = [];
  if (mode === "study") baseQuestions = [...STUDY_CONCEPTS_BANK];
  else if (tier === "level2") baseQuestions = [...EXAM_LEVEL_2_BANK];
  else if (tier === "level3") baseQuestions = [...EXAM_LEVEL_3_BANK];
  else baseQuestions = [...EXAM_LEVEL_1_BANK];

  return seedShuffleArray(baseQuestions, lobbyNodeName);
}
