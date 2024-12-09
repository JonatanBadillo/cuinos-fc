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
    <section id="galería" className="py-20 bg-gradient-to-b from-black via-pink-950/20 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Galería del Equipo
        </motion.h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Imagen Principal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/10"
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
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white text-xl font-medium max-w-3xl mx-auto text-center">
                  {galleryImages[currentIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Botones de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Indicadores de posición */}
          <div className="flex justify-center mt-8 gap-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-500 w-8' 
                    : 'bg-gray-500 hover:bg-pink-500/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}