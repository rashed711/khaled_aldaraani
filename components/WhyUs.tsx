
import React from 'react';

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
                <div key={idx} className="flex items-center gap-6 p-6 rounded-xl border border-white/5 bg-saudi-navy/50">
                  <div className="w-2 h-2 rounded-full bg-saudi-gold"></div>
                  <span className="text-white font-bold text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
