import React from 'react';

export interface Product {
  id: string | number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  // Extract symbol and amount assuming the format is always "৳Amount"
  const currencySymbol = product.price.charAt(0);
  const priceAmount = product.price.substring(1);

  return (
    <div onClick={onClick} className="group flex flex-col cursor-pointer">
      {/* Image Container: Added border-gray-200 for the requested thin border */}
      <div className="aspect-square rounded-xl overflow-hidden mb-2 bg-[#F7F7F7] relative border border-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
        {/* Add Button: Smaller size (h-7 w-7), smaller icon (text-sm), closer to corner (bottom-1.5 right-1.5) */}
        <button className="absolute bottom-1.5 right-1.5 h-7 w-7 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all z-10 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 duration-300">
            <i className="ri-add-line text-sm font-bold"></i>
        </button>
      </div>
      
      {/* Text Container: pl-2 to shift content slightly to the right */}
      <div className="flex flex-col pl-2">
        {/* Title: font-medium for normal look */}
        <h3 className="text-[13px] font-medium text-black mb-[2px] leading-snug truncate">
          {product.name}
        </h3>
        
        {/* Price and Action Row - Items centered to ensure perfect alignment */}
        <div className="flex items-center h-5">
          {/* Price: Adjusted sizes to match Buy Now button weight */}
          <div className="flex items-center text-black font-black leading-none">
            {/* Symbol: Moved up by changing translate-y from 1px to 0.5px */}
            <span className="text-[15px] font-['Hind_Siliguri'] translate-y-[0.5px]">
              {currencySymbol}
            </span>
            {/* Amount: 13px matches the visual height of 11px Uppercase button */}
            <span className="text-[13px] font-sans ml-[1px]">
              {priceAmount}
            </span>
          </div>
          
          {/* Vertical Line Separator: Even spacing */}
          <div className="w-[1px] h-[10px] bg-gray-300 ml-3 mr-2"></div>

          {/* Buy Now Button: 11px Uppercase + Icon 11px = Visually same height as Price */}
          <button className="text-[11px] font-black text-black px-0 py-0 rounded uppercase tracking-wider hover:text-orange-600 transition-colors flex items-center gap-1 leading-none">
            <i className="ri-flashlight-fill font-normal text-[11px]"></i>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};