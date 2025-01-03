"use client"
import React, { useContext } from "react";
import { TbDeviceAirpods } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

import Link from "next/link";

const Navbar = () => {

  
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full h-[80px] bg-[#64748b] border-b relative">
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          
          <div className="flex items-center gap-4">
            <h1 className="text-4xl text-white font-medium">Pure Podz</h1>
            <TbDeviceAirpods className="text-4xl text-yellow-100" />
          </div>

          
          <div className="hidden sm:block">
            <nav>
              <ul className="flex space-x-6 items-center">
                <li>
                  <Link
                    href="/#"
                    className="rounded-md bg-gray-400 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-400 hover:text-white"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <a
                    href="/about"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-400 hover:text-white"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-400 hover:text-white"
                  >
                    Contact us
                  </a>
                </li>
                <button >
                  <IoCartOutline className="text-2xl text-white" />
                </button>
              </ul>
            </nav>
          </div>

      
          <div className="block sm:hidden">
            <button
              className="text-white text-3xl focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-[#64748b] fixed top-[80px] right-0 w-[75%] z-50 shadow-lg">
            <nav>
              <ul className="flex flex-col items-start space-y-2 py-4">
                <li className="w-full">
                  <a
                    href="/#"
                    className="block rounded-md bg-gray-400 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/product"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-400 hover:text-white"
                  >
                    Product
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/about"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-400 hover:text-white"
                  >
                    About us
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/contact"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-400 hover:text-white"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
              
              <div className="flex justify-center mt-4">
                <button >
                  <IoCartOutline className="text-2xl text-white" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
