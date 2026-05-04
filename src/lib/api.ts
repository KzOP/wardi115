export interface ApiProduct {
  id: number;
  nameAr: string;
  nameEn: string;
  price: number;
  image: string | null;
  code: string | null;
  createdAt?: string;
}

const BASE = "/api";

export async function fetchProducts(): Promise<ApiProduct[]> {
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function adminAuth(password: string): Promise<boolean> {
  const res = await fetch(`${BASE}/admin/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  return res.ok;
}

export async function createProduct(
  product: Omit<ApiProduct, "id" | "createdAt">,
  password: string
): Promise<ApiProduct> {
  const res = await fetch(`${BASE}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-password": password },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
}

export async function updateProduct(
  id: number,
  product: Omit<ApiProduct, "id" | "createdAt">,
  password: string
): Promise<ApiProduct> {
  const res = await fetch(`${BASE}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "x-admin-password": password },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
}

export async function deleteProduct(id: number, password: string): Promise<void> {
  const res = await fetch(`${BASE}/products/${id}`, {
    method: "DELETE",
    headers: { "x-admin-password": password },
  });
  if (!res.ok) throw new Error("Failed to delete product");
}
