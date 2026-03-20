import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Activity, Brain, Server, ShieldAlert, Database, TrendingUp, CloudRain, MonitorPlay } from "lucide-react";

const PILLARS = [
  {
    id: "01",
    title: "Live Flood Detection",
    description: "Detects active flooding using real satellite and hydrology data. Utilizes GloFAS v4 and ERA5 precipitation archives in a tiered fallback system.",
    icon: Activity
  },
  {
    id: "02",
    title: "ML Prediction Engine",
    description: "XGBoost and LightGBM (55/45 ensemble) soft-voting model using 13 weather and terrain features. 5-fold cross-validated independence.",
    icon: Brain
  },
  {
    id: "03",
    title: "GloFAS Validation",
    description: "Independent ground truth comparison testing ML predictions alongside river discharge anomalies, producing a highly accurate Agreement Score.",
    icon: Database
  },
  {
    id: "04",
    title: "Compound Risk",
    description: "Following the EU JRC INFORM Risk Index framework. Combines Flood Hazard, Vegetation Stress, Thermal Anomaly, and Soil Saturation dimensions.",
    icon: ShieldAlert
  },
  {
    id: "05",
    title: "Financial Impact",
    description: "World Bank Open Data geocoding maps GDP and population density to damage models, outputting direct damage costs and Mitigation ROI tables.",
    icon: TrendingUp
  },
  {
    id: "06",
    title: "6-Month Forecast",
    description: "Probabilistic tiered precipitation forecast engine dropping from ECMWF SEAS5 to ERA5+GFS to CMIP6 climatology, outputting mm predictions.",
    icon: CloudRain
  },
  {
    id: "07",
    title: "Historical Trends",
    description: "Pulls 12-month ERA5 archives to compute historical flood proxies, vegetation dryness anomalies, and precipitation deviations.",
    icon: Server
  },
  {
    id: "08",
    title: "NLG Briefings",
    description: "Generates plain-English, paragraph-form risk briefings dynamically from raw structured data. No templates—fully constructed from actual pipeline values.",
    icon: MonitorPlay
  }
];

function PillarItem({ 
  pillar, 
  index, 
  scrollYProgress 
}: { 
  key?: React.Key;
  pillar: typeof PILLARS[0]; 
  index: number; 
  scrollYProgress: MotionValue<number>; 
}) {
  const start = (index + 1) * 0.1;
  const peak = start + 0.05;
  const end = start + 0.1;
  
  const opacity = useTransform(scrollYProgress, [start - 0.05, start, peak, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start - 0.05, peak, end], [50, 0, -50]);

  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-full glass-panel p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black/60 backdrop-blur-xl"
      style={{ opacity, y }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-cosmeon-accent border border-cosmeon-accent/30 bg-cosmeon-accent/10 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
          <pillar.icon size={18} />
        </div>
        <span className="font-mono text-sm tracking-widest text-cosmeon-accent uppercase">PILLAR {pillar.id}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-sm">
        {pillar.description}
      </p>
    </motion.div>
  );
}

export function EngineShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-[#010409]">
      <div className="h-[400vh] w-full relative">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background Canvas Placeholder - "Sofi-inspired" */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#010409] via-transparent to-[#020617] z-10 pointer-events-none" />
            <div className="w-full h-full flex items-center justify-center bg-black/40">
              <motion.div 
                className="w-full h-full border-t border-b border-white/5 glass-panel flex flex-col items-center justify-center overflow-hidden relative"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
                }}
              >
                <div className="text-cosmeon-accent/60 font-mono text-sm tracking-widest text-center px-12 z-20 flex flex-col items-center gap-6">
                  <div className="w-32 h-32 border-2 border-dashed border-cosmeon-accent/40 rounded-full animate-[spin_10s_linear_infinite] shadow-[0_0_30px_rgba(0,210,255,0.1)] flex items-center justify-center">
                    <div className="w-16 h-16 border border-cosmeon-accent/20 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
                  </div>
                  <span className="block mb-2 text-white glow-text">[NANO BANANA CANVAS SEQUENCE]</span>
                  <span className="text-[10px] opacity-80 max-w-sm text-slate-400 leading-relaxed uppercase">
                    Scroll-linked 3D cinematic zoom through the 8 pillars of the backend architecture here.
                  </span>
                </div>
                {/* Simulated Wireframe / Nodes */}
                <motion.div 
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cosmeon-accent/30 to-transparent top-1/2"
                  style={{
                    scaleX: useTransform(scrollYProgress, [0, 1], [0, 1]),
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Foreground Scroll Content */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center relative">
              
              <motion.div 
                className="max-w-xl hidden md:block"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]),
                  y: useTransform(scrollYProgress, [0, 0.1], [0, -50])
                }}
              >
                <span className="text-cosmeon-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Engine</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                  The <span className="text-cosmeon-accent glow-text">8-Pillar</span> <br /> Architecture
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                  COSMEON is built on a heavily validated, independent ML pipeline 
                  fueled by established global data sources.
                </p>
              </motion.div>

              {/* Dynamic Pillars Revealing on Scroll */}
              <div className="absolute top-0 right-6 md:right-24 h-full w-full max-w-md pointer-events-auto flex items-center justify-end">
                <div className="relative w-full h-[60vh]">
                    {PILLARS.map((pillar, index) => (
                      <PillarItem 
                        key={pillar.id}
                        pillar={pillar}
                        index={index}
                        scrollYProgress={scrollYProgress}
                      />
                    ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
