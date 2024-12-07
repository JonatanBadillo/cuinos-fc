import { motion } from 'framer-motion';
import { players } from '@/data/players';
import { PlayerCard } from './PlayerCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function PlayersSection() {
  const [selectedPosition, setSelectedPosition] = useState<string>('All');
  const positions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];
  
  const filteredPlayers = selectedPosition === 'All' 
    ? players 
    : players.filter(player => player.position === selectedPosition);

  const topScorer = [...players].sort((a, b) => b.goals - a.goals)[0];

  return (
    <section id="jugadores" className="w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Players</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {positions.map((position) => (
              <Button
                key={position}
                onClick={() => setSelectedPosition(position)}
                variant={selectedPosition === position ? "default" : "outline"}
                className={`
                  ${selectedPosition === position 
                    ? 'bg-pink-600 hover:bg-pink-700' 
                    : 'border-pink-500/30 hover:border-pink-500 text-white'
                  }
                `}
              >
                {position}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredPlayers.map((player, index) => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              isTopScorer={player.id === topScorer.id}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}