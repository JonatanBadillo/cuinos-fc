import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Send from '@/components/icons/Send';
import User from '@/components/icons/User';
import Mail from '@/components/icons/Mail';
import Award from '@/components/icons/Award';
import MessageSquare from '@/components/icons/MessageSquare';

export function JoinForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  });

  const positions = ['Portero', 'Defensa', 'Mediocampista', 'Delantero'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Solicitud Enviada!",
      description: "Pronto nos pondremos en contacto contigo sobre tu incorporación a Cuinos FC.",
    });
    setFormData({ name: '', email: '', position: '', message: '' });
  };

  return (
    <section id="unirse" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-pink-400/20 text-pink-400 px-8 py-3 rounded-full mb-8 border border-pink-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" }}
          >
            <span className="font-semibold tracking-wide">ÚNETE A NOSOTROS</span>
          </motion.div>

          <motion.h2 
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 text-transparent bg-clip-text">
              Forma Parte del Equipo
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Da el primer paso para ser parte de una familia unida por la pasión del fútbol
          </motion.p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-pink-500/5 via-black/40 to-black/40 p-8 rounded-3xl border border-pink-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(236,72,153,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="space-y-8 relative">
              <motion.div
                className="group"
                whileHover={{ y: -2 }}
              >
                <label className="flex items-center gap-2 text-sm font-medium mb-2 text-pink-400">
                  <User className="w-4 h-4" />
                  <span>Nombre</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border-pink-500/30 focus:border-pink-500 h-12 px-4 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-pink-500/20"
                  required
                />
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ y: -2 }}
              >
                <label className="flex items-center gap-2 text-sm font-medium mb-2 text-pink-400">
                  <Mail className="w-4 h-4" />
                  <span>Correo Electrónico</span>
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border-pink-500/30 focus:border-pink-500 h-12 px-4 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-pink-500/20"
                  required
                />
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ y: -2 }}
              >
                <label className="flex items-center gap-2 text-sm font-medium mb-2 text-pink-400">
                  <Award className="w-4 h-4" />
                  <span>Posición Preferida</span>
                </label>
                <Select
                  value={formData.position}
                  onValueChange={(value) => setFormData({ ...formData, position: value })}
                >
                  <SelectTrigger className="bg-black/50 border-pink-500/30 focus:border-pink-500 h-12 rounded-xl text-white">
                    <SelectValue placeholder="Selecciona una posición" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-pink-500/30">
                    {positions.map((position) => (
                      <SelectItem 
                        key={position} 
                        value={position}
                        className="text-white hover:bg-pink-500/20 focus:bg-pink-500/20 focus:text-white"
                      >
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ y: -2 }}
              >
                <label className="flex items-center gap-2 text-sm font-medium mb-2 text-pink-400">
                  <MessageSquare className="w-4 h-4" />
                  <span>Mensaje</span>
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/50 border-pink-500/30 focus:border-pink-500 min-h-[120px] rounded-xl transition-all duration-300 focus:ring-2 focus:ring-pink-500/20"
                  placeholder="Cuéntanos sobre ti y tu experiencia..."
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 hover:from-pink-500 hover:via-pink-600 hover:to-pink-500 text-white font-semibold h-14 rounded-xl transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 group"
                >
                  <span className="flex items-center gap-2">
                    Enviar Solicitud
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}