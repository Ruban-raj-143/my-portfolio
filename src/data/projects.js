export const projectsData = [
  {
    id: "pickguard-ai",
    number: "01",
    title: "PickGuard AI",
    category: "AI / LLM / Agentic AI",
    badge: "CAPSTONE",
    isFeatured: true,
    featuredType: "hero",
    description:
      "An AI-powered Pick Centre Operator Assistant designed to help fulfilment-centre operators resolve pick exceptions using contextual operational information, SOP knowledge and human-in-the-loop decision making.",
    problem:
      "Fulfilment centre operators frequently face complex picking exceptions and logistics bottlenecks without immediate contextual guidance, resulting in delays, inventory discrepancies, and operational downtime.",
    solution:
      "An agentic AI assistant integrating LangGraph workflows, SOP document retrieval via RAG, and structured human-in-the-loop validation to deliver accurate, policy-compliant exception resolutions.",
    technologies: [
      "LangGraph",
      "LangChain",
      "LLM",
      "RAG",
      "Python",
      "FastAPI",
      "Human-in-the-loop",
    ],
    github: "https://github.com/Ruban-raj-143/PICKGURD-AI",
    filters: ["all", "ai"],
    visualType: "agent-workflow",
  },
  {
    id: "nila-arumbu",
    number: "02",
    title: "Nila Arumbu",
    category: "AI / Decision Support",
    badge: "FEATURED",
    isFeatured: true,
    featuredType: "split",
    description:
      "An integrated early-childhood decision-support platform designed to identify risks, support child development monitoring and manage referral workflows.",
    problem:
      "Early childhood developmental screening and intervention tracking often suffer from fragmented records, delayed risk identification, and lack of automated referral routing.",
    solution:
      "An integrated AI-driven decision-support platform providing continuous developmental tracking, risk stratification engines, and automated referral management workflows.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AI",
      "Risk Engine",
    ],
    github: "https://github.com/Ruban-raj-143/nila-arumbu",
    filters: ["all", "ai", "enterprise"],
    visualType: "child-risk",
  },
  {
    id: "enterprisesync-ai",
    number: "03",
    title: "EnterpriseSync AI",
    category: "Enterprise AI",
    badge: null,
    isFeatured: true,
    featuredType: "split",
    description:
      "An AI-powered enterprise management platform for projects, employees, departments, assets and tasks, with AI-driven project risk prediction and analytics.",
    problem:
      "Enterprises struggle to monitor cross-departmental project dependencies, allocate assets efficiently, and foresee project delivery risks ahead of deadlines.",
    solution:
      "A centralized management dashboard combining role-based access control, machine learning project risk predictions, and departmental asset analytics into a unified interface.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Machine Learning",
      "RBAC",
      "Analytics",
    ],
    github: "https://github.com/Ruban-raj-143/EnterpriseSync_AI",
    filters: ["all", "ai", "enterprise"],
    visualType: "enterprise-sync",
  },
  {
    id: "jml-access-engine",
    number: "04",
    title: "JML Access Engine",
    category: "Identity & Access Management",
    badge: null,
    isFeatured: false,
    description:
      "An intelligent Joiner-Mover-Leaver access management solution focused on automating employee access lifecycle workflows and improving enterprise identity governance.",
    problem:
      "Manual employee onboarding, department transitions, and offboarding lead to security vulnerabilities, orphaned accounts, and audit non-compliance.",
    solution:
      "An automated access lifecycle engine enforcing role-based permissions, automated provisioning/de-provisioning, and strict enterprise identity governance rules.",
    technologies: [
      "Python",
      "AI",
      "IAM",
      "RBAC",
      "Automation",
      "Access Governance",
    ],
    github: "https://github.com/Ruban-raj-143/JML-Access-engine",
    filters: ["all", "ai", "enterprise", "security"],
    visualType: "iam-governance",
  },
  {
    id: "trending-content-prediction",
    number: "05",
    title: "Trending Content Prediction",
    category: "Machine Learning",
    badge: null,
    isFeatured: false,
    description:
      "A machine-learning project focused on predicting content trends and identifying patterns that can help understand content performance.",
    problem:
      "Digital creators and publishers lack proactive indicators to forecast content virality, engagement velocity, and optimal release patterns from historical data.",
    solution:
      "A predictive machine learning pipeline that extracts engagement signals, processes trend matrices, and models content trajectory performance.",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Prediction",
    ],
    github: "https://github.com/Ruban-raj-143/Trending_Content_Prediction",
    filters: ["all", "data"],
    visualType: "trend-graph",
  },
  {
    id: "cis-audit",
    number: "06",
    title: "CIS Audit",
    category: "Cybersecurity / Compliance",
    badge: null,
    isFeatured: false,
    description:
      "A security auditing project focused on evaluating systems against CIS security controls and identifying configuration and compliance gaps.",
    problem:
      "Complex IT environments often drift from industry hardening standards without continuous, programmatic verification against established cybersecurity benchmarks.",
    solution:
      "An automated security audit scanner that benchmarks system configurations against Center for Internet Security (CIS) controls and highlights remediation priorities.",
    technologies: [
      "Cybersecurity",
      "CIS Controls",
      "Security Audit",
      "Python",
      "Compliance",
    ],
    github: "https://github.com/Ruban-raj-143/CIS-Audit",
    filters: ["all", "security"],
    visualType: "security-audit",
  },
  {
    id: "ecommerce-analytics",
    number: "07",
    title: "E-Commerce Analytics",
    category: "Data Analytics / Machine Learning",
    badge: null,
    isFeatured: false,
    description:
      "An e-commerce analytics project covering data preparation, exploratory analysis, customer segmentation and machine-learning based analysis.",
    problem:
      "Raw transactional records fail to explain purchasing dynamics, customer retention trends, or distinct consumer behavior groups without structured modeling.",
    solution:
      "An end-to-end data analytics suite performing data cleaning, exploratory data analysis, behavioral customer segmentation, and visual KPI tracking.",
    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "Machine Learning",
      "Power BI",
      "Data Analytics",
    ],
    github: "https://github.com/Ruban-raj-143/project_E-commerce",
    filters: ["all", "data"],
    visualType: "ecommerce-data",
  },
];

export const projectFilterTabs = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "data", label: "Data" },
  { id: "enterprise", label: "Enterprise" },
  { id: "security", label: "Security" },
];
