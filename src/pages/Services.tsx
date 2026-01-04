import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Landmark, ShieldAlert, Users, Briefcase, Scale, Lightbulb, Globe, TrendingUp, Gavel, FileText, CheckCircle, XCircle, DollarSign, Headphones } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { services } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
    Building2, Landmark, ShieldAlert, Users, Briefcase, Scale, Lightbulb, Globe, TrendingUp, Gavel, FileText, CheckCircle, XCircle, DollarSign, Headphones
};

const Services: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>خدماتنا | خالد الدرعاني للمحاماة</title>
                <meta name="description" content="تصفح خدماتنا القانونية المتخصصة في القضايا التجارية، العقارية، الجنائية، والعمالية." />
            </Helmet>

            <main className="bg-saudi-navy min-h-screen">
                <PageHero
                    title="قطاعات الخبرة"
                    subtitle="نقدم مجموعة شاملة من الخدمات القانونية المصممة لتلبية احتياجات الأفراد والشركات بأعلى معايير المهنية."
                    image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                />

                <div className="container mx-auto px-6 py-20">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon] || Scale;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 50 }}
                                    className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-saudi-gold/20 hover:border-saudi-gold/40"
                                >
                                    {/* Abstract Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-saudi-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Icon with Continuous Float */}
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                                        className="relative w-14 h-14 md:w-16 md:h-16 bg-saudi-gold/10 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-saudi-gold/50 group-hover:bg-saudi-gold group-hover:text-saudi-navy transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-saudi-gold"
                                    >
                                        <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                                    </motion.div>

                                    <h3 className="relative text-xl md:text-2xl font-black text-white mb-4 group-hover:text-saudi-gold transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="relative text-gray-400 text-sm md:text-base mb-8 leading-relaxed h-auto md:h-14 overflow-hidden group-hover:text-gray-300 transition-colors">
                                        {service.shortDescription}
                                    </p>

                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="relative inline-flex items-center gap-3 text-white font-bold text-xs md:text-sm bg-white/10 px-6 py-3 rounded-full hover:bg-saudi-gold hover:text-saudi-navy transition-all group-hover:shadow-lg"
                                    >
                                        تفاصيل الخدمة
                                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Services;
