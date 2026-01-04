
import React, { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-saudi-navy">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt="بيئة قانونية احترافية"
            className="w-full h-full object-cover scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-saudi-navy/95 via-saudi-navy/60 to-saudi-navy/20"></div>
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl text-right">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-saudi-gold/20 text-saudi-gold text-xs font-bold mb-8 bg-saudi-navy/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-saudi-gold"></span>
            نلتزم بالعدالة والمهنية لخدمة كافة فئات المجتمع
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight drop-shadow-sm">
            حلول قانونية ذكية… <br />
            <span className="gold-elegant-text">لحماية مصالحكم وضمان حقوقكم</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-md">
            في مكتب خالد الدرعاني، نؤمن بأن القانون هو الركيزة الأساسية للنجاح. نقدم خدماتنا <span className="text-saudi-gold font-bold">بمنهجية حديثة</span> تضمن للأفراد والشركات أعلى مستويات الأمان القانوني.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="px-12 py-5 bg-saudi-gold text-white rounded-xl font-black text-center hover:bg-gold-bright transition-all duration-300 shadow-xl shadow-saudi-gold/10"
            >
              تواصل معنا الآن
            </a>
            <a
              href="#services"
              className="px-12 py-5 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-center hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
            >
              استعرض خدماتنا القانونية
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 flex items-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-700 h-1 rounded-full ${
              index === currentSlide ? 'w-16 bg-saudi-gold' : 'w-4 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
