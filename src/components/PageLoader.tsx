import React, { useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageLoaderProps {
    forceActive?: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ forceActive = false }) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        if (forceActive) {
            setIsLoading(true);
            return;
        }

        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s loader duration

        return () => clearTimeout(timer);
    }, [location.pathname, forceActive]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-saudi-navy flex flex-col items-center justify-center"
                >
                    <div className="relative">
                        {/* Golden Glow Behind */}
                        <div className="absolute inset-0 bg-saudi-gold/20 blur-3xl rounded-full scale-150 animate-pulse"></div>

                        {/* Logo Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10 p-6 rounded-3xl border border-saudi-gold/30 bg-saudi-navy/50 backdrop-blur-md shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                        >
                            <img
                                src="https://c.top4top.io/p_3656be96m1.png"
                                alt="Loading..."
                                className="w-24 h-24 object-contain drop-shadow-2xl animate-[pulse_2s_infinite]"
                            />
                        </motion.div>
                    </div>

                    {/* Elegant Loading Text */}
                    <div className="mt-8 flex flex-col items-center gap-3">
                        <span className="text-saudi-gold font-bold text-lg tracking-widest uppercase animate-pulse">
                            جاري التحميل
                        </span>
                        <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-1/2 h-full bg-gradient-to-r from-transparent via-saudi-gold to-transparent"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
