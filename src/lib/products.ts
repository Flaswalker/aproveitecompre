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

const STORAGE_KEY = "vitrine_products_v2";

const SEED: Product[] = [
  { id: "1", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_865332-MLA96868279679_102025-F.webp", name: "Parafusadeira e Furadeira Profissional 2 Baterias com Maleta", rating: 4.8, sales: "+250mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 395.85, promoPrice: 179.90, discountPercent: 54, affiliateLink: "https://meli.la/1Whn1Gg" },
  { id: "2", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_985376-MLA92665141439_092025-F.webp", name: "Panela Pressão Padrão 20 Cm 4,5 L Revestimento Cerâmico Mineral", rating: 4.8, sales: "+100 vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 173.10, promoPrice: 164.35, discountPercent: 5, affiliateLink: "https://meli.la/1QvX3k9" },
  { id: "3", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_977947-MLA99473789960_112025-F.webp", name: "Manta Asfáltica Auto Adesiva Aluminizada - 45cm X 10m", rating: 4.8, sales: "+10mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 82.24, promoPrice: 66.89, discountPercent: 18, affiliateLink: "https://meli.la/1GBKBVh" },
  { id: "4", badge: "OFERTA IMPERDÍVEL", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_647531-MLB93712182063_092025-F.webp", name: "Cadeira de Escritório Até 150kg Executiva Presidente", rating: 4.0, sales: "+5mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 811.98, promoPrice: 399.87, discountPercent: 50, affiliateLink: "https://meli.la/2eDW8BE" },
  { id: "5", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_737976-MLA110237531226_052026-F.webp", name: "Mop Giratório Pro com Centrífuga em Aço Inox", rating: 4.7, sales: "+5mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 55.12, promoPrice: 48.50, discountPercent: 12, affiliateLink: "https://meli.la/2iJACGW" },
  { id: "6", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_972589-MLA99948367685_112025-F.webp", name: "Kit 10 Potes Vidro 370ml Hermético Marmita Forno Refratário", rating: 4.8, sales: "+50mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 159.99, promoPrice: 73.90, discountPercent: 53, affiliateLink: "https://meli.la/1eKPeRU" },
  { id: "7", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_885228-MLA105354697197_012026-F.webp", name: "Jogo Talheres Faqueiro Aço Inox 24 Peças Tramontina", rating: 4.8, sales: "+100mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 108.99, promoPrice: 63.25, discountPercent: 41, affiliateLink: "https://meli.la/1Ffuuzq" },
  { id: "8", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_656736-MLA100069909919_122025-F.webp", name: "Mochila Tática Militar Impermeável Reforçada Bolsa Viagem", rating: 4.9, sales: "+10mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 158.90, promoPrice: 139.97, discountPercent: 11, affiliateLink: "https://meli.la/33HdA7N" },
  { id: "9", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_733667-MLA95696781618_102025-F.webp", name: "Jogo De Toalhas 4 Pçs Fio Cardado 100% Algodão Bosco Karsten", rating: 4.7, sales: "+5mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 149.90, promoPrice: 103.92, discountPercent: 30, affiliateLink: "https://meli.la/22paq2W" },
  { id: "10", badge: "OFERTA IMPERDÍVEL", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_806551-MLB110388460621_042026-F-camiseta-brasil-ore-pelo-brasil-camisa-unissex.webp", name: "Camiseta Brasil Ore Pelo Brasil Camisa Unissex", rating: 5.0, sales: "+25 vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 43.99, promoPrice: 35.19, discountPercent: 20, affiliateLink: "https://meli.la/1y8vewR" },
  { id: "11", badge: "OFERTA IMPERDÍVEL", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_872673-MLB93613078169_092025-F-camiseta-jesus-o-caminho-a-verdade-cristo-gospel-masculina.webp", name: "Camiseta Jesus O Caminho A Verdade Cristão Gospel Masculina", rating: 4.6, sales: "+100 vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 39.90, promoPrice: 39.90, discountPercent: 0, affiliateLink: "https://meli.la/2ttkdpx" },
  { id: "12", badge: "OFERTA IMPERDÍVEL", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_781471-MLB110418897041_042026-F-tnis-kappa-traker-masculino.webp", name: "Tênis Kappa Traker Masculino", rating: 4.5, sales: "+5mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 269.99, promoPrice: 167.92, discountPercent: 37, affiliateLink: "https://meli.la/2PFgjzE" },
  { id: "13", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_892198-MLA105891866069_012026-F.webp", name: "Cuba Pia de Apoio Sobrepor Oval", rating: 4.8, sales: "+10mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 221.82, promoPrice: 143.91, discountPercent: 35, affiliateLink: "https://meli.la/2D2NYyG" },
  { id: "14", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_810569-MLA99488940656_112025-F.webp", name: "Kit 2x Colágeno Verisol + Ácido Hialurônico Renova Colágeno", rating: 4.9, sales: "+5mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 284.50, promoPrice: 191.00, discountPercent: 32, affiliateLink: "https://meli.la/1hamSUj" },
  { id: "15", badge: "OFERTA IMPERDÍVEL", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_779617-MLA109859939900_042026-F.webp", name: "Câmera De Segurança Ip Interna Externa", rating: 4.7, sales: "+1000mil vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 189.90, promoPrice: 133.00, discountPercent: 29, affiliateLink: "https://meli.la/1R9JxTc" },
  { id: "16", badge: "MAIS VENDIDO", imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_704358-MLA98666414199_112025-F.webp", name: "Bicicleta aro 29 KGT aço carbono freios a disco", rating: 4.6, sales: "+500 vendidos", gainType: "GANHOS", gainPercent: 0, originalPrice: 899.90, promoPrice: 607.20, discountPercent: 32, affiliateLink: "https://meli.la/1vFWsyS" },
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
