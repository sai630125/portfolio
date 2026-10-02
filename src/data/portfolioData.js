export const portfolioData = {
  personal: {
    name: "Teluri Sai Krishna Reddy",
    initials: "SK",
    role: "Senior Software Engineer",
    titleHero: "Building scalable products with React, Java & Spring Boot.",
    availability: "AVAILABLE FOR WORK: FULL-TIME / CONTRACT",
    experienceYears: "4.6",
    email: "saikrishnareddyteluri@gmail.com",
    phone: "+91 6301252929",
    location: "Pune, India",
    linkedinUrl: "https://www.linkedin.com/in/teluri-saikrishna-reddy-9aa348161/",
    linkedinHandle: "teluri-saikrishna-reddy-9aa348161",
    summary: "Results-driven Senior Software Engineer with 4.6 years of experience designing and scaling full-stack web applications using React.js and Spring Boot, Microservices and MSSQL. Proven track record in building responsive UIs, developing secure RESTful APIs, and optimizing database performance for enterprise-level Facilities Management systems.",
    languages: ["English", "Hindi", "Telugu"]
  },

  metrics: [
    { value: "4.6", unit: "Yrs", label: "Years Experience", description: "Full-Stack Web Apps with React & Spring Boot", highlight: "Senior Role" },
    { value: "70%", unit: "", label: "Workflow Efficiency", description: "Room, Asset, Resource & SLA Management modules", highlight: "Proven Impact" },
    { value: "50%", unit: "", label: "Faster Data Retrieval", description: "Engineered high-efficiency Java RESTful APIs", highlight: "API Speed" },
    { value: "70%", unit: "", label: "Query Optimization", description: "MSSQL / SQL Server execution time cut", highlight: "DB Performance" },
    { value: "25%", unit: "", label: "Faster App Rendering", description: "Redux state optimization & API payload reduction", highlight: "Render Speed" }
  ],

  about: {
    headline: "Engineering with a product mindset.",
    subheadline: "Specializing in React.js, Spring Boot, Microservices, and MSSQL for enterprise-scale Facilities Management systems.",
    introP1: "I am Teluri Sai Krishna Reddy, a results-driven Senior Software Engineer with 4.6 years of hands-on experience designing and scaling full-stack web applications using React.js, Spring Boot, Microservices, and Microsoft SQL Server (MSSQL).",
    introP2: "My core expertise lies in building responsive, component-based user interfaces with Redux Toolkit and Prime React, developing secure RESTful APIs with Spring Security and Spring Data JPA, and optimizing relational databases for enterprise Facilities Management systems.",
    introP3: "Currently at Crestere Technologies LLP, I architect and maintain high-traffic web applications delivering seamless user experiences for thousands of daily active users, consistently accelerating feature velocity and slashing query times.",
    competencies: [
      { id: "c1", title: "React.js & Redux Toolkit", desc: "Modular, reusable component architecture, Prime React & state optimization" },
      { id: "c2", title: "Spring Boot Microservices", desc: "Secure RESTful APIs, Spring Security, Spring Data JPA & Hibernate" },
      { id: "c3", title: "MSSQL & Query Optimization", desc: "Stored procedures, schema design, index tuning cutting runtime by 70%" },
      { id: "c4", title: "Facilities Management Systems", desc: "Room Booking, Asset Booking, Resource Booking & SLA Management" }
    ],
    telemetry: {
      workflow: { title: "User Workflow Efficiency", value: "70% improvement across FM modules", percent: 70 },
      apiLatency: { title: "Data Retrieval Time", value: "50% reduction via Spring Boot REST APIs", percent: 50 },
      devEffort: { title: "Feature Development Time", value: "70% decrease via reusable UI components", percent: 70 },
      renderSpeed: { title: "Application Rendering Speed", value: "25% speedup via Redux state tuning", percent: 25 }
    }
  },

  experience: {
    role: "Senior Software Engineer",
    company: "Crestere Technologies LLP",
    period: "April 2022 - Present",
    location: "Pune, India",
    type: "Full-Time // Senior Full-Stack Engineering",
    metrics: [
      { value: "70% Boost", label: "User Workflow Efficiency" },
      { value: "50% Faster", label: "API Data Retrieval Times" },
      { value: "70% Less", label: "Feature Development Effort" }
    ],
    bullets: [
      "Architected and maintained high-traffic web applications leveraging React.js, Redux Toolkit, Prime React, and Spring Boot, Microservices to deliver seamless user experiences for thousands of daily active users.",
      "Developed responsive interfaces for Facilities Management modules (Room Booking, Asset Booking, Resource Booking, SLA Management), improving user workflow efficiency by 70%.",
      "Engineered and integrated RESTful APIs using Java and Spring Boot, reducing data retrieval times by 50% for efficient frontend-backend communication.",
      "Implemented state management using Redux Toolkit and developed reusable, modular React.js components, decreasing development time for new features by 70%.",
      "Contributed to UI style guides and reusable component libraries, ensuring consistent design and reducing development effort across multiple applications.",
      "Improved application rendering speed by 25% through debugging, Redux state optimization, and API payload reduction."
    ]
  },

  projects: [
    {
      id: "archibus-workplace",
      badge: "FACILITIES MANAGEMENT // REACT.JS & SPRING BOOT",
      title: "Archibus Workplace",
      description: "A web-based Workplace and Facilities Management application developed using React.js (Frontend) and Java/Spring Boot (Backend) to manage service requests, work orders, room bookings, and enterprise assets.",
      problem: "Coordinating multi-tier service requests, asset reservations, and work orders while maintaining real-time status synchronization and low query latencies across enterprise datasets.",
      outcomes: [
        "Built responsive, reusable UI components and implemented application state management using Redux Toolkit.",
        "Developed secure RESTful APIs for frontend-backend communication and implemented business logic and validations on the backend.",
        "Designed and optimized database queries using SQL Server (MSSQL), resulting in a 70% improvement in query execution time.",
        "Collaborated with cross-functional teams using Git, JIRA, and Agile methodologies."
      ],
      tags: ["React.js", "Java", "Spring Boot", "Redux Toolkit", "SQL Server (MSSQL)", "REST APIs", "Git", "JIRA", "Agile"],
      type: "workplace"
    },
    {
      id: "a4n-ops",
      badge: "PROGRESSIVE WEB APP // OFFLINE-FIRST PWA",
      title: "A4N-Ops (React PWA)",
      description: "A Progressive Web Application (PWA) engineered with React.js for field technicians to manage work requests, log service issues, and complete preventive maintenance activities directly on mobile devices.",
      problem: "Field technicians operating in basements and remote facility zones frequently lose cellular connectivity, requiring seamless offline operation and reliable background syncing.",
      outcomes: [
        "Implemented offline-first functionality using IndexedDB, enabling 100% offline access to work requests with reliable data synchronization upon reconnection.",
        "Built reusable React.js components and integrated RESTful API services to improve application maintainability and enhance user experience for field staff.",
        "Designed clean service-worker caching strategies ensuring zero data loss during network disruptions."
      ],
      tags: ["React.js", "PWA", "IndexedDB", "Offline-First", "RESTful APIs", "Service Workers", "Mobile Web"],
      type: "pwa"
    },
    {
      id: "facilities-management-service",
      badge: "ENTERPRISE WORKSPACE // REACT.JS & SPRING BOOT",
      title: "Facilities Management Service",
      description: "A responsive facilities management application using React.js, Spring Boot, and REST APIs to streamline workspace bookings, asset allocations, and dynamic technician assignment.",
      problem: "Dynamic technician workload allocation and automated SLA tracking for concurrent room and facility resource reservations.",
      outcomes: [
        "Streamlined workspace bookings and automated dynamic technician assignment based on proximity and skill availability.",
        "Developed modular React components paired with secure Spring Boot backend endpoints.",
        "Integrated SLA management tracking with automated escalation notifications."
      ],
      tags: ["React.js", "Spring Boot", "REST APIs", "MSSQL", "Technician Assignment", "Workspace Bookings", "SLA Management"],
      type: "fm"
    }
  ],

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        badge: "Client Layer",
        items: [
          { name: "React.js", level: "Expert", desc: "Hooks, component lifecycle, virtual DOM" },
          { name: "Redux Toolkit", level: "Expert", desc: "Slice architecture, global state management" },
          { name: "JavaScript (ES6+)", level: "Expert", desc: "Async/await, closures, modern ES features" },
          { name: "HTML5 & CSS3", level: "Expert", desc: "Semantic markup, flexbox, CSS grid" },
          { name: "Prime React", level: "Expert", desc: "Enterprise UI component library" },
          { name: "Material-UI (MUI)", level: "Advanced", desc: "Theme customization, responsive layouts" },
          { name: "React Router", level: "Expert", desc: "Client-side routing, route guards" },
          { name: "React Native", level: "Proficient", desc: "Cross-platform mobile interfaces" },
          { name: "Bootstrap", level: "Advanced", desc: "Rapid grid systems & components" },
          { name: "Component-Based Architecture", level: "Expert", desc: "Reusable, modular UI libraries" },
          { name: "Responsive Web Design", level: "Expert", desc: "Mobile-first, cross-browser compatibility" },
          { name: "Webpack & NPM", level: "Advanced", desc: "Module bundling, build scripts & packages" }
        ]
      },
      {
        id: "backend",
        name: "Backend Development",
        badge: "Server Layer",
        items: [
          { name: "Java 8 / 11", level: "Expert", desc: "OOP, collections framework, streams API" },
          { name: "Spring Boot", level: "Expert", desc: "Auto-configuration, Spring Web, Actuator" },
          { name: "Microservices", level: "Expert", desc: "Decoupled domain services, REST contracts" },
          { name: "RESTful APIs", level: "Expert", desc: "Clean endpoints, status codes, JSON payload" },
          { name: "Spring Framework & MVC", level: "Expert", desc: "IoC container, dependency injection, controllers" },
          { name: "Spring Data JPA & Hibernate", level: "Expert", desc: "ORM, entity mappings, repository pattern" },
          { name: "Spring Security & Authorization", level: "Advanced", desc: "Authentication, role-based authorization, JWT" },
          { name: "API Integration & Business Logic", level: "Expert", desc: "Robust domain logic, validation & mapping" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Persistence",
        badge: "Data Layer",
        items: [
          { name: "Microsoft SQL Server (MSSQL)", level: "Expert", desc: "Enterprise relational database management" },
          { name: "Query Optimization", level: "Expert", desc: "70% execution time improvement via index tuning" },
          { name: "Stored Procedures", level: "Expert", desc: "T-SQL business logic routines & automation" },
          { name: "Database Design", level: "Advanced", desc: "Normalization, ER modeling, foreign keys" },
          { name: "MySQL", level: "Advanced", desc: "Relational queries, transactions, schema setup" },
          { name: "SQL", level: "Expert", desc: "Complex joins, aggregations, window functions" }
        ]
      },
      {
        id: "fullstack",
        name: "Full Stack Integration",
        badge: "System Layer",
        items: [
          { name: "React.js + Spring Boot", level: "Expert", desc: "Seamless end-to-end full stack architecture" },
          { name: "Frontend-Backend Integration", level: "Expert", desc: "REST client communication & error handling" },
          { name: "State Management", level: "Expert", desc: "Redux Toolkit central store & caching" },
          { name: "Authentication & Authorization", level: "Advanced", desc: "Role-based access control (RBAC)" },
          { name: "API Payload Reduction", level: "Expert", desc: "25% render speedup via optimized JSON models" }
        ]
      },
      {
        id: "devops-tools",
        name: "DevOps & Development Tools",
        badge: "Tooling",
        items: [
          { name: "Git & GitHub", level: "Expert", desc: "Branching workflows, PR reviews, versioning" },
          { name: "Bitbucket & Tortoise Git", level: "Advanced", desc: "Enterprise repositories & GUI workflows" },
          { name: "JIRA", level: "Expert", desc: "Agile sprints, backlog management & bug tracking" },
          { name: "Postman", level: "Expert", desc: "API endpoint testing, mocks & environments" },
          { name: "Apache Tomcat", level: "Advanced", desc: "Java servlet deployment & configuration" },
          { name: "NPM & Webpack", level: "Advanced", desc: "Package management & build optimizations" }
        ]
      },
      {
        id: "ai-practices",
        name: "AI-Assisted Dev & Best Practices",
        badge: "Engineering Rigor",
        items: [
          { name: "Antigravity AI IDE", level: "Expert", desc: "Next-gen agentic developer workflows" },
          { name: "AI-Assisted Coding & Refactoring", level: "Expert", desc: "Rapid code generation, debugging assistance" },
          { name: "Agile / Scrum Methodologies", level: "Expert", desc: "Sprint ceremonies, standups & velocity" },
          { name: "Code Review & Quality", level: "Expert", desc: "Maintainable clean code & architectural integrity" },
          { name: "Performance Optimization", level: "Expert", desc: "Profiling render cycles, queries & bundle size" },
          { name: "Figma & UI/UX Collaboration", level: "Advanced", desc: "Design handoff & design system fidelity" }
        ]
      }
    ]
  },

  lifecycle: [
    {
      step: "01",
      name: "React.js Client & Redux Toolkit",
      tech: "Client UI / Prime React",
      desc: "User triggers workspace booking or service request. Redux Toolkit dispatches action with optimistic UI update in 0.4ms.",
      metrics: "Rendering Speed: +25% Optimized"
    },
    {
      step: "02",
      name: "Secure RESTful Request",
      tech: "HTTPS / JSON Payload",
      desc: "Client transmits structured JSON payload with authorization headers and request body to Spring Boot microservice.",
      metrics: "Payload Reduction: Tuned"
    },
    {
      step: "03",
      name: "Spring Security & Authorization",
      tech: "Spring Security Layer",
      desc: "Spring Security validates user credentials, checks role-based permissions (RBAC) and filters unauthorized requests.",
      metrics: "Auth: Validated // Filter Passed"
    },
    {
      step: "04",
      name: "Spring Boot Microservice Logic",
      tech: "Java / Spring MVC / Microservices",
      desc: "Controller routes request to service layer executing business validations, technician assignments, and SLA rules.",
      metrics: "Data Retrieval: 50% Faster"
    },
    {
      step: "05",
      name: "Spring Data JPA & Hibernate",
      tech: "ORM Entity Mapping",
      desc: "Spring Data JPA repository maps domain models and generates optimized SQL commands without N+1 query bottlenecks.",
      metrics: "Hibernate Session: Clean"
    },
    {
      step: "06",
      name: "Microsoft SQL Server (MSSQL)",
      tech: "MSSQL / Stored Procedures",
      desc: "Executes optimized queries and stored procedures against SQL Server with indexed execution plans cutting runtime by 70%.",
      metrics: "Query Execution: 70% Time Cut"
    }
  ],

  principles: [
    {
      id: "01",
      tag: "COMPONENT-DRIVEN",
      title: "Modular Component Architecture",
      desc: "Developing reusable, modular React.js components and UI style guides that decreased feature development effort by 70%."
    },
    {
      id: "02",
      tag: "API PERFORMANCE",
      title: "High-Efficiency RESTful APIs",
      desc: "Engineering clean Java and Spring Boot RESTful APIs that reduced data retrieval times by 50% for high-velocity client-server communication."
    },
    {
      id: "03",
      tag: "DATABASE TUNING",
      title: "SQL Query & Index Optimization",
      desc: "Designing stored procedures, analyzing execution plans, and tuning Microsoft SQL Server (MSSQL) queries to achieve 70% performance gains."
    },
    {
      id: "04",
      tag: "OFFLINE RESILIENCE",
      title: "Offline-First & Reliable Sync",
      desc: "Implementing IndexedDB and service workers in React PWAs, delivering 100% offline access for field staff with seamless reconnection sync."
    }
  ],

  education: [
    {
      degree: "Masters of Technology (CAD/CAM)",
      institution: "Newton’s Institute of Science and Technology",
      year: "2019 - 2022",
      grade: "7.0 GPA",
      details: "Advanced engineering coursework, computational modeling, and technical project execution."
    },
    {
      degree: "Bachelors of Technology (Mechanical Engineering)",
      institution: "Newton’s Institute of Science and Technology",
      year: "2014 - 2018",
      grade: "71%",
      details: "Foundational engineering principles, mathematical problem solving, and analytical methodologies."
    }
  ],

  certifications: [
    { name: "Introduction to Databases", issuer: "NXT Wave", badge: "Databases" },
    { name: "Developer Foundations", issuer: "NXT Wave", badge: "Core Dev" },
    { name: "Programming Foundations with Python", issuer: "NXT Wave", badge: "Python" },
    { name: "Build Your Own Static Website", issuer: "NXT Wave", badge: "Web Dev" },
    { name: "JavaScript Essentials", issuer: "NXT Wave", badge: "JavaScript" },
    { name: "Responsive Web Design using Flexbox", issuer: "NXT Wave", badge: "CSS / Flexbox" }
  ]
};
