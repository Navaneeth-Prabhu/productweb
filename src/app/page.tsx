'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import useFilterState from '@/hooks/useFilterState';
import Footer from '@/components/Footer';
import CommunitySection from '@/components/CommunitySection';

const ShoeStore = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  // Category state for navigation
  const [currentCategory, setCurrentCategory] = useState({
    main: 'All',
    sub: null
  });

  const [wishlist, setWishlist] = useState([]);

  // Get filter state from custom hook
  const {
    selectedFilters,
    handleFilterChange,
  } = useFilterState();
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="font-sans bg-white">
      {/* Header/Navigation */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navVisible={navVisible}
        wishlist={wishlist}
        selectedFilters={selectedFilters}
        handleSearchChange={(e:any) => handleFilterChange('search', e.target.value)}
        setCurrentCategory={setCurrentCategory}
      />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="px-4 py-8 container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">SHOES TREASURES<br />AWAIT YOU</h1>
        <div className="mt-4 relative">
          {/* <div className="bg-black inline-block px-4 py-2 text-white text-xs">TRENDING</div> */}
          <div className="flex flex-wrap text-xs mt-4 space-x-6">
            <div className="uppercase font-bold text-gray-400">New Balance <span className="font-normal text-gray-800"> 90/60</span></div>
            <div className="uppercase text-gray-800">Nike <span className="font-normal">Dunk Retro</span></div>
            <div className="uppercase text-gray-800">New <span className="font-normal">(Just Added)</span></div>
          </div>

          <div className="mt-4 relative">
            <a href={`/product`}>
              <motion.img
                // whileHover={{ scale: 1.02 }}
                // transition={{ duration: 0.3 }}
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd0cf745-cdc8-4641-a672-ae860165f3e3/JORDAN+LUKA+3+PF.png"
                alt="Featured New Balance shoe"
                className="w-full max-h-250 object-cover bg-gray-100"
              />
              <div className="mt-2 flex justify-between items-center">

                <div className="flex items-center">
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.section>

      {/* New Arrivals Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="px-4 py-8 bg-white container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-black">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Nike Alphafly 3",
              type: "Men's Basketball Shoes",
              price: "$130.00",
              image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eb6cdeee-ef8c-4a7e-bd77-5dbc5843f6d4/ZOOMX+VAPORFLY+NEXT%25+3+FK+EK.png"
            },
            {
              name: "Nike Pegasus Trail 5 GORE-TEX",
              type: "Running Shoes",
              price: "$150.00",
              image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/312aa70c-dea2-49ac-883b-9feceb0d1d71/NIKE+PEGASUS+TRAIL+5+GTX.png"
            },
            {
              name: "Nike Pegasus 41",
              type: "Sneakers Shoes",
              price: "$100.00",
              image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2caa25d0-7846-4b6e-8309-9c887213e94b/AIR+ZOOM+PEGASUS+41.png"
            }
          ].map((shoe, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50"
            >
              <a href={`/product`}>
                <img src={shoe.image} alt={shoe.name} className="w-full h-120  object-cover" />
                <div className="p-3">
                  <h2 className="text-lg font-bold uppercase text-black">{shoe.name}</h2>
                </div>
              </a>

            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Special Edition */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="px-4 py-8 bg-white container mx-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-black">SPECIAL EDITION</h2>
          <a href='/product'>
          <div className="border border-black text-black text-xs px-4 py-2 uppercase">View More</div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Nike Vaporfly 4",
              type: "Men's Basketball Shoes",
              image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b390895-8786-4437-99bf-af03be5c20a0/ZOOMX+VAPORFLY+NEXT%25+4.png"
            },
            {
              name: "Converse x Transformers Chuck Taylor",
              type: "Running Shoes",
              image: "https://www.converse.in/media/catalog/product/a/1/a11659c_a_107x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=900&width=900&auto=webp&format=pjpg"
            },
            {
              name: "All Star BB Shift CX Trick Or Treat",
              type: "Sneakers Shoes",
              image: "https://www.converse.in/media/catalog/product/a/0/a09255c_a_107x1_white_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=900&width=900&auto=webp&format=pjpg"
            }
          ].map((shoe, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-50"
            >
              <a href={`/product`}>
                <img src={shoe.image} alt={shoe.name} className="w-full h-150 object-cover" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <CommunitySection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShoeStore;