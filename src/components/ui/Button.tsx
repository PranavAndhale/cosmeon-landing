import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
                    {
                        'bg-foreground text-background hover:bg-foreground/90': variant === 'primary',
                        'bg-glass border border-glass-border hover:bg-glass/50': variant === 'secondary',
                        'border border-glass-border bg-transparent hover:bg-glass': variant === 'outline',
                        'hover:bg-glass text-foreground': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 py-2': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
