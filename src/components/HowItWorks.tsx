
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'الاستماع والتحليل',
    desc: 'دراسة وافية لاحتياجات العميل وتحليل الجوانب القانونية للقضية.'
  },
  {
    num: '02',
    title: 'صياغة الاستراتيجية',
    desc: 'وضع خطة قانونية دقيقة تضمن تحقيق أفضل النتائج ضمن الإطار النظامي.'
  },
  {
    num: '03',
    title: 'التنفيذ والمتابعة',
    desc: 'باشر الإجراءات القانونية مع إبقاء العميل على اطلاع دائم بمسار القضية.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-saudi-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-saudi-gold font-bold text-xs uppercase mb-4 block tracking-widest">منهجية العمل</span>
          <h3 className="text-4xl md:text-5xl font-black text-white">خطوات مدروسة نحو العدالة</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-6xl font-black text-saudi-gold/20 mb-6 transition-colors group-hover:text-saudi-gold/50">
                {step.num}
              </div>
              <h4 className="text-2xl font-black text-white mb-4">{step.title}</h4>
              <p className="text-stone-gray max-w-xs mx-auto leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
