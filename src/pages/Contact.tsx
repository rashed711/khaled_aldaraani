import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>تواصل معنا | مكتب خالد الدرعاني</title>
                <meta name="description" content="تواصل مع مكتب خالد الدرعاني للمحاماة، نحن هنا لخدمتكم والإجابة على استفساراتكم القانونية." />
            </Helmet>

            <main className="bg-saudi-navy min-h-screen">
                <PageHero
                    title="نحن هنا لخدمتكم"
                    subtitle="تواصل معنا اليوم لحجز موعد استشارة أو للاستفسار عن خدماتنا. فريقنا جاهز للرد عليكم."
                    image="https://images.unsplash.com/photo-1423666639041-f14d70fa4c4d?auto=format&fit=crop&q=80"
                />

                <div className="container mx-auto px-6 py-20">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:border-saudi-gold/30 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-saudi-gold/10 rounded-full flex items-center justify-center text-saudi-gold shrink-0">
                                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">اتصل بنا</h3>
                                        <p className="text-gray-400 mb-1 text-sm md:text-base" dir="ltr">+966 50 000 0000</p>
                                        <p className="text-gray-500 text-xs md:text-sm">متاح من الأحد للخميس (8:00 ص - 5:00 م)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:border-saudi-gold/30 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-saudi-gold/10 rounded-full flex items-center justify-center text-saudi-gold shrink-0">
                                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">البريد الإلكتروني</h3>
                                        <p className="text-gray-400 text-sm md:text-base">info@aldaraanilaw.sa</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:border-saudi-gold/30 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-saudi-gold/10 rounded-full flex items-center justify-center text-saudi-gold shrink-0">
                                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">موقعنا</h3>
                                        <p className="text-gray-400 text-sm md:text-base">الرياض، المملكة العربية السعودية</p>
                                        <p className="text-gray-500 text-xs md:text-sm mt-1">طريق الملك فهد، حي العقيق</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/[0.03] border border-white/5 p-6 md:p-10 rounded-sm backdrop-blur-sm"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2">الاسم الكامل</label>
                                        <input type="text" className="w-full bg-saudi-navy border border-white/10 rounded px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:border-saudi-gold transition-colors" placeholder="الاسم" />
                                    </div>
                                    <div>
                                        <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2">رقم الجوال</label>
                                        <input type="tel" className="w-full bg-saudi-navy border border-white/10 rounded px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:border-saudi-gold transition-colors" placeholder="05xxxxxxxx" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2">نوع الاستشارة</label>
                                    <select className="w-full bg-saudi-navy border border-white/10 rounded px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:border-saudi-gold transition-colors">
                                        <option>قضايا تجارية</option>
                                        <option>أحوال شخصية</option>
                                        <option>استشارات عقارية</option>
                                        <option>غير ذلك</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2">تفاصيل الرسالة</label>
                                    <textarea rows={4} className="w-full bg-saudi-navy border border-white/10 rounded px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:border-saudi-gold transition-colors" placeholder="اكتب تفاصيل استفسارك هنا..."></textarea>
                                </div>

                                <button className="w-full bg-saudi-gold text-saudi-navy font-black py-4 rounded hover:bg-gold-bright transition-colors flex items-center justify-center gap-2 text-base md:text-lg">
                                    إرسال الطلب
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
