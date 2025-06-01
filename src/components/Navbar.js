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
          <li className="hover:text-green-600 cursor-pointer">Home</li>

          <li className="relative group cursor-pointer">
            <span className="hover:text-green-600">Recipes</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md min-w-[180px]">
              <li className="px-4 py-2 hover:bg-green-50">North Indian</li>
              <li className="px-4 py-2 hover:bg-green-50">South Indian</li>
              <li className="px-4 py-2 hover:bg-green-50">East Indian</li>
              <li className="px-4 py-2 hover:bg-green-50">West Indian</li>
              <li className="px-4 py-2 hover:bg-green-50">Street Food</li>
              <li className="px-4 py-2 hover:bg-green-50">Sweets & Desserts</li>
              <li className="px-4 py-2 hover:bg-green-50">Breads</li>
              <li className="px-4 py-2 hover:bg-green-50">Rice Dishes</li>
              <li className="px-4 py-2 hover:bg-green-50">Snacks & Starters</li>
              <li className="px-4 py-2 hover:bg-green-50">Beverages</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <span className="hover:text-green-600">Occasions</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md min-w-[180px]">
              <li className="px-4 py-2 hover:bg-green-50">Daily Meals</li>
              <li className="px-4 py-2 hover:bg-green-50">Weekend Specials</li>
              <li className="px-4 py-2 hover:bg-green-50">Kids Tiffin</li>
              <li className="px-4 py-2 hover:bg-green-50">Festive Recipes</li>
              <li className="px-4 py-2 hover:bg-green-50">Party Recipes</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <span className="hover:text-green-600">Diets</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md min-w-[180px]">
              <li className="px-4 py-2 hover:bg-green-50">Vegan</li>
              <li className="px-4 py-2 hover:bg-green-50">Jain Recipes</li>
              <li className="px-4 py-2 hover:bg-green-50">Low Oil</li>
              <li className="px-4 py-2 hover:bg-green-50">High Protein</li>
              <li className="px-4 py-2 hover:bg-green-50">Gluten-Free</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <span className="hover:text-green-600">Cooking Time</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md min-w-[180px]">
              <li className="px-4 py-2 hover:bg-green-50">Under 15 Minutes</li>
              <li className="px-4 py-2 hover:bg-green-50">15-30 Minutes</li>
              <li className="px-4 py-2 hover:bg-green-50">30-60 Minutes</li>
              <li className="px-4 py-2 hover:bg-green-50">One-Pot Meals</li>
            </ul>
          </li>

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
          <a href="#" className="block hover:text-green-600">Home</a>
          <a href="#" className="block hover:text-green-600">Recipes</a>
          <a href="#" className="block hover:text-green-600">Occasions</a>
          <a href="#" className="block hover:text-green-600">Diets</a>
          <a href="#" className="block hover:text-green-600">Cooking Time</a>
          <a href="#" className="block hover:text-green-600">About</a>
          <a href="#" className="block hover:text-green-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;