import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

function HeroBanner() {
    return (
        <div>
            {/* Hero Banner */}
            <section className="relative h-[40vh] overflow-hidden bg-black">
                <img
                    src="/api/placeholder/1920/1080"
                    alt="Jungle Book Collection"
                    className="absolute w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <motion.div
                        className="max-w-xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            The Jungle Book
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-200 uppercase tracking-wider mb-4">
                            Limited Edition Collection
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg">
                            Discover our exclusive Disney collection featuring stunning designs inspired by the classic tale.
                        </p>
                        <motion.button
                            className="bg-white text-gray-900 px-8 py-3 text-lg font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Shop Collection
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default HeroBanner