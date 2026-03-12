'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients & Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-glass-border bg-glass text-xs font-medium tracking-wide text-accent-cyan mb-6">
                        ENTERPRISE RISK INTELLIGENCE
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
                >
                    Predict Climate Risk with <br className="hidden md:block" />
                    <span className="text-gradient">Unparalleled Precision</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Cosmeon platform fuses satellite data, IoT telemetry, and AI models to provide actionable, real-time climate hazard forecasting.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="https://cosmeon.onrender.com" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="w-full sm:w-auto group">
                            Launch Engine
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        Book a Demo
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
