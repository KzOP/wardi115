import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export interface ApiProduct {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  image: string;
  code: string;
}

const COL = "products";

export async function fetchProducts(): Promise<ApiProduct[]> {
  const q = query(collection(db, COL), orderBy("createdAt", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ApiProduct, "id">) }));
}

export async function createProduct(
  product: Omit<ApiProduct, "id">
): Promise<ApiProduct> {
  const ref = await addDoc(collection(db, COL), {
    ...product,
    createdAt: serverTimestamp(),
  });
  return { id: ref.id, ...product };
}

export async function updateProduct(
  id: string,
  product: Omit<ApiProduct, "id">
): Promise<ApiProduct> {
  await updateDoc(doc(db, COL, id), { ...product });
  return { id, ...product };
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, COL, id));
}

export const ADMIN_PASSWORD = "wardizuhour0051";

export const SEED_PRODUCTS: Omit<ApiProduct, "id">[] = [
  { nameAr: "باقة ورد ١", nameEn: "Bouquet 1", price: 0, image: "/images/p1.jpeg", code: "WF-001" },
  { nameAr: "باقة ورد ٢", nameEn: "Bouquet 2", price: 0, image: "/images/p2.jpeg", code: "WF-002" },
  { nameAr: "باقة ورد ٣", nameEn: "Bouquet 3", price: 0, image: "/images/p3.jpeg", code: "WF-003" },
  { nameAr: "باقة ورد ٤", nameEn: "Bouquet 4", price: 0, image: "/images/p4.jpeg", code: "WF-004" },
  { nameAr: "باقة ورد ٥", nameEn: "Bouquet 5", price: 0, image: "/images/p5.jpeg", code: "WF-005" },
  { nameAr: "باقة ورد ٦", nameEn: "Bouquet 6", price: 0, image: "/images/p6.jpeg", code: "WF-006" },
  { nameAr: "باقة ورد ٧", nameEn: "Bouquet 7", price: 0, image: "/images/p7.jpeg", code: "WF-007" },
  { nameAr: "باقة ورد ٨", nameEn: "Bouquet 8", price: 0, image: "/images/p8.jpeg", code: "WF-008" },
  { nameAr: "باقة ورد ٩", nameEn: "Bouquet 9", price: 0, image: "/images/p9.jpeg", code: "WF-009" },
  { nameAr: "باقة ورد ١٠", nameEn: "Bouquet 10", price: 0, image: "/images/p10.jpeg", code: "WF-010" },
  { nameAr: "باقة ورد ١١", nameEn: "Bouquet 11", price: 0, image: "/images/p11.jpeg", code: "WF-011" },
  { nameAr: "باقة ورد ١٢", nameEn: "Bouquet 12", price: 0, image: "/images/p12.jpeg", code: "WF-012" },
  { nameAr: "باقة ورد ١٣", nameEn: "Bouquet 13", price: 0, image: "/images/p13.jpeg", code: "WF-013" },
  { nameAr: "باقة ورد ١٤", nameEn: "Bouquet 14", price: 0, image: "/images/p14.jpeg", code: "WF-014" },
  { nameAr: "باقة ورد ١٥", nameEn: "Bouquet 15", price: 0, image: "/images/p15.jpeg", code: "WF-015" },
  { nameAr: "باقة ورد ١٦", nameEn: "Bouquet 16", price: 0, image: "/images/p16.jpeg", code: "WF-016" },
  { nameAr: "باقة ورد ١٧", nameEn: "Bouquet 17", price: 0, image: "/images/p17.jpeg", code: "WF-017" },
  { nameAr: "باقة ورد ١٨", nameEn: "Bouquet 18", price: 0, image: "/images/p18.jpeg", code: "WF-018" },
  { nameAr: "باقة ورد ١٩", nameEn: "Bouquet 19", price: 0, image: "/images/p19.jpeg", code: "WF-019" },
  { nameAr: "باقة ورد ٢٠", nameEn: "Bouquet 20", price: 0, image: "/images/p20.jpeg", code: "WF-020" },
  { nameAr: "باقة ورد ٢١", nameEn: "Bouquet 21", price: 0, image: "/images/p21.jpeg", code: "WF-021" },
  { nameAr: "باقة ورد ٢٢", nameEn: "Bouquet 22", price: 0, image: "/images/p22.jpeg", code: "WF-022" },
  { nameAr: "باقة ورد ٢٣", nameEn: "Bouquet 23", price: 0, image: "/images/p23.jpeg", code: "WF-023" },
  { nameAr: "باقة ورد ٢٤", nameEn: "Bouquet 24", price: 0, image: "/images/p24.jpeg", code: "WF-024" },
  { nameAr: "باقة ورد ٢٥", nameEn: "Bouquet 25", price: 0, image: "/images/p25.jpeg", code: "WF-025" },
  { nameAr: "باقة ورد ٢٦", nameEn: "Bouquet 26", price: 0, image: "/images/p26.jpeg", code: "WF-026" },
  { nameAr: "باقة ورد ٢٧", nameEn: "Bouquet 27", price: 0, image: "/images/p27.jpeg", code: "WF-027" },
  { nameAr: "باقة ورد ٢٨", nameEn: "Bouquet 28", price: 0, image: "/images/p28.jpeg", code: "WF-028" },
  { nameAr: "باقة ورد ٢٩", nameEn: "Bouquet 29", price: 0, image: "/images/p29.jpeg", code: "WF-029" },
  { nameAr: "باقة ورد ٣٠", nameEn: "Bouquet 30", price: 0, image: "/images/p30.jpeg", code: "WF-030" },
  { nameAr: "باقة ورد ٣١", nameEn: "Bouquet 31", price: 0, image: "/images/p31.jpeg", code: "WF-031" },
  { nameAr: "باقة ورد ٣٢", nameEn: "Bouquet 32", price: 0, image: "/images/p32.jpeg", code: "WF-032" },
  { nameAr: "باقة ورد ٣٣", nameEn: "Bouquet 33", price: 0, image: "/images/p33.jpeg", code: "WF-033" },
  { nameAr: "باقة ورد ٣٤", nameEn: "Bouquet 34", price: 0, image: "/images/p34.jpeg", code: "WF-034" },
  { nameAr: "باقة ورد ٣٥", nameEn: "Bouquet 35", price: 0, image: "/images/p35.jpeg", code: "WF-035" },
  { nameAr: "باقة ورد ٣٦", nameEn: "Bouquet 36", price: 0, image: "/images/p36.jpeg", code: "WF-036" },
  { nameAr: "باقة ورد ٣٧", nameEn: "Bouquet 37", price: 0, image: "/images/p37.jpeg", code: "WF-037" },
  { nameAr: "باقة ورد ٣٨", nameEn: "Bouquet 38", price: 0, image: "/images/p38.jpeg", code: "WF-038" },
  { nameAr: "باقة ورد ٣٩", nameEn: "Bouquet 39", price: 0, image: "/images/p39.jpeg", code: "WF-039" },
  { nameAr: "باقة ورد ٤٠", nameEn: "Bouquet 40", price: 0, image: "/images/p40.jpeg", code: "WF-040" },
  { nameAr: "باقة ورد ٤١", nameEn: "Bouquet 41", price: 0, image: "/images/p41.jpeg", code: "WF-041" },
  { nameAr: "باقة ورد ٤٢", nameEn: "Bouquet 42", price: 0, image: "/images/p42.jpeg", code: "WF-042" },
  { nameAr: "باقة ورد ٤٣", nameEn: "Bouquet 43", price: 0, image: "/images/p43.jpeg", code: "WF-043" },
  { nameAr: "باقة ورد ٤٤", nameEn: "Bouquet 44", price: 0, image: "/images/p44.jpeg", code: "WF-044" },
  { nameAr: "باقة ورد ٤٥", nameEn: "Bouquet 45", price: 0, image: "/images/p45.jpeg", code: "WF-045" },
  { nameAr: "باقة ورد ٤٦", nameEn: "Bouquet 46", price: 0, image: "/images/p46.jpeg", code: "WF-046" },
  { nameAr: "باقة ورد ٤٧", nameEn: "Bouquet 47", price: 0, image: "/images/p47.jpeg", code: "WF-047" },
  { nameAr: "باقة ورد ٤٨", nameEn: "Bouquet 48", price: 0, image: "/images/p48.jpeg", code: "WF-048" },
  { nameAr: "باقة ورد ٤٩", nameEn: "Bouquet 49", price: 0, image: "/images/p49.jpeg", code: "WF-049" },
  { nameAr: "باقة ورد ٥٠", nameEn: "Bouquet 50", price: 0, image: "/images/p50.jpeg", code: "WF-050" },
  { nameAr: "باقة ورد ٥١", nameEn: "Bouquet 51", price: 0, image: "/images/p51.jpeg", code: "WF-051" },
];
