'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

const MobileMenu = ({
    mobileMenuOpen,
    setMobileMenuOpen,
    selectedFilters,
    handleSearchChange,
    setCurrentCategory // New prop to handle category changes
}) => {
    // State to track expanded mobile menu sections
    const [expandedSections, setExpandedSections] = useState({
        new: false,
        women: false,
        men: false,
        kids: false
    });

    // Toggle expanded section
    const toggleSection = (section) => {
        setExpandedSections({
            ...expandedSections,
            [section]: !expandedSections[section]
        });
    };

    // Handle category selection
    const handleCategorySelect = (category, subCategory = null) => {
        setCurrentCategory({
            main: category,
            sub: subCategory
        });
        setMobileMenuOpen(false); // Close mobile menu after selection
    };

    // Animation variants
    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0 }
    };

    if (!mobileMenuOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            initial="closed"
            animate="open"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
        >
            <div className="absolute right-0 top-0 bottom-0 w-4/5 bg-white shadow-lg overflow-y-auto">
                {/* Search */}
                <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={selectedFilters.search}
                            onChange={handleSearchChange}
                            className="bg-gray-50 rounded-full py-2 pl-4 pr-10 focus:outline-none w-full"
                        />
                        <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="p-4">
                    {/* New & Featured section */}
                    <div className="mb-4">
                        <button
                            className="flex justify-between items-center w-full py-2 text-left font-medium"
                            onClick={() => toggleSection('new')}
                        >
                            <span>New & Featured</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${expandedSections.new ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {expandedSections.new && (
                            <div className="ml-4 space-y-2 mt-2">
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('New & Featured', 'New Arrivals')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>New Arrivals</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('New & Featured', 'Trending Now')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Trending Now</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('New & Featured', 'Bestsellers')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Bestsellers</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Women section */}
                    <div className="mb-4">
                        <button
                            className="flex justify-between items-center w-full py-2 text-left font-medium"
                            onClick={() => toggleSection('women')}
                        >
                            <span>Women</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${expandedSections.women ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {expandedSections.women && (
                            <div className="ml-4 space-y-2 mt-2">
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Women', 'All Women')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>All Women</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Women', 'Sneakers')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Sneakers</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Women', 'Running')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Running</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Women', 'Casual')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Casual</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Men section */}
                    <div className="mb-4">
                        <button
                            className="flex justify-between items-center w-full py-2 text-left font-medium"
                            onClick={() => toggleSection('men')}
                        >
                            <span>Men</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${expandedSections.men ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {expandedSections.men && (
                            <div className="ml-4 space-y-2 mt-2">
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Men', 'All Men')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>All Men</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Men', 'Sneakers')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Sneakers</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Men', 'Running')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Running</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Men', 'Casual')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Casual</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Kids section */}
                    <div className="mb-4">
                        <button
                            className="flex justify-between items-center w-full py-2 text-left font-medium"
                            onClick={() => toggleSection('kids')}
                        >
                            <span>Kids</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${expandedSections.kids ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {expandedSections.kids && (
                            <div className="ml-4 space-y-2 mt-2">
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Kids', 'All Kids')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>All Kids</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Kids', 'Boys')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Boys</span>
                                </button>
                                <button
                                    className="flex items-center py-1 text-gray-700"
                                    onClick={() => handleCategorySelect('Kids', 'Girls')}
                                >
                                    <ChevronRight className="w-4 h-4 mr-2" />
                                    <span>Girls</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Limited Edition - no dropdown */}
                    <button
                        className="flex items-center w-full py-2 text-left font-medium"
                        onClick={() => handleCategorySelect('Limited Edition')}
                    >
                        <span>Limited Edition</span>
                    </button>
                </nav>
            </div>
        </motion.div>
    );
};

export default MobileMenu;