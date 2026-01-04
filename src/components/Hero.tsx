import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-saudi-navy overflow-hidden">
      {/* Background with Overlay */}
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-saudi-navy/95 via-saudi-navy/60 to-transparent/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-saudi-navy via-transparent to-transparent z-10"></div>
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop"
          alt="مكتب خالد الدرعاني للمحاماة"
          className="w-full h-full object-cover opacity-60 will-change-transform"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 border border-saudi-gold/30 rounded-full bg-saudi-gold/5 backdrop-blur-sm mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-saudi-gold animate-pulse"></span>
              <span className="text-saudi-gold text-xs md:text-sm font-bold tracking-wide">التميز القانوني الأول في المملكة</span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 md:mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              نصون <span className="text-saudi-gold relative inline-block">
                الحق
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-saudi-gold opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </svg>
              </span>
              <br />
              ونحمي المستقبل
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-8 md:mb-12 max-w-xl md:max-w-2xl border-r-2 border-saudi-gold pr-4 md:pr-6">
              شراكة قانونية استراتيجية تتجاوز التمثيل التقليدي، لتقدم حلولاً حاسمة للقضايا المعقدة وحماية استباقية لمصالحكم.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link
                to="/contact"
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-saudi-gold text-saudi-navy rounded-sm font-black text-base md:text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(139,107,50,0.3)] text-center animate-[pulse_3s_infinite] hover:animate-none"
              >
                <span className="animate-shimmer"></span>
                <span className="relative z-10 flex items-center gap-2">
                  اطلب استشارة مجانية
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              <Link
                to="/services"
                className="group px-10 py-5 bg-transparent border border-white/20 text-white rounded-sm font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2"
              >
                استعرض خبراتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </div >

      {/* Decorative Elements */}
      < div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-saudi-navy to-transparent z-10" ></div >
    </section >
  );
};

export default Hero;
