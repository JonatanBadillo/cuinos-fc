import { motion } from 'framer-motion';
import { Player } from '@/types';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Flag from'lucide-react/dist/esm/icons/flag';

interface PlayerCardProps {
  player: Player;
  isTopScorer?: boolean;
}

export function PlayerCard({ player, isTopScorer }: PlayerCardProps) {
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      
      <div className="relative aspect-[3/4]">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {isTopScorer && (
          <motion.div 
            className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Trophy className="h-6 w-6 text-yellow-900" />
          </motion.div>
        )}

        <div className="absolute -left-20 top-8 group-hover:left-4 transition-all duration-300">
          <div className="bg-pink-600/90 text-white text-5xl font-bold px-6 py-2 rounded-r-lg">
            {player.number}
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Flag className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">{player.nationality}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
          
          <div className="flex justify-between items-center">
            <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-400 text-sm">
              {player.position}
            </span>
            <span className="text-white font-semibold">
              {player.goals} {player.goals === 1 ? 'Goal' : 'Goals'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}