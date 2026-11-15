--- a/src/lib/api.ts
+++ b/src/lib/api.ts
@@ -6,8 +6,6 @@
   updateDoc,
   deleteDoc,
   doc,
-  query,
-  orderBy,
   serverTimestamp,
 } from "firebase/firestore";
 
@@ -22,10 +20,43 @@
 
 const COL = "products";
 
+function firstText(...values: unknown[]): string {
+  const value = values.find(
+    (candidate) => typeof candidate === "string" && candidate.trim().length > 0
+  );
+  return typeof value === "string" ? value.trim() : "";
+}
+
+function toProduct(id: string, data: Record<string, unknown>): ApiProduct {
+  const images = Array.isArray(data.images) ? data.images : [];
+  const rawPrice = data.price ?? data.priceSAR ?? data.amount;
+  const parsedPrice =
+    typeof rawPrice === "number" ? rawPrice : Number(rawPrice);
+
+  return {
+    id,
+    nameAr: firstText(data.nameAr, data.titleAr, data.name, data.title) || "باقة ورد",
+    nameEn: firstText(data.nameEn, data.titleEn, data.name, data.title) || "Flower bouquet",
+    price: Number.isFinite(parsedPrice) ? parsedPrice : 0,
+    image: firstText(
+      data.image,
+      data.imageUrl,
+      data.imageURL,
+      data.photoUrl,
+      data.photoURL,
+      images[0]
+    ),
+    code: firstText(data.code, data.productCode, data.sku),
+  };
+}
+
 export async function fetchProducts(): Promise<ApiProduct[]> {
-  const q = query(collection(db, COL), orderBy("createdAt", "asc"));
-  const snap = await getDocs(q);
-  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ApiProduct, "id">) }));
+  // Do not order in Firestore: orderBy excludes documents without that field.
+  // Existing products may not have createdAt, so read the collection as-is.
+  const snap = await getDocs(collection(db, COL));
+  return snap.docs.map((d) =>
+    toProduct(d.id, d.data() as Record<string, unknown>)
+  );
 }
 
 export async function createProduct(
