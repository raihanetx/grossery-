import React from 'react';

interface HeaderProps {
  onBack?: () => void;
}

export const Header = ({ onBack }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-5 relative">
          <button 
            onClick={onBack}
            className={`text-2xl text-gray-800 hover:text-orange-500 transition-colors z-10 w-10 h-10 flex items-center justify-center -ml-2 rounded-full active:bg-gray-100 ${onBack ? 'hover:bg-gray-100' : ''}`}
          >
            <i className={onBack ? "ri-arrow-left-line" : "ri-menu-2-line"}></i>
          </button>

          {/* Logo: Centered absolutely */}
          <a href="#" onClick={(e) => { e.preventDefault(); if(onBack) onBack(); }} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-extrabold text-orange-500 tracking-tight z-10">
            Krishi <span className="text-gray-900">Bitan</span>
          </a>

          <div className="flex items-center gap-6 md:gap-8 text-gray-800 z-10">
            <div className="relative">
              <i className="ri-shopping-bag-line text-2xl cursor-pointer hover:text-orange-500 transition-colors"></i>
              {/* Notification: Background removed, text colored orange */}
              <span className="absolute -top-1 -right-2 text-orange-600 text-[12px] font-extrabold">
                2
              </span>
            </div>
            <i className="ri-user-3-line text-2xl cursor-pointer hover:text-orange-500 transition-colors"></i>
          </div>
        </div>
      </header>
  );
};