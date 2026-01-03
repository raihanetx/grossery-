import React, { useState, useEffect } from 'react';
import { Product } from './ProductCard';

interface ProductDetailsProps {
  product: Product;
  onGoHome: () => void;
  onGoToCategory: (category: string) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onGoHome, onGoToCategory }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'faq'>('description');
  
  // Weight Selection State
  const weightOptions = [
    { label: '100g', factor: 0.1 },
    { label: '250g', factor: 0.25 },
    { label: '500g', factor: 0.5 },
    { label: '1kg', factor: 1 },
    { label: '2kg', factor: 2 },
  ];
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[3]); // Default to 1kg

  // Price Calculation Logic
  const currencySymbol = product.price.charAt(0);
  const basePriceAmount = parseInt(product.price.substring(1).replace(/[^0-9]/g, ''));
  const calculatedPrice = Math.round(basePriceAmount * selectedWeight.factor);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen animate-fade-in relative z-20 pt-6 md:pt-24 pb-12">
       <div className="w-full px-6 md:px-8">
          
          {/* Standard gap: gap-6 (24px) for mobile, gap-10 for desktop */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start">
              
              {/* Left Column: Image */}
              <div className="w-full md:w-[45%] relative">
                  <div className="sticky top-28">
                      <div className="relative">
                        {/* Height restricted to standard size */}
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full max-h-[350px] md:max-h-[450px] object-contain rounded-3xl relative z-10 border border-gray-200"
                        />
                      </div>
                  </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full md:w-[55%] flex flex-col pt-0">
                 
                 {/* 1. Breadcrumb - Standard mb-3 (12px) */}
                 <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs font-bold capitalize tracking-wide mb-3">
                    <button onClick={onGoHome} className="flex items-center gap-1 hover:text-orange-600 transition-colors cursor-pointer">
                        <i className="ri-home-4-line text-sm mb-[2px]"></i>
                        <span>Home</span>
                    </button>
                    <i className="ri-arrow-right-s-line text-xs"></i>
                    <button onClick={() => onGoToCategory(product.category)} className="hover:text-orange-600 transition-colors cursor-pointer">
                        {product.category}
                    </button>
                    <i className="ri-arrow-right-s-line text-xs"></i>
                    <span className="text-gray-900">Product Details</span>
                 </div>

                 {/* Title + Desc Block - Standard mb-6 (24px) */}
                 <div className="mb-6">
                     {/* 2. Title */}
                     <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2 tracking-tight">
                        {product.name}
                     </h1>

                     {/* 3. Short Description */}
                     <p className="text-gray-500 text-[16px] leading-relaxed max-w-xl font-medium">
                        Hand-picked from the finest local sources. Represents the pinnacle of freshness.
                     </p>
                 </div>

                 {/* 4. Weight Selection Chips - Standard mb-6 (24px) */}
                 <div className="mb-6">
                     <span className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3 block">Choose Quantity</span>
                     <div className="flex flex-wrap gap-2">
                        {weightOptions.map((option) => (
                            <button
                                key={option.label}
                                onClick={() => setSelectedWeight(option)}
                                className={`px-5 py-2.5 rounded-lg text-xs font-bold border transition-all ${
                                    selectedWeight.label === option.label
                                        ? 'border-orange-500 text-orange-500 bg-white'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                     </div>
                 </div>

                 {/* 5. Price & Quantity Row - Standard mb-8 (32px) */}
                 <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                     {/* Price Section */}
                     <div className="flex items-center h-10">
                        <div className="flex items-baseline gap-0.5">
                            <span className="text-lg font-bold text-gray-900 font-['Hind_Siliguri']">{currencySymbol}</span>
                            <span className="text-2xl font-black text-gray-900 tracking-tight">{calculatedPrice}</span>
                        </div>
                        
                        <div className="w-[1px] h-6 bg-gray-300 mx-3"></div>

                        <span className="text-sm text-gray-500 font-bold pt-1">{selectedWeight.label}</span>
                     </div>

                     {/* Quantity Section */}
                     <div className="flex items-center bg-white border border-gray-200 rounded-lg h-10 px-2 shadow-sm">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-full flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                        >
                            <i className="ri-subtract-line"></i>
                        </button>
                        <span className="font-black text-base text-gray-900 w-8 text-center">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-full flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                        >
                            <i className="ri-add-line"></i>
                        </button>
                     </div>
                 </div>

                 {/* 6. Action Buttons */}
                 <div className="flex gap-3 mb-10">
                    <button className="flex-1 bg-black text-white rounded-xl h-[52px] font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center justify-center shadow-lg shadow-gray-200">
                        Add to Cart
                    </button>
                    <button className="flex-1 bg-orange-600 text-white rounded-xl h-[52px] font-bold text-sm uppercase tracking-wider hover:bg-orange-700 transition-all flex items-center justify-center shadow-lg shadow-orange-100">
                        Buy Now
                    </button>
                    <button className="w-[52px] h-[52px] shrink-0 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 bg-white transition-all">
                        <i className="ri-share-forward-line text-xl"></i>
                    </button>
                 </div>

                 {/* 7. Horizontal Tabs */}
                 <div className="w-full">
                    <div className="flex items-center justify-between border-y border-gray-200 py-3 mb-6">
                        <button 
                            onClick={() => setActiveTab('description')}
                            className={`flex-1 text-center text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'description' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'}`}
                        >
                            Description
                        </button>
                        
                        <div className="w-[1px] h-4 bg-gray-200"></div>
                        
                        <button 
                            onClick={() => setActiveTab('reviews')}
                            className={`flex-1 text-center text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'reviews' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'}`}
                        >
                            Reviews (12)
                        </button>
                        
                        <div className="w-[1px] h-4 bg-gray-200"></div>
                        
                        <button 
                            onClick={() => setActiveTab('faq')}
                            className={`flex-1 text-center text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'faq' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'}`}
                        >
                            FAQ
                        </button>
                    </div>

                    <div className="min-h-[150px] text-sm text-gray-600 leading-relaxed font-medium">
                        {activeTab === 'description' && (
                            <div className="animate-fade-in">
                                <p className="mb-4">
                                    Experience the finest quality with our {product.name}. Sourced directly from premium artisan farms and crafted with care to ensure maximum freshness and taste.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                                    <li>100% Organic & Natural</li>
                                    <li>Farm-to-table freshness</li>
                                    <li>Premium quality guaranteed</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div className="animate-fade-in flex flex-col gap-4">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex text-orange-400 text-xs">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <span className="text-xs font-black text-gray-900">Rahim U.</span>
                                    </div>
                                    <p className="text-xs">Absolutely fresh and delicious! Delivery was super fast.</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex text-orange-400 text-xs">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </div>
                                        <span className="text-xs font-black text-gray-900">Karim S.</span>
                                    </div>
                                    <p className="text-xs">Good quality, packaging could be slightly better.</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'faq' && (
                            <div className="animate-fade-in space-y-3">
                                <div>
                                    <h4 className="font-black text-gray-900 mb-1 text-xs">How long does it stay fresh?</h4>
                                    <p className="text-xs">Ideally consumed within 3-4 days for peak freshness. Keep refrigerated.</p>
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-900 mb-1 text-xs">Is this organic?</h4>
                                    <p className="text-xs">Yes, all our products are sourced from certified organic farms.</p>
                                </div>
                            </div>
                        )}
                    </div>
                 </div>

              </div>
          </div>
       </div>
    </div>
  );
};