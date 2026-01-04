import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';

const ArticlesSection: React.FC = () => {
    return (
        <section className="py-24 bg-saudi-navy border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 justify-center">
                        <span className="w-8 h-0.5 bg-saudi-gold"></span>
                        <span className="text-saudi-gold font-bold uppercase tracking-wider text-sm">الرؤية القانونية</span>
                        <span className="w-8 h-0.5 bg-saudi-gold"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        أحدث المقالات والدراسات
                    </h2>
                    <p className="text-gray-400 text-lg">
                        نشارككم المعرفة القانونية ورؤيتنا حول أحدث التطورات في المنظومة العدلية.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white/5 border border-white/10 overflow-hidden hover:border-saudi-gold/30 transition-all duration-500"
                        >
                            <div className="aspect-w-16 aspect-h-10 relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-saudi-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs text-saudi-gold mb-4 font-bold">
                                    <span className="uppercase tracking-wider">{article.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <Calendar className="w-3 h-3" />
                                        <span>{article.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-saudi-gold transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <Link
                                    to={`/articles/${article.slug}`}
                                    className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-saudi-gold/30 pb-1 group-hover:border-saudi-gold transition-colors"
                                >
                                    اقرأ المقال كاملاً
                                    <ArrowLeft className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;
