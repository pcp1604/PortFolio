import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SectionId } from '../constants';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById(SectionId.About);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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