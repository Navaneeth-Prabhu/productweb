// useFilterState.ts
import { useState } from 'react';
import { availableSizes, categories, priceRanges, products } from '@/constants/mockData';

// Extract unique brands from products
const extractBrands = () => {
  const brandSet = new Set(products.map(product => product.brand));
  return Array.from(brandSet);
};

// Extract unique colors from products
const extractColors = () => {
  const colorSet = new Set();
  products.forEach(product => {
    product?.colors?.forEach(color => colorSet.add(color));
  });
  return Array.from(colorSet) as string[];
};

// Extract available genders (assuming we need to add this to your data)
const availableGenders = ['Men', 'Women', 'Unisex', 'Kids'];

const useFilterState = () => {
  // State for controlling expanded filter sections
  const [expandedFilters, setExpandedFilters] = useState({
    category: true,
    price: true,
    size: true,
    color: true,
    brand: true,
    gender: true
  });

  // State for expanded "more" filters
  const [expandedMoreFilters, setExpandedMoreFilters] = useState({
    categories: false,
    brands: false,
    colors: false
  });

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    priceRanges: [] as string[],
    sizes: [] as string[],
    colors: [] as string[],
    brands: [] as string[],
    genders: [] as string[],
    search: ""
  });

  // State for sorting
  const [sortOption, setSortOption] = useState("featured");

  // State for filter search
  const [filterSearch, setFilterSearch] = useState({
    category: "",
    brand: "",
    color: ""
  });

  // Toggle filter section expansion
  const toggleFilterSection = (section: string) => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section as keyof typeof expandedFilters]
    });
  };

  // Toggle "more" filter items
  const toggleMoreFilters = (filterType: string) => {
    setExpandedMoreFilters({
      ...expandedMoreFilters,
      [filterType]: !expandedMoreFilters[filterType as keyof typeof expandedMoreFilters]
    });
  };

  // Handle filter selection with smooth scroll
  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => {
      const current = [...(prev[filterType as keyof typeof prev] as string[])];
      const index = current.indexOf(value);

      if (index > -1) {
        current.splice(index, 1);
      } else {
        current.push(value);
      }

      return {
        ...prev,
        [filterType]: current
      };
    });

    // Smooth scroll to top of products if user is scrolled down
    if (window.scrollY > 500) {
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });
    }
  };

  // Handle filter search input
  const handleFilterSearchChange = (filterType: string, value: string) => {
    setFilterSearch({
      ...filterSearch,
      [filterType]: value
    });
  };

  // Handle sorting change
  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  // Remove a filter chip
  const removeFilter = (filterType: string, value: string) => {
    setSelectedFilters(prev => {
      const current = [...(prev[filterType as keyof typeof prev] as string[])];
      const index = current.indexOf(value);

      if (index > -1) {
        current.splice(index, 1);
      }

      return {
        ...prev,
        [filterType]: current
      };
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      priceRanges: [],
      sizes: [],
      colors: [],
      brands: [],
      genders: [],
      search: ""
    });
  };

  // Check if there are any applied filters
  const hasAppliedFilters =
    selectedFilters.categories.length > 0 ||
    selectedFilters.priceRanges.length > 0 ||
    selectedFilters.sizes.length > 0 ||
    selectedFilters.colors.length > 0 ||
    selectedFilters.brands.length > 0 ||
    selectedFilters.genders.length > 0;

  // Count total applied filters
  const totalAppliedFilters =
    selectedFilters.categories.length +
    selectedFilters.priceRanges.length +
    selectedFilters.sizes.length +
    selectedFilters.colors.length +
    selectedFilters.brands.length +
    selectedFilters.genders.length;

  // Get filter names for badges
  const getFilterNameById = (type: string, id: string) => {
    switch (type) {
      case 'categories':
        return categories[id as keyof typeof categories] || id;
      case 'priceRanges':
        const range = priceRanges.find(r => r.id === id);
        return range ? range.label : id;
      case 'sizes':
        return id;
      case 'colors':
        return id.charAt(0).toUpperCase() + id.slice(1); // Capitalize color name
      case 'brands':
        return id;
      case 'genders':
        return id;
      default:
        return id;
    }
  };

  // Get all available brands
  const availableBrands = extractBrands();
  
  // Get all available colors
  const availableColors = extractColors();

  return {
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
    clearAllFilters,
    toggleFilterSection,
    toggleMoreFilters,
    getFilterNameById,
    hasAppliedFilters,
    totalAppliedFilters,
    availableBrands,
    availableColors,
    availableGenders
  };
};

export default useFilterState;