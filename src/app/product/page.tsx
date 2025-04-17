// ProductCatalog.tsx (updated to include all new filter-related code)
'use client'
import React, { useState, useEffect } from 'react';
import { products, priceRanges } from '@/constants/mockData';
import Footer from '@/components/Footer';
import NewsSection from '@/components/NewsSection';
import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import SubHeader from '@/components/SubHeader';
import ProductGrid from '@/components/ProductGrid';
import FilterSidebar from '@/components/FilterSidebar';
import MobileFilterSidebar from '@/components/MobileFilterSidebar';
import Breadcrumb from '@/components/Breadcrumb';
import useFilterState from '@/hooks/useFilterState';

const ProductCatalog = () => {
    // Navigation state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    // Category state for navigation
    const [currentCategory, setCurrentCategory] = useState({
        main: 'All',
        sub: undefined
    });

    // Sidebar visibility state
    const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    // Product state
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [wishlist, setWishlist] = useState<number[]>([]);

    // Get filter state from custom hook
    const {
        selectedFilters,
        expandedFilters,
        expandedMoreFilters,
        filterSearch,
        sortOption,
        setSelectedFilters,
        setExpandedFilters,
        setExpandedMoreFilters,
        setFilterSearch,
        setSortOption,
        handleFilterChange,
        handleFilterSearchChange,
        handleSortChange,
        removeFilter,
        clearAllFilters: hookClearAllFilters,
        toggleFilterSection,
        toggleMoreFilters,
        getFilterNameById,
        hasAppliedFilters,
        totalAppliedFilters,
        availableBrands,
        availableColors,
        availableGenders
    } = useFilterState();

    // Clear all filters wrapper that also resets category
    const clearAllFilters = () => {
        hookClearAllFilters();
        setCurrentCategory({
            main: 'All',
            sub: undefined
        });
    };

    // Toggle wishlist item
    const toggleWishlist = (productId: number) => {
        setWishlist((prev: number[]) => {
            const index = prev.indexOf(productId);
            if (index > -1) {
                return prev.filter(id => id !== productId);
            } else {
                return [...prev, productId];
            }
        });
    };

    // Toggle sidebar visibility on desktop
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // Effect to update filters based on category selection
    useEffect(() => {
        if (currentCategory.main !== 'All') {
            let tempFilters = { ...selectedFilters };

            // Clear any existing category filters when changing main category
            tempFilters.categories = [];

            // Add gender filter based on category
            if (currentCategory.main === 'Men' || currentCategory.main === 'Women') {
                tempFilters.genders = [currentCategory.main.toLowerCase()];
            } else if (currentCategory.main === 'Kids') {
                tempFilters.genders = ['kids'];
            } else {
                // Clear gender filter for other categories
                tempFilters.genders = [];
            }

            // If Limited Edition is selected
            if (currentCategory.main === 'Limited Edition') {
                // Set a filter for limited edition products
                // Assuming you have a way to filter limited edition products
                // This might be a boolean flag on products or a specific category
                tempFilters.categories = ['limited-edition'];
            }

            // If a subcategory is selected
            if (currentCategory.sub && currentCategory.sub !== `All ${currentCategory.main}`) {
                // For categories like "Running", "Casual", "Sneakers"
                const subCategory = currentCategory.sub ? (currentCategory.sub as string).toLowerCase() : undefined;
                const validSubCategory = subCategory !== undefined ? subCategory : "";
                if (['Running', 'Casual', 'Sneakers'].includes(validSubCategory)) {
                    tempFilters.categories = [validSubCategory];
                }

                // For kids subcategories
                if (['Boys', 'Girls'].includes(validSubCategory)) {
                    tempFilters.genders = [validSubCategory];
                }

                // Handle special subcategories in New & Featured
                if (currentCategory.main === 'New & Featured') {
                    if (currentCategory.sub === 'New Arrivals') {
                        // Filter for newest products - this would depend on your data structure
                        // For example, you might have a 'newArrival' flag or 'dateAdded' field
                        tempFilters.categories = ['new-arrivals'];
                    } else if (currentCategory.sub === 'Trending Now') {
                        // Filter for trending products
                        tempFilters.categories = ['trending'];
                    } else if (currentCategory.sub === 'Bestsellers') {
                        // Filter for bestselling products
                        tempFilters.categories = ['bestsellers'];
                    }
                }
            }

            setSelectedFilters(tempFilters);
        } else {
            // If "All" is selected, clear gender and category filters
            setSelectedFilters(prev => ({
                ...prev,
                genders: [],
                categories: []
            }));
        }
    }, [currentCategory, setSelectedFilters]);

    // Filter and sort products
    const filteredProducts = applyFilters(products, selectedFilters);
    const sortedProducts = applySorting(filteredProducts, sortOption);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Handle sticky header
            if (currentScrollY > 120) {
                setIsHeaderSticky(true);
            } else {
                setIsHeaderSticky(false);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold - hide nav
                setNavVisible(false);
            } else {
                // Scrolling up or at top - show nav
                setNavVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Handle mobile menu and filter sidebar closing on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setMobileMenuOpen(false);
                setFilterSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Navigation Bar Component */}
            <Navbar
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                navVisible={navVisible}
                wishlist={wishlist}
                selectedFilters={selectedFilters}
                handleSearchChange={(e: any) => handleFilterChange('search', e.target.value)}
                setCurrentCategory={setCurrentCategory}
            />

            {/* Mobile Menu */}
            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                selectedFilters={selectedFilters}
                handleSearchChange={(e: any) => handleFilterChange('search', e.target.value)}
                setCurrentCategory={setCurrentCategory}
            />

            {/* Sub Header with filter options */}
            <SubHeader
                isHeaderSticky={isHeaderSticky}
                hasAppliedFilters={hasAppliedFilters}
                totalAppliedFilters={totalAppliedFilters}
                selectedFilters={selectedFilters}
                removeFilter={removeFilter}
                clearAllFilters={clearAllFilters}
                getFilterNameById={getFilterNameById}
                sidebarVisible={sidebarVisible}
                toggleSidebar={toggleSidebar}
                setFilterSidebarOpen={setFilterSidebarOpen}
                sortOption={sortOption}
                handleSortChange={handleSortChange}
                currentCategory={currentCategory}
            />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <Breadcrumb currentCategory={currentCategory} />

                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Mobile Filters Sidebar */}
                    <MobileFilterSidebar
                        filterSidebarOpen={filterSidebarOpen}
                        setFilterSidebarOpen={setFilterSidebarOpen}
                        hasAppliedFilters={hasAppliedFilters}
                        selectedFilters={selectedFilters}
                        expandedFilters={expandedFilters}
                        expandedMoreFilters={expandedMoreFilters}
                        filterSearch={filterSearch}
                        availableBrands={availableBrands}
                        availableColors={availableColors}
                        availableGenders={availableGenders}
                        handleFilterSearchChange={handleFilterSearchChange}
                        toggleFilterSection={toggleFilterSection}
                        toggleMoreFilters={toggleMoreFilters}
                        handleFilterChange={handleFilterChange}
                        removeFilter={removeFilter}
                        clearAllFilters={clearAllFilters}
                        getFilterNameById={getFilterNameById}
                    />

                    {/* Desktop Filters Sidebar - with fixed width when visible */}
                    {sidebarVisible && (
                        <div className="hidden lg:block lg:w-80 flex-shrink-0">
                            <FilterSidebar
                                sidebarVisible={sidebarVisible}
                                hasAppliedFilters={hasAppliedFilters}
                                selectedFilters={selectedFilters}
                                expandedFilters={expandedFilters}
                                expandedMoreFilters={expandedMoreFilters}
                                filterSearch={filterSearch}
                                availableBrands={availableBrands}
                                availableColors={availableColors}
                                availableGenders={availableGenders}
                                handleFilterSearchChange={handleFilterSearchChange}
                                toggleFilterSection={toggleFilterSection}
                                toggleMoreFilters={toggleMoreFilters}
                                handleFilterChange={handleFilterChange}
                                clearAllFilters={clearAllFilters}
                            />
                        </div>
                    )}

                    {/* Product Listing - with flex-1 to take remaining space */}
                    <div className={`flex-1 ${!sidebarVisible ? 'lg:w-full' : ''}`}>
                        <ProductGrid
                            sidebarVisible={sidebarVisible}
                            sortedProducts={sortedProducts}
                            hoveredProduct={hoveredProduct}
                            setHoveredProduct={setHoveredProduct}
                            wishlist={wishlist}
                            toggleWishlist={toggleWishlist}
                            clearAllFilters={clearAllFilters}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

// Helper function to apply all filters
function applyFilters(products: any[], selectedFilters: any) {
    return products.filter((product: any) => {
        // Category filter
        if (selectedFilters.categories.length > 0) {
            // Handle special categories
            if (selectedFilters.categories.includes('limited-edition') && !product.isLimitedEdition) {
                return false;
            }

            if (selectedFilters.categories.includes('trending') && !product.isTrending) {
                return false;
            }

            // For regular categories like "running", "casual", etc.
            const regularCategories = selectedFilters.categories.filter(
                (cat: any) => !['limited-edition', 'trending', 'new-arrivals', 'bestsellers'].includes(cat)
            );

            if (regularCategories.length > 0 && !regularCategories.includes(product.category.toLowerCase())) {
                return false;
            }
        }

        // Brand filter
        if (selectedFilters.brands.length > 0 && !selectedFilters.brands.includes(product.brand)) {
            return false;
        }

        // Gender filter (assuming gender is added to product data)
        if (selectedFilters.genders.length > 0) {
            // We would need to add gender to product data
            // This is a placeholder for now
            const productGender = product.gender || 'unisex';
            if (!selectedFilters.genders.includes(productGender.toLowerCase())) {
                return false;
            }
        }

        // Color filter
        if (selectedFilters.colors.length > 0 &&
            !selectedFilters.colors.some((color: any) => product?.colors?.includes(color))) {
            return false;
        }

        // Price range filter
        if (selectedFilters.priceRanges.length > 0) {
            const inPriceRange = selectedFilters.priceRanges.some((rangeId: any) => {
                const range = priceRanges.find(r => r.id === rangeId);
                return range && product.price >= range.min && product.price <= range.max;
            });

            if (!inPriceRange) return false;
        }

        // Size filter
        if (selectedFilters.sizes.length > 0 &&
            !selectedFilters.sizes.some((size: any) => product.sizes.includes(size))) {
            return false;
        }

        // Search filter
        if (selectedFilters.search) {
            console.log(selectedFilters.search, 'selectedFilters.search')
            const searchLower = selectedFilters.search.toLowerCase();
            return (
                product.name.toLowerCase().includes(searchLower) ||
                product.brand.toLowerCase().includes(searchLower) ||
                product.category.toLowerCase().includes(searchLower) ||
                (product.description && product.description.toLowerCase().includes(searchLower))
            );
        }

        return true;
    });
}

// Helper function to sort products
function applySorting(products: any[], sortOption: any) {
    return [...products].sort((a: any, b: any) => {
        switch (sortOption) {
            case "price-low-high":
                return a.price - b.price;
            case "price-high-low":
                return b.price - a.price;
            case "rating":
                return b.rating - a.rating;
            case "name-a-z":
                return a.name.localeCompare(b.name);
            case "name-z-a":
                return b.name.localeCompare(a.name);
            default: // featured or any other case
                if (a.isTrending && !b.isTrending) return -1;
                if (!a.isTrending && b.isTrending) return 1;
                return 0;
        }
    });
}

export default ProductCatalog;