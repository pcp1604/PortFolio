import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, SectionId } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.Experience} className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Professional <span className="text-brand-sky">Experience</span></h2>
          <div className="h-1 w-24 bg-brand-sky rounded-full" />
        </motion.div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-brand-black bg-brand-sky" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-serif font-semibold text-white">{exp.role}</h3>
                <span className="text-sm font-mono text-brand-sky bg-brand-sky/10 px-3 py-1 rounded-md w-fit mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex items-center text-gray-400 mb-4 text-sm md:text-base">
                <Briefcase size={16} className="mr-2" />
                <span className="font-medium">{exp.company}</span>
                <span className="mx-2">•</span>
                <span>{exp.location}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="text-gray-300 leading-relaxed text-sm md:text-base flex items-start">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 min-w-[6px] rounded-full bg-gray-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;