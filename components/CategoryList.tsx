import React from 'react';

export const CategoryList = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="relative z-20 pb-2 pt-2 md:-mt-16">
        <div className="flex gap-5 md:gap-8 overflow-x-auto px-6 justify-start md:justify-center no-scrollbar pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="group flex flex-col items-center shrink-0 relative"
            >
              {/* Wrapper with fixed width matching the circle to ensure border-to-border gap calculation */}
              <div className="w-14 md:w-16 flex flex-col items-center">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      activeCategory === cat.id
                        ? 'border-orange-500 bg-white shadow-md'
                        : 'border-gray-100 bg-white hover:border-orange-200'
                    }`}
                  >
                    <i
                      className={`${cat.icon} text-2xl transition-colors duration-300 ${
                        activeCategory === cat.id ? 'text-orange-500' : 'text-gray-400 group-hover:text-orange-400'
                      }`}
                    ></i>
                  </div>
                  
                  {/* Absolute positioning for text to not affect the flex gap */}
                  <span
                    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                      activeCategory === cat.id ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    {cat.name}
                  </span>
              </div>
            </button>
          ))}
        </div>
      </div>
  );
};