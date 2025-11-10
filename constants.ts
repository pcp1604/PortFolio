import { Experience, Project, SkillCategory, CaseStudy } from './types';
export { SectionId } from './types';

export const PERSONAL_INFO = {
  name: "Prem Chandrakant Patil",
  role: "Product Manager | AI & Data Science Graduate | Working and learning At Fyntune Solutions as a SaaS Project Manager",
  email: "prempatilworks@gmail.com",
  phone: "+91 80553 04117",
  location: "Mumbai, INDIA",
  linkedin: "https://linkedin.com/in/prem-patil-740014282",
  objective: "Detail-oriented and data-driven professional with a background in AI and Data Science, aspiring to grow as a Project/Product Manager. Skilled in project delivery, stakeholder management, and cross-functional collaboration, with hands-on experience in market research, SaaS implementation, and product lifecycle management. Passionate about leveraging data and technology to design user-centric solutions and drive business and product innovation."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Project Manager",
    company: "FynTune Solutions",
    period: "Sept 2025 – Present",
    location: "Turbhe, Navi Mumbai, IND",
    description: [
      "Key role in developing an AI-powered chatbot for internal employee portal, streamlining support operations.",
      "Manage SaaS implementation projects for enterprise clients like TATA, Tata AIG, Howden, and ACE.",
      "Steer end-to-end delivery from project scoping and resource planning to go-live.",
      "Drove 15% reduction in project delivery timelines by optimizing workflows."
    ]
  },
  {
    role: "Associate Product Manager",
    company: "Silaaiwale",
    period: "June 2024 – June 2025",
    location: "Mumbai, IND (Hybrid)",
    description: [
      "Planned and executed platform features: online booking, order tracking, measurement management.",
      "Defined product requirements, user stories, and prioritized features based on impact.",
      "Led user research (interviews, surveys) with tailors and customers to identify pain points.",
      "Collaborated with engineering for 90% on-time release rate."
    ]
  },
  {
    role: "AI & ML Intern",
    company: "IBM",
    period: "June 2024 – Aug 2024",
    location: "Mumbai, IND (Remote)",
    description: [
      "Designed and developed an AI-powered chatbot using NLP, automating over 60% of routine queries.",
      "Integrated chatbot with internal systems and third-party APIs.",
      "Improved response accuracy by 35% through iterative testing and user feedback."
    ]
  },
  {
    role: "Digital Consultant",
    company: "TripSarthi",
    period: "Feb 2025 – Sept 2025",
    location: "Mumbai, IND (Hybrid)",
    description: [
      "Collaborated with founders to revamp website focusing on spiritual tourism.",
      "Enhanced branding and design elements for better user engagement.",
      "Implemented digital growth strategies boosting online visibility."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "TripGenie : AI Travel Planner Bot",
    tech: "React, Node.js, Google Gemini 2.5, Tailwind CSS",
    description: [
      "Developed an AI-powered travel planning platform that generates personalized itineraries, hotel suggestions, and visa guidance using Gemini 2.5 and Google Maps integration.",
      "Implemented dynamic budget-based recommendations with real-time flight and hotel APIs, providing detailed day-by-day plans and estimated costs.",
      "Designed and deployed a responsive, Vercel-ready web app with Tailwind UI and chat-based itinerary generation for seamless trip customization."
    ],
    link: "https://trip-genie-git-main-prems-projects-b6d71b66.vercel.app",
    cta: "View Live App"
  },
  {
    title: "Netflix 2.0 – AI-Powered Discovery Engine",
    tech: "React, TypeScript, Google Gemini 2.5, Tailwind CSS",
    description: [
      "Developed an AI-driven content discovery engine using Google Gemini 2.5 Flash, enabling semantic search, mood-based recommendations, and real-time sentiment analysis for movie and series suggestions.",
      "Built an interactive analytics dashboard with Recharts and React (TypeScript) to visualize genre distribution, ratings, and release trends, enhancing data-driven content insights.",
      "Designed and deployed a responsive web application on Vercel, featuring Tailwind CSS UI, YouTube trailer previews, and a conversational CinemAI Chatbot for personalized user engagement."
    ],
    link: "https://pp-netflix-project-i4dt0gq0h-prems-projects-b6d71b66.vercel.app/",
    cta: "View Live App"
  },
  {
    title: "LexAI – AI-Powered Legal Assistant",
    tech: "React 19, TypeScript, Google Gemini 2.5, Tailwind CSS",
    description: [
      "Developed an AI-driven legal assistant for Indian law research and document interpretation using Google Gemini 2.5 Flash.",
      "Implemented multi-mode workflows for legal Q&A, document summarization, and multilingual translation with a responsive dark-mode UI.",
      "Deployed on Vercel with secure API integration, enabling instant contextual answers, key clause extraction, and regional language support for IPC and CrPC queries."
    ],
    link: "https://lex-ai-legal-assistant-5oet.vercel.app/",
    cta: "View Live App"
  },
  {
    title: "AI Tech Consultant Platform",
    tech: "React 18, Node.js, OpenAI, Tailwind CSS",
    description: [
      "Created a full-stack AI consulting platform that automates digital transformation strategy generation using OpenAI models.",
      "Engineered a multi-step analysis workflow with real-time insights and TypeScript-based modular architecture for scalability.",
      "Delivered an enterprise-grade UX using shadcn/ui and Carbon Design System to ensure accessibility and consistency across modules."
    ],
    link: "https://github.com/pcp1604/AI-CONSULTANT-PROJECT",
    cta: "View Code"
  },
  {
    title: "CareEase – Senior-Friendly Healthcare App",
    tech: "UI/UX Design, Figma, Accessibility",
    description: [
      "Designed an accessible healthcare interface optimized for seniors to book appointments and access records easily.",
      "Implemented high-contrast UI, voice input, and large typography to improve readability and accessibility compliance (WCAG 2.1).",
      "Conducted usability testing with target users, refining navigation flow and improving task success rate by 25%."
    ],
    link: "https://www.figma.com/design/FC9w53DIMFBM1RlP0HfQeO/Health-Care-UI?node-id=0-1&p=f&t=oKFBIDRMDy8lt7ju-0",
    cta: "View Design"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  { title: "AI In Strategy", link: "https://www.linkedin.com/feed/update/urn:li:activity:7365666576689192960/" },
  { title: "Cred App Analysis", link: "https://www.linkedin.com/feed/update/urn:li:activity:7373345375945965568/" },
  { title: "District App Breakdown", link: "https://www.linkedin.com/feed/update/urn:li:activity:7366179032108863489/" },
  { title: "Groww App Strategy", link: "https://www.linkedin.com/feed/update/urn:li:activity:7373980745356333056/" },
  { title: "Perplexity AI Deep Dive", link: "https://www.linkedin.com/feed/update/urn:li:activity:7373640553848238080/" }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Product Management",
    skills: ["Roadmapping", "JIRA", "Agile/Scrum", "User Research", "A/B Testing", "Go-To-Market", "KPIs & OKRs"]
  },
  {
    category: "Technical (AI/Data)",
    skills: ["Python", "SQL", "Power BI", "Tableau", "OpenAI API", "Gemini API", "MLOps"]
  },
  {
    category: "Tools",
    skills: ["Figma", "Mixpanel", "Google Analytics", "Notion", "Postman", "Docker", "Git"]
  }
];