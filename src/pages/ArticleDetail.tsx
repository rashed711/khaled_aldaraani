import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock, Share2 } from 'lucide-react';
import { articles } from '../data/articles';
import Reveal from '../components/Reveal';

const ArticleDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-saudi-navy flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">المقال غير موجود</h1>
                <Link to="/articles" className="text-saudi-gold hover:underline">
                    العودة للمقالات
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`${article.title} | مقالات مكتب خالد الدرعاني`}</title>
                <meta name="description" content={article.excerpt} />
            </Helmet>

            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-saudi-navy min-h-screen pb-24"
            >
                {/* Article Header Image (Parallax-like) */}
                <div className="relative h-[60vh] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-saudi-navy via-saudi-navy/50 to-transparent z-10"></div>
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
                        <div className="container mx-auto px-6">
                            <Link to="/articles" className="inline-flex items-center gap-2 text-white/80 hover:text-saudi-gold transition-colors mb-6 backdrop-blur-md bg-black/20 px-3 py-1 rounded-full w-fit">
                                <ArrowRight className="w-4 h-4" />
                                <span className="text-sm">العودة للمقالات</span>
                            </Link>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl drop-shadow-xl">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 -mt-10 relative z-30">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                        {/* Article Meta Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            <Reveal width="100%" delay={0.2}>
                                <div className="bg-saudi-navy/90 border border-white/10 backdrop-blur-xl p-6 rounded-sm shadow-xl sticky top-24">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-saudi-gold">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs text-gray-500 uppercase tracking-wider">الكاتب</span>
                                                <span className="font-bold">فريق التحرير القانوني</span>
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10"></div>

                                        <div className="flex items-center gap-3 text-gray-300">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-saudi-gold">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs text-gray-500 uppercase tracking-wider">التاريخ</span>
                                                <span className="font-bold">{article.date}</span>
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10"></div>

                                        <div className="flex items-center gap-3 text-gray-300">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-saudi-gold">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="block text-xs text-gray-500 uppercase tracking-wider">وقت القراءة</span>
                                                <span className="font-bold">5 دقائق</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Article Content */}
                        <div className="lg:col-span-3">
                            <Reveal width="100%">
                                <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm mb-12">
                                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-serif mb-12 border-l-4 border-saudi-gold pl-6 italic opacity-90">
                                        {article.excerpt}
                                    </p>

                                    <div
                                        className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:text-white prose-p:text-gray-300 prose-p:leading-loose prose-a:text-saudi-gold hover:prose-a:text-white prose-strong:text-white prose-li:text-gray-300"
                                        dangerouslySetInnerHTML={{ __html: article.content }}
                                    />
                                </div>
                            </Reveal>

                            {/* Share */}
                            <Reveal width="100%" delay={0.4}>
                                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                                    <span className="text-lg font-bold text-white">شارك المقال:</span>
                                    <div className="flex gap-4">
                                        <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-saudi-gold hover:text-saudi-navy transition-all hover:scale-110">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                    </div>
                </div>
            </motion.main>
        </>
    );
};

export default ArticleDetail;
