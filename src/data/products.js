// ============================================
// PRODUCT DATABASE
// In a real app, this would come from a backend API
// ============================================

export const PRODUCTS = [
  // ============ WOMEN ============
  {
    id: 1, gender: 'women', category: 'Dresses',
    name: 'Floral Midi Dress', price: 89, oldPrice: 120,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800',
    ],
    colors: ['Pink', 'Blue', 'Yellow'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A flowing midi dress with delicate floral print. Perfect for summer occasions.',
    rating: 4.7, reviewCount: 128, isNew: true, onSale: true, stock: 24,
  },
  {
    id: 2, gender: 'women', category: 'Tops',
    name: 'Silk Blouse', price: 65,
    image: 'https://images.unsplash.com/photo-1564257577-2d3ee8740ae6?w=800',
    images: ['https://images.unsplash.com/photo-1564257577-2d3ee8740ae6?w=800'],
    colors: ['White', 'Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Elegant silk blouse with mother-of-pearl buttons and a relaxed fit.',
    rating: 4.5, reviewCount: 89, isNew: false, onSale: false, stock: 15,
  },
  {
    id: 3, gender: 'women', category: 'Bottoms',
    name: 'High-Waist Jeans', price: 75,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
    images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
    colors: ['Blue', 'Black', 'Light Wash'],
    sizes: ['24', '26', '28', '30', '32'],
    description: 'Sculpting high-waist denim with the perfect amount of stretch.',
    rating: 4.8, reviewCount: 203, isNew: false, onSale: false, stock: 40,
  },
  {
    id: 4, gender: 'women', category: 'Outerwear',
    name: 'Wool Trench Coat', price: 245, oldPrice: 320,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
    images: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800'],
    colors: ['Camel', 'Black', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Timeless wool trench coat with a modern silhouette and signature belt.',
    rating: 4.9, reviewCount: 67, isNew: true, onSale: true, stock: 12,
  },
  {
    id: 5, gender: 'women', category: 'Shoes',
    name: 'Strappy Heels', price: 110,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800'],
    colors: ['Nude', 'Black', 'Red'],
    sizes: ['36', '37', '38', '39', '40'],
    description: 'Elegant strappy heels with cushioned insole for all-day comfort.',
    rating: 4.6, reviewCount: 156, isNew: false, onSale: false, stock: 28,
  },
  {
    id: 6, gender: 'women', category: 'Bags',
    name: 'Leather Tote Bag', price: 145,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
    images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800'],
    colors: ['Tan', 'Black', 'Burgundy'],
    sizes: ['One Size'],
    description: 'Spacious leather tote with interior pockets and a magnetic closure.',
    rating: 4.7, reviewCount: 94, isNew: true, onSale: false, stock: 18,
  },

  // ============ MEN ============
  {
    id: 7, gender: 'men', category: 'Tops',
    name: 'Classic Oxford Shirt', price: 55,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
    images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800'],
    colors: ['White', 'Blue', 'Pink'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A wardrobe essential. Soft cotton oxford with a tailored fit.',
    rating: 4.6, reviewCount: 287, isNew: false, onSale: false, stock: 50,
  },
  {
    id: 8, gender: 'men', category: 'Bottoms',
    name: 'Slim Chino Pants', price: 65,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b3a8c66?w=800',
    images: ['https://images.unsplash.com/photo-1473966968600-fa801b3a8c66?w=800'],
    colors: ['Khaki', 'Navy', 'Black'],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Modern slim-fit chinos in soft cotton-stretch fabric.',
    rating: 4.5, reviewCount: 142, isNew: false, onSale: false, stock: 35,
  },
  {
    id: 9, gender: 'men', category: 'Outerwear',
    name: 'Leather Bomber Jacket', price: 295, oldPrice: 395,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800'],
    colors: ['Black', 'Brown'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium leather bomber with ribbed cuffs and a quilted lining.',
    rating: 4.8, reviewCount: 76, isNew: true, onSale: true, stock: 10,
  },
  {
    id: 10, gender: 'men', category: 'Shoes',
    name: 'White Sneakers', price: 95,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'],
    colors: ['White', 'Black', 'Gray'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    description: 'Minimalist leather sneakers that go with everything.',
    rating: 4.7, reviewCount: 312, isNew: false, onSale: false, stock: 45,
  },
  {
    id: 11, gender: 'men', category: 'Tops',
    name: 'Cashmere Sweater', price: 165,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800'],
    colors: ['Gray', 'Navy', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Luxuriously soft cashmere crewneck. Lightweight yet warm.',
    rating: 4.9, reviewCount: 88, isNew: true, onSale: false, stock: 20,
  },
  {
    id: 12, gender: 'men', category: 'Bags',
    name: 'Canvas Backpack', price: 85,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800'],
    colors: ['Olive', 'Black', 'Navy'],
    sizes: ['One Size'],
    description: 'Durable canvas backpack with leather trim and laptop sleeve.',
    rating: 4.6, reviewCount: 134, isNew: false, onSale: false, stock: 30,
  },
];

// Generate fake reviews
const REVIEW_NAMES = ['Emma', 'Liam', 'Olivia', 'Noah', 'Sophia', 'Lucas', 'Ava', 'Mason', 'Isabella', 'Ethan'];
const REVIEW_TEXTS = [
  'Absolutely love this! The quality is amazing and it fits perfectly.',
  'Great purchase! Exactly as described. Will buy again.',
  'Beautiful product, true to size. Fast shipping too.',
  'Worth every penny. The fabric is so soft and comfortable.',
  'Stunning piece. Got so many compliments wearing it.',
  'Quality exceeded my expectations. Highly recommend!',
  'Perfect fit and color. Lives up to the photos.',
  'Lovely item but ran a bit small. Order one size up.',
];

export function getReviewsForProduct(productId) {
  const seed = productId * 17;
  return Array.from({ length: 4 + (productId % 4) }, (_, i) => ({
    id: `r${productId}-${i}`,
    name: REVIEW_NAMES[(seed + i) % REVIEW_NAMES.length],
    rating: 4 + ((seed + i) % 2),
    date: `${1 + ((seed + i) % 28)} days ago`,
    text: REVIEW_TEXTS[(seed + i) % REVIEW_TEXTS.length],
    verified: i % 2 === 0,
  }));
}

export const CATEGORIES = ['All', 'Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Bags'];
export const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200+', min: 200, max: Infinity },
];
export const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '24', '26', '28', '30', '32', '34', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];
export const ALL_COLORS = ['Black', 'White', 'Blue', 'Pink', 'Red', 'Green', 'Yellow', 'Beige', 'Navy', 'Gray', 'Brown', 'Camel', 'Cream', 'Burgundy', 'Olive', 'Tan', 'Nude', 'Khaki', 'Light Wash'];
