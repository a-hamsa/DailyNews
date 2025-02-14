import React from 'react';
import { motion } from 'framer-motion';

const Description = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <motion.div 
            className="relative p-8 md:p-12 max-w-4xl mx-auto mt-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl transform -skew-y-2" />
            <motion.div className="relative z-10 text-center space-y-8">
                <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                    variants={fadeInUp}
                >
                    Welcome to DailyNews
                </motion.h1>
                <motion.div 
                    className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-6"
                    variants={fadeInUp}
                >
                    <p className="transition-all duration-300 hover:transform hover:scale-105">
                        Stay informed with <span className="font-semibold text-blue-600">DailyNews</span>, 
                        your go-to source for the latest and most reliable news from around the world.
                    </p>
                    <p className="transition-all duration-300 hover:transform hover:scale-105">
                        Whether you're interested in politics, technology, sports, entertainment, 
                        or global events, <span className="font-semibold text-blue-600">DailyNews</span> has you covered.
                    </p>
                    <p className="transition-all duration-300 hover:transform hover:scale-105">
                        Join our community of informed readers and never miss a beat.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Description;