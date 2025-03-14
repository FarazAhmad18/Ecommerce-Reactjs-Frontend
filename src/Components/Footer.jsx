// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Exclusive</h2>
          <p className="text-sm text-gray-400">Subscribe to get 10% off your first order and stay updated.</p>
          <form className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-auto rounded bg-gray-800 text-sm border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: exclusive@gmail.com</li>
            <li>Phone: +88015-88888-9999</li>
            <li>Address: 123 Tech Street, City, Country</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Exclusive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
