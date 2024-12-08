import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Users from 'lucide-react/dist/esm/icons/users';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Percent from 'lucide-react/dist/esm/icons/percent'; // Nuevo import

import { motion } from 'framer-motion';

export function About() {
  const stats = [
    {
      icon: Trophy,
      label: 'Campeonato',
      value: '1',
      description: 'Título de Liga Futbol 7',
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
    <section id="nosotros" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge superior */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-6 py-2 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-semibold">Nuestra Historia</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
            Sobre Cuinos FC
          </h2>
          
          <motion.div
            className="space-y-6 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="relative">
              <span className="absolute -left-4 top-0 text-3xl text-pink-500/20">"</span>
              Fundado por un par de amigos en 2022, Cuinos FC nació como un equipo de fútbol 7 con la idea de pasar un buen rato, pero poco a poco fue ganándose un lugar entre los equipos más importantes y ganadores de los torneos en los que participa.
            </p>
            <p>
            Hoy en día, somos una familia que, más allá de los goles y los trofeos, se enorgullece de representar el verdadero espíritu deportivo, el compañerismo y el amor por el fútbol.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                  </div>
                  <p className="text-pink-400 font-semibold">
                    {stat.label}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}