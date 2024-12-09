import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Users from 'lucide-react/dist/esm/icons/users';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Percent from 'lucide-react/dist/esm/icons/percent';
import { motion } from 'framer-motion';

export function About() {
  const stats = [
    {
      icon: Trophy,
      label: 'Campeonato',
      value: '1',
      description: 'Título de Liga Ganado',
    },
    {
      icon: Users,
      label: 'Miembros',
      value: '15+',
      description: 'Jugadores activos en el equipo',
    },
    {
      icon: Calendar,
      label: 'Años Activos',
      value: '2',
      description: 'De crecimiento y desarrollo constante',
    },
    {
      icon: Percent,
      label: 'Victorias',
      value: '80%',
      description: 'Porcentaje de partidos ganados',
    },
  ];

  return (
    <section id="nosotros" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        
        {/* Círculos de luz animados */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge superior mejorado */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 via-pink-400/20 to-pink-500/20 text-pink-400 px-8 py-3 rounded-full mb-12 border border-pink-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-semibold tracking-wide">NUESTRA HISTORIA</span>
          </motion.div>

          {/* Título mejorado */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
              Sobre Cuinos FC
            </span>
          </h2>
          
          {/* Contenido mejorado */}
          <motion.div
            className="space-y-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative p-8 bg-pink-500/5 rounded-3xl border border-pink-500/10 backdrop-blur-sm">
              <span className="absolute -left-2 top-4 text-6xl text-pink-500/20">"</span>
              <p className="text-gray-300 leading-relaxed">
                Fundado en 2022, Cuinos FC nació como un equipo de fútbol 7 con la idea de pasar un buen rato, pero poco a poco fue ganándose 
                un lugar entre los equipos más importantes y mejor posicionados.
                Nuestro nombre, inspirado en el espíritu determinado de los cerdos, refleja la tenacidad y el compromiso inquebrantable de nuestro equipo con la excelencia.
              </p>
              <span className="absolute -right-2 bottom-4 text-6xl text-pink-500/20">"</span>
            </div>
            <p className="text-gray-400">
              Nos enorgullece fomentar el talento, construir comunidad y promover el espíritu deportivo. 
              Nuestro diverso equipo reúne jugadores de todos los ámbitos de la vida, unidos por su pasión por el fútbol.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Stats cards mejoradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-pink-500/5 via-black/40 to-black/40 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Círculo decorativo */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icono mejorado */}
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-pink-400" />
                </div>
                
                {/* Contenido mejorado */}
                <div className="space-y-3">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-pink-400">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}