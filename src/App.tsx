import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  BarChart3, 
  Brain, 
  CloudRain, 
  Database, 
  Globe, 
  Layers, 
  MessageSquare, 
  Navigation, 
  ShieldAlert, 
  TrendingUp,
  Search,
  Filter,
  Download,
  Share2,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cosmeon-accent rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,210,255,0.5)]">
          <Globe className="w-5 h-5 text-black" />
        </div>
        <span className="text-2xl font-bold tracking-tighter text-white">Cosmeon</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#" className="hover:text-cosmeon-accent transition-colors">Intelligence</a>
        <a href="#" className="hover:text-cosmeon-accent transition-colors">Methodology</a>
        <a href="#" className="hover:text-cosmeon-accent transition-colors">Enterprise</a>
      </div>

      <button className="px-6 py-2 bg-cosmeon-accent/10 border border-cosmeon-accent/30 text-cosmeon-accent rounded-full text-sm font-semibold hover:bg-cosmeon-accent hover:text-black transition-all shadow-[0_0_10px_rgba(0,210,255,0.2)]">
        Launch Engine
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Globe Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cosmeon-accent/20 to-transparent blur-3xl animate-pulse" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
            alt="Earth from space" 
            className="w-full h-full object-cover rounded-full opacity-60 mix-blend-screen"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border border-cosmeon-accent/20 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-[-40px] border border-cosmeon-accent/10 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Cosmeon: Unveiling Earth's Pulse. <br />
            <span className="text-cosmeon-accent glow-text">Mastering Flood Risk</span> with Satellite Intelligence.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A planetary-scale observability engine transforming new telemetry into actionable climate intelligence for enterprise risk management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-cosmeon-accent text-black font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              Launch Engine
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute bottom-20 left-10 hidden lg:block">
        <div className="glass-panel p-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <span className="text-xs font-mono text-slate-300">Flood Risk: High (South Asia)</span>
        </div>
      </div>
      <div className="absolute top-40 right-20 hidden lg:block">
        <div className="glass-panel p-4 flex items-center gap-3">
          <Activity className="w-4 h-4 text-cosmeon-accent" />
          <span className="text-xs font-mono text-slate-300">Satellite Telemetry Active</span>
        </div>
      </div>
    </section>
  );
};

import { EngineShowcase } from './components/EngineShowcase';

const AnalysisWorkspace = () => {
  const chartData = [
    { name: '00:00', value: 400 },
    { name: '04:00', value: 300 },
    { name: '08:00', value: 600 },
    { name: '12:00', value: 800 },
    { name: '16:00', value: 500 },
    { name: '20:00', value: 900 },
    { name: '23:59', value: 700 },
  ];

  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cosmeon-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Interface</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Analysis Workspace</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interactive analysis, rotating holographic visualizations to predictive climate intelligence for enterprise risk management.
          </p>
        </div>

        <div className="glass-panel p-1 bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
          <div className="bg-[#020617] rounded-lg overflow-hidden flex flex-col lg:flex-row h-[700px]">
            {/* Sidebar */}
            <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-8">
              <div className="w-10 h-10 bg-cosmeon-accent/10 rounded-lg flex items-center justify-center text-cosmeon-accent">
                <Globe className="w-5 h-5" />
              </div>
              <Layers className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
              <Activity className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
              <Database className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
              <Navigation className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
              <div className="mt-auto">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
              {/* Top Bar */}
              <div className="h-14 border-b border-white/5 flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-slate-500">24.7614° N, 87.6166° W</span>
                  <div className="h-4 w-[1px] bg-white/10" />
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md">
                    <Search className="w-3 h-3 text-slate-500" />
                    <input type="text" placeholder="Search coordinates..." className="bg-transparent border-none text-[10px] text-slate-300 focus:ring-0 w-32" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-md text-[10px] text-slate-300 hover:bg-white/10">
                    <Filter className="w-3 h-3" /> Filter
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-cosmeon-accent/20 text-cosmeon-accent rounded-md text-[10px] font-bold hover:bg-cosmeon-accent/30">
                    <Download className="w-3 h-3" /> Export
                  </button>
                </div>
              </div>

              {/* Map/Globe View */}
              <div className="flex-1 relative bg-[#010409] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>
                
                <div className="relative w-96 h-96">
                  <div className="absolute inset-0 rounded-full bg-cosmeon-accent/5 blur-3xl" />
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                    alt="Globe" 
                    className="w-full h-full object-cover rounded-full opacity-80 mix-blend-screen"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-bold text-xl tracking-widest glow-text">Flood Risk Orb</p>
                      <p className="text-cosmeon-accent text-[10px] uppercase tracking-[0.3em]">Live Telemetry</p>
                    </div>
                  </div>
                </div>

                {/* Overlay Cards */}
                <div className="absolute top-6 left-6 w-48 glass-panel p-3">
                  <p className="text-[10px] text-slate-500 uppercase mb-2">Current Region</p>
                  <p className="text-sm font-bold text-white mb-1">Brahmaputra Basin</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[85%]" />
                    </div>
                    <span className="text-[10px] text-red-500 font-bold">85%</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 w-64 glass-panel p-3">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] text-slate-500 uppercase">Risk Heatmap</p>
                    <Activity className="w-3 h-3 text-cosmeon-accent" />
                  </div>
                  <div className="h-32 w-full bg-gradient-to-br from-blue-900 via-green-900 to-red-900 rounded-md opacity-60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500/40 blur-xl animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="h-16 border-t border-white/5 flex items-center justify-center gap-8 px-6">
                <button className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest">Floor</button>
                <button className="text-[10px] font-bold text-cosmeon-accent uppercase tracking-widest border-b border-cosmeon-accent pb-1">Delivery</button>
                <button className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest">Expert</button>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-80 border-l border-white/5 flex flex-col">
              <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <p className="text-[10px] text-slate-500 uppercase mb-4">Live Data</p>
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00D2FF" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00D2FF" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke="#00D2FF" fillOpacity={1} fill="url(#colorVal)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase mb-3">Key Metrics</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">Precipitation</span>
                        <span className="text-xs font-mono text-white">42.5 mm/h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">Water Level</span>
                        <span className="text-xs font-mono text-white">+1.2m</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">Confidence</span>
                        <span className="text-xs font-mono text-cosmeon-accent">94.2%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 uppercase mb-3">Recent Alerts</p>
                    <div className="space-y-2">
                      <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-md">
                        <p className="text-[10px] font-bold text-red-500">CRITICAL</p>
                        <p className="text-[10px] text-slate-300">Flash flood detected in Sector 7G</p>
                      </div>
                      <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                        <p className="text-[10px] font-bold text-yellow-500">WARNING</p>
                        <p className="text-[10px] text-slate-300">Rising water levels in Sub-basin B</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From Manual Guesswork <br /> to Automated Clarity</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Reactive Chaos */}
          <div className="glass-panel p-8 border-red-500/20 bg-red-500/5">
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden grayscale opacity-50">
              <img 
                src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=800" 
                alt="Old maps and books" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-20 h-20 text-red-500 opacity-80" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Reactive Chaos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Disjointed spreadsheets and legacy data</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Reliance on 50-year-old static maps</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Manual, error-prone interpretation</span>
              </li>
            </ul>
          </div>

          {/* Predictive Command */}
          <div className="glass-panel p-8 border-cosmeon-accent/20 bg-cosmeon-accent/5">
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800" 
                alt="Modern dashboard" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <CheckCircle2 className="w-20 h-20 text-cosmeon-accent opacity-80" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Command</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cosmeon-accent mt-0.5" />
                <span>Unified data stream and real-time insights</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cosmeon-accent mt-0.5" />
                <span>Predictive modeling with satellite precision</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cosmeon-accent mt-0.5" />
                <span>AI-generated reports and automated alerts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass-panel p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmeon-accent/10 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to see Cosmeon in Action?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Join our S-I Pilot Program. Gain exclusive access to the full Engine and benchmark your portfolio against the next century of climate reality.
          </p>
          <button className="px-10 py-4 bg-cosmeon-accent text-black font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(0,210,255,0.4)]">
            Apply for Pilot Access
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-cosmeon-accent" />
          <span className="text-xl font-bold text-white">Cosmeon</span>
        </div>
        
        <div className="flex items-center gap-8 text-xs font-medium text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Intelligence</a>
          <a href="#" className="hover:text-white transition-colors">Methodology</a>
          <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>

        <p className="text-xs text-slate-600">© Copyright 2026 Cosmeon Intelligence. All rights reserved.</p>
      </div>
    </footer>
  );
};

import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';

// --- Main App ---

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen font-sans selection:bg-cosmeon-accent selection:text-black cursor-none">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <EngineShowcase />
          <AnalysisWorkspace />
          <Comparison />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
