import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Users from 'lucide-react/dist/esm/icons/users';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import { motion } from 'framer-motion';

export function About() {
  const stats = [
    {
      icon: Trophy,
      label: 'Championships',
      value: '3',
    },
    {
      icon: Users,
      label: 'Team Members',
      value: '25+',
    },
    {
      icon: Calendar,
      label: 'Years Active',
      value: '5',
    },
    {
      icon: MapPin,
      label: 'Home Ground',
      value: 'Cuinos Stadium',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About Cuinos FC</h2>
          <p className="text-lg text-gray-300 mb-8">
            Founded in 2019, Cuinos FC has grown from a small local team into one of the most promising amateur clubs in the region. Our unique name, inspired by the determined spirit of pigs, reflects our team's tenacity and unwavering commitment to excellence.
          </p>
          <p className="text-lg text-gray-300">
            We pride ourselves on fostering talent, building community, and promoting sportsmanship. Our diverse team brings together players from all walks of life, united by their passion for football.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-pink-950/30 rounded-lg p-6 text-center transform hover:-translate-y-1 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}