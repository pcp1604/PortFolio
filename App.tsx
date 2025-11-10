import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { PERSONAL_INFO, SectionId } from './constants';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: SectionId.Hero },
    { name: 'Experience', id: SectionId.Experience },
    { name: 'Projects', id: SectionId.Projects },
    { name: 'Skills', id: SectionId.Skills },
  ];

  return (
    <main className="bg-brand-black min-h-screen text-white selection:bg-brand-sky selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-sky origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tight">
            P<span className="text-brand-sky">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-gray-300 hover:text-brand-sky transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-30 bg-black pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 items-center">
             {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-serif font-bold text-white hover:text-brand-sky"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <Hero />
      
      <div id={SectionId.About} className="py-20 bg-brand-black border-b border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">About Me</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            {PERSONAL_INFO.objective}
          </p>
        </div>
      </div>

      <Experience />
      <Projects />
      <Skills />

      {/* Footer / Contact */}
      <footer id={SectionId.Contact} className="py-20 bg-zinc-950 border-t border-white/10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Looking for a Product Manager who understands both the business strategy and the AI tech stack?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 bg-brand-sky text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-white transition-all duration-300 active:scale-95 shadow-lg shadow-brand-sky/20"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            
            <a 
              href="https://wa.me/918055304117"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/10 font-bold py-4 px-8 rounded-full text-lg hover:bg-white/20 transition-all duration-300 active:scale-95 backdrop-blur-sm"
            >
              <MessageCircle size={20} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-16 text-gray-600 text-sm">
            <p>&copy; 2025 Prem Chandrakant Patil. Built with React & Three.js.</p>
            <p className="mt-2">{PERSONAL_INFO.location} • {PERSONAL_INFO.phone}</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;