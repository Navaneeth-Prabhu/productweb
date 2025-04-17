// Now let's update the MobileFilterSidebar component with all filters

// MobileFilterSidebar.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronDown, Search } from 'lucide-react';
import { availableSizes, categories, priceRanges } from '@/constants/mockData';

interface MobileFilterSidebarProps {
    filterSidebarOpen: boolean;
    setFilterSidebarOpen: (isOpen: boolean) => void;
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
    removeFilter: (filterType: string, value: string) => void;
    clearAllFilters: () => void;
    getFilterNameById: (type: string, id: string) => string;
}

const MobileFilterSidebar = ({
    filterSidebarOpen,
    setFilterSidebarOpen,
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
    removeFilter,
    clearAllFilters,
    getFilterNameById
}: MobileFilterSidebarProps) => {
    if (!filterSidebarOpen) return null;

    // Get color display name
    const getColorName = (color: string) => {
        return color.charAt(0).toUpperCase() + color.slice(1);
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-white lg:hidden p-4"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setFilterSidebarOpen(false)}>
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Applied filter chips for mobile */}
            {hasAppliedFilters && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(selectedFilters).map(([filterType, values]) =>
                        filterType !== 'search' &&
                        Array.isArray(values) &&
                        values.length > 0 &&
                        values.map(value => (
                            <span
                                key={`${filterType}-${value}`}
                                className="bg-gray-100 text-sm font-medium px-3 py-1 rounded-full flex items-center"
                            >
                                {getFilterNameById(filterType, value)}
                                <button
                                    onClick={() => removeFilter(filterType, value)}
                                    className="ml-1 text-gray-500 hover:text-gray-800"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))
                    )}

                </div>
            )}

            {/* Mobile Filter Content */}
            <div className="space-y-6 overflow-y-auto h-[calc(100vh-160px)]">
                {/* Category Filter */}
                <div className="border-b pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('category')}
                    >
                        <span className="text-gray-900">Category</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedFilters.category ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.category && (
                        <div className="space-y-2">
                            {Object.entries(categories).map(([key, label]) => (
                                <div key={key} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`mobile-category-${key}`}
                                        checked={selectedFilters.categories.includes(key)}
                                        onChange={() => handleFilterChange('categories', key)}
                                        className="w-4 h-4 text-black rounded"
                                    />
                                    <label htmlFor={`mobile-category-${key}`} className="ml-2 text-gray-800 font-medium">
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Brand Filter */}
                <div className="border-b pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('brand')}
                    >
                        <span className="text-gray-900">Brand</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedFilters.brand ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.brand && (
                        <div className="space-y-2">
                            <div className="relative mb-2">
                                <input
                                    type="text"
                                    placeholder="Search brands"
                                    value={filterSearch.brand}
                                    onChange={(e) => handleFilterSearchChange('brand', e.target.value)}
                                    className="w-full bg-gray-50 rounded-full py-2 pl-4 pr-10 focus:outline-none text-sm"
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
                                            id={`mobile-brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
                                            checked={selectedFilters.brands.includes(brand)}
                                            onChange={() => handleFilterChange('brands', brand)}
                                            className="w-4 h-4 text-black rounded"
                                        />
                                        <label htmlFor={`mobile-brand-${brand.toLowerCase().replace(/\s+/g, '-')}`} className="ml-2 text-gray-800 font-medium">
                                            {brand}
                                        </label>
                                    </div>
                                ))}

                            {availableBrands.length > 4 && (
                                <button
                                    className="text-black font-medium text-sm"
                                    onClick={() => toggleMoreFilters('brands')}
                                >
                                    {expandedMoreFilters.brands ? 'Show less' : '+ Show more'}
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Gender Filter */}
                <div className="border-b pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('gender')}
                    >
                        <span className="text-gray-900">Gender</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedFilters.gender ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.gender && (
                        <div className="space-y-2">
                            {availableGenders.map(gender => (
                                <div key={gender} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`mobile-gender-${gender.toLowerCase()}`}
                                        checked={selectedFilters.genders.includes(gender.toLowerCase())}
                                        onChange={() => handleFilterChange('genders', gender.toLowerCase())}
                                        className="w-4 h-4 text-black rounded"
                                    />
                                    <label htmlFor={`mobile-gender-${gender.toLowerCase()}`} className="ml-2 text-gray-800 font-medium">
                                        {gender}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Color Filter */}
                <div className="border-b pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('color')}
                    >
                        <span className="text-gray-900">Color</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedFilters.color ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.color && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-4 gap-2">
                                {availableColors.map(color => (
                                    <div key={color} className="flex flex-col items-center space-y-1">
                                        <button
                                            className={`w-8 h-8 rounded-full ${selectedFilters.colors.includes(color)
                                                ? 'ring-2 ring-black ring-offset-1 border border-black'
                                                : 'border border-gray-300'}`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => handleFilterChange('colors', color)}
                                            aria-label={color}
                                            title={getColorName(color)}
                                        />
                                        <span className="text-xs">{getColorName(color)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Size Filter */}
                <div className="border-b pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('size')}
                    >
                        <span className="text-gray-900">Size</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedFilters.size ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.size && (
                        <div className="flex flex-wrap gap-2">
                            {availableSizes.map(size => (
                                <button
                                    key={size}
                                    className={`px-3 py-1 rounded-md border font-medium ${selectedFilters.sizes.includes(size)
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-300 text-gray-800 hover:border-gray-600'}`}
                                    onClick={() => handleFilterChange('sizes', size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Price Filter */}
                <div className="border-b pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left font-bold mb-4"
                        onClick={() => toggleFilterSection('price')}
                    >
                        <span className="text-gray-900">Price</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedFilters.price ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedFilters.price && (
                        <div className="space-y-2">
                            {priceRanges.map(range => (
                                <div key={range.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`mobile-price-${range.id}`}
                                        checked={selectedFilters.priceRanges.includes(range.id)}
                                        onChange={() => handleFilterChange('priceRanges', range.id)}
                                        className="w-4 h-4 text-black rounded"
                                    />
                                    <label htmlFor={`mobile-price-${range.id}`} className="ml-2 text-gray-800 font-medium">
                                        {range.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pt-4 flex justify-between">
                    <button
                        className="text-gray-900 font-bold"
                        onClick={clearAllFilters}
                    >
                        Clear All
                    </button>

                    <button
                        className="bg-black text-white px-6 py-2 font-bold rounded-full"
                        onClick={() => setFilterSidebarOpen(false)}
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default MobileFilterSidebar;