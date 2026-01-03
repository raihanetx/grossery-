import React from 'react';
import { SearchBar } from './SearchBar';

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-5 pt-8 pb-4 text-center bg-gradient-to-b from-orange-100/60 via-orange-50/20 to-white md:pt-20 md:pb-24 overflow-hidden">
        {/* Decorated Background Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <i className="ri-cake-3-line absolute top-10 left-[10%] text-orange-500 opacity-[0.08] text-6xl rotate-12"></i>
          <i className="ri-leaf-line absolute top-20 right-[8%] text-orange-500 opacity-[0.08] text-7xl -rotate-12"></i>
          <i className="ri-cup-line absolute bottom-12 left-[15%] text-orange-500 opacity-[0.08] text-5xl rotate-[25deg]"></i>
          <i className="ri-bread-line absolute bottom-24 right-[12%] text-orange-500 opacity-[0.08] text-8xl -rotate-[20deg]"></i>
        </div>

        <div className="max-w-4xl relative z-10">
          <h1 className="hero-title text-[38px] md:text-7xl font-extrabold tracking-tighter mb-3">
            <span className="text-gray-900 font-extrabold">Eat Fresh</span> <br className="md:hidden" />
            <span className="text-orange-500 font-extrabold">Live Better</span>
          </h1>
          <p className="text-xs md:text-xl text-gray-500 mb-6 md:mb-10 max-w-xs md:max-w-none mx-auto font-medium">
            Premium hand-picked quality ingredients <br className="md:hidden" /> delivered daily to your door.
          </p>
        </div>

        {/* Search Bar Component */}
        <SearchBar />
      </section>
  );
};