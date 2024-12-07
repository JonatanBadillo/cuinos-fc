import { CircleDot, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['about', 'achievements', 'players', 'gallery', 'join'];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
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
      className="fixed w-full top-0 z-50 bg-gradient-to-b from-black to-black/80 backdrop-blur-sm text-white py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <CircleDot className="h-12 w-12 text-pink-500" />
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <CircleDot className="h-12 w-12 text-pink-500/30" />
              </motion.div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Cuinos FC</h1>
              <p className="text-xs text-pink-400">Est. 2019</p>
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
                    className="relative group"
                  >
                    <span className="text-white hover:text-pink-400 transition-colors capitalize">
                      {item}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full" />
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4"
            >
              <ul className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.li 
                    key={item}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href={`#${item}`}
                      className="block py-2 text-center text-white hover:text-pink-400 transition-colors capitalize"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
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