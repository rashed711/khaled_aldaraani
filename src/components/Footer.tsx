import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-saudi-navy border-t border-white/10 pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <img
                src="https://l.top4top.io/p_365645i031.png"
                alt="Logo"
                className="w-16 h-16 object-contain drop-shadow-2xl"
              />
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tight">خالد الدرعاني</span>
                <span className="text-[10px] text-saudi-gold tracking-[0.1em] uppercase font-black opacity-80">محامون ومستشارون قانونيون</span>
              </div>
            </div>
            <p className="text-stone-gray leading-relaxed text-base max-w-sm font-medium">
              مكتب رائد يهدف لتقديم خدمات قانونية نوعية تساهم في تعزيز العدالة ودعم التنمية الاقتصادية في ظل رؤية المملكة ٢٠٣٠.
            </p>
          </div>

          <div className="col-span-1">
            <h5 className="font-bold text-white text-lg mb-8 border-r-4 border-saudi-gold pr-4">روابط سريعة</h5>
            <ul className="space-y-5 text-base text-stone-gray font-semibold">
              <li><Link to="/" className="hover:text-saudi-gold transition-all hover:pr-2">الرئيسية</Link></li>
              <li><Link to="/about" className="hover:text-saudi-gold transition-all hover:pr-2">عن المكتب</Link></li>
              <li><Link to="/services" className="hover:text-saudi-gold transition-all hover:pr-2">مجالات الخبرة</Link></li>
              <li><Link to="/contact" className="hover:text-saudi-gold transition-all hover:pr-2">اتصل بنا</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="font-bold text-white text-lg mb-8 border-r-4 border-saudi-gold pr-4">ساعات العمل</h5>
            <ul className="space-y-4 text-sm text-stone-gray font-bold">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>الأحد - الخميس</span> <span className="text-white">٨:٠٠ ص - ٥:٠٠ م</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>الجمعة والسبت</span> <span className="text-saudi-gold font-black">عطلة رسمية</span></li>
              <li className="flex justify-between pt-1"><span>المواعيد المسائية</span> <span className="text-white">بناءً على طلب مسبق</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-xs text-stone-gray font-black uppercase tracking-[0.1em] opacity-80 text-center md:text-right">
            جميع الحقوق محفوظة © {currentYear} مكتب خالد الدرعاني للمحاماة والاستشارات القانونية
          </p>
          <div className="flex gap-8 text-[10px] md:text-xs text-stone-gray font-black uppercase tracking-[0.1em]">
            <Link to="/privacy" className="hover:text-saudi-gold transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-saudi-gold transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
