export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'men' | 'women';
  price: number;
  fabric: string;
  craft: string;
  origin: string;
  description: string;
  fabricClass: string;
  labelColor: string;
  sizes: string[];
  deliveryEstimate: string;
  tag?: string;
  images?: string[];
}

export const products: Product[] = [
  // ── Men's (1 piece) ────────────────────────────────────────────
  {
    id: 'lucknow-classic-tee',
    name: 'The Lucknow Classic',
    subtitle: 'Chikankari Tee',
    category: 'men',
    price: 68,
    fabric: '100% Egyptian Cotton',
    craft: 'Chikankari Embroidery',
    origin: 'Lucknow, UP',
    description: 'A wardrobe essential reborn. Our classic tee is hand-embroidered with delicate Chikankari floral motifs across the chest — by artisans in the heart of Lucknow. Worn loose, tucked in, or layered. Ivory white.',
    fabricClass: 'fabric-chikankari',
    labelColor: 'text-brown',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    deliveryEstimate: 'Ships in 6–8 weeks',
    tag: 'Bestseller',
    images: ['/men1.png', '/men2.png'],
  },

  // ── Women's (2 pieces) ─────────────────────────────────────────
  {
    id: 'begum-midi-dress',
    name: 'The Begum',
    subtitle: 'Chikankari Midi Dress',
    category: 'women',
    price: 245,
    fabric: 'Silk-Cotton Blend',
    craft: 'Chikankari Embroidery',
    origin: 'Lucknow, UP',
    description: 'Our most coveted silhouette. A gathered midi dress in ivory silk-cotton, entirely hand-embroidered with full-front Chikankari floral sprays. A dress that feels like wearing a poem.',
    fabricClass: 'fabric-chikankari',
    labelColor: 'text-brown',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    deliveryEstimate: 'Ships in 8–10 weeks',
    tag: 'Signature',
    images: ['/women2.png', '/women1.png'],
  },
  {
    id: 'jaipur-wrap-dress',
    name: 'The Jaipur',
    subtitle: 'Block Print Wrap Dress',
    category: 'women',
    price: 195,
    fabric: '100% Handloom Cotton',
    craft: 'Hand Block Printing',
    origin: 'Jaipur, Rajasthan',
    description: 'Sun-warmed terracotta, hand-blocked with overlapping botanical motifs from a centuries-old Jaipur carvery. A wrap silhouette that flatters every form.',
    fabricClass: 'fabric-terracotta',
    labelColor: 'text-white',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    deliveryEstimate: 'Ships in 6–8 weeks',
    tag: 'New',
    images: ['/women3.png', '/women4.png'],
  },
];
