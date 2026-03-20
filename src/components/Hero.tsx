"use client";

import { motion } from "framer-motion";
import { ArrowRight, Satellite } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Nano Banana Cinematic Placeholder Background */}
      <div className="absolute inset-0 z-0 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#030303] z-10 pointer-events-none" />
        {/* Placeholder for Canvas / Video */}
        <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center opacity-40">
          <div className="flex flex-col items-center gap-4 text-white/30 border border-white/10 px-8 py-6 rounded-2xl glass">
            <Satellite size={32} className="animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase">Nano Banana Cinematic Asset Placeholder</span>
            <span className="font-mono text-[10px] opacity-70">3D Globe / Flood Simulation Video Expected</span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/80">
            Real-Time Engine Active
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.05] max-w-5xl"
        >
          Clarity from Space for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
            Risk Insights on Earth.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light leading-relaxed"
        >
          COSMEON fuses satellite data, weather reanalysis, hydrological measurements, and machine learning to produce actionable flood risk assessments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="https://cosmeon.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-trigger group relative px-8 py-4 bg-white text-black text-sm uppercase tracking-wide font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Launch Engine
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-blue-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
          </a>
          
          <button className="hover-trigger text-white/60 hover:text-white text-sm uppercase tracking-wide font-medium transition-colors pb-1 border-b border-transparent hover:border-white/50">
            Explore Architecture
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">Scroll</span>
      </motion.div>
    </section>
  );
}
