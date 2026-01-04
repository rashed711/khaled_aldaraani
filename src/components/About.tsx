
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-saudi-navy relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-prestige-surface rounded-2xl overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
                alt="المقر الرئيسي" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 bg-saudi-gold text-white p-10 rounded-xl hidden md:block max-w-sm shadow-2xl">
              <p className="text-lg font-bold italic mb-4">
                "الالتزام المهني والوضوح مع العميل هما جوهر نجاحنا في تحقيق أفضل النتائج القانونية."
              </p>
              <p className="font-black opacity-70 text-sm tracking-widest">خالد الدرعاني</p>
            </div>
          </div>
          
          <div className="lg:pr-10">
            <span className="text-saudi-gold font-bold text-xs uppercase mb-6 block tracking-widest">نبذة عن المكتب</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
              خبرة قانونية رصينة لخدمة المواطن والمقيم والمستثمر
            </h3>
            <div className="space-y-6 text-stone-gray leading-relaxed text-lg">
              <p>
                تأسس مكتب <span className="text-white font-bold">خالد الدرعاني</span> للمحاماة والاستشارات القانونية ليكون شريكاً قانونياً موثوقاً في المملكة العربية السعودية. نحن نجمع بين الفهم العميق للأنظمة المحلية والمعايير المهنية العالمية.
              </p>
              <p>
                نعمل مع عملائنا بمسؤولية كاملة، حيث نسعى لتوفير بيئة قانونية آمنة تدعم اتخاذ القرارات الصحيحة وتكفل حماية المصالح والحقوق وفق الأنظمة واللوائح المعمول بها، بما يضمن العدالة للجميع.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
              <div>
                <span className="block text-4xl font-black text-white mb-2">+10</span>
                <span className="text-xs text-stone-gray font-bold uppercase tracking-widest">أعوام من التميز النظامي</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-white mb-2">100%</span>
                <span className="text-xs text-stone-gray font-bold uppercase tracking-widest">سرية وخصوصية تامة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
