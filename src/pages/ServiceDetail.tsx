import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Scale } from 'lucide-react';
import { services } from '../data/services';
import Reveal from '../components/Reveal';

const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen bg-saudi-navy flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">الخدمة غير موجودة</h1>
                <Link to="/services" className="text-saudi-gold hover:underline">
                    العودة للخدمات
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`${service.title} | مكتب خالد الدرعاني`}</title>
                <meta name="description" content={service.shortDescription} />
            </Helmet>

            <motion.main
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="pt-32 pb-20 bg-saudi-navy min-h-screen relative overflow-hidden"
            >
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-saudi-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-saudi-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-saudi-gold transition-colors mb-8 group">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>العودة للخدمات</span>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <Reveal width="100%">
                                <header className="mb-12">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-saudi-gold/30 rounded-full bg-saudi-gold/5 text-saudi-gold text-xs font-bold mb-6">
                                        <Scale className="w-3 h-3" />
                                        <span>خدمة قانونية متخصصة</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                                        {service.title}
                                    </h1>
                                    <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                        {service.fullDescription}
                                    </p>
                                </header>
                            </Reveal>

                            <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 mb-12 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white mb-6 border-r-4 border-saudi-gold pr-4">
                                    نطاق العمل والتمثيل
                                </h3>
                                <div className="space-y-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        نقدم في هذا المجال الحلول القانونية المتكاملة التي تشمل:
                                    </p>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {[1, 2, 3, 4].map((item) => (
                                            <li key={item} className="flex items-start gap-3 bg-white/5 p-4 rounded-sm">
                                                <CheckCircle className="w-5 h-5 text-saudi-gold shrink-0 mt-1" />
                                                <span className="text-gray-300">
                                                    نص تجريبي للنقاط التفصيلية للخدمة ليعطي مظهراً واقعياً وتفصيلياً لما يتم تقديمه ضمن {service.title}.
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (CTA & Other Services) */}
                        <div className="space-y-8">
                            <div className="bg-saudi-gold p-8 rounded-sm shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-2xl font-black text-saudi-navy mb-4">هل تحتاج استشارة في هذه القضية؟</h3>
                                <p className="text-saudi-navy/80 font-medium mb-8 leading-relaxed">
                                    فريقنا مستعد لدراسة ملف قضيتك وتقديم الرأي القانوني السديد لحماية مصالحك.
                                </p>
                                <Link
                                    to="/contact"
                                    className="block w-full py-4 bg-saudi-navy text-white text-center font-bold hover:bg-saudi-navy/90 transition-colors shadow-lg"
                                >
                                    طلب استشارة فورية
                                </Link>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
                                <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-saudi-gold"></span>
                                    خدمات ذات صلة
                                </h4>
                                <div className="space-y-4">
                                    {services.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                                        <Link
                                            key={s.id}
                                            to={`/services/${s.slug}`}
                                            className="block p-3 hover:bg-white/5 rounded transition-colors text-gray-400 hover:text-saudi-gold text-sm"
                                        >
                                            {s.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.main>
        </>
    );
};

export default ServiceDetail;
