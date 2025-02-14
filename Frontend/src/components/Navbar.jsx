import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg text-gray-800' : 'bg-transparent text-white'
      }`}>
          <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center justify-between h-16">
                  <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-2xl font-bold"
                  >
                      <a href="/" className="hover:text-blue-600 transition-colors">
                          DailyNews
                      </a>
                  </motion.div>

                  <div className="lg:hidden">
                      <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                      >
                          {isOpen ? <X size={24} /> : <Menu size={24} />}
                      </button>
                  </div>

                  <div className="hidden lg:flex items-center space-x-8">
                      {['Home', 'About', 'News', 'Contact', 'Login'].map((item) => (
                          <motion.a
                              key={item}
                              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                              className="hover:text-blue-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                          >
                              {item}
                          </motion.a>
                      ))}
                  </div>
              </div>
          </div>

          <AnimatePresence>
              {isOpen && (
                  <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="lg:hidden bg-white shadow-lg"
                  >
                      <div className="px-4 py-2 space-y-2">
                          {['Home', 'About', 'News', 'Contact', 'Login'].map((item) => (
                              <motion.a
                                  key={item}
                                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                  className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                                  whileHover={{ x: 10 }}
                              >
                                  {item}
                              </motion.a>
                          ))}
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>
      </nav>
  );
};

export default Navbar;