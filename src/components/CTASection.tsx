import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-saudi-navy">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
                    alt="Law Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-saudi-navy via-saudi-navy/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl">
                    <h2 className="text-white text-4xl md:text-5xl font-black mb-6">هل تحتاج إلى استشارة قانونية؟</h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                        فريقنا من المستشارين ذوي الخبرة جاهز لدراسة قضيتك وتقديم أفضل الحلول القانونية لحماية مصالحك.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="relative px-8 py-4 bg-saudi-gold text-saudi-navy font-black rounded hover:bg-white hover:text-saudi-navy transition-all duration-300 overflow-hidden group animate-[pulse_3s_infinite] hover:animate-none">
                            <span className="animate-shimmer"></span>
                            <span className="relative flex items-center gap-2">
                                اطلب استشارة مجانية
                                <ArrowLeft className="w-5 h-5" />
                            </span>
                        </Link>
                        <Link to="/services" className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all duration-300">
                            استكشف خدماتنا
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
