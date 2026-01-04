import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => {
    return (
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-saudi-navy/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-saudi-navy via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4">
                        <div className="h-1 w-20 bg-saudi-gold mx-auto rounded-full mb-6"></div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default PageHero;
