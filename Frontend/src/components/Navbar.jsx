import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white w-auto sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-20 flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-gray-200 ">Dailynews</a>
        </div>
        <button
          className="lg:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:ml-8">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-gray-200">
                News
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-200">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;