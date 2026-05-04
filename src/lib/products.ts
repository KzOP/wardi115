export interface Product {
  id: number;
  nameAr: string;
  nameEn: string;
  price: number;
  image: string;
  code?: string;
  badge?: { ar: string; en: string };
}

// ============================================================
//   لإضافة منتج جديد: انسخ أي كتلة { ... } وعدّل عليها
//   لتغيير صورة: ضع رابط الصورة في خانة image
//   لإخفاء الصورة: اتركها فارغة image: ""
// ============================================================
export const products: Product[] = [
  {
    id: 1,
    nameAr: "عرض ١ — ورد (مثال تجريبي)",
    nameEn: "Offer 1 — Roses (Demo)",
    price: 0,
    image: "",
  },
  {
    id: 2,
    nameAr: "عرض ٢ — ورد (مثال تجريبي)",
    nameEn: "Offer 2 — Roses (Demo)",
    price: 0,
    image: "",
  },
  {
    id: 3,
    nameAr: "عرض ٣ — ورد (مثال تجريبي)",
    nameEn: "Offer 3 — Roses (Demo)",
    price: 0,
    image: "",
  },
  {
    id: 4,
    nameAr: "عرض ٤ — ورد (مثال تجريبي)",
    nameEn: "Offer 4 — Roses (Demo)",
    price: 0,
    image: "",
  },
  {
    id: 5,
    nameAr: "عرض ٥ — ورد (مثال تجريبي)",
    nameEn: "Offer 5 — Roses (Demo)",
    price: 0,
    image: "",
  },
  {
    id: 6,
    nameAr: "عرض ٦ — ورد (مثال تجريبي)",
    nameEn: "Offer 6 — Roses (Demo)",
    price: 0,
    image: "",
  },
];
