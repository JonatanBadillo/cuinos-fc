import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import { galleryImages } from '@/data/gallery';

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="galería" className="py-32 bg-gradient-to-b from-black via-black/95 to-black relative">
      {/* Efectos de fondo decorativos actualizados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-16">
          {/* Badge superior actualizado */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-8 py-3 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-semibold tracking-wide">EXPLORA NUESTROS MOMENTOS</span>
          </motion.div>

          {/* Título actualizado */}
          <motion.h2 
            className="text-6xl font-bold text-center text-white mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-transparent bg-clip-text">
              Galería del Equipo
            </span>
            <motion.span
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
            />
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Imagen Principal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.2)]"
            >
              <img 
                src={galleryImages[currentIndex].url} 
                alt={galleryImages[currentIndex].caption}
                className="w-full h-full object-cover"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Descripción de la imagen */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-4 md:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto text-center">
                  {galleryImages[currentIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Botones de navegación actualizados */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-pink-500/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-pink-500/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Indicadores actualizados - ocultos en móvil */}
          <div className="hidden sm:flex justify-center mt-8 gap-2 flex-wrap px-4 w-full max-w-6xl mx-auto">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 w-6' 
                    : 'bg-gray-500/50 w-2 hover:bg-pink-500/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Indicador móvil */}
          <div className="sm:hidden flex justify-center mt-6">
            <motion.div 
              className="bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-4 py-2 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-pink-400 font-semibold">{currentIndex + 1}</span>
              <span className="mx-2">/</span>
              <span className="text-white/70">{galleryImages.length}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}