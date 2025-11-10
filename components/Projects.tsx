import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, CASE_STUDIES, SectionId } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.Projects} className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-brand-sky">Projects</span></h2>
          <div className="h-1 w-24 bg-brand-sky rounded-full" />
        </motion.div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-brand-sky/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-sky/10 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-brand-sky transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-sky transition-colors">
                    {project.link.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
                  </a>
                )}
              </div>
              
              <p className="text-xs font-mono text-brand-sky mb-4">{project.tech}</p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {project.description.map((point, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-start">
                     <span className="mr-2 mt-1.5 h-1 w-1 min-w-[4px] rounded-full bg-gray-600" />
                     {point}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center text-sm font-semibold text-white hover:text-brand-sky transition-colors"
                >
                  {project.cta || 'View Project'} <ArrowUpRight size={16} className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Case Studies Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-zinc-900 to-zinc-900/50 rounded-3xl p-8 md:p-12 border border-white/5"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
               <h3 className="font-serif text-3xl font-bold text-white mb-2">Product <span className="text-brand-sky">Case Studies</span></h3>
               <p className="text-gray-400">Deep dives into product strategy and analysis.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CASE_STUDIES.map((study, index) => (
              <a
                key={index}
                href={study.link}
                target="_blank"
                rel="noreferrer"
                className="block p-4 bg-black/40 rounded-xl border border-white/10 hover:bg-brand-sky/20 hover:border-brand-sky/40 transition-all duration-300 group active:scale-95"
              >
                <div className="flex justify-between items-start mb-2">
                  <ArrowUpRight size={16} className="text-gray-500 group-hover:text-brand-sky" />
                </div>
                <p className="font-medium text-gray-200 group-hover:text-white text-sm">{study.title}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;