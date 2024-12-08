import CircleDot from 'lucide-react/dist/esm/icons/circle-dot';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar scroll para cambiar estilos
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
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

  const menuItems = ['nosotros', 'logros', 'jugadores', 'galería', 'unirse'];

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-black/95 backdrop-blur-xl border-b border-pink-500/20'
          : 'py-4 bg-gradient-to-b from-black/90 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo mejorado */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-pink-500/20 to-transparent p-1 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-pink-400/20 to-pink-500/20"
                animate={{
                  x: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <img src={logo} alt="Cuinos FC" className="h-12 w-12 relative z-10" />
            </motion.div>
            <div>
              <motion.h1 
                className="text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                  Cuinos FC
                </span>
              </motion.h1>
              <p className="text-xs text-pink-400 font-medium">Fundado en 2022</p>
            </div>
          </motion.div>

          {/* Botón de menú móvil mejorado */}
          <motion.button 
            className="lg:hidden relative p-2 bg-gradient-to-br from-pink-500/10 to-pink-500/5 hover:bg-pink-500/20 rounded-full border border-pink-500/20 backdrop-blur-sm overflow-hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0"
              animate={{
                x: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {isMenuOpen ? (
              <X size={24} className="text-pink-400 relative z-10" />
            ) : (
              <Menu size={24} className="text-pink-400 relative z-10" />
            )}
          </motion.button>

          {/* Navegación desktop mejorada */}
          <nav className="hidden lg:block">
            <motion.ul 
              className="flex space-x-8"
              initial="hidden"
              animate="visible"
            >
              {menuItems.map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item}`} 
                    className="relative group px-4 py-2 block"
                  >
                    <span className={`transition-colors capitalize ${
                      activeSection === item ? 'text-pink-400' : 'text-white group-hover:text-pink-400'
                    }`}>
                      {item}
                    </span>
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 transition-all duration-300
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

        {/* Menú móvil mejorado */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { duration: 0.3 }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { duration: 0.2 }
              }}
              className="lg:hidden mt-4 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl rounded-2xl border border-pink-500/20 shadow-lg shadow-pink-500/5 overflow-hidden"
            >
              <ul className="flex flex-col p-4 space-y-2">
                {menuItems.map((item) => (
                  <motion.li 
                    key={item}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href={`#${item}`}
                      className={`block py-3 px-4 text-center transition-all duration-300 capitalize relative rounded-xl
                        ${activeSection === item 
                          ? 'text-pink-400 bg-gradient-to-r from-pink-500/10 to-transparent' 
                          : 'text-gray-200 hover:text-pink-400 hover:bg-pink-500/5'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10">{item}</span>
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