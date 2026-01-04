import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const Privacy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>سياسة الخصوصية | مكتب خالد الدرعاني</title>
                <meta name="description" content="سياسة الخصوصية لمكتب خالد الدرعاني للمحاماة والاستشارات القانونية. تعرف على كيفية جمعنا واستخدامنا لبياناتك." />
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
                                سياسة الخصوصية
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <Reveal width="100%">
                        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-xl max-w-4xl mx-auto">
                            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-saudi-gold">
                                <p>تاريخ آخر تحديث: {new Date().toLocaleDateString('ar-EG')}</p>

                                <h3>مقدمة</h3>
                                <p>
                                    نحترم في <strong>مكتب خالد الدرعاني للمحاماة والاستشارات القانونية</strong> خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية تعاملنا مع معلوماتك الشخصية عند زيارتك لموقعنا الإلكتروني واستخدام خدماتنا.
                                </p>

                                <h3>البيانات التي نجمعها</h3>
                                <p>قد نقوم بجمع ومعالجة البيانات التالية عنك:</p>
                                <ul>
                                    <li><strong>معلومات الهوية:</strong> الاسم الأول، اسم العائلة.</li>
                                    <li><strong>معلومات الاتصال:</strong> عنوان البريد الإلكتروني، وأرقام الهاتف.</li>
                                    <li><strong>البيانات التقنية:</strong> عنوان بروتوكول الإنترنت (IP)، نوع المتصفح وإصداره، وإعدادات المنطقة الزمنية والموقع.</li>
                                </ul>

                                <h3>كيفية استخدامنا لبياناتك</h3>
                                <p>نستخدم بياناتك الشخصية فقط عندما يسمح لنا النظام بذلك. وسنستخدم بياناتك الشخصية في الحالات التالية:</p>
                                <ul>
                                    <li>عندما نحتاج إلى تنفيذ العقد الذي نحن بصدد إبرامه أو أبرمناه معك.</li>
                                    <li>لتحسين موقعنا وخدماتنا وتجربة العملاء.</li>
                                    <li>للتواصل معك بشأن استفساراتك أو لتزويدك بمعلومات طلبتها.</li>
                                </ul>

                                <h3>أمن البيانات</h3>
                                <p>
                                    لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية عرضاً أو استخدامها أو الوصول إليها بطريقة غير مصرح بها أو تغييرها أو الكشف عنها.
                                </p>

                                <h3>حقوقك القانونية</h3>
                                <p>
                                    بموجب أنظمة حماية البيانات في المملكة العربية السعودية، لديك حقوق فيما يتعلق ببياناتك الشخصية، بما في ذلك الحق في طلب الوصول إلى بياناتك الشخصية وتصحيحها ومسحها.
                                </p>

                                <h3>اتصل بنا</h3>
                                <p>
                                    إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا عبر صفحة <a href="/contact" className="text-saudi-gold hover:underline">تواصل معنا</a>.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </main>
        </>
    );
};

export default Privacy;
