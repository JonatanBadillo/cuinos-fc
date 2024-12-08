import { motion } from 'framer-motion';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Users from 'lucide-react/dist/esm/icons/users';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Star from 'lucide-react/dist/esm/icons/star';
import Award from 'lucide-react/dist/esm/icons/award';
import { useEffect, useState } from 'react';

export function Hero() {
  // Generador de partículas mejorado
  const [particles] = useState(() => 
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-20 overflow-hidden">
      {/* Fondo con partículas mejoradas */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600')] bg-cover bg-center opacity-30 bg-fixed"
          style={{ filter: 'contrast(1.2) brightness(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        
        {/* Partículas animadas */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-pink-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -50, 0],
              x: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge mejorado */}
            <motion.div 
              className="inline-flex items-center gap-3 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-6 py-3 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">Más que fútbol, es legado</span>
            </motion.div>

            {/* Título con degradado mejorado */}
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Bienvenido a{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Cuinos FC
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5 }}
                />
              </span>
            </motion.h1>

            {/* Descripción */}
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Donde la pasión y la determinación se fusionan. Vive la experiencia de un equipo comprometido y dedicado.
            </motion.p>

            {/* Botones actualizados sin efectos morados */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#join"
                className="group flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#ec4899',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Únete a nuestro equipo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#about"
                className="group flex items-center gap-2 border-2 border-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(236, 72, 153, 0.1)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Descubre más
              </motion.a>
            </div>
          </motion.div>

          {/* Stats cards rediseñadas */}
          <motion.div
            className="hidden lg:grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { 
                icon: Trophy, 
                label: 'Campeonato', 
                value: '1',
                description: 'Título Ganado',
              },
              { 
                icon: Users, 
                label: 'Jugadores', 
                value: '15+',
                description: 'Miembros Activos',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Fondo decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-pink-500/5 to-transparent rounded-2xl" />
                
                {/* Círculo decorativo */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl" />
                
                <div className="relative z-10">
                  {/* Icono con contenedor */}
                  <div className="bg-pink-500/10 p-3 rounded-xl inline-block mb-4">
                    <stat.icon className="w-8 h-8 text-pink-400" />
                  </div>
                  
                  {/* Contenido */}
                  <div className="space-y-2">
                    <div className="flex items-end gap-2">
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                        {stat.value}
                      </h3>
                      <span className="text-pink-400 font-semibold mb-1">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>

                {/* Brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}