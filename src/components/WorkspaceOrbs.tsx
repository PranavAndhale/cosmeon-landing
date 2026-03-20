"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, LeafyGreen, ShieldAlert } from "lucide-react";

const ORBS = [
  {
    id: "flood",
    name: "Flood Risk Orb",
    icon: Droplets,
    color: "var(--color-cyan, #06b6d4)",
    content: "Real-time flood probability leveraging GloFAS discharge anomalies and Open-Meteo rainfall tracking. Confidences bands are updated hourly for maximum clarity."
  },
  {
    id: "carbon",
    name: "Carbon Orb",
    icon: LeafyGreen,
    color: "var(--color-primary, #3b82f6)",
    content: "Monitor vegetation stress using FAO-56 Penman-Monteith ET0 water balances. Track compound climate impacts linked to drought and carbon flux."
  },
  {
    id: "mca",
    name: "Multi-Criteria Analysis",
    icon: ShieldAlert,
    color: "#ef4444",
    content: "Run composite risk overlays combining Flood Hazard, Thermal Anomalies, Soil Saturation, and Economic Impact models simultaneously for a region."
  }
];

export function WorkspaceOrbs() {
  const [activeOrb, setActiveOrb] = useState(ORBS[0].id);

  const activeContent = ORBS.find(o => o.id === activeOrb);

  return (
    <section className="py-32 bg-[#030303] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 font-mono">Platform Interface</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
              Workspace <span className="text-white/40">Orbs</span>
            </h3>
            
            <div className="flex flex-col gap-3 relative z-10">
              {ORBS.map(orb => (
                <button
                  key={orb.id}
                  onClick={() => setActiveOrb(orb.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border text-left
                    ${activeOrb === orb.id 
                      ? 'bg-white/5 border-white/20 glass shadow-2xl' 
                      : 'border-transparent hover:bg-white/5 opacity-60 hover:opacity-100'}
                  `}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/40 border border-white/5 transition-colors" 
                    style={{ color: activeOrb === orb.id ? orb.color : '#ffffff55' }}
                  >
                    <orb.icon size={20} />
                  </div>
                  <span className="font-mono text-sm tracking-wide font-medium flex-grow">
                    {orb.name}
                  </span>
                  {activeOrb === orb.id && (
                    <motion.div layoutId="orbIndicator" className="w-2 h-2 rounded-full" style={{ backgroundColor: orb.color, boxShadow: `0 0 10px ${orb.color}` }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 glass rounded-3xl border border-white/10 p-1 bg-black/40 aspect-video md:aspect-[16/10] overflow-hidden relative group">
             {/* Background blur matching active orb color */}
             <AnimatePresence mode="wait">
               {activeContent && (
                  <motion.div
                    key={`bg-${activeContent.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 blur-[100px] pointer-events-none"
                    style={{ backgroundColor: activeContent.color }}
                  />
               )}
             </AnimatePresence>

             {/* UI Mockup Container */}
             <div className="w-full h-full bg-[#0a0a0a] rounded-[1.25rem] border border-white/5 p-8 flex flex-col justify-center items-center text-center relative z-10">
                <AnimatePresence mode="wait">
                  {activeContent && (
                    <motion.div
                      key={`content-${activeContent.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-md"
                    >
                      <activeContent.icon size={48} className="mx-auto mb-6" style={{ color: activeContent.color }} />
                      <h4 className="text-2xl font-medium mb-4">{activeContent.name}</h4>
                      <p className="text-white/60 font-light leading-relaxed">
                        {activeContent.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Simulated Glass UI Elements */}
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                
                <div className="absolute bottom-6 right-6 text-[10px] font-mono tracking-widest text-white/20 uppercase">
                  Connected to Engine
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
