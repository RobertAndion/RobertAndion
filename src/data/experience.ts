// Resume timeline, newest first. Mirrors public/resume.pdf.
// TODO: keep this in sync with the PDF whenever you update your resume.
export interface Role {
  title: string;
  company: string;
  detail: string; // work arrangement, location
  period: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Renewable Energy Startup',
    detail: 'Remote · Tampa, FL',
    period: 'Aug 2026 – Oct 2026',
    bullets: [
      'Owned the multi-year technical and product roadmap, partnering with executive leadership on priorities.',
      'Ramped up on the production codebase and shipped changes in week one; delivered features and fixes while leading a small team.',
      'Led application security improvements, including access-control design and a platform-wide review.',
      'Built AI-driven automation that turns user feedback into tracked engineering work; administered source control and project tracking.',
      'Authored engineering standards, custom AI coding-assistant skills, and an internal documentation platform; sourced and onboarded AI code-review and multi-model LLM tooling.',
    ],
  },
  {
    title: 'Lead Java Developer, AI Chatbot Platform',
    company: 'Raymond James (Contract)',
    detail: 'Hybrid · St. Petersburg, FL',
    period: 'Mar 2026 – Aug 2026',
    bullets: [
      'Delivered Raymond James’s first enterprise AI advisor assistant from zero to full firm-wide production in under 3 months, personally leading a team of 3 engineers from architecture through release.',
      'Built the Java 17 / Spring Boot microservice backbone powering an AI chatbot grounded in proprietary RJ data, now serving 40,000+ advisors with real-time access to client insights, compliance guidance, and market intelligence.',
      'Designed and owned high-throughput RESTful APIs (OpenAPI 3.0 / Swagger) and Oracle-backed distributed microservices using domain-driven design, load-tested to 3× general-availability volume (120,000+ advisors) while holding response-time SLAs.',
      'Integrated Amazon Bedrock and SageMaker for generative-AI responses over internal knowledge; instrumented observability in Datadog, Dynatrace, and Splunk.',
      'Enforced security, compliance, and software governance across a regulated financial environment; owned CI/CD pipeline (Jenkins, Maven, Flyway) from build through deployment.',
    ],
  },
  {
    title: 'Lead Application Developer, Vice President',
    company: 'Citi',
    detail: 'Hybrid · Tampa, FL',
    period: 'Jul 2025 – Mar 2026',
    bullets: [
      'Built a parity-check and test-validation tool comparing two platforms, eliminating 400+ days of manual business-analyst effort.',
      'Directed architecture unifying two mission-critical market systems into a real-time, event-driven Kafka microservices platform.',
      'Modernized legacy systems and championed CI/CD automation and architecture reviews, raising test coverage from 20% to 90%.',
      'Mentored engineers on API design, testing best practices, and modern Java patterns.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'DTCC (6-Month Contract)',
    detail: 'Hybrid · Tampa, FL',
    period: 'Jan 2025 – Jul 2025',
    bullets: [
      'Modernized legacy core financial systems on Java, containerizing services with Docker and Kubernetes and migrating to PostgreSQL, improving performance, security, and scalability.',
      'Implemented new trading features compliant with SEC regulations, increasing transaction throughput by ~15%.',
      'Contributed to disaster recovery planning, strengthening resilience and uptime for mission-critical platforms.',
    ],
  },
  {
    title: 'Software Engineer III',
    company: 'J.P. Morgan Chase',
    detail: 'Hybrid · Tampa, FL',
    period: 'Jul 2022 – Jan 2025',
    bullets: [
      'Spearheaded cloud migration of customer-facing applications, implementing OAuth/JWT authentication and Spring Security hardening from requirements through production — delivered on a hard regulatory deadline, avoiding a $2M late-delivery fine.',
      'Reduced production issues by 40% by building new features and hardening existing functionality across Java and React.js services.',
      'Led a team of 6 engineers to architect and ship a Java 21 / Spring Boot API end-to-end, defining design patterns and OpenAPI specs.',
      'First to build Splunk alerts and dashboards for production monitoring — an approach since replicated across the line of business.',
      'Served as Java 21 SME: mentored 4 engineers on API design, MVC, dependency injection, and JUnit/Mockito; ran code reviews.',
    ],
  },
];

export const education = {
  degree: 'B.S., Computer Science',
  school: 'University of South Florida',
  detail: 'GPA 4.0 · Summa Cum Laude',
  period: 'May 2022',
};

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'Node.js', 'SQL', 'HTML', 'CSS', 'Go', 'C'] },
  {
    label: 'Platform',
    items: [
      'Spring Boot', 'React.js', 'Microservices', 'Distributed Systems', 'Event-Driven Architecture', 'Kafka', 'AWS', 'Azure',
      'Microsoft Graph API', 'REST', 'OpenAPI/Swagger', 'Spring Security', 'OAuth', 'JWT', 'RBAC', 'JUnit', 'Mockito', 'Maven',
      'Gradle', 'Kubernetes', 'Docker', 'Jenkins', 'CI/CD', 'Git', 'GitHub', 'MySQL', 'PostgreSQL', 'Oracle', 'NoSQL',
      'Datadog', 'Dynatrace', 'Splunk',
    ],
  },
  {
    label: 'AI & LLM',
    items: [
      'Generative AI', 'LLM Integration', 'Amazon Bedrock', 'Amazon SageMaker', 'OpenRouter', 'Claude Code', 'OpenAI Codex',
      'CodeRabbit', 'AI-Assisted Development', 'AI Workflow Automation',
    ],
  },
  {
    label: 'Leadership',
    items: ['Technical Leadership', 'Architecture', 'Mentorship', 'Roadmapping', 'Security Audits', 'Problem Solving', 'Communication'],
  },
];
