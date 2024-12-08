import { motion } from 'framer-motion';
import { players } from '@/data/players';
import { PlayerCard } from './PlayerCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Trophy from '@/components/icons/Trophy';

// Definir el tipo para las posiciones
type Position = 'Todos' | 'Portero' | 'Defensa' | 'Mediocampista' | 'Delantero';

// Definir el tipo para el mapeo de posiciones
type PositionMapping = {
  [K in Position]: string;
};

export function PlayersSection() {
  const [selectedPosition, setSelectedPosition] = useState<Position>('Todos');
  
  // Traducción de posiciones
  const positions: Position[] = ['Todos', 'Portero', 'Defensa', 'Mediocampista', 'Delantero'];
  
  // Mapeo para filtrado con tipo definido
  const positionMapping: PositionMapping = {
    'Todos': 'All',
    'Portero': 'Goalkeeper',
    'Defensa': 'Defender',
    'Mediocampista': 'Midfielder',
    'Delantero': 'Forward'
  };
  
  const filteredPlayers = selectedPosition === 'Todos' 
    ? players 
    : players.filter(player => player.position === positionMapping[selectedPosition]);

  const topScorer = [...players].sort((a, b) => b.goals - a.goals)[0];

  return (
    <section id="jugadores" className="relative w-full py-32 bg-gradient-to-b from-black to-black/95 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 via-black to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge superior */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-pink-950/50 text-pink-400 px-8 py-3 rounded-full mb-8 border border-pink-500/20"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-semibold tracking-wide">NUESTRO EQUIPO</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white">
              Nuestros <span className="text-pink-500">Jugadores</span>
            </span>
          </motion.h2>

          {/* Badge de goleador */}
          <motion.div
            className="inline-flex items-center gap-2 bg-amber-950/50 text-amber-500 px-6 py-2 rounded-full mb-12 border border-amber-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trophy size={16} />
            <span className="text-sm font-medium">Goleador: {topScorer.name} ({topScorer.goals} goles)</span>
          </motion.div>

          {/* Filtros de posición mejorados */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {positions.map((position) => (
              <motion.div
                key={position}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setSelectedPosition(position)}
                  className={`
                    relative overflow-hidden rounded-xl px-6 py-3 font-medium
                    transition-all duration-300 ease-out
                    ${selectedPosition === position 
                      ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/30 border-none' 
                      : `
                        bg-gradient-to-r from-pink-950/50 to-pink-900/30
                        text-gray-300 hover:text-white 
                        border border-pink-500/20 hover:border-pink-500/50 
                        backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-900/50 hover:to-pink-800/30
                        shadow-md shadow-pink-950/20 hover:shadow-lg hover:shadow-pink-500/10
                      `
                    }
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 
                    before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span 
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300
                        ${selectedPosition === position 
                          ? 'bg-white scale-100' 
                          : 'bg-pink-400/50 scale-0 group-hover:scale-100'
                        }
                      `}
                    />
                    {position}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grid de jugadores */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PlayerCard 
                player={player} 
                isTopScorer={player.id === topScorer.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}