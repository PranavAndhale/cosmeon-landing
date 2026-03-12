import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface GlassCardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    withHover?: boolean;
}

export function GlassCard({ className, children, withHover = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                'glass rounded-2xl p-6 relative overflow-hidden',
                withHover && 'hover:bg-glass/50 transition-colors duration-300 cursor-pointer',
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
