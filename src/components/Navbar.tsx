'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                    <span className="text-xl font-bold tracking-wider text-foreground">COSMEON</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Platform</a>
                    <a href="#solutions" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Solutions</a>
                    <a href="#technology" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Technology</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://cosmeon.onrender.com" target="_blank" rel="noopener noreferrer">
                        <Button variant={scrolled ? 'primary' : 'outline'} size="sm">
                            Launch Engine
                        </Button>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
