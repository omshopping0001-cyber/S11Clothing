import boysChromeOrbit from "@/assets/collection/boys-chrome-orbit.png";
import boysMidnightWave from "@/assets/collection/boys-midnight-wave.png";
import boysSteelCube from "@/assets/collection/boys-steel-cube.png";
import boysEclipse from "@/assets/collection/boys-eclipse.png";
import boysVortex from "@/assets/collection/boys-vortex.png";
import girlsSilverHeart from "@/assets/collection/girls-silver-heart.png";
import girlsLilacBubbles from "@/assets/collection/girls-lilac-bubbles.png";
import girlsBurgundyOrb from "@/assets/collection/girls-burgundy-orb.png";
import girlsSilverWave from "@/assets/collection/girls-silver-wave.png";
import girlsPinkButterfly from "@/assets/collection/girls-pink-butterfly.png";

export type ProductCategory = "Boys" | "Girls";
export type Product = { id: number; name: string; price: number; originalPrice?: number; description: string; category: ProductCategory; label: string; fabric: string; sizes: string[]; colours: string[]; image: string; imagePosition?: string; featured: boolean; bestseller: boolean; newArrival: boolean };

const standard = { price: 200, originalPrice: 349, fabric: "100% combed cotton · 220 GSM", sizes: ["S", "M", "L", "XL", "XXL"], featured: true, newArrival: true };
const girlsSizing = { price: 200, originalPrice: 349, fabric: "Cotton stretch jersey · 200 GSM", sizes: ["XS", "S", "M", "L", "XL"], featured: true, newArrival: true };

export const PRODUCTS: Product[] = [
  { ...standard, id: 1, name: "Chrome Orbit Oversized Tee", description: "Black oversized cotton with a futuristic chrome orbit 3D print.", category: "Boys", label: "Boys / 3D Graphic", colours: ["Black", "Charcoal"], image: boysChromeOrbit, bestseller: true },
  { ...standard, id: 2, name: "Midnight Wave Tee", description: "Deep navy cotton featuring an electric dimensional wave graphic.", category: "Boys", label: "Boys / 3D Graphic", colours: ["Navy", "Black"], image: boysMidnightWave, bestseller: true },
  { ...standard, id: 3, name: "Steel Cube Tee", description: "Washed steel-grey cotton with a transparent architectural cube design.", category: "Boys", label: "Boys / 3D Graphic", colours: ["Charcoal", "White"], image: boysSteelCube, bestseller: false },
  { ...standard, id: 4, name: "Eclipse Essential Tee", description: "A crisp bone-white tee finished with a polished silver eclipse print.", category: "Boys", label: "Boys / Essential", colours: ["White", "Ivory"], image: boysEclipse, bestseller: true },
  { ...standard, id: 5, name: "Iridescent Vortex Tee", description: "Forest-green heavyweight cotton with a vivid metallic vortex graphic.", category: "Boys", label: "Boys / 3D Graphic", colours: ["Green", "Black"], image: boysVortex, bestseller: false },
  { ...girlsSizing, id: 6, name: "Silver Heart Baby Tee", description: "A fitted ivory baby tee featuring a delicate polished-heart 3D detail.", category: "Girls", label: "Girls / Fitted", colours: ["Ivory", "White"], image: girlsSilverHeart, bestseller: true },
  { ...girlsSizing, id: 7, name: "Lilac Bubble Tee", description: "An easy lavender oversized tee with playful dimensional bubble art.", category: "Girls", label: "Girls / Oversized", colours: ["Lilac", "White"], image: girlsLilacBubbles, bestseller: true },
  { ...girlsSizing, id: 8, name: "Burgundy Orb Boxy Tee", description: "A washed burgundy boxy tee with a rich chrome-orb 3D graphic.", category: "Girls", label: "Girls / Boxy", colours: ["Burgundy", "Black"], image: girlsBurgundyOrb, bestseller: false },
  { ...girlsSizing, id: 9, name: "Liquid Silver Crop Tee", description: "A sharp black crop tee featuring a liquid silver wave print.", category: "Girls", label: "Girls / Cropped", colours: ["Black", "Charcoal"], image: girlsSilverWave, bestseller: true },
  { ...girlsSizing, id: 10, name: "Pink Butterfly Tee", description: "Soft blush cotton with an iridescent 3D butterfly-inspired artwork.", category: "Girls", label: "Girls / New Drop", colours: ["Pink", "White"], image: girlsPinkButterfly, bestseller: false },
];

export const FILTERS = ["All", "Boys", "Girls"] as const;
