import React from 'react';

export const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 px-8 py-3 z-50 flex justify-between items-center shadow-lg">
        <a href="#" className="text-orange-500">
          <i className="ri-home-5-fill text-2xl"></i>
        </a>
        <a href="#" className="text-gray-400">
          <i className="ri-store-2-line text-2xl"></i>
        </a>
        <a href="#" className="text-gray-400">
          <i className="ri-history-line text-2xl"></i>
        </a>
        <a href="#" className="text-gray-400">
          <i className="ri-user-line text-2xl"></i>
        </a>
      </nav>
  );
};