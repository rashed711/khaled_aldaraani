import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Scale, Award, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>عن المكتب | خالد الدرعاني للمحاماة</title>
                <meta name="description" content="تعرف على مكتب خالد الدرعاني للمحاماة، رؤيتنا، رسالتنا، وقيمنا الراسخة في تحقيق العدالة." />
            </Helmet>

            <main className="bg-saudi-navy min-h-screen">
                <PageHero
                    title="نرسخ مفاهيم العدالة الناجزة"
                    subtitle="مكتب خالد الدرعاني للمحاماة والاستشارات القانونية، صرح قانوني رائد يجمع بين الخبرة العريقة والفهم العميق للأنظمة الحديثة."
                    image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                />

                <div className="py-20"></div> {/* Spacer for consistency if needed, or just let content flow */}

                {/* Vision & Mission */}
                <div className="container mx-auto px-6 mb-16 md:mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm hover:border-saudi-gold/30 transition-colors"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-saudi-gold/10 rounded-full flex items-center justify-center mb-6 text-saudi-gold">
                                <Eye className="w-7 h-7 md:w-8 md:h-8" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">رؤيتنا</h2>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                أن نكون الخيار الأول والشريك الاستراتيجي الموثوق في تقديم الحلول القانونية المبتكرة في المملكة العربية السعودية، مساهمين بفعالية في تحقيق مستهدفات رؤية 2030 في القطاع العدلي.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm hover:border-saudi-gold/30 transition-colors"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-saudi-gold/10 rounded-full flex items-center justify-center mb-6 text-saudi-gold">
                                <Target className="w-7 h-7 md:w-8 md:h-8" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">رسالتنا</h2>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                تقديم خدمات قانونية بمعايير عالمية، ترتكز على الأمانة والمهنية، بما يضمن حماية مصالح عملائنا وتحقيق العدالة، من خلال فريق من النخبة القانونية المتميزة.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Our Philosophy - New Added Section */}
                <div className="container mx-auto px-6 mb-20">
                    <Reveal width="100%">
                        <div className="relative bg-gradient-to-br from-saudi-gold/10 to-transparent border border-saudi-gold/20 p-8 md:p-12 rounded-xl text-center overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-saudi-gold/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">فلسفتنا في العمل</h3>
                                <p className="text-lg md:text-xl text-gray-300 leading-loose max-w-4xl mx-auto font-medium">
                                    "لا نكتفي بتقديم الاستشارة القانونية فحسب، بل نصنع الحلول التي تسبق التحديات. نؤمن بأن المحاماة الناجحة ترتكز على <span className="text-saudi-gold">الاستباقية</span>، <span className="text-saudi-gold">الدقة المتناهية</span>، و<span className="text-saudi-gold">الفهم العميق</span> لأبعاد كل قضية، لنكون ليس مجرد ممثلين قانونيين، بل شركاء نجاح حقيقيين لعملائنا."
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Values Section */}
                <div className="bg-saudi-navy-light py-24 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-white mb-4">قيمنا الراسخة</h2>
                            <div className="w-20 h-1 bg-saudi-gold mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: ShieldCheck, title: "الأمانة والنزاهة", desc: "نلتزم بأعلى معايير الأخلاق المهنية والشفافية التامة." },
                                { icon: Scale, title: "العدالة", desc: "نسعى دوماً لإحقاق الحق ونصرة المظلوم وفق الشرع والنظام." },
                                { icon: Award, title: "التميز", desc: "لا نرضى بأقل من الجودة الفائقة في كل ما نقدمه من استشارات." },
                                { icon: Users, title: "الخصوصية", desc: "أسرار عملائنا في مأمن، وسريتها خط أحمر لا يمكن تجاوزه." }
                            ].map((val, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="w-20 h-20 mx-auto bg-saudi-navy border border-saudi-gold/20 rounded-full flex items-center justify-center mb-6 text-saudi-gold group-hover:bg-saudi-gold group-hover:text-saudi-navy transition-all duration-300 shadow-xl shadow-black/20">
                                        <val.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
