import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Static Ambient Gradients - GPU accelerated, no layout shifts */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saudi-gold/5 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-saudi-navy/10 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

            {/* Enhanced Floating Particles (Fireflies) */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full will-change-transform shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    style={{
                        background: i % 2 === 0 ? '#D4AF37' : '#F4CF60',
                        width: Math.random() * 2 + 1 + 'px',
                        height: Math.random() * 2 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundEffects;
