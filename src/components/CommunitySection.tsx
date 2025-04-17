import React from 'react';
import { motion } from 'framer-motion';

const CommunitySection = () => {
    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className=" container mx-auto px-4 py-12 overflow-hidden">
            <motion.h2
                className="text-2xl font-bold mb-8 text-black"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                From Our Community
            </motion.h2>

            <motion.div
                className="grid grid-cols-12 gap-0"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                {/* Left column - split into two rows */}
                <div className="col-span-12 md:col-span-6 grid grid-rows-2">
                    {/* Top row - Black background with text */}
                    <div className="bg-black text-white p-12 flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-4">Show Off Your Style</h3>
                        <p className="text-lg">
                            Use #InMyConverse and tag us on Instagram to be featured.
                        </p>
                    </div>

                    {/* Bottom row - Product */}
                    <div className="relative bg-gray-100 p-0 w-full overflow-hidden flex items-center justify-center">
                        <img
                            src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d6277fe3833a4f5fb7057ee9f6c2c96d_9366/Campus_80s_Cali_DeWitt_Originals_Shoes_Blue_IG3142_14_hover_standard.jpg"
                            alt="Converse shoes"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <a href='/product'>
                        <div className="relative z-10 bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors">
                            Shop Now
                        </div>
                        </a>
                    </div>
                </div>

                    {/* Right column - Full height image */}
                    <div className="col-span-12 md:col-span-6 h-full">
                        <img
                            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Person wearing Converse shoes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 text-white text-sm">
                            @username
                        </div>
                    </div>
            </motion.div>
        </div>
    );
};

export default CommunitySection;