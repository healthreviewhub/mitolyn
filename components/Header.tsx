import React from 'react';
import { useState } from 'react';
import { OrderNowIcon } from './Icons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'FREE Bonuses', href: '#bonuses' },
    { name: 'About', href: '#about' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
    <div className="bg-yellow-300 text-yellow-900 text-center py-1 text-sm font-semibold">
      Affiliate Disclosure: If you purchase through links on this page, we may earn a commission.
    </div>
    <header className="bg-[#1f2a4a] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              <img src="https://picsum.photos/seed/logo/180/50" alt="Mitolyn Logo" className="h-10 md:h-12" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-yellow-400 transition-colors duration-300 font-bold text-base">
                  {link.name}
                </a>
              ))}
              <a href="#order" className="bg-[#00e8fe] text-[#1f2a4a] font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-base flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Official Website <OrderNowIcon className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <a href="#order" className="bg-[#00e8fe] text-[#1f2a4a] font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition text-sm mr-4">
              Order Now
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1f2a4a]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
    </>
  );
};
