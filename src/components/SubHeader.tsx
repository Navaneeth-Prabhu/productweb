// SubHeader.tsx
'use client'
import React from 'react';
import { X, Filter, ArrowUpDown } from 'lucide-react';
import { useRouter } from 'next/router';
interface SubHeaderProps {
    isHeaderSticky: boolean;
    hasAppliedFilters: boolean;
    totalAppliedFilters: number;
    selectedFilters: {
        categories: string[];
        priceRanges: string[];
        sizes: string[];
        colors: string[];
        brands: string[];
        genders: string[];
        search: string;
    };
    removeFilter: (filterType: string, value: string) => void;
    clearAllFilters: () => void;
    getFilterNameById: (type: string, id: string) => string;
    sidebarVisible: boolean;
    toggleSidebar: () => void;
    setFilterSidebarOpen: (isOpen: boolean) => void;
    sortOption: string;
    handleSortChange: (option: string) => void;
}


const SubHeader = ({
    isHeaderSticky,
    hasAppliedFilters,
    totalAppliedFilters,
    selectedFilters,
    removeFilter,
    clearAllFilters,
    getFilterNameById,
    sidebarVisible,
    toggleSidebar,
    setFilterSidebarOpen,
    sortOption,
    handleSortChange,
    currentCategory // New prop for category display
}) => {
    // Generate the header title based on current category
    const getHeaderTitle = () => {
        if (!currentCategory) return 'Sneakers Collection (All)';

        if (currentCategory.main === 'All') {
            return `Sneakers Collection (${totalAppliedFilters > 0 ? 'Filtered' : 'All'})`;
        }

        if (currentCategory.sub) {
            if (currentCategory.sub.includes('Sneakers')) {
                return `${currentCategory.main}'s Sneakers Collection`;
            }
            return `${currentCategory.main}'s ${currentCategory.sub} Collection`;
        }

        return `${currentCategory.main} Collection`;
    };

    return (
        <div className={`w-full bg-white z-30 transition-all duration-500 ${isHeaderSticky ? 'sticky top-0 shadow-md' : ''}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center overflow-hidden">
                        <h1 className="text-xl lg:text-2xl font-bold mr-4 whitespace-nowrap text-black">
                            {getHeaderTitle()}
                        </h1>

                        {/* Filter badges - show when filters are applied */}
                        {hasAppliedFilters && (
                            <div className="hidden lg:flex flex-wrap gap-2 ml-4 items-center overflow-x-auto max-w-md">
                                {Object.entries(selectedFilters).map(([filterType, values]) =>
                                    filterType !== 'search' && values.length > 0 && values.map(value => (
                                        <span
                                            key={`${filterType}-${value}`}
                                            className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full flex items-center whitespace-nowrap"
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

                                {totalAppliedFilters > 0 && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-gray-700 underline text-sm ml-2 whitespace-nowrap"
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Filter Button (Desktop) */}
                        <button
                            onClick={toggleSidebar}
                            className="hidden lg:flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-500"
                        >
                            <Filter className="w-5 h-5 text-gray-800" />
                            <span className="font-medium text-gray-800">{sidebarVisible ? 'Hide Filters' : 'Show Filters'}</span>
                        </button>

                        {/* Filter Button (Mobile) */}
                        <button
                            onClick={() => setFilterSidebarOpen(true)}
                            className="lg:hidden flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full"
                        >
                            <Filter className="w-5 h-5" />
                            <span className="font-medium">Filters {totalAppliedFilters > 0 && `(${totalAppliedFilters})`}</span>
                        </button>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                className="bg-white border border-gray-300 rounded-full py-2 pl-4 pr-8 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                                value={sortOption}
                                onChange={(e) => handleSortChange(e.target.value)}
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low-high">Price: Low to High</option>
                                <option value="price-high-low">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                                <option value="name-a-z">Name: A to Z</option>
                                <option value="name-z-a">Name: Z to A</option>
                            </select>
                            <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-4 h-4 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;