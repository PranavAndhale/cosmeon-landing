import * as React from 'react';

export function Footer() {
    return (
        <footer className="border-t border-glass-border bg-background pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                            <span className="text-lg font-bold tracking-wider text-foreground">COSMEON</span>
                        </div>
                        <p className="text-foreground/60 max-w-sm mb-6">
                            Predicting climate risks globally through AI, sensor fusion, and multi-modal spatial intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-foreground/60">
                            <li><a href="#" className="hover:text-foreground transition-colors">Risk Engine</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Sensor Fusion</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Financial Impact</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">API Access</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-foreground/60">
                            <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50 gap-4">
                    <p>© {new Date().getFullYear()} Cosmeon. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
