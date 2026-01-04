import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Static Ambient Gradients - GPU accelerated, no layout shifts */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saudi-gold/5 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-saudi-navy/10 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

            {/* Reduced Floating Particles */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-saudi-gold/10 rounded-full will-change-transform"
                    style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: Math.random() * 15 + 15, // Slower animation
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundEffects;
