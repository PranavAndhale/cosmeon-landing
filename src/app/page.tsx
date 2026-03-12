import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Dynamic background glow */}
      <div className="fixed inset-0 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-black pointer-events-none -z-10" />

      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
