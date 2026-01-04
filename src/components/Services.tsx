
import React from 'react';

const services = [
  {
    title: 'قضايا الشركات والأعمال',
    desc: 'تأسيس الشركات، صياغة العقود التجارية، وإدارة عمليات الاندماج والاستحواذ باحترافية.'
  },
  {
    title: 'التقاضي وتسوية المنازعات',
    desc: 'تمثيل قانوني قوي أمام كافة المحاكم واللجان القضائية لضمان استرداد الحقوق وحسم النزاعات.'
  },
  {
    title: 'الاستشارات القانونية',
    desc: 'تقديم الرأي القانوني المتخصص للأفراد والشركات لتجنب المخاطر وضمان الامتثال للأنظمة.'
  },
  {
    title: 'الحقوق المدنية والعمالية',
    desc: 'خدمة المواطنين والمقيمين في قضايا الأحوال الشخصية، العقارات، والمنازعات العمالية.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-saudi-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-24">
          <span className="text-saudi-gold font-bold text-xs uppercase mb-4 block tracking-widest">مجالات الاختصاص</span>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
            خدمات متكاملة تلبي تطلعاتكم القانونية
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="card-clean p-10 rounded-2xl flex flex-col h-full group"
            >
              <div className="w-12 h-1 bg-saudi-gold mb-10 group-hover:w-full transition-all duration-500"></div>
              <h4 className="text-xl font-black text-white mb-6 group-hover:text-saudi-gold transition-colors">{service.title}</h4>
              <p className="text-stone-gray leading-relaxed text-sm flex-grow">
                {service.desc}
              </p>
              <div className="mt-10 pt-6">
                <a href="#contact" className="text-[10px] font-black text-saudi-gold inline-flex items-center gap-2 tracking-widest uppercase">
                  طلب استشارة متخصصة
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
