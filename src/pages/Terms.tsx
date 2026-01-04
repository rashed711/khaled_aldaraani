import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const Terms: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>الشروط والأحكام | مكتب خالد الدرعاني</title>
                <meta name="description" content="الشروط والأحكام الخاصة باستخدام موقع وخدمات مكتب خالد الدرعاني للمحاماة." />
            </Helmet>

            <main className="bg-saudi-navy min-h-screen pb-24">
                {/* Text-Only Hero */}
                <div className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-saudi-navy">
                    <div className="absolute inset-0 bg-gradient-to-r from-saudi-navy via-saudi-navy/80 to-saudi-navy/40 z-0"></div>
                    <div className="container mx-auto px-6 relative z-10 text-center pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                                الشروط والأحكام
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <Reveal width="100%">
                        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-xl max-w-4xl mx-auto">
                            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-saudi-gold">
                                <p>تاريخ آخر تحديث: {new Date().toLocaleDateString('ar-EG')}</p>

                                <h3>1. مقدمة</h3>
                                <p>
                                    مرحباً بكم في موقع <strong>مكتب خالد الدرعاني للمحاماة والاستشارات القانونية</strong>. بزيارتكم لهذا الموقع، فإنكم توافقون على الالتزام بشروط وأحكام الاستخدام هذه، وجميع القوانين واللوائح المعمول بها في المملكة العربية السعودية.
                                </p>

                                <h3>2. الملكية الفكرية</h3>
                                <p>
                                    جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص، التصاميم، الشعارات، والرسومات، هي ملكية حصرية لمكتب خالد الدرعاني ومحمية بموجب قوانين الملكية الفكرية. لا يجوز نسخ أو إعادة استخدام أي جزء من المحتوى دون إذن كتابي مسبق.
                                </p>

                                <h3>3. إخلاء المسؤولية</h3>
                                <p>
                                    المعلومات الواردة في هذا الموقع هي لأغراض المعلومات العامة فقط ولا تعتبر استشارة قانونية رسمية. لا ينبغي الاعتماد على المعلومات الواردة في الموقع لاتخاذ قرارات قانونية دون استشارة محامٍ مختص.
                                </p>

                                <h3>4. الروابط الخارجية</h3>
                                <p>
                                    قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى أو ممارسات الخصوصية لهذه المواقع، ونوفر هذه الروابط لراحتكم فقط.
                                </p>

                                <h3>5. التعديلات</h3>
                                <p>
                                    نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. استمرارك في استخدام الموقع بعد إجراء أي تعديلات يعتبر قبولاً لتلك التعديلات.
                                </p>

                                <h3>6. القانون الواجب التسبيق</h3>
                                <p>
                                    تخضع هذه الشروط والأحكام وتفسر وفقاً لأنظمة المملكة العربية السعودية، ويخضع أي نزاع ينشأ عنها للاختصاص القضائي لمحاكم المملكة.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </main>
        </>
    );
};

export default Terms;
