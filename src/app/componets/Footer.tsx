// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Content Wrapper */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8">
          
          {/* Contact Section */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="mb-2">ecommerce123@example.com</p>
            <a href="/cotact" className="text-blue-400 hover:text-blue-500">Send us an email</a>
          </div>

          
          <div className="mb-6 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2"> Links</h4>
            <ul>
              <li><a href="/about" className="block py-1 text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/shop" className="block py-1 text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="/faq" className="block py-1 text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="/privacy-policy" className="block py-1 text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

        
          <div className="mb-6 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul>
              <li><a href="https://facebook.com" className="block py-1 text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="https://instagram.com" className="block py-1 text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://twitter.com" className="block py-1 text-gray-400 hover:text-white">Twitter</a></li>
            </ul>
          </div>
        </div>

       
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
