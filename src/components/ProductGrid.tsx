// ProductGrid.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '@/constants/mockData';

interface ProductGridProps {
    sidebarVisible: boolean;
    sortedProducts: Product[];
    hoveredProduct: number | null;
    setHoveredProduct: (id: number | null) => void;
    wishlist: number[];
    toggleWishlist: (id: number) => void;
    clearAllFilters: () => void;
}

const ProductGrid = ({
    sidebarVisible,
    sortedProducts,
    hoveredProduct,
    setHoveredProduct,
    wishlist,
    toggleWishlist,
    clearAllFilters
}: ProductGridProps) => {
    // Animation variants for staggered loading
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full pl-4"
        >
            {/* Products count (mobile only) */}
            <div className="lg:hidden text-gray-700 mb-4 font-medium">
                {sortedProducts.length} Products
            </div>

            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {sortedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isHovered={hoveredProduct === product.id}
                            onHover={() => setHoveredProduct(product.id)}
                            onLeave={() => setHoveredProduct(null)}
                            isWishlisted={wishlist.includes(product.id)}
                            onWishlistToggle={toggleWishlist}
                        />
                    ))}
                </motion.div>
            ) : (
                <div className="text-gray-700 font-medium text-center py-12">
                    <p>No products found matching the selected filters.</p>
                    <button
                        onClick={clearAllFilters}
                        className="block mx-auto mt-4 text-black underline font-bold"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default ProductGrid;