import React from 'react'
import { motion } from 'framer-motion';

function NewsSection() {
    return (
        <div>
            {/* Newsletter Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-xl md:text-2xl font-bold mb-3">JOIN OUR NEWSLETTER</h2>
                        <p className="text-gray-600 mb-6 text-sm md:text-base">
                            Subscribe to get special offers, free giveaways, and exclusive deals.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-3 md:px-4 py-2 md:py-3 border border-gray-300 focus:outline-none focus:border-gray-800"
                            />
                            <motion.button
                                className="bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 font-medium whitespace-nowrap"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsSection