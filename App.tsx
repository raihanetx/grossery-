import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryList } from './components/CategoryList';
import { ProductGrid } from './components/ProductGrid';
import { MobileNav } from './components/MobileNav';
import { ProductDetails } from './components/ProductDetails';
import { Product } from './components/ProductCard';

export const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: 'ri-apps-2-line' },
    { id: 'fruits', name: 'Fruits', icon: 'ri-apple-line' },
    { id: 'vegetables', name: 'Vegetables', icon: 'ri-leaf-line' },
    { id: 'meat', name: 'Meat', icon: 'ri-restaurant-2-line' },
    { id: 'bakery', name: 'Bakery', icon: 'ri-cake-3-line' },
    { id: 'pantry', name: 'Pantry', icon: 'ri-cup-line' },
  ];

  const products: Product[] = [
    // Fruits
    { id: 13, name: 'Seasonal Premium Pick', price: '৳380', image: 'https://iili.io/fhZrDhX.png', category: 'fruits' },
    { id: 6, name: 'Fresh Farm Oranges', price: '৳220', image: 'https://iili.io/fhZJ53N.md.png', category: 'fruits' },
    { id: 7, name: 'Organic Green Apples', price: '৳290', image: 'https://iili.io/fhZJYvt.md.png', category: 'fruits' },
    { id: 8, name: 'Sweet Red Cherries', price: '৳480', image: 'https://iili.io/fhZJuGR.md.png', category: 'fruits' },
    { id: 22, name: 'Ripe Mangoes', price: '৳280', image: 'https://iili.io/fhZJ53N.md.png', category: 'fruits' },
    { id: 23, name: 'Fresh Pineapple', price: '৳180', image: 'https://iili.io/fhZrDhX.png', category: 'fruits' },

    // Vegetables
    { id: 9, name: 'Fresh Broccoli', price: '৳120', image: 'https://iili.io/fhZJXF2.md.png', category: 'vegetables' },
    { id: 10, name: 'Organic Carrots', price: '৳80', image: 'https://iili.io/fhZJtoJ.md.png', category: 'vegetables' },
    { id: 11, name: 'Fresh Avocados', price: '৳550', image: 'https://iili.io/fhZdzH7.md.png', category: 'vegetables' },
    { id: 24, name: 'Red Tomatoes', price: '৳70', image: 'https://iili.io/fhZJuGR.md.png', category: 'vegetables' },
    { id: 25, name: 'Organic Spinach', price: '৳40', image: 'https://iili.io/fhZJXF2.md.png', category: 'vegetables' },
    { id: 26, name: 'Crispy Lettuce', price: '৳60', image: 'https://iili.io/fhZJXF2.md.png', category: 'vegetables' },

    // Meat (New Category)
    { id: 40, name: 'Premium Beef Steak', price: '৳1200', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=80', category: 'meat' },
    { id: 41, name: 'Fresh Chicken Breast', price: '৳450', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80', category: 'meat' },
    { id: 42, name: 'Organic Mutton', price: '৳1500', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=400&q=80', category: 'meat' },
    { id: 43, name: 'Whole Chicken', price: '৳650', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=400&q=80', category: 'meat' },

    // Bakery
    { id: 1, name: 'Handmade Organic Sourdough', price: '৳450', image: 'https://iili.io/fhiC6Pf.png', category: 'bakery' },
    { id: 2, name: 'Pure Butter Choco Cookies', price: '৳320', image: 'https://iili.io/fhsczxf.md.png', category: 'bakery' },
    { id: 3, name: 'Premium Dark Chocolate', price: '৳250', image: 'https://iili.io/fhsc2Pp.md.png', category: 'bakery' },
    { id: 4, name: 'Fresh Cream Cupcakes', price: '৳180', image: 'https://iili.io/fhscfSt.md.png', category: 'bakery' },
    { id: 5, name: 'Artisan Baguette', price: '৳140', image: 'https://iili.io/fhscTil.md.png', category: 'bakery' },
    { id: 20, name: 'French Butter Croissant', price: '৳160', image: 'https://iili.io/fhscTil.md.png', category: 'bakery' },
    { id: 21, name: 'Blueberry Muffin', price: '৳130', image: 'https://iili.io/fhscfSt.md.png', category: 'bakery' },
    { id: 31, name: 'Whole Wheat Bread', price: '৳120', image: 'https://iili.io/fhiC6Pf.png', category: 'bakery' },

    // Pantry
    { id: 12, name: 'Premium Almonds', price: '৳850', image: 'https://iili.io/fhZdNlp.md.png', category: 'pantry' },
    { id: 27, name: 'Organic Honey', price: '৳550', image: 'https://iili.io/fhZdNlp.md.png', category: 'pantry' },
    { id: 28, name: 'Extra Virgin Olive Oil', price: '৳850', image: 'https://iili.io/fhZdNlp.md.png', category: 'pantry' },
    { id: 29, name: 'Basmati Rice (Premium)', price: '৳350', image: 'https://iili.io/fhiC6Pf.png', category: 'pantry' },
    { id: 30, name: 'Mixed Nuts', price: '৳950', image: 'https://iili.io/fhZdNlp.md.png', category: 'pantry' },
  ];

  return (
    <>
      <Header onBack={selectedProduct ? () => setSelectedProduct(null) : undefined} />
      {selectedProduct ? (
        <ProductDetails 
          product={selectedProduct} 
          onGoHome={() => setSelectedProduct(null)}
          onGoToCategory={(category) => {
            setActiveCategory(category);
            setSelectedProduct(null);
          }}
        />
      ) : (
        <>
          <Hero />
          <CategoryList 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          <ProductGrid 
            products={products}
            categories={categories.filter(c => c.id !== 'all')} // Pass only real categories for section headers
            activeCategory={activeCategory}
            onProductClick={(product) => setSelectedProduct(product)}
          />
          <MobileNav />
        </>
      )}
    </>
  );
};