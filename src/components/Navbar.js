import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          🍲 Rasoisecrets
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-800">
          <li className="hover:text-green-600 cursor-pointer">Breakfast</li>
          <li className="hover:text-green-600 cursor-pointer">Lunch</li> 
          <li className="hover:text-green-600 cursor-pointer">Dinner</li>
          <li className="hover:text-green-600 cursor-pointer">Beverages</li>
          <li className="hover:text-green-600 cursor-pointer">Snacks</li>
          <li className="hover:text-green-600 cursor-pointer">Desserts</li>
          <li className="hover:text-green-600 cursor-pointer">All Recipes</li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
          <a href="#" className="block hover:text-green-600">Breakfast</a>
          <a href="#" className="block hover:text-green-600">Lunch</a>
          <a href="#" className="block hover:text-green-600">Dinner</a>
          <a href="#" className="block hover:text-green-600">Beverages</a>
          <a href="#" className="block hover:text-green-600">Snacks</a>
          <a href="#" className="block hover:text-green-600">Desserts</a>
          <a href="#" className="block hover:text-green-600">About</a>
          <a href="#" className="block hover:text-green-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;