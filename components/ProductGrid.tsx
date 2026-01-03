import React from 'react';
import { ProductCard, Product } from './ProductCard';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface ProductGridProps {
  products: Product[];
  categories: Category[];
  activeCategory: string;
  onProductClick: (product: Product) => void;
}

export const ProductGrid = ({ products, categories, activeCategory, onProductClick }: ProductGridProps) => {
  // Determine which categories to show
  const categoriesToShow = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <main className="px-5 max-w-6xl mx-auto pb-12 space-y-12">
        {categoriesToShow.map((category) => {
          const categoryProducts = products.filter(p => p.category === category.id);
          
          if (categoryProducts.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="scroll-mt-24">
              <h2 className="text-sm font-black text-gray-900 mb-6 flex items-center justify-start gap-3 tracking-[0.2em] uppercase">
                <span className="w-8 h-[1px] bg-orange-500"></span>
                {category.name}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {categoryProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
  );
};