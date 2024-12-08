import { motion } from 'framer-motion';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Users from 'lucide-react/dist/esm/icons/users';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Star from 'lucide-react/dist/esm/icons/star';
import Award from 'lucide-react/dist/esm/icons/award';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-20">
      {/* Background con efecto parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600')] bg-cover bg-center opacity-20 bg-fixed" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated Shapes mejorados */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
              style={{
                left: `${10 + i * 20}%`,
                top: `${5 + i * 15}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            />
          ))}
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-pink-400/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-pink-400/20 text-pink-300 px-6 py-3 rounded-full mb-6 border border-pink-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">Join the Legacy</span>
              <Star className="w-5 h-5 animate-pulse" />
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
                  Cuinos FC
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8 }}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Where passion meets determination. Join our community of dedicated players and be part of something special.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#join"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-pink-500/20"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-pink-500/30 hover:border-pink-400 hover:bg-pink-500/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(236, 72, 153, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { 
                icon: Trophy, 
                label: 'Championships', 
                value: '3',
                description: 'Titles Won'
              },
              { 
                icon: Users, 
                label: 'Players', 
                value: '25+',
                description: 'Active Members'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-pink-950/30 to-black/30 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/10 hover:border-pink-400/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(236, 72, 153, 0.2)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative inline-block">
                  <stat.icon className="w-12 h-12 text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
                  <motion.div 
                    className="absolute -inset-2 bg-pink-400/20 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-pink-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 group-hover:text-pink-300 transition-colors">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}