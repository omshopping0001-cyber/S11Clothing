import blackImage from "@/assets/s11-campaign-black.jpg";
import whiteImage from "@/assets/s11-campaign-white.jpg";
import redImage from "@/assets/s11-campaign-red.jpg";
import sandImage from "@/assets/s11-campaign-sand.jpg";

export type ProductCategory = "Oversized" | "Regular Fit" | "Graphic" | "Basic" | "New Arrivals";

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: ProductCategory;
  label: string;
  fabric: string;
  sizes: string[];
  colours: string[];
  image: string;
  imagePosition?: string;
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Essential Black Tee", price: 599, description: "A heavyweight everyday tee with a relaxed shoulder and clean, structured fall.", category: "Basic", label: "Core / 240 GSM", fabric: "100% combed cotton · 240 GSM", sizes: ["S", "M", "L", "XL", "XXL"], colours: ["Black", "Charcoal"], image: blackImage, featured: true, bestseller: true, newArrival: false },
  { id: 2, name: "Classic White Oversized Tee", price: 699, description: "A crisp oversized staple cut with roomy sleeves and a premium ribbed neckline.", category: "Oversized", label: "Oversized / 240 GSM", fabric: "100% compact cotton · 240 GSM", sizes: ["S", "M", "L", "XL", "XXL"], colours: ["White", "Ivory"], image: whiteImage, featured: true, bestseller: true, newArrival: true },
  { id: 3, name: "Urban Red Graphic Tee", price: 799, originalPrice: 899, description: "A washed vermilion statement tee finished with an expressive tonal screen print.", category: "Graphic", label: "Graphic / Drop 11", fabric: "Bio-washed cotton · 220 GSM", sizes: ["S", "M", "L", "XL"], colours: ["Red", "Black"], image: redImage, featured: true, bestseller: true, newArrival: true },
  { id: 4, name: "Sand Beige Essential Tee", price: 649, description: "Soft neutral tones meet a relaxed silhouette made for effortless everyday layering.", category: "Regular Fit", label: "Essential / 220 GSM", fabric: "100% combed cotton · 220 GSM", sizes: ["S", "M", "L", "XL", "XXL"], colours: ["Beige", "Ivory"], image: sandImage, featured: true, bestseller: false, newArrival: false },
  { id: 5, name: "Midnight Street Tee", price: 749, description: "Deep charcoal, dropped shoulders and a garment-washed finish for a lived-in feel.", category: "Oversized", label: "Oversized / Washed", fabric: "Garment-dyed cotton · 240 GSM", sizes: ["M", "L", "XL", "XXL"], colours: ["Charcoal", "Black"], image: blackImage, imagePosition: "65% center", featured: false, bestseller: true, newArrival: false },
  { id: 6, name: "Minimal Logo Tee", price: 599, description: "Clean regular-fit construction with a subtle S11 signature at the chest.", category: "Regular Fit", label: "Signature / Regular", fabric: "100% cotton jersey · 200 GSM", sizes: ["S", "M", "L", "XL", "XXL"], colours: ["White", "Black", "Red"], image: whiteImage, imagePosition: "45% center", featured: false, bestseller: false, newArrival: false },
  { id: 7, name: "Vintage Wash Tee", price: 799, description: "A vintage-inspired washed tee with subtle tonal variation and a boxy modern shape.", category: "New Arrivals", label: "New / Vintage Wash", fabric: "Acid-washed cotton · 230 GSM", sizes: ["S", "M", "L", "XL"], colours: ["Charcoal", "Red"], image: redImage, imagePosition: "58% center", featured: false, bestseller: false, newArrival: true },
  { id: 8, name: "Premium Oversized Black Tee", price: 799, description: "Our most substantial black tee, engineered with a wide body and perfect drape.", category: "Oversized", label: "Premium / 260 GSM", fabric: "100% compact cotton · 260 GSM", sizes: ["S", "M", "L", "XL", "XXL"], colours: ["Black", "Beige"], image: blackImage, imagePosition: "35% center", featured: true, bestseller: true, newArrival: true },
];

export const FILTERS = ["All", "Oversized", "Regular Fit", "Graphic", "Basic", "New Arrivals"] as const;
