"use client";

import { motion } from "framer-motion";

export function BeforeAfter() {
  return (
    <section className="py-24 bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 font-mono">Transform Strategy</h2>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            From Manual Guesswork to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Automated Clarity</span>
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Legacy risk tracking relies on outdated charts and manual data entry. Cosmeon's pipelines ingest active parameters every 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-3xl border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
            <h4 className="text-xl font-medium mb-6 flex items-center justify-between">
              <span className="text-white/40">Legacy Process</span>
              <span className="text-xs uppercase font-mono tracking-widest text-red-400">Before</span>
            </h4>
            
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <div className="w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-500 font-bold text-xs">✕</div>
                <div className="text-white/60">Using static vulnerability maps that only update every 3-5 years.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-500 font-bold text-xs">✕</div>
                <div className="text-white/60">Spending weeks analyzing historical damage data manually across disconnected spreadsheets.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-500 font-bold text-xs">✕</div>
                <div className="text-white/60">Estimating compounding risks without observing dynamic soil interactions or live hydrology.</div>
              </li>
            </ul>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300" />
            <h4 className="text-xl font-medium mb-6 flex items-center justify-between">
              <span className="text-blue-400">Cosmeon Engine</span>
              <span className="text-xs uppercase font-mono tracking-widest text-blue-400">After</span>
            </h4>
            
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-400 text-xs">✓</div>
                <div className="text-white/80 font-medium">Daily ingest from active GloFAS hydrology and Open-Meteo ERA5 Reanalysis.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-400 text-xs">✓</div>
                <div className="text-white/80 font-medium">Live NLG risk briefings generated instantly from raw 13-feature pipeline data.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-400 text-xs">✓</div>
                <div className="text-white/80 font-medium">Automatic INFORM compound risk tracking of Flood, Thermal, and Vegetation indices.</div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
