'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navVisible,
  wishlist,
  selectedFilters,
  handleSearchChange,
  setCurrentCategory // New prop to handle category changes
}) => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown menu
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // Handle category selection
  const handleCategorySelect = (category, subCategory = null) => {
    setCurrentCategory({
      main: category,
      sub: subCategory
    });
    setOpenDropdown(null); // Close dropdown after selection
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b border-gray-100"
      initial={{ y: 0 }}
      animate={{ y: navVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-black">
            <Link href="/" onClick={() => handleCategorySelect('All')}>
              TRENDWEAR
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* New & Featured dropdown */}
            <div className="relative">
              <button
                className="text-gray-800 hover:text-black transition-colors flex items-center gap-1"
                onClick={() => toggleDropdown('new')}
              >
                New & Featured
                <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'new' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'new' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('New & Featured', 'New Arrivals')}
                    >
                      New Arrivals
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('New & Featured', 'Trending Now')}
                    >
                      Trending Now
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('New & Featured', 'Bestsellers')}
                    >
                      Bestsellers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Women dropdown */}
            <div className="relative">
              <button
                className="text-gray-800 hover:text-black transition-colors flex items-center gap-1"
                onClick={() => toggleDropdown('women')}
              >
                Women
                <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'women' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'women' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Women', 'All Women')}
                    >
                      All Women
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Women', 'Sneakers')}
                    >
                      Sneakers
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Women', 'Running')}
                    >
                      Running
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Women', 'Casual')}
                    >
                      Casual
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Men dropdown */}
            <div className="relative">
              <button
                className="text-gray-800 hover:text-black transition-colors flex items-center gap-1"
                onClick={() => toggleDropdown('men')}
              >
                Men
                <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'men' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'men' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Men', 'All Men')}
                    >
                      All Men
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Men', 'Sneakers')}
                    >
                      Sneakers
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Men', 'Running')}
                    >
                      Running
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Men', 'Casual')}
                    >
                      Casual
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Kids dropdown */}
            <div className="relative">
              <button
                className="text-gray-800 hover:text-black transition-colors flex items-center gap-1"
                onClick={() => toggleDropdown('kids')}
              >
                Kids
                <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'kids' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'kids' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Kids', 'All Kids')}
                    >
                      All Kids
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Kids', 'Boys')}
                    >
                      Boys
                    </Link>
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => handleCategorySelect('Kids', 'Girls')}
                    >
                      Girls
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Limited Edition - direct link */}
            <Link
              href="/product"
              className="text-gray-800 hover:text-black transition-colors"
              onClick={(e) => {
                handleCategorySelect('Limited Edition');
              }}
            >
              Limited Edition
            </Link>
          </div>

          {/* Desktop Search and Wishlist */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={selectedFilters.search}
                onChange={handleSearchChange}
                className="bg-gray-50 rounded-full text-gray-400 py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-300 w-64"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>

            <div className="relative">
              <Heart className="w-6 h-6 text-gray-800 cursor-pointer hover:text-red-500 transition-colors" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <Heart className="w-6 h-6 text-gray-800" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        ></div>
      )}
    </motion.header>
  );
};

export default Navbar;