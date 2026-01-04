export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string; // HTML content or markdown
    date: string;
    category: string;
    image: string;
}

export const articles: Article[] = [
    {
        id: '1',
        title: 'نظام المعاملات المدنية: نقلة نوعية في استقرار العقود',
        slug: 'civil-transactions-law-impact',
        excerpt: 'قراءة قانونية في أثر نظام المعاملات المدنية الجديد على البيئة العدلية واستقرار الالتزامات التعاقدية في المملكة.',
        content: `
      <h2>مقدمة</h2>
      <p>يُعد نظام المعاملات المدنية الجديد حجر الزاوية في المنظومة التشريعية بالمملكة العربية السعودية...</p>
      <h3>أهمية النظام</h3>
      <p>يساهم النظام في تعزيز التنبؤ بالأحكام القضائية وتقليل التباين في الاجتهادات...</p>
    `,
        date: '2025-01-02',
        category: 'أنظمة وتشريعات',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'آليات حماية الملكية الفكرية للمشاريع الناشئة',
        slug: 'ip-protection-startups',
        excerpt: 'دليل قانوني لرواد الأعمال حول كيفية تسجيل العلامات التجارية وحماية الأفكار الابتكارية قبل طرحها في السوق.',
        content: `
      <h2>المخاطر القانونية</h2>
      <p>يواجه رواد الأعمال مخاطر سرقة الأفكار والعلامات التجارية...</p>
      <h3>خطوات الحماية</h3>
      <p>يبدأ الأمر بتسجيل العلامة التجارية لدى الهيئة السعودية للمحكبة الفكرية...</p>
    `,
        date: '2024-12-28',
        category: 'ريادة الأعمال',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'التحكيم التجاري كبديل سريع لفض المنازعات',
        slug: 'commercial-arbitration-benefits',
        excerpt: 'لماذا تلجأ الشركات الكبرى للتحكيم؟ مميزات السرعة والسرية والتخصص في عقود التحكيم مقارنة بالقضاء العام.',
        content: `
      <h2>السرعة والفعالية</h2>
      <p>يوفر التحكيم حلاً سريعاً للنزاعات التجارية المعقدة...</p>
      <h3>السرية</h3>
      <p>تتم جلسات التحكيم في سرية تامة مما يحافظ على سمعة الشركات...</p>
    `,
        date: '2024-12-15',
        category: 'منازعات تجارية',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop'
    }
];
