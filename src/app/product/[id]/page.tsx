'use client'
import React, { useState, useEffect, useRef, use } from 'react';
import { Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { products } from '@/constants/mockData'; // Ensure this import works correctly
import Footer from '@/components/Footer';
import Link from 'next/link';

const ProductDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
    // Unwrap params using React.use() to avoid the warning
    const unwrappedParams = use(params);
    const id = unwrappedParams?.id || "1"; // Default to ID 1 if not provided
    const productId = parseInt(id);
    const product = products.find(p => p.id === productId) || products[0];

    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState(product.colors[0] || "blue");
    const [quantity, setQuantity] = useState(1);
    const [zoomImage, setZoomImage] = useState<string | null>(null);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [isSticky, setIsSticky] = useState(true);
    
    // New state to store the current color's images
    const [currentColorImages, setCurrentColorImages] = useState<string[]>(product.images);

    // Update current images when color changes
    useEffect(() => {
        // If the product has colorImages and the selected color has specific images
        if (product.colorImages && product.colorImages[selectedColor]) {
            setCurrentColorImages(product.colorImages[selectedColor]);
        } else {
            // Fallback to default product images
            setCurrentColorImages(product.images);
        }
    }, [selectedColor, product]);

    // Get related products (excluding current product)
    // Using a deterministic method based on product ID to select related products
    const getRelatedProducts = () => {
        // Filter out the current product
        const otherProducts = products.filter(p => p.id !== product.id);

        // Use a deterministic method to select related products based on product ID
        // For example, select products with brand/theme similarity first, then by nearby IDs
        const byTheme = otherProducts.filter(p =>
            p.theme === product.theme || p.brand === product.brand
        );

        // Append other products if we need more to reach 4 total
        const remainingProducts = otherProducts
            .filter(p => !byTheme.includes(p))
            .sort((a, b) => Math.abs(a.id - product.id) - Math.abs(b.id - product.id));

        // Combine the results to get exactly 4 products
        return [...byTheme, ...remainingProducts].slice(0, 3);
    };

    // Get related products once and memoize
    const relatedProducts = getRelatedProducts();

    const relatedSectionRef = useRef<HTMLDivElement>(null);
    const stickyContainerRef = useRef<HTMLDivElement>(null);

    // Handle scroll for sticky behavior
    useEffect(() => {
        const handleScroll = () => {
            if (relatedSectionRef.current && stickyContainerRef.current) {
                const relatedRect = relatedSectionRef.current.getBoundingClientRect();
                const stickyRect = stickyContainerRef.current.getBoundingClientRect();

                // When the bottom of the sticky container would overlap with the related section,
                // disable sticky behavior
                if (relatedRect.top <= stickyRect.height) {
                    setIsSticky(false);
                } else {
                    setIsSticky(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle quantity change
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // Toggle wishlist
    const toggleWishlist = (productId: number) => {
        setWishlist(prev => {
            const index = prev.indexOf(productId);
            if (index > -1) {
                return prev.filter(id => id !== productId);
            } else {
                return [...prev, productId];
            }
        });
    };

    // Handle image zoom
    const handleImageClick = (src: string) => {
        setZoomImage(src);
    };

    const handleZoomClose = () => {
        setZoomImage(null);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!zoomImage) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setZoomPosition({ x, y });
    };

    // Helper function to get thumbnail image for a color
    const getColorThumbnail = (color: string): string => {
        if (product.colorImages && product.colorImages[color]) {
            return product.colorImages[color][0];
        }
        // Fallback to default image if no color-specific image is available
        return product.images[0];
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <Navbar
                mobileMenuOpen={false}
                setMobileMenuOpen={() => { }}
                navVisible={true}
                wishlist={wishlist}
                selectedFilters={{ search: "" }}
                handleSearchChange={() => { }}
            />

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
                <div className="flex items-center">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/collections" className="hover:underline">Collections</Link>
                    <span className="mx-2">/</span>
                    <Link href={`/collections/${product.theme?.toLowerCase()}`} className="hover:underline">{product.theme}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{product.name}</span>
                </div>
            </div>

            {/* Main Product Section - Two Column Layout with 8/4 split */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Product Images (2 per row) - 8 columns */}
                    <div className="lg:col-span-8">
                        {/* Images Grid - 2 per row */}
                        <div className="grid grid-cols-2 gap-4">
                            {currentColorImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative cursor-pointer overflow-hidden aspect-[4/5]"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} in ${selectedColor} view ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                

                                    {/* Limited Edition badge */}
                                    {product.isLimitedEdition && index === 0 && (
                                        <div className="absolute top-2 left-2 text-black text-xs px-2 py-1 rounded">
                                            Limited Edition
                                        </div>
                                    )}

                                  
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Info (Conditionally Sticky) - 4 columns */}
                    <div ref={stickyContainerRef} className={`lg:col-span-4 ${isSticky ? 'lg:sticky lg:top-8' : ''} lg:self-start h-fit`}>
                        <div className="p-6 bg-white rounded-lg">
                            {/* Brand Name */}
                            <div className="mb-1">
                                <span className="text-sm font-medium text-gray-500">{product.brand}</span>
                            </div>

                            {/* Product Title */}
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

                         

                            {/* Price */}
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-2xl font-bold text-black">₹{product.price}</span>
                                {product.originalPrice !== undefined && (
                                    <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                                )}
                                {product.originalPrice !== undefined && (
                                    <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-medium rounded">
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-4"></div>

                            {/* Color Selection with thumbnail images - if multiple colors available */}
                            {product.colors && product.colors.length > 1 && (
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-sm font-medium text-gray-500">COLOR</h3>
                                        <span className="text-sm capitalize text-gray-500">{selectedColor}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {product.colors.map(color => (
                                            <button
                                                key={color}
                                                className={`relative w-16 h-16 rounded overflow-hidden ${
                                                    selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : 'border border-gray-300'
                                                }`}
                                                onClick={() => setSelectedColor(color)}
                                                aria-label={`Select ${color} color`}
                                            >
                                                <img 
                                                    src={getColorThumbnail(color)} 
                                                    alt={`${product.name} in ${color}`} 
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-40 text-white text-xs py-1 text-center capitalize">
                                                    {color}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Size Selection */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-sm font-medium text-gray-500">SIZE</h3>
                                    <Link href="#" className="text-sm text-gray-500 hover:underline">Size Guide</Link>
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            className={`py-2 border ${selectedSize === size
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-300 text-gray-800 hover:border-gray-900'}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Total */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <h3 className="text-sm font-medium mb-2 text-gray-500">QUANTITY</h3>
                                    <div className="flex items-center border border-gray-300">
                                        <button
                                            className="px-3 py-2 text-gray-500 hover:text-gray-700"
                                            onClick={decreaseQuantity}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="flex-1 text-center py-2 text-gray-500">{quantity}</span>
                                        <button
                                            className="px-3 py-2 text-gray-500 hover:text-gray-700"
                                            onClick={increaseQuantity}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium mb-2 text-gray-500">TOTAL</h3>
                                    <div className="py-2 px-3 bg-gray-100 font-bold text-center text-gray-500">
                                        ₹{(product.price * quantity).toFixed(2)}
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action Buttons */}
                            <div className="space-y-3">
                                <button className="w-full py-3 bg-black hover:bg-gray-900 text-white font-medium flex items-center justify-center">
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    ADD TO CART
                                </button>
                                <button className="w-full py-3 border border-black hover:bg-gray-100 text-black font-medium">
                                    BUY IT NOW
                                </button>
                                <button
                                    className="w-full py-3 text-gray-700 flex items-center justify-center"
                                    onClick={() => toggleWishlist(product.id)}
                                >
                                    <Heart className={`w-4 h-4 mr-2 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                                    <span>Add to Wishlist</span>
                                </button>
                            </div>

                            {/* Shipping Info */}
                            <div className="mt-6 pt-6 border-t">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="text-center p-3 border rounded">
                                        <div className="font-medium text-gray-500">Free Shipping</div>
                                        <p className="text-gray-600 text-xs">On orders over ₹999</p>
                                    </div>
                                    <div className="text-center p-3 border rounded">
                                        <div className="font-medium text-gray-500">Easy Returns</div>
                                        <p className="text-gray-600 text-xs">30 days return policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description Section - Separate */}
            <div className="max-w-7xl mx-auto px-4 py-12 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-gray-800">Description</h2>
                        <p className="text-gray-700">
                            {product.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium mb-4 text-gray-800">Product Details</h2>
                        <ul className="space-y-2">
                            {product.details.map((detail, index) => (
                                <li key={index} className="text-gray-700 flex items-start">
                                    <span className="inline-block w-1 h-1 rounded-full bg-gray-700 mt-2 mr-2"></span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Style Recommendations - Separate Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">THEMED COLLECTIONS</h2>
                        <p className="text-gray-700 mb-6">
                            Discover our complete range of officially licensed {product.theme} merchandise.
                            From t-shirts to accessories, show your love for your favorite characters with our
                            premium quality products.
                        </p>
                        <Link href={`/collections/${product.theme.toLowerCase()}`} className="inline-flex items-center font-medium hover:underline text-gray-800">
                            SHOP ALL {product.theme.toUpperCase()}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                    <div>
                        <img
                            src={currentColorImages[0] || product.images[0]}
                            alt={`${product.theme} collection`}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <section ref={relatedSectionRef} className="max-w-7xl mx-auto px-4 py-16 mt-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">YOU MAY ALSO LIKE</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedProducts.map(relProduct => (
                        <div key={relProduct.id} className="group">
                            <a href={`/product/${relProduct.id}`}>
                                <div className="relative aspect-[4/5] overflow-hidden mb-3 rounded">
                                    <img
                                        src={relProduct.images[0]}
                                        alt={relProduct.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <button
                                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md z-10"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleWishlist(relProduct.id);
                                        }}
                                    >
                                        <Heart
                                            className={`w-4 h-4 ${wishlist.includes(relProduct.id) ? 'fill-red-500 text-red-500' : ''}`}
                                        />
                                    </button>

                                    {/* Limited Edition badge */}
                                    {relProduct.isLimitedEdition && (
                                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                            Limited Edition
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm md:text-base">{relProduct.name}</h3>
                                <div className="flex justify-between mt-1">
                                <span className="text-gray-900 font-bold text-sm md:text-base">₹{relProduct.price}</span>
                                   
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Zoom Modal */}
            {zoomImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={handleZoomClose}
                >
                    <div className="relative w-4/5 h-4/5 overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div
                            className="relative w-full h-full overflow-hidden"
                            onMouseMove={handleMouseMove}
                        >
                            <img
                                src={zoomImage}
                                alt="Zoomed product view"
                                className="absolute w-full h-full object-cover transform scale-150"
                                style={{
                                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                                }}
                            />
                        </div>
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2"
                            onClick={handleZoomClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
};

export default ProductDetailsPage;