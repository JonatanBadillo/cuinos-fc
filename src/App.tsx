import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { PlayersSection } from './components/PlayersSection';
import { Gallery } from './components/Gallery';
import { JoinForm } from './components/JoinForm';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full max-w-none bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <PlayersSection />
      <Gallery />
      <JoinForm />
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;