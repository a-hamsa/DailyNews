import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
      { Icon: FaFacebookF, href: '#', label: 'Facebook' },
      { Icon: FaTwitter, href: '#', label: 'Twitter' },
      { Icon: FaInstagram, href: '#', label: 'Instagram' }
  ];

  return (
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <motion.div 
              className="container mx-auto px-6 py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
          >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  <motion.div 
                      className="text-center md:text-left"
                      whileHover={{ scale: 1.02 }}
                  >
                      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                          DailyNews
                      </h1>
                      <p className="mt-2 text-gray-300">Your daily source of news</p>
                  </motion.div>

                  <motion.div 
                      className="text-center md:text-left"
                      whileHover={{ scale: 1.02 }}
                  >
                      <h2 className="text-xl font-semibold mb-4">Contact</h2>
                      <div className="space-y-2 text-gray-300">
                          <p>Email: contact@dailynews.com</p>
                          <p>Phone: +123 456 7890</p>
                      </div>
                  </motion.div>

                  <motion.div 
                      className="text-center md:text-left"
                      whileHover={{ scale: 1.02 }}
                  >
                      <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                      <div className="flex justify-center md:justify-start space-x-6">
                          {socialLinks.map(({ Icon, href, label }) => (
                              <motion.a
                                  key={label}
                                  href={href}
                                  className="text-gray-300 hover:text-white transition-colors duration-300"
                                  whileHover={{ scale: 1.2, rotate: 5 }}
                                  whileTap={{ scale: 0.9 }}
                                  aria-label={label}
                              >
                                  <Icon className="text-xl" />
                              </motion.a>
                          ))}
                      </div>
                  </motion.div>
              </div>

              <motion.div 
                  className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
              >
                  <p>&copy; {new Date().getFullYear()} DailyNews. All rights reserved.</p>
              </motion.div>
          </motion.div>
      </footer>
  );
};

export default Footer;
