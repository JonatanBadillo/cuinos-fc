import { motion } from 'framer-motion';
import Instagram from '@/components/icons/Instagram';
import Facebook from '@/components/icons/Facebook';
import Logo from '../assets/img/logo/logo.png' // Asumiendo que tienes un logo

export function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/cuinos.fc/',
      hoverColor: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61556508205444',
      hoverColor: 'hover:text-pink-500'
    }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Logo y Descripción */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={Logo} alt="Cuinos FC" className="w-32 h-auto" />
            </motion.div>
            <p className="text-white">
              Más que un equipo, somos una familia unida por la pasión del fútbol.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-4">
              {['Inicio', 'Nosotros', 'Jugadores', 'Galería', 'Únete'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-white transition-colors"
                >
                  <a href={`#${item.toLowerCase()}`} className="text-white" >{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Síguenos
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-pink-500/10 p-3 rounded-xl text-white hover:text-pink-400 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(236, 72, 153, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <div className="py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cuinos FC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}