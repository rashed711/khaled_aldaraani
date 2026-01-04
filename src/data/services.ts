export interface Service {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    icon: string; // We will use Lucide icon names or SVG paths
}

export const services: Service[] = [
    {
        id: '1',
        title: 'القضايا التجارية والشركات',
        slug: 'commercial-corporate-litigation',
        shortDescription: 'حماية المصالح التجارية وفض المنازعات بين الشركاء والكيانات التجارية.',
        fullDescription: 'تمثيل الشركات والمؤسسات في كافة المنازعات التجارية، صياغة عقود التأسيس، حوكمة الشركات، ومعالجة قضايا الإفلاس والتصفيات.',
        icon: 'Building2'
    },
    {
        id: '2',
        title: 'المنازعات العقارية والهندسية',
        slug: 'real-estate-disputes',
        shortDescription: 'حلول قانونية شاملة للنزاعات العقارية وقضايا المقاولات.',
        fullDescription: 'ترافع استراتيجي في قضايا ملكية العقار، نزاعات التمويل العقاري، تأخير المشاريع الهندسية، وقضايا الإخلاء والتعويضات.',
        icon: 'Landmark'
    },
    {
        id: '3',
        title: 'القضايا الجنائية والجرائم المعلوماتية',
        slug: 'criminal-cybercrimes',
        shortDescription: 'دفاع متخصص في القضايا الجزائية وجرائم تقنية المعلومات.',
        fullDescription: 'تمثيل المتهمين أو الضحايا في القضايا الجزائية الكبرى، قضايا الاحتيال المالي، والجرائم المعلوماتية والابتزاز الإلكتروني بسرية تامة.',
        icon: 'ShieldAlert'
    },
    {
        id: '4',
        title: 'قضايا الأحوال الشخصية والتركات',
        slug: 'family-law-inheritance',
        shortDescription: 'إدارة نزاعات الأسرة وتقسيم التركات وفق الشريعة والأنظمة.',
        fullDescription: 'معالجة قضايا الفسخ والطلاق والحضانة، بالإضافة إلى تصفية التركات وتوزيع الإرث وحل النزاعات العائلية المعقدة.',
        icon: 'Users'
    },
    {
        id: '5',
        title: 'المنازعات العمالية وشؤون الموظفين',
        slug: 'labor-disputes',
        shortDescription: 'تنظيم العلاقات العمالية وحماية حقوق أطراف عقد العمل.',
        fullDescription: 'تمثيل أصحاب العمل والعمال في الخلافات العمالية، صياغة لوائح العمل الداخلية، ومراجعة عقود التوظيف لضمان الامتثال لنظام العمل.',
        icon: 'Briefcase'
    },
    {
        id: '6',
        title: 'التحكيم والوساطة',
        slug: 'arbitration-mediation',
        shortDescription: 'بدائل فعالة لفض المنازعات خارج أروقة المحاكم.',
        fullDescription: 'إدارة عمليات التحكيم التجاري والمحلي، والوساطة لتسوية النزاعات ودياً وبسرعة وفعالية لضمان استمرارية الأعمال.',
        icon: 'Scale'
    },
    {
        id: '7',
        title: 'الملكية الفكرية وبراءات الاختراع',
        slug: 'intellectual-property',
        shortDescription: 'حماية العلامات التجارية وحقوق المؤلف والابتكارات.',
        fullDescription: 'تسجيل وحماية العلامات التجارية، براءات الاختراع، والنماذج الصناعية، والترافع في قضايا التعدي والتقليد.',
        icon: 'Lightbulb'
    },
    {
        id: '8',
        title: 'التراخيص والاستثمار الأجنبي',
        slug: 'foreign-investment-licensing',
        shortDescription: 'تسهيل دخول المستثمر الأجنبي للسوق السعودي.',
        fullDescription: 'إصدار تراخيص الاستثمار الأجنبي، تأسيس الشركات المختلطة، وتقديم المشورة حول أنظمة الاستثمار في المملكة.',
        icon: 'Globe'
    },
    {
        id: '9',
        title: 'قضايا الأوراق المالية والبنوك',
        slug: 'banking-finance-law',
        shortDescription: 'معالجة النزاعات المصرفية وقضايا سوق المال.',
        fullDescription: 'التمثيل أمام لجان الفصل في منازعات الأوراق المالية والمنازعات المصرفية، وقضايا التمويل والشيكات.',
        icon: 'TrendingUp'
    },
    {
        id: '10',
        title: 'القضاء الإداري (ديوان المظالم)',
        slug: 'administrative-law',
        shortDescription: 'الترافع ضد القرارات الإدارية والمطالبة بالحقوق ومستحقات العقود الحكومية.',
        fullDescription: 'إلغاء القرارات الإدارية التعسفية، المطالبة بالتعويضات من الجهات الحكومية، ومنازعات العقود الإدارية.',
        icon: 'Gavel'
    },
    {
        id: '11',
        title: 'صياغة ومراجعة العقود',
        slug: 'contract-drafting',
        shortDescription: 'تحصين تعاملاتكم بعقود قانونية محكمة.',
        fullDescription: 'صياغة العقود التجارية والمدنية باللغتين العربية والإنجليزية، ومراجعتها لسد الثغرات القانونية وتقليل المخاطر.',
        icon: 'FileText'
    },
    {
        id: '12',
        title: 'الامتثال والحوكمة',
        slug: 'compliance-governance',
        shortDescription: 'ضمان التزام المنشآت بالأنظمة واللوائح.',
        fullDescription: 'بناء هياكل الحوكمة للشركات العائلية والمساهمة، وتطوير سياسات الامتثال للأنظمة المحلية والدولية.',
        icon: 'CheckCircle'
    },
    {
        id: '13',
        title: 'تصفية وإفلاس الشركات',
        slug: 'bankruptcy-liquidation',
        shortDescription: 'إدارة إجراءات الإفلاس وإعادة التنظيم المالي.',
        fullDescription: 'تقديم المشورة في إجراءات نظام الإفلاس، التصفية الاختيارية أو القضائية، وحماية حقوق الدائنين والمدينين.',
        icon: 'XCircle'
    },
    {
        id: '14',
        title: 'تحصيل الديون',
        slug: 'debt-collection',
        shortDescription: 'استرداد المستحقات المالية بالطرق النظامية.',
        fullDescription: 'تنفيذ الأحكام القضائية والسندات التنفيذية، ومتابعة المدينين لاسترداد المبالغ المتعثرة بفعالية.',
        icon: 'DollarSign'
    },
    {
        id: '15',
        title: 'الاستشارات القانونية السنوية',
        slug: 'annual-retainer',
        shortDescription: 'شراكة قانونية مستمرة لحماية أعمالكم.',
        fullDescription: 'عقود استشارات سنوية للشركات والأفراد لتوفير غطاء قانوني دائم ودعم فوري عند الحاجة.',
        icon: 'Headphones'
    }
];
