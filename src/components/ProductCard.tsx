import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Product } from '@/constants/mockData';

interface ProductCardProps {
  product: Product;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isWishlisted: boolean;
  onWishlistToggle: (id: number) => void;
}

const ProductCard = ({
  product,
  isHovered,
  onHover,
  onLeave,
  isWishlisted,
  onWishlistToggle
}: ProductCardProps) => {
  // State to track which color is being hovered
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  // State to track which color is currently selected/active
  const [activeColor, setActiveColor] = useState<string | null>(null);
  
  // Set the initial active color when component mounts or when product changes
  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setActiveColor(product.colors[0]);
    } else {
      setActiveColor(null);
    }
  }, [product]);
  
  // Animation variants for product card
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Get color display name with capitalized first letter
  const getColorName = (color: string) => {
    return color.charAt(0).toUpperCase() + color.slice(1);
  };
  
  // Function to get image based on color selection/hover
  const getDisplayImage = () => {
    // Priority 1: If a color is being hovered, show that color's image
    if (hoveredColor && product.colorImages && product.colorImages[hoveredColor]) {
      // If hovering the card and there's a second image for this color, show it
      if (isHovered && product.colorImages[hoveredColor].length > 1) {
        return product.colorImages[hoveredColor][1];
      }
      // Otherwise show the first image for this color
      return product.colorImages[hoveredColor][0];
    }
    
    // Priority 2: If a color is selected (active), show that color's image
    if (activeColor && product.colorImages && product.colorImages[activeColor]) {
      // If hovering the card and there's a second image for this color, show it
      if (isHovered && product.colorImages[activeColor].length > 1) {
        return product.colorImages[activeColor][1];
      }
      // Otherwise show the first image for this color
      return product.colorImages[activeColor][0];
    }
    
    // Priority 3: Handle the normal hover behavior for products without color variants
    if (isHovered && product.images.length > 1) {
      return product.images[1];
    }
    
    // Priority 4: Default to first image
    return product.images[0];
  };
  
  // Handle color hover
  const handleColorHover = (color: string) => {
    setHoveredColor(color);
  };
  
  // Handle color selection
  const handleColorClick = (e: React.MouseEvent, color: string) => {
    e.preventDefault(); // Prevent navigation
    setActiveColor(color);
  };

  return (
    <motion.div
      className="relative group"
      variants={itemVariants}
      onMouseEnter={onHover}
      onMouseLeave={() => {
        onLeave();
        setHoveredColor(null); // Reset hovered color when leaving the card
      }}
    >
      <a href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden mb-3">
          {/* Main product image - dynamically changes based on hover state and selected/hovered color */}
          <img
            src={getDisplayImage()}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          
          {product.isLimitedEdition && (
            <div className="absolute top-2 left-2 text-black text-xs px-2 py-1 rounded-full font-bold z-10">
              Limited Edition
            </div>
          )}
          
          <button
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md z-10 transition-transform duration-300 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              onWishlistToggle(product.id);
            }}
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`}
            />
          </button>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-sm md:text-base">{product.name}</h3>
            <span className="font-bold text-sm md:text-base">
              {product.originalPrice ? (
                <span>
                  <span className="text-red-600">${product.price}</span>
                  <span className="text-gray-500 text-xs line-through ml-1">${product.originalPrice}</span>
                </span>
              ) : (
                <span className="text-gray-900">${product.price}</span>
              )}
            </span>
          </div>
          
          <p className="text-gray-500 text-xs md:text-sm">
            {product.category} Shoes • {product.brand}
          </p>
          
          {/* Only show colors section if the product has colors */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex flex-wrap items-center gap-1 mt-2">
              <span className="text-xs text-gray-500 mr-1">Colors:</span>
              {product?.colors?.map((color) => (
                <div 
                  key={color} 
                  className="relative group/color"
                  onMouseEnter={() => handleColorHover(color)}
                  onMouseLeave={() => setHoveredColor(null)}
                  onClick={(e) => handleColorClick(e, color)}
                >
                  <div
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-full border cursor-pointer transition-all duration-200 hover:scale-100 ${
                      hoveredColor === color 
                        ? 'ring-1 ring-gray-500 ring-offset-1' 
                        : activeColor === color 
                          ? 'ring-2 ring-gray-500 ring-offset-1' 
                          : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    title={getColorName(color)}
                  />
                  
                  {/* Tooltip showing color name on hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 
                    opacity-0 group-hover/color:opacity-100 transition-opacity duration-200 
                    bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                    {getColorName(color)}
                    {activeColor === color && !hoveredColor && " (Selected)"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
};

export default ProductCard;