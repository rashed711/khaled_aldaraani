import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Landmark, ShieldAlert, Users, Briefcase, Scale, Lightbulb, Globe, TrendingUp, Gavel, FileText, CheckCircle, XCircle, DollarSign, Headphones } from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
    Building2, Landmark, ShieldAlert, Users, Briefcase, Scale, Lightbulb, Globe, TrendingUp, Gavel, FileText, CheckCircle, XCircle, DollarSign, Headphones
};

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-saudi-navy relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-saudi-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-0.5 bg-saudi-gold"></span>
                            <span className="text-saudi-gold font-bold uppercase tracking-wider text-sm">قطاعات الخبرة</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            تخصصات قانونية شاملة <br />
                            <span className="text-gray-400">لأدق التفاصيل</span>
                        </h2>
                    </div>
                    <Link
                        to="/services"
                        className="group flex items-center gap-2 text-white border-b border-saudi-gold/30 pb-1 hover:text-saudi-gold transition-colors"
                    >
                        <span className="font-bold">جميع الخدمات</span>
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 6).map((service, index) => {
                        const Icon = iconMap[service.icon] || Scale;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 rounded-xl"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-saudi-gold/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-saudi-gold/20"></div>

                                <Icon className="w-10 h-10 text-saudi-gold mb-6 relative z-10" strokeWidth={1.5} />

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-saudi-gold transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {service.shortDescription}
                                </p>

                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center gap-2 text-saudi-gold text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                >
                                    اقرأ المزيد
                                    <ArrowLeft className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
