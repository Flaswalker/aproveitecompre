export type BadgeType = "MAIS VENDIDO" | "OFERTA IMPERDÍVEL" | "NONE";
export type GainType = "GANHOS" | "GANHOS EXTRAS";

export interface Product {
  id: string;
  badge: BadgeType;
  imageUrl: string;
  name: string;
  rating: number;
  sales: string;
  gainType: GainType;
  gainPercent: number;
  originalPrice: number;
  promoPrice: number;
  discountPercent: number;
  affiliateLink: string;
}

const STORAGE_KEY = "vitrine_products_v1";

const SEED: Product[] = [
  {
    id: "1",
    badge: "MAIS VENDIDO",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    name: "Fone de Ouvido Bluetooth Premium",
    rating: 4.8,
    sales: "+100mil vendidos",
    gainType: "GANHOS",
    gainPercent: 12,
    originalPrice: 299.9,
    promoPrice: 110.9,
    discountPercent: 63,
    affiliateLink: "https://example.com/afiliado/1",
  },
  {
    id: "2",
    badge: "OFERTA IMPERDÍVEL",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    name: "Smartwatch Esportivo à Prova d'Água",
    rating: 4.6,
    sales: "+50mil vendidos",
    gainType: "GANHOS EXTRAS",
    gainPercent: 31,
    originalPrice: 499.9,
    promoPrice: 224.9,
    discountPercent: 55,
    affiliateLink: "https://example.com/afiliado/2",
  },
  {
    id: "3",
    badge: "MAIS VENDIDO",
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
    name: "Óculos de Sol Polarizado UV400",
    rating: 4.7,
    sales: "+30mil vendidos",
    gainType: "GANHOS",
    gainPercent: 16,
    originalPrice: 189.9,
    promoPrice: 79.9,
    discountPercent: 58,
    affiliateLink: "https://example.com/afiliado/3",
  },
  {
    id: "4",
    badge: "OFERTA IMPERDÍVEL",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    name: "Relógio Digital Multifuncional",
    rating: 4.5,
    sales: "+20mil vendidos",
    gainType: "GANHOS EXTRAS",
    gainPercent: 20,
    originalPrice: 249.9,
    promoPrice: 99.9,
    discountPercent: 60,
    affiliateLink: "https://example.com/afiliado/4",
  },
  {
    id: "5",
    badge: "NONE",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    name: "Tênis Esportivo Confort Run",
    rating: 4.9,
    sales: "+200mil vendidos",
    gainType: "GANHOS",
    gainPercent: 12,
    originalPrice: 399.9,
    promoPrice: 149.9,
    discountPercent: 62,
    affiliateLink: "https://example.com/afiliado/5",
  },
  {
    id: "6",
    badge: "MAIS VENDIDO",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
    name: "Câmera de Ação 4K Ultra HD",
    rating: 4.4,
    sales: "+10mil vendidos",
    gainType: "GANHOS EXTRAS",
    gainPercent: 25,
    originalPrice: 899.9,
    promoPrice: 449.9,
    discountPercent: 50,
    affiliateLink: "https://example.com/afiliado/6",
  },
  {
    id: "7",
    badge: "OFERTA IMPERDÍVEL",
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",
    name: "Perfume Importado 100ml",
    rating: 4.8,
    sales: "+15mil vendidos",
    gainType: "GANHOS",
    gainPercent: 18,
    originalPrice: 599.9,
    promoPrice: 149.9,
    discountPercent: 75,
    affiliateLink: "https://example.com/afiliado/7",
  },
  {
    id: "8",
    badge: "NONE",
    imageUrl: "https://images.unsplash.com/photo-1572635196243-aa00b6f5dc89?w=600",
    name: "Mochila Casual Impermeável",
    rating: 4.6,
    sales: "+25mil vendidos",
    gainType: "GANHOS",
    gainPercent: 14,
    originalPrice: 199.9,
    promoPrice: 89.9,
    discountPercent: 55,
    affiliateLink: "https://example.com/afiliado/8",
  },
];

export function getProducts(): Product[] {
  if (typeof window === "undefined") return SEED;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED));
    return SEED;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return SEED;
  }
}

export function saveProducts(products: Product[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  window.dispatchEvent(new Event("products-updated"));
}

export function upsertProduct(product: Product) {
  const list = getProducts();
  const idx = list.findIndex((p) => p.id === product.id);
  if (idx >= 0) list[idx] = product;
  else list.push(product);
  saveProducts(list);
}

export function deleteProduct(id: string) {
  saveProducts(getProducts().filter((p) => p.id !== id));
}

export const ADMIN_PASSWORD = "Salan4!7@";
export const AUTH_KEY = "vitrine_admin_auth";
