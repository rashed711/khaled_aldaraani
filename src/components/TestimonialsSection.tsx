import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'عبدالله السعدون',
        role: 'رجل أعمال',
        content: 'تعامل راقي واحترافية عالية في إدارة القضايا التجارية. أنصح بشدة بالتعامل معهم لخبرتهم الطويلة.',
    },
    {
        name: 'مؤسسة الإعمار',
        role: 'شركة مقاولات',
        content: 'الفريق القانوني لديهم متميز جداً في صياغة العقود وحل النزاعات العمالية بشكل ودي وسريع.',
    },
    {
        name: 'سارة العتيبي',
        role: 'عميلة',
        content: 'خدمة الاستشارات لديهم دقيقة جداً. ساعدوني في استعادة حقوقي بوقت قياسي وبأقل التكاليف.',
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-saudi-navy/50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">ماذا يقول عملاؤنا</h2>
                    <div className="w-20 h-1 bg-saudi-gold mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-lg border-t-4 border-saudi-gold relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-saudi-gold/20 mb-4" />
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic pt-8 relative z-10">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-200 dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-saudi-gold">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.name}</h4>
                                    <p className="text-xs text-saudi-gold font-bold uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
