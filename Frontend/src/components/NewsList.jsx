import React from 'react';
import { motion } from 'framer-motion';

const NewsList = ({ news, onNewsClick }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    return (
        <motion.div 
            className="p-6 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Latest News
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {news.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <motion.div
                            onClick={() => onNewsClick(item.title)}
                            className="group h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {truncateText(item.description, 150)}
                                </p>
                                <motion.div 
                                    className="mt-4 text-blue-600 font-medium"
                                    whileHover={{ x: 5 }}
                                >
                                    Read more →
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default NewsList;