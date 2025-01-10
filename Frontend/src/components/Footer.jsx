import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mx-20 md:flex-row justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">DailyNews</h1>
            <p className="text-sm mt-2">Your daily source of news</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="text-sm mt-2">Email: contact@dailynews.com</p>
              <p className="text-sm">Phone: +123 456 7890</p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-l font-semibold">Follow Us</h2>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="hover:text-gray-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} DailyNews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
