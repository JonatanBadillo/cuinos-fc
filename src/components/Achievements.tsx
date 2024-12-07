import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-square">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-pink-400 mb-2">{achievement.year}</p>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}