
import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  'فهم عميق وشامل للأنظمة واللوائح في المملكة',
  'التزام كامل بأخلاقيات المهنة ومعايير السرية',
  'تواصل مستمر وشفاف مع العميل في كافة المراحل',
  'سرعة الاستجابة وتقديم الحلول العملية المبتكرة',
  'كادر قانوني مؤهل وذو خبرة في مختلف التخصصات'
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-32 bg-saudi-navy">
      <div className="container mx-auto px-6">
        <div className="bg-prestige-surface rounded-3xl p-12 md:p-20 border border-white/5">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-saudi-gold font-bold text-xs uppercase mb-6 block">لماذا تختارنا؟</span>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                المهنية، النزاهة، والنتائج الملموسة
              </h3>
              <p className="text-stone-gray text-xl leading-relaxed mb-10">
                نحن لا نسعى فقط لتقديم خدمة قانونية، بل نهدف لبناء علاقة قائمة على الثقة والنجاح المشترك مع كل عميل.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-6 p-6 rounded-xl border border-white/5 bg-saudi-navy/50 group hover:border-saudi-gold/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-saudi-gold group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-white font-bold text-lg group-hover:text-saudi-gold transition-colors">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
