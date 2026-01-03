import React, { useState } from 'react';

export const SearchBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full max-w-[420px] md:max-w-[600px] relative z-50 px-5 md:px-0">
      <div className="flex items-center gap-3">
        {/* Search Input - Main Bar */}
        <div className="flex-1 flex items-center bg-white border border-gray-100 rounded-2xl px-4 h-14 shadow-sm focus-within:ring-2 focus-within:ring-orange-100 focus-within:border-orange-200 transition-all">
          <i className="ri-search-2-line text-xl text-gray-400 mr-3"></i>
          <input
            type="text"
            placeholder="Search for groceries..."
            className="w-full bg-transparent border-none outline-none text-[15px] font-medium placeholder:text-gray-400 text-gray-800 h-full"
          />
        </div>

        {/* Filter Button - Solid Orange for visibility, clearly separated */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm transition-all duration-200 active:scale-95 ${
            isFilterOpen 
              ? 'bg-gray-900 text-white' 
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          <i className="ri-sound-module-line text-xl"></i>
        </button>
      </div>

      {/* Filter Options - Direct Chips appearing below */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isFilterOpen ? 'max-h-[100px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
         <div className="flex flex-wrap gap-3 justify-center md:justify-start">
             <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:border-orange-500 hover:text-orange-500 transition-colors shadow-sm">
                Popular
             </button>
             <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:border-orange-500 hover:text-orange-500 transition-colors shadow-sm">
                Low to High
             </button>
             <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:border-orange-500 hover:text-orange-500 transition-colors shadow-sm">
                High to Low
             </button>
         </div>
      </div>
    </div>
  );
};