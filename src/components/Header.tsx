import CircleDot from 'lucide-react/dist/esm/icons/circle-dot';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['about', 'achievements', 'players', 'gallery', 'join'];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md text-white py-4 border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <img src={logo} alt="Cuinos FC" className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Cuinos FC</h1>
              <p className="text-xs text-pink-400">Fundado en 2022</p>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <motion.ul 
              className="flex space-x-8"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {menuItems.map((item) => (
                <motion.li 
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item}`} 
                    className="relative group px-4 py-2"
                  >
                    <span className={`transition-colors capitalize ${
                      activeSection === item ? 'text-pink-400' : 'text-white group-hover:text-pink-400'
                    }`}>
                      {item}
                    </span>
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-500 transition-all duration-300
                      ${activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                    />
                    {activeSection === item && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -left-2 top-1/2 -translate-y-1/2"
                        transition={{ type: "spring", bounce: 0.2 }}
                      >
                        <CircleDot className="w-3 h-3 text-pink-400" />
                      </motion.span>
                    )}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { duration: 0.2, ease: "easeIn" }
              }}
              className="lg:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg border border-white/10"
            >
              <ul className="flex flex-col p-4 space-y-4">
                {menuItems.map((item) => (
                  <motion.li 
                    key={item}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href={`#${item}`}
                      className={`block py-2 text-center transition-colors capitalize relative
                        ${activeSection === item ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                      {activeSection === item && (
                        <motion.span
                          layoutId="mobileActiveIndicator"
                          className="absolute left-2 top-1/2 -translate-y-1/2"
                        >
                          <CircleDot className="w-3 h-3 text-pink-400" />
                        </motion.span>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}