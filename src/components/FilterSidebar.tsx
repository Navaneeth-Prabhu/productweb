// FilterSidebar.tsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { availableSizes, categories, priceRanges } from '@/constants/mockData';

interface FilterSidebarProps {
    sidebarVisible: boolean;
    hasAppliedFilters: boolean;
    selectedFilters: {
        categories: string[];
        priceRanges: string[];
        sizes: string[];
        colors: string[];
        brands: string[];
        genders: string[];
        search: string;
    };
    expandedFilters: {
        category: boolean;
        price: boolean;
        size: boolean;
        color: boolean;
        brand: boolean;
        gender: boolean;
    };
    expandedMoreFilters: {
        categories: boolean;
        brands: boolean;
        colors: boolean;
    };
    filterSearch: {
        category: string;
        brand: string;
        color: string;
    };
    availableBrands: string[];
    availableColors: string[];
    availableGenders: string[];
    handleFilterSearchChange: (filterType: string, value: string) => void;
    toggleFilterSection: (section: string) => void;
    toggleMoreFilters: (filterType: string) => void;
    handleFilterChange: (filterType: string, value: string) => void;
    clearAllFilters: () => void;
}

const FilterSidebar = ({
    sidebarVisible,
    hasAppliedFilters,
    selectedFilters,
    expandedFilters,
    expandedMoreFilters,
    filterSearch,
    availableBrands,
    availableColors,
    availableGenders,
    handleFilterSearchChange,
    toggleFilterSection,
    toggleMoreFilters,
    handleFilterChange,
    clearAllFilters
}: FilterSidebarProps) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [sidebarHeight, setSidebarHeight] = useState(0);

    // Animation variants
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Handle sidebar height calculation
    useEffect(() => {
        if (sidebarRef.current) {
            setSidebarHeight(sidebarRef.current.getBoundingClientRect().height);
        }

        const handleResize = () => {
            if (sidebarRef.current) {
                setSidebarHeight(sidebarRef.current.getBoundingClientRect().height);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!sidebarVisible) return null;

    // Get color display name
    const getColorName = (color: string) => {
        return color.charAt(0).toUpperCase() + color.slice(1);
    };

    return (
        <motion.div
            className="sticky top-24 self-start h-[calc(100vh-160px)] overflow-y-auto pr-6"
            ref={sidebarRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="space-y-8">
                {/* Category Filter */}
                <motion.div
                    className="border-b pb-6"
                    variants={itemVariants}
                >
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('category')}
                    >
                        <span className="text-gray-900">Category</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform text-gray-500 ${expandedFilters.category ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.category && (
                        <motion.div className="space-y-2">
                            {Object.entries(categories)
                                .filter(([key, label]) =>
                                    label.toLowerCase().includes(filterSearch.category.toLowerCase())
                                )
                                .map(([key, label]) => (
                                    <div key={key} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`category-${key}`}
                                            checked={selectedFilters.categories.includes(key)}
                                            onChange={() => handleFilterChange('categories', key)}
                                            className="w-4 h-4 text-black rounded"
                                        />
                                        <label htmlFor={`category-${key}`} className="ml-2 text-gray-800 font-medium">
                                            {label}
                                        </label>
                                    </div>
                                ))}
                        </motion.div>
                    )}
                </motion.div>

                {/* Brand Filter */}
                <motion.div
                    className="border-b pb-6"
                    variants={itemVariants}
                >
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('brand')}
                    >
                        <span className="text-gray-900">Brand</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform text-gray-500 ${expandedFilters.brand ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.brand && (
                        <div className="space-y-2">
                            <div className="relative mb-2">
                                <input
                                    type="text"
                                    placeholder="Search brands"
                                    value={filterSearch.brand}
                                    onChange={(e) => handleFilterSearchChange('brand', e.target.value)}
                                    className="w-full bg-gray-50 text-gray-400 rounded-full py-2 pl-4 pr-10 focus:outline-none text-sm"
                                />
                                <Search className="absolute right-3 top-2 text-gray-500 w-4 h-4" />
                            </div>

                            {availableBrands
                                .filter(brand => brand.toLowerCase().includes(filterSearch.brand.toLowerCase()))
                                .slice(0, expandedMoreFilters.brands ? undefined : 4)
                                .map(brand => (
                                    <div key={brand} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
                                            checked={selectedFilters.brands.includes(brand)}
                                            onChange={() => handleFilterChange('brands', brand)}
                                            className="w-4 h-4 text-black rounded"
                                        />
                                        <label htmlFor={`brand-${brand.toLowerCase().replace(/\s+/g, '-')}`} className="ml-2 text-gray-800 font-medium">
                                            {brand}
                                        </label>
                                    </div>
                                ))}

                            {availableBrands.length > 4 && (
                                <motion.button
                                    className="text-black font-medium text-sm"
                                    onClick={() => toggleMoreFilters('brands')}
                                >
                                    {expandedMoreFilters.brands ? 'Show less' : '+ Show more'}
                                </motion.button>
                            )}
                        </div>
                    )}
                </motion.div>

                {/* Gender Filter */}
                <motion.div
                    className="border-b pb-6"
                    variants={itemVariants}
                >
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('gender')}
                    >
                        <span className="text-gray-900">Gender</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform  text-gray-500 ${expandedFilters.gender ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.gender && (
                        <div className="space-y-2">
                            {availableGenders.map(gender => (
                                <div key={gender} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`gender-${gender.toLowerCase()}`}
                                        checked={selectedFilters.genders.includes(gender.toLowerCase())}
                                        onChange={() => handleFilterChange('genders', gender.toLowerCase())}
                                        className="w-4 h-4 text-black rounded"
                                    />
                                    <label htmlFor={`gender-${gender.toLowerCase()}`} className="ml-2 text-gray-800 font-medium">
                                        {gender}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Color Filter */}
                <motion.div
                    className="border-b pb-6"
                    variants={itemVariants}
                >
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('color')}
                    >
                        <span className="text-gray-900">Color</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform text-gray-500 ${expandedFilters.color ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.color && (
                        <div className="space-y-4">

                            <div className="flex flex-wrap gap-3">
                                {availableColors
                                    .filter(color => color.toLowerCase().includes(filterSearch.color.toLowerCase()))
                                    .slice(0, expandedMoreFilters.colors ? undefined : 8)
                                    .map(color => (
                                        <div key={color} className="flex flex-col items-center space-y-1">
                                            <button
                                                className={`w-8 h-8 rounded-full border border-gray-300`}
                                                style={{
                                                    backgroundColor: color,
                                                    boxShadow: selectedFilters.colors.includes(color)
                                                        ? 'inset 0 0 0 2px black'
                                                        : 'none',
                                                }}
                                                onClick={() => handleFilterChange('colors', color)}
                                                aria-label={color}
                                                title={getColorName(color)}
                                            />

                                            {/* <span className="text-xs">{getColorName(color)}</span> */}
                                        </div>
                                    ))}
                            </div>

                            {availableColors.length > 8 && (
                                <motion.button
                                    className="text-black font-medium text-sm"
                                    onClick={() => toggleMoreFilters('colors')}
                                >
                                    {expandedMoreFilters.colors ? 'Show less' : '+ Show more'}
                                </motion.button>
                            )}
                        </div>
                    )}
                </motion.div>

                {/* Size Filter */}
                <motion.div
                    className="border-b pb-6"
                    variants={itemVariants}
                >
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('size')}
                    >
                        <span className="text-gray-900">Size</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform  text-gray-500 ${expandedFilters.size ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.size && (
                        <div className="flex flex-wrap gap-2">
                            {availableSizes.map(size => (
                                <button
                                    key={size}
                                    className={`px-6 py-1 border font-medium text-sm ${selectedFilters.sizes.includes(size)
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-300 text-gray-800 hover:border-gray-600'}`}
                                    onClick={() => handleFilterChange('sizes', size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Price Filter */}
                <motion.div
                    className="border-b pb-6"
                    variants={itemVariants}
                >
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('price')}
                    >
                        <span className="text-gray-900">Price</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform text-gray-500 ${expandedFilters.price ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.price && (
                        <div className="space-y-2">
                            {priceRanges.map(range => (
                                <div key={range.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`price-${range.id}`}
                                        checked={selectedFilters.priceRanges.includes(range.id)}
                                        onChange={() => handleFilterChange('priceRanges', range.id)}
                                        className="w-4 h-4 text-black rounded"
                                    />
                                    <label htmlFor={`price-${range.id}`} className="ml-2 text-gray-800 font-medium">
                                        {range.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>

            {hasAppliedFilters && (
                <button
                    className="mt-6 text-black font-bold underline"
                    onClick={clearAllFilters}
                >
                    Clear All Filters
                </button>
            )}
        </motion.div>
    );
};

export default FilterSidebar;