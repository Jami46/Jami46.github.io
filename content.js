window.PORTFOLIO = {
  email: "karthikjami.jk@gmail.com",

  rotatingPhrases: [
    "fragile workflows",
    "manual qualification runs",
    "hard-to-debug failures",
    "repetitive setup",
    "review friction",
    "cross-layer complexity"
  ],

  metrics: [
    { value: "180+", label: "regulated scenarios automated / validated" },
    { value: "30+", label: "CI-triggered release cycles supported" },
    { value: "20+", label: "setup dependencies automated" },
    { value: "<24h", label: "defect isolation improved from multi-day cycles" }
  ],

  work: [
    {
      icon: "⌘",
      title: "Qualification execution tooling",
      text: "Built a reusable local execution platform with selective runs, ranges, retries, per-run configuration, parallel execution, port-safety checks, and consolidated reporting.",
      tags: ["Node.js", "JavaScript", "Python", "Workflow orchestration"]
    },
    {
      icon: "◫",
      title: "Device simulation workflows",
      text: "Improved simulator-driven workflows used to exercise device behavior, mobile integration, backend telemetry, and multi-environment validation.",
      tags: ["Simulators", "Integration", "Device systems", "Backend"]
    },
    {
      icon: "↻",
      title: "Qualification evidence automation",
      text: "Automated large qualification-protocol sets and structured evidence generation to make execution and validation more repeatable.",
      tags: ["Automation", "Reporting", "Validation", "Python"]
    },
    {
      icon: "⚙",
      title: "Developer environment setup",
      text: "Automated architecture, VPN, Node/NVM, Python, dependency, installation fallback, and simulator checks across a complex engineering setup.",
      tags: ["Shell", "Node.js", "Python", "Developer experience"]
    },
    {
      icon: "⌁",
      title: "Cross-layer root-cause analysis",
      text: "Investigated failures spanning process exits, runtime state, logs, APIs, telemetry, mobile behavior, simulator state, and backend systems.",
      tags: ["Debugging", "Telemetry", "Logs", "Backend verification"]
    },
    {
      icon: "{ }",
      title: "Custom ESLint guardrails",
      text: "Implemented project-specific lint rules for structural nesting, naming patterns, metadata conventions, and engineering quality checks.",
      tags: ["ESLint", "JavaScript", "Static analysis", "Developer tooling"]
    },
    {
      icon: "⬢",
      title: "Containerized simulator delivery",
      text: "Updated simulator build and hosting flows around Docker so newer components could be rebuilt and surfaced consistently across environments.",
      tags: ["Docker", "Delivery", "CI/CD", "Tooling"]
    },
    {
      icon: "⇄",
      title: "Dependency & package analysis",
      text: "Analyzed Node.js dependency and package upgrades across multiple repositories, identifying compatibility risk and upgrade paths before rollout.",
      tags: ["Node.js", "Dependencies", "Multi-repo", "Risk analysis"]
    },
    {
      icon: "✓",
      title: "Automated reporting & evidence",
      text: "Built and improved automated reporting workflows that turn execution output into traceable, reproducible engineering evidence.",
      tags: ["Reporting", "Automation", "Traceability", "Quality systems"]
    },
    {
      icon: "API",
      title: "Backend & API verification",
      text: "Validated API responses, backend services, SQL state, and telemetry consistency while debugging end-to-end system behavior.",
      tags: ["REST", "SQL", "Backend", "Data integrity"]
    },
    {
      icon: "▣",
      title: "Mobile + device integration",
      text: "Automated iOS/Android workflows involving authentication, device pairing, telemetry synchronization, and firmware compatibility across regulated releases.",
      tags: ["Appium", "iOS", "Android", "Device integration"]
    },
    {
      icon: "CI",
      title: "Regression infrastructure",
      text: "Expanded and stabilized CI-triggered regression across mobile, API, logging, and distributed validation workflows.",
      tags: ["CI/CD", "Regression", "Jenkins", "GitHub Actions"]
    }
  ],

  cases: [
    {
      id: "qualification-platform",
      number: "01",
      title: "Qualification Protocol Execution Platform",
      subtitle: "Turning a repetitive local qualification process into a configurable engineering tool.",
      problem: "Qualification workflows required repeated setup, selective execution, reruns, evidence collection, and careful environment handling. Manual coordination increased friction and made repeated runs harder to standardize.",
      approach: [
        "Created configurable QP list and range execution instead of hard-coded runs.",
        "Added automatic retry behavior and optional GUI control.",
        "Used per-protocol YAML configuration to keep execution behavior explicit.",
        "Supported parallel execution while preventing known local port conflicts.",
        "Consolidated run outcomes into a single report for easier review."
      ],
      result: "The workflow became a repeatable execution platform instead of a collection of manual steps, making local qualification runs easier to orchestrate, rerun, inspect, and report.",
      stack: ["JavaScript", "Node.js", "Python", "YAML", "Parallel execution", "Reporting"]
    },
    {
      id: "protocol-automation",
      number: "02",
      title: "Large-Scale Protocol Automation",
      subtitle: "Automating dozens of regulated validation flows while preserving structured evidence.",
      problem: "A large qualification set needed repeatable local execution and evidence generation under environment constraints that prevented a simple remote/partner execution path.",
      approach: [
        "Structured local automation around the existing qualification flows.",
        "Automated evidence generation across roughly 50+ protocols.",
        "Designed the output so protocol evidence could be reviewed consistently.",
        "Worked within partner/environment constraints rather than bypassing them.",
        "Prepared the automation for integration into the broader qualification workflow."
      ],
      result: "Reduced repetitive evidence work and created a more consistent way to execute and document a large protocol set.",
      stack: ["Python", "JavaScript", "Document generation", "Qualification workflows", "Validation evidence"]
    },
    {
      id: "developer-setup",
      number: "03",
      title: "Developer Setup Automation",
      subtitle: "Making a dependency-heavy simulator environment easier to install and validate.",
      problem: "Getting the engineering environment ready required numerous prerequisites, runtime versions, connectivity checks, package installs, and simulator-specific setup steps.",
      approach: [
        "Added architecture and connectivity pre-flight checks.",
        "Validated Node, NVM, Python, and other required runtimes.",
        "Automated 20+ dependency/setup steps.",
        "Added installation fallbacks when the preferred package path failed.",
        "Verified the simulator state at the end instead of assuming setup succeeded."
      ],
      result: "Turned an error-prone onboarding process into a repeatable setup flow with explicit validation and clearer failure points.",
      stack: ["Shell", "Node.js", "Python", "NVM", "npm", "Environment validation"]
    },
    {
      id: "failure-analysis",
      number: "04",
      title: "Cross-Layer Failure Analysis",
      subtitle: "Following a missing-summary failure across process exits, logs, runtime behavior, and reporting.",
      problem: "An execution path could terminate without producing the expected summary, with different exit conditions producing inconsistent symptoms.",
      approach: [
        "Compared behavior across successful and abnormal process exits.",
        "Traced the flow through handlers, runtime state, partial output, and reporting.",
        "Identified redundant process-handling behavior that obscured the real outcome.",
        "Used telemetry and log evidence to separate symptom from root cause.",
        "Clarified exit-code behavior so downstream reporting could reason about failures correctly."
      ],
      result: "Improved diagnosis of the missing-output condition and simplified process-exit handling so failures were easier to interpret.",
      stack: ["Node.js", "Process handling", "Logs", "Telemetry", "Root-cause analysis"]
    }
  ],

  ai: [
    {
      title: "Reviewer Agent",
      text: "Customized review behavior and instructions to analyze changes against repository conventions, catch risky patterns, and help draft technically grounded PR feedback."
    },
    {
      title: "Repository Mapping",
      text: "Use agents to map unfamiliar repositories: entry points, important modules, execution paths, dependencies, call relationships, and likely change surfaces."
    },
    {
      title: "Debugging Copilot",
      text: "Use Copilot to accelerate hypothesis generation, log interpretation, code-path exploration, and targeted searches—then verify conclusions against the actual runtime and tests."
    },
    {
      title: "Developer Tool Prototyping",
      text: "Use Copilot CLI, agents, and LLMs to accelerate scaffolding and repetitive implementation while keeping architecture, validation, and final engineering judgment human-controlled."
    }
  ],

  github: [
    {
      title: "Delicious Desserts",
      url: "https://github.com/Jami46/BrowseRecipes_xcodeAPP",
      stack: "Swift • SwiftUI • async/await • REST API",
      text: "Native iOS recipe browser backed by TheMealDB API, with list/detail navigation, asynchronous network calls, and dedicated test targets.",
      accent: "iOS"
    },
    {
      title: "TCP Chat",
      url: "https://github.com/Jami46/TCP-Chat",
      stack: "C • TCP/IP • Client/Server • Make",
      text: "A small systems project implementing TCP socket communication with a server-client architecture and command-line messaging.",
      accent: "Systems"
    },
    {
      title: "Car Recognition",
      url: "https://github.com/Jami46/CarRekognization",
      stack: "Java • AWS EC2 • Maven",
      text: "Cloud-hosted image-recognition workflow that processes car images and produces recognition output with confidence levels.",
      accent: "Cloud"
    },
    {
      title: "Wine ML Application",
      url: "https://github.com/Jami46/Wineapplication",
      stack: "Python • Docker • ML",
      text: "Python machine-learning project packaged with Docker, with separate training and prediction workflows and versioned datasets.",
      accent: "ML"
    },
    {
      title: "Predict Future Sales",
      url: "https://github.com/Jami46/PredictFutureSales",
      stack: "Python • Jupyter • Kaggle",
      text: "Machine-learning exploration focused on predicting future sales from a Kaggle dataset using a notebook-based workflow.",
      accent: "Data"
    },
    {
      title: "Line-Following Robot",
      url: "https://github.com/Jami46/Line-Following-Robot",
      stack: "C • Arduino • Sensors • Feedback loop",
      text: "Microcontroller project that reads infrared sensors and adjusts motor behavior through a feedback loop to follow a line.",
      accent: "Embedded"
    }
  ],

  engagements: [
    {
      client: "Tandem Diabetes Care",
      role: "Software Tools Engineer",
      period: "Nov 2025 — Present",
      text: "Build software tooling, qualification automation, simulator workflows, environment utilities, telemetry analysis, backend verification, and cross-layer debugging for device-integrated healthcare software.",
      tags: ["Node.js", "JavaScript", "Python", "Docker", "Telemetry", "Developer Tools"]
    },
    {
      client: "Signet Jewelers",
      role: "Senior Automation Test Engineer",
      period: "Jul 2025 — Nov 2025",
      text: "Worked across UI/API automation, parallel execution, CI-integrated regression, SQL validation, framework optimization, and high-volume retail workflows.",
      tags: ["Selenium", "TestNG", "REST", "SQL", "Jenkins"]
    },
    {
      client: "Tandem Diabetes Care",
      role: "Automation Test Engineer",
      period: "Sep 2024 — Jul 2025",
      text: "Automated iOS/Android workflows integrated with medical-device hardware, backend services, APIs, telemetry, and firmware across regulated releases.",
      tags: ["Appium", "iOS", "Android", "APIs", "Device Integration"]
    }
  ],

  earlierExperience: [
    {
      role: "Software Analyst",
      company: "Capgemini",
      period: "Jul 2021 — Aug 2022",
      text: "Built Selenium/POM automation, validated APIs and relational data, and supported CI-driven regression across enterprise e-commerce systems."
    },
    {
      role: "Quality Analyst",
      company: "JSS Foods",
      period: "Jun 2020 — Jun 2021",
      text: "Created system/integration coverage, introduced Selenium automation, validated APIs, and supported AWS-hosted test environments."
    }
  ],

  skills: [
    { name: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "Swift", "SQL", "Shell", "C"] },
    { name: "Software & Tooling", items: ["Node.js", "REST APIs", "Developer Tools", "Static Analysis", "Process Automation", "Backend Verification"] },
    { name: "Automation", items: ["Appium", "Selenium", "WebdriverIO", "PyTest", "TestNG", "Mocha / Chai", "XCTest / XCUITest"] },
    { name: "Platforms", items: ["iOS", "Android", "macOS", "Windows", "Linux", "Simulators", "Emulators"] },
    { name: "Delivery & Cloud", items: ["Docker", "AWS EC2", "AWS S3", "GitHub Actions", "Jenkins", "Bitbucket", "Bamboo"] },
    { name: "AI Engineering", items: ["GitHub Copilot CLI", "Custom Agents", "Reviewer Workflows", "Repo Mapping", "LLM-assisted Debugging", "OpenAI / Claude"] }
  ]
};
