import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO, SectionId } from '../constants';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById(SectionId.About);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Content based on the provided PDF/OCR text
    const resumeContent = `PREM CHANDRAKANT PATIL
+918055304117 ⋄ Mumbai, IND
Mail: prempatilworks@gmail.com ⋄ LinkedIn: linkedin.com/in/prem-patil-740014282 ⋄ Portfolio

OBJECTIVE
Detail-oriented and data-driven professional with a background in AI and Data Science, aspiring to grow as a Project/Product Manager. Skilled in project delivery, stakeholder management, and cross-functional collaboration, with hands-on experience in market research, SaaS implementation, and product lifecycle management. Passionate about leveraging data and technology to design user-centric solutions and drive business and product innovation.

EXPERIENCE

Project Manager | FynTune Solutions (On-Site)
Sept 2025 – Present | Turbhe, Navi Mumbai, IND
• Played a key role in the development of an AI-powered chatbot for the company’s internal employee portal, streamlining support operations and enhancing user engagement.
• Manage SaaS implementation projects for enterprise clients like TATA, Tata AIG, Howden, and ACE, steering end-to-end delivery from project scoping and resource planning to successful execution and go-live.
• Drove 15% reduction in project delivery timelines by optimizing internal workflows and improving cross-team coordination.

Associate Product Manager | Silaaiwale (Hybrid)
June 2024 - June 2025 | Mumbai, IND
• Planned and executed key platform features such as online booking, order tracking, and measurement management to improve operational efficiency and user satisfaction. Defined product requirements, created user stories, and prioritized features based on impact and feasibility.
• Led comprehensive user research by conducting interviews, surveys, & feedback sessions with both tailors and customers, and translated qualitative insights into actionable improvements by identifying key pain points.
• Collaborated closely with design and engineering teams to ensure timely feature delivery and alignment with the overall product vision, helping achieve a 90% on-time release rate.

AI & ML Intern | IBM (Remote)
June 2024 – Aug 2024 | Mumbai, IND
• Designed and developed an AI-powered chatbot using NLP techniques, enabling real-time user interaction and automating over 60% of routine queries.
• Integrated the chatbot with internal systems and third-party APIs, ensuring seamless access to key information and enhancing user experience across platforms.
• Conducted iterative testing and optimization using user feedback and conversational analytics, improving response accuracy by 35% and increasing user satisfaction scores.

EDUCATION
Bachelor of Engineering in Artificial Intelligence And Data Science
VPPCOE, Sion - Mumbai University | Graduated May 2025 | CGPA: 7.57

SKILLS
• Basic Tools: Notion, Google Workspace, MS Excel, JIRA, Confluence, Slack, Zoom
• Tech Tools: SQL, Power BI, Pandas, NumPy, IBM Watson Studio, VS Code, Tableau, GitHub, Google Colab
• Soft Skills: Problem Solving, Critical Thinking, Strategic Thinking, Attention to Detail, Adaptability

PROJECTS
• TripGenie: AI Travel Planner Bot (React, Node.js, Gemini 2.5)
• Netflix 2.0: AI-Powered Discovery Engine (React, TypeScript, Gemini 2.5)
• LexAI: AI-Powered Legal Assistant (React, TypeScript, Gemini 2.5)

CERTIFICATIONS
• Diploma In Product Management - Alison Ireland (Online)
• Product Management Full Course - Pendo
• Business Analytics - Great Learning
• Corporate Analyst Development Program - JPMorgan Chase & Co

EXTRA-CURRICULAR ACTIVITIES
• National Service Scheme (NSS) Volunteer
• Public Speaker – Inter-college Debate & Elocution (1st place at Debate 2023)
• Sports – Intra-college Football, Volleyball & Chess

LEADERSHIP
• Mentor: Junior Students (AI & DS)
• Sports Leadership: Softball Captain
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prem_Patil_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id={SectionId.Hero} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Scene3D />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-4">
            Prem <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-white">Patil</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 font-light">
            {PERSONAL_INFO.role}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-brand-sky hover:text-white transition-all duration-300 active:scale-95"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 font-semibold rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 active:scale-95"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            <button 
              onClick={handleDownloadResume}
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 font-semibold rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-gray-500 hover:text-brand-sky transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToNext}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;