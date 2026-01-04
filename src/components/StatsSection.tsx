import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Users, Gavel, Scale, Award } from 'lucide-react';
import { useRef } from 'react';

const stats = [
    { icon: Users, value: 500, suffix: '+', label: 'عميل راضٍ' },
    { icon: Gavel, value: 98, suffix: '%', label: 'نحاح قضايا' },
    { icon: Scale, value: 15, suffix: '+', label: 'سنة خبرة' },
    { icon: Award, value: 50, suffix: '+', label: 'جائزة وتقدير' },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { duration: 2000, bounce: 0 });
    const displayValue = useTransform(springValue, (current) => Math.floor(current));

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-black mb-2 flex justify-center items-center">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};


const StatsSection: React.FC = () => {
    return (
        <section className="py-20 bg-saudi-gold text-saudi-navy relative overflow-hidden">
            {/* Texture/Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1a2c4e 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            {/* Animated Rings Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-saudi-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-saudi-navy/10 rounded-full flex items-center justify-center group-hover:bg-saudi-navy group-hover:text-saudi-gold transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                                <stat.icon className="w-8 h-8" />
                            </div>

                            <Counter value={stat.value} suffix={stat.suffix} />

                            <p className="font-bold text-lg opacity-80 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
