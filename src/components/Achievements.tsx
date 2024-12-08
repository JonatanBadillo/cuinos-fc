import { motion, useScroll, useTransform } from 'framer-motion';
import { achievements } from '@/data/achievements';


export function Achievements() {
  // Animación de scroll parallax
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="logros" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        
        {/* Círculos de luz con animaciones más complejas */}
        <motion.div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          variants={itemVariants}
        >
          {/* Badge superior con animación mejorada */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600/20 via-pink-500/20 to-pink-600/20 text-pink-400 px-8 py-3 rounded-full mb-12 border border-pink-600/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold tracking-wide">NUESTROS LOGROS</span>
          </motion.div>

          {/* Título con animación de texto */}
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Momentos de Gloria
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Cada victoria es un testimonio de nuestro compromiso y dedicación. Estos son los momentos que nos definen.
          </motion.p>
        </motion.div>
        
        {/* Grid de cards con animación mejorada */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600/10 via-black/60 to-black/60 border border-pink-600/20 backdrop-blur-xl"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Efectos de luz mejorados */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-pink-600/20 rounded-full blur-[100px]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-600/20 rounded-full blur-[100px]"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="aspect-video relative overflow-hidden">
                <motion.img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    rotate: 1,
                    transition: { duration: 0.7 }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-300" />
                
                <motion.div 
                  className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold bg-pink-600/90 text-white backdrop-blur-sm border border-pink-500/20 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)"
                  }}
                >
                  {achievement.year}
                </motion.div>
              </div>

              <div className="relative p-8">
                <div className="space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                      {achievement.title}
                    </span>
                  </motion.h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Efectos decorativos mejorados */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-pink-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}