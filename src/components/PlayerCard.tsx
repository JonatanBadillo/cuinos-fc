import { motion } from 'framer-motion';
import { Player } from '@/types';
import Trophy from '@/components/icons/Trophy';
import Shield from '@/components/icons/Shield';
import Swords from '@/components/icons/Swords';
import Footprints from '@/components/icons/Footprints';
import Target from '@/components/icons/Target';
import Goal from '@/components/icons/Goal';

interface PlayerCardProps {
  player: Player;
  isTopScorer?: boolean;
}

export function PlayerCard({ player, isTopScorer }: PlayerCardProps) {
  // Función para obtener el icono según la posición
  const getPositionIcon = (position: string) => {
    switch (position) {
      case 'Goalkeeper':
        return <Shield className="w-4 h-4 text-pink-400" />;
      case 'Defender':
        return <Swords className="w-4 h-4 text-pink-400" />;
      case 'Midfielder':
        return <Footprints className="w-4 h-4 text-pink-400" />;
      case 'Forward':
        return <Target className="w-4 h-4 text-pink-400" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      layout
      className="group relative bg-gradient-to-br from-pink-950/30 to-black/30 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1.5 }}
        />
      </div>
      
      <div className="relative aspect-[3/4]">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {isTopScorer && (
          <motion.div 
            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 rounded-full shadow-lg shadow-yellow-500/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Trophy className="w-6 h-6 text-yellow-900" />
          </motion.div>
        )}

        <div className="absolute -left-20 top-8 group-hover:left-4 transition-all duration-300">
          <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white text-5xl font-bold px-6 py-2 rounded-r-lg shadow-lg shadow-pink-500/20">
            {player.number}
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-pink-500/10">
            <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
            
            <div className="flex justify-between items-center">
              <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-400 text-sm font-medium flex items-center gap-2">
                {getPositionIcon(player.position)}
                <span>
                  {player.position === 'Goalkeeper' ? 'Portero' :
                   player.position === 'Defender' ? 'Defensa' :
                   player.position === 'Midfielder' ? 'Mediocampista' :
                   'Delantero'}
                </span>
              </span>
              {player.goals > 0 && (
                <span className="text-white font-semibold flex items-center gap-2">
                  <Goal className="w-4 h-4 text-pink-400" />
                  <span>{player.goals} {player.goals === 1 ? 'Gol' : 'Goles'}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}