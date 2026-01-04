
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-saudi-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-prestige-surface rounded-3xl overflow-hidden grid lg:grid-cols-5 border border-white/5">
          <div className="lg:col-span-2 bg-saudi-gold p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black mb-8">تواصل معنا</h3>
              <p className="text-white/80 mb-16 text-lg font-medium">
                فريقنا المتخصص مستعد للاستماع إليكم وتقديم الدعم القانوني اللازم بكل أمانة واحترافية.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                  </div>
                  <p className="font-bold">الرياض، المملكة العربية السعودية</p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/></svg>
                  </div>
                  <p className="font-bold">info@derani-law.com</p>
                </div>
              </div>
            </div>
            <div className="pt-10 text-[10px] font-black opacity-60 uppercase tracking-widest">
              نلتزم بأقصى درجات السرية المهنية
            </div>
          </div>
          
          <div className="lg:col-span-3 p-12 bg-prestige-surface">
            <h4 className="text-2xl font-black text-white mb-10">طلب استشارة قانونية</h4>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <input type="text" placeholder="الاسم بالكامل" className="w-full px-6 py-4 bg-saudi-navy border border-white/5 text-white rounded-xl focus:border-saudi-gold/50 focus:outline-none placeholder:text-slate-600" />
                <input type="tel" placeholder="رقم الهاتف" className="w-full px-6 py-4 bg-saudi-navy border border-white/5 text-white rounded-xl focus:border-saudi-gold/50 focus:outline-none placeholder:text-slate-600" />
              </div>
              <textarea rows={4} placeholder="يرجى كتابة تفاصيل استفساركم هنا..." className="w-full px-6 py-4 bg-saudi-navy border border-white/5 text-white rounded-xl focus:border-saudi-gold/50 focus:outline-none placeholder:text-slate-600 resize-none"></textarea>
              <button type="submit" className="w-full py-5 bg-saudi-gold text-white rounded-xl font-black text-lg hover:bg-gold-bright transition-all">
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
