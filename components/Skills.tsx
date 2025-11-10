import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SectionId } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.Skills} className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-brand-sky">Arsenal</span></h2>
          <div className="h-1 w-24 bg-brand-sky rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-md bg-white/5 text-gray-300 border border-white/5 hover:bg-brand-sky/10 hover:text-brand-sky hover:border-brand-sky/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Snapshot */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-black border border-white/5 text-center"
        >
           <h3 className="text-2xl font-serif font-bold text-white mb-2">Education</h3>
           <p className="text-brand-sky font-semibold text-lg">B.E. Artificial Intelligence And Data Science</p>
           <p className="text-gray-400">VPPCOE, Sion - Mumbai University • Graduated May 2025</p>
           <p className="text-sm text-gray-500 mt-2">CGPA: 7.57</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;