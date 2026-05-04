export type Language = "ar" | "en";

// معلومات التحويل البنكي
export const BANK_INFO = {
  bankName: "البنك الأهلي التجاري",
  bankNameEn: "Al Ahli Bank (SNB)",
  accountNumber: "33200000881303",
  accountHolder: "محل فارس محمد العلي للزهور",
  accountHolderEn: "Faris Mohammed Al-Ali Flower Shop",
};

// الإيميل
export const SHOP_EMAIL = "Saeed22682@gmail.com";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "منتجاتنا",
      howToOrder: "كيفية الطلب",
      contact: "تواصل معنا",
    },
    langSwitch: "English",

    hero: {
      shopName: "وردي للزهور",
      tagline: "محل ورد في المدينة المنورة — نُعبّر عن مشاعرك بأجمل الزهور",
      subtitle: "باقات ورد فاخرة وزهور طازجة مُختارة بعناية، مع توصيل سريع في المدينة المنورة لكل المناسبات — من الأفراح والتخرج إلى الهدايا الراقية.",
      orderBtn: "اطلب عبر واتساب",
    },

    about: {
      title: "من نحن",
      description:
        "وردي للزهور هو محل ورد راقٍ في المدينة المنورة، يجمع بين أناقة الذوق الرفيع وعبير الزهور الطازجة. مع خبرة تمتد لأكثر من ٢٠ عاماً في عالم الزهور، نؤمن بأن كل باقة ورد تحمل مشاعر لا تُقال بكلمات. فريقنا المتخصص يعمل يومياً على انتقاء أجود أصناف الورد من أرقى المصادر، لنُقدّم لكم تجربة هدايا زهور لا تُنسى في كل مناسبة.",
      location: "الموقع",
      locationValue: "المدينة المنورة، المملكة العربية السعودية",
      mapPlaceholder: "خريطة الموقع",
    },

    products: {
      title: "باقاتنا الفاخرة",
      subtitle: "ورد طازج وباقات زهور مميزة لكل مناسبة — اختر هديتك المثالية",
      orderBtn: "اطلب الآن",
      currency: "ريال",
    },

    howToOrder: {
      title: "كيف تطلب زهورك؟",
      subtitle: "أسهل طريقة لتوصيل الورد في المدينة المنورة — أربع خطوات بسيطة",
      steps: [
        {
          number: "١",
          title: "اختر باقة الورد",
          description: "تصفّح مجموعتنا من باقات الورد الفاخرة واختر الباقة الأقرب لمناسبتك وذوقك.",
        },
        {
          number: "٢",
          title: "تواصل معنا عبر واتساب",
          description: "أرسل لنا رسالة على واتساب مع اسم الباقة وكود المنتج وسنرد عليك فوراً بكل التفاصيل.",
        },
        {
          number: "٣",
          title: "ادفع عبر التحويل البنكي",
          description: "حوّل المبلغ لحسابنا في البنك الأهلي التجاري: رقم الحساب 33200000881303 — محل فارس محمد العلي للزهور.",
        },
        {
          number: "٤",
          title: "أرسل إيصال الدفع وانتظر",
          description: "أرسل صورة إيصال التحويل على واتساب، وسنبدأ فوراً في تجهيز باقة الورد وتوصيلها إليك.",
        },
      ],
    },

    contact: {
      title: "تواصل معنا",
      subtitle: "خدمة توصيل الورد في المدينة المنورة — نحن هنا على مدار الساعة",
      whatsappBtn: "تحدث معنا عبر واتساب",
      phone: "رقم الهاتف",
      phoneValue: "+966 053 100 2292",
      email: "البريد الإلكتروني",
      address: "العنوان",
      addressValue: "المدينة المنورة، المملكة العربية السعودية",
      bankTitle: "الدفع عبر التحويل البنكي",
      bankAccount: "رقم الحساب",
      bankHolder: "اسم صاحب الحساب",
    },

    footer: {
      tagline: "محل ورد في المدينة المنورة — نصنع الجمال ونُهدي المحبة",
      rights: "جميع الحقوق محفوظة",
      shopName: "وردي للزهور",
    },

    whatsapp: {
      orderPrefix: "مرحباً 🌹 أنا مهتم بطلب باقة ورد من وردي للزهور:\nاسم الباقة: ",
      orderSuffix: "\nأرجو إرسال التفاصيل والسعر، شكراً 😊",
      orderCode: "\nكود المنتج: ",
      support: "مرحباً 🌹 أبغى أطلب باقة ورد من وردي للزهور في المدينة المنورة، ممكن تساعدني في الاختيار؟ 😊",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      howToOrder: "How to Order",
      contact: "Contact",
    },
    langSwitch: "عربي",

    hero: {
      shopName: "Wardi Zuhour",
      tagline: "Madinah's Premier Flower Shop — Where Every Bouquet Tells a Story",
      subtitle:
        "Luxury rose bouquets and fresh flowers, carefully curated and delivered fast across Madinah for every occasion — weddings, graduations, and meaningful gifts.",
      orderBtn: "Order via WhatsApp",
    },

    about: {
      title: "About Us",
      description:
        "Wardi Zuhour is Madinah's premium flower shop, where refined taste meets the freshest blooms. With over 20 years of expertise in floristry, we believe every bouquet carries emotions that words cannot express. Our dedicated team handpicks the finest roses and flowers daily, delivering unforgettable gifting experiences for every occasion.",
      location: "Location",
      locationValue: "Madinah, Saudi Arabia",
      mapPlaceholder: "Location Map",
    },

    products: {
      title: "Our Premium Bouquets",
      subtitle: "Fresh roses and luxurious floral arrangements for every occasion — find your perfect gift",
      orderBtn: "Order Now",
      currency: "SAR",
    },

    howToOrder: {
      title: "How to Order",
      subtitle: "The easiest way to get flowers delivered in Madinah — four simple steps",
      steps: [
        {
          number: "1",
          title: "Choose Your Bouquet",
          description: "Browse our luxurious rose bouquets and select the one that fits your occasion and style.",
        },
        {
          number: "2",
          title: "Contact Us on WhatsApp",
          description: "Send us a message on WhatsApp with the product name and code, and we'll reply instantly with all details.",
        },
        {
          number: "3",
          title: "Pay via Bank Transfer",
          description: "Transfer to our Al Ahli Bank (SNB) account: 33200000881303 — Faris Mohammed Al-Ali Flower Shop.",
        },
        {
          number: "4",
          title: "Send the Receipt",
          description: "Send a photo of the transfer receipt on WhatsApp, and we'll prepare and deliver your bouquet right away.",
        },
      ],
    },

    contact: {
      title: "Contact Us",
      subtitle: "Flower delivery in Madinah — we're available around the clock",
      whatsappBtn: "Chat with us on WhatsApp",
      phone: "Phone Number",
      phoneValue: "+966 053 100 2292",
      email: "Email",
      address: "Address",
      addressValue: "Madinah, Saudi Arabia",
      bankTitle: "Pay via Bank Transfer",
      bankAccount: "Account Number",
      bankHolder: "Account Holder",
    },

    footer: {
      tagline: "Madinah's Flower Shop — We create beauty, we give love",
      rights: "All rights reserved",
      shopName: "Wardi Zuhour",
    },

    whatsapp: {
      orderPrefix: "Hello 🌹 I'd like to order a rose bouquet from Wardi Zuhour:\nProduct: ",
      orderSuffix: "\nPlease send me the details and price, thank you 😊",
      orderCode: "\nProduct Code: ",
      support: "Hello 🌹 I'd like to order flowers from Wardi Zuhour in Madinah, can you help me choose? 😊",
    },
  },
};

export const WHATSAPP_NUMBER = "966531002292";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Translations = (typeof translations)["ar"];
