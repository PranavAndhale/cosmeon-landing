"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Activity, Brain, Server, ShieldAlert, Database, TrendingUp, CloudRain, MonitorPlay } from "lucide-react";

const PILLARS = [
  {
    id: "01",
    title: "Live Flood Detection",
    description: "Detects active flooding using real satellite and hydrology data. Utilizes GloFAS v4 and Open-Meteo ERA5 precipitation archives in a tiered fallback system.",
    icon: Activity
  },
  {
    id: "02",
    title: "ML Prediction Engine",
    description: "XGBoost and LightGBM (55/45 ensemble) soft-voting model using 13 weather and terrain features. 5-fold cross-validated independence from ground truth.",
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
    description: "Probabilistic tiered precipitation forecast engine dropping from ECMWF SEAS5 to ERA5+GFS to CMIP6 climatology, outputting mm predictions and confidence bands.",
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
      className="absolute top-1/2 -translate-y-1/2 w-full glass p-8 rounded-2xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl"
      style={{ opacity, y }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
          <pillar.icon size={18} />
        </div>
        <span className="font-mono text-sm tracking-widest text-blue-400">PILLAR {pillar.id}</span>
      </div>
      <h3 className="text-2xl font-medium mb-3">{pillar.title}</h3>
      <p className="text-white/60 leading-relaxed font-light text-sm">
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
    <section ref={containerRef} className="relative bg-[#030303]">
      <div className="h-[400vh] w-full relative">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background Canvas Placeholder - "Sofi-inspired" */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#030303]/80 z-10 pointer-events-none" />
            <div className="w-full h-full flex items-center justify-center bg-black/50">
              <motion.div 
                className="w-full h-full border-t border-b border-white/5 glass flex items-center justify-center overflow-hidden relative"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
                }}
              >
                <div className="text-white/20 font-mono text-sm tracking-widest text-center px-12 z-20 flex flex-col items-center gap-4">
                  <div className="w-24 h-24 border-2 border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <span className="block mb-2">[NANO BANANA CANVAS SEQUENCE]</span>
                  <span className="text-[10px] opacity-60 max-w-sm">
                    Scroll-linked 3D cinematic zoom through the 8 pillars of the backend architecture here.
                  </span>
                </div>
                {/* Simulated Wireframe / Nodes */}
                <motion.div 
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-1/2"
                  style={{
                    scaleX: useTransform(scrollYProgress, [0, 1], [0, 1]),
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Foreground Scroll Content */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="container mx-auto px-6 h-full flex flex-col justify-center relative">
              
              <motion.div 
                className="max-w-xl hidden md:block"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]),
                  y: useTransform(scrollYProgress, [0, 0.1], [0, -50])
                }}
              >
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">8-Pillar</span> Architecture
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-light">
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
