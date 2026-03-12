'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Layers, Activity, ShieldAlert, Cpu } from 'lucide-react';

const features = [
    {
        icon: <ShieldAlert className="w-6 h-6 text-accent-cyan" />,
        title: 'Compound Risk Engine',
        description: 'Analyze cascading hazards in real-time, integrating multi-modal data streams for comprehensive risk assessment.',
    },
    {
        icon: <Activity className="w-6 h-6 text-accent" />,
        title: 'Hyper-Local Accuracy',
        description: 'Pinpoint climate threats down to a 10-meter resolution using continuous satellite telemetry and ground sensors.',
    },
    {
        icon: <Layers className="w-6 h-6 text-purple-400" />,
        title: 'Actionable Insights',
        description: 'Go beyond raw data. Get predictive impact analysis including estimated financial loss and vulnerability scoring.',
    },
    {
        icon: <Cpu className="w-6 h-6 text-accent-cyan" />,
        title: 'Adaptive AI Fusion',
        description: 'Our proprietary machine learning models continuously retrain to adjust weighting dynamically as conditions change.',
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Intelligence Beyond Data</h2>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Powered by next-generation deep learning networks to analyze variables across time and space.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <GlassCard
                            key={index}
                            withHover
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col min-h-[280px]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-foreground/60 leading-relaxed text-sm flex-grow">
                                {feature.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
