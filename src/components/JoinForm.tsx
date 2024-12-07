import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function JoinForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  });

  const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll get back to you soon about joining Cuinos FC.",
    });
    setFormData({ name: '', email: '', position: '', message: '' });
  };

  return (
    <section id="join" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-300">Take the first step towards becoming part of Cuinos FC</p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6 bg-pink-950/30 p-8 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-black/50 border-pink-500/30 focus:border-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-black/50 border-pink-500/30 focus:border-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Preferred Position</label>
            <Select
              value={formData.position}
              onValueChange={(value) => setFormData({ ...formData, position: value })}
            >
              <SelectTrigger className="bg-black/50 border-pink-500/30">
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-black/50 border-pink-500/30 focus:border-pink-500"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-pink-600 hover:bg-pink-700"
          >
            Submit Application
          </Button>
        </motion.form>
      </div>
    </section>
  );
}