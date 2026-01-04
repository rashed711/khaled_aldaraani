import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import { articles } from '../data/articles';

const Articles: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>المقالات والدراسات | خالد الدرعاني للمحاماة</title>
                <meta name="description" content="رؤى قانونية وتحليلات معمقة حول أحدث الأنظمة والتشريعات في المملكة العربية السعودية." />
            </Helmet>

            <main className="bg-saudi-navy min-h-screen">
                <PageHero
                    title="المكتبة القانونية"
                    subtitle="نشارككم أحدث الرؤى والتحليلات القانونية لتعزيز الوعي الحقوقي ومواكبة التطورات التشريعية."
                    image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80"
                />

                <div className="container mx-auto px-6 py-20">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-saudi-gold/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                            >
                                <div className="h-56 md:h-64 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-saudi-navy/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-saudi-navy/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold text-saudi-gold border border-saudi-gold/20 shadow-lg">
                                            {article.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                                    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-saudi-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="flex items-center gap-2 text-gray-400 text-[10px] md:text-xs font-bold mb-4">
                                        <div className="p-1.5 bg-white/5 rounded-full text-saudi-gold">
                                            <Calendar className="w-3 h-3" />
                                        </div>
                                        <span>{article.date}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-saudi-gold transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 group-hover:text-gray-300">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            to={`/articles/${article.slug}`}
                                            className="inline-flex items-center gap-2 text-white text-sm font-bold group/link"
                                        >
                                            <span className="border-b border-saudi-gold/30 pb-0.5 group-hover/link:border-saudi-gold transition-colors">اقرأ المقال كاملاً</span>
                                            <ArrowLeft className="w-4 h-4 text-saudi-gold transition-transform group-hover/link:-translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Articles;
