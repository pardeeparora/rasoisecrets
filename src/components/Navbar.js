import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          🍲 Rasoisecrets
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Recipes</a>
          <a href="#" className="text-gray-700 hover:text-green-600">About</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-green-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-green-600">Recipes</a>
          <a href="#" className="block text-gray-700 hover:text-green-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-green-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
