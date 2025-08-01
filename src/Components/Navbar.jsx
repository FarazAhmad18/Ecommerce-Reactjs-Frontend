import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaHeart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { BsCart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/signup", text: "Sign Up" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <a href="/">Exclusive</a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden ml-6 space-x-6 text-base font-light text-gray-700 md:flex">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to}
              className={({isActive}) => isActive ? 'text-red-500' : ''}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="items-center hidden ml-6 space-x-5 text-gray-700 md:flex">
          <FaHeart className="cursor-pointer hover:text-red-600" />
          <NavLink to="/cart" className="relative">
            <BsCart className="text-xl font-bold cursor-pointer hover:text-red-600" />
            {cartItems.length > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2 animate-bounce">
                {cartItems.length}
              </span>
            )}
          </NavLink>
          <FaUser className="cursor-pointer hover:text-red-600" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="px-6 py-4 space-y-4 text-sm font-medium text-gray-700 bg-white border-t md:hidden">
          {/* Links */}
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to}
              className={({isActive}) => isActive ? 'text-red-500 block' : 'block'}
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}

          {/* Icons */}
          <div className="flex pt-4 space-x-5 text-lg border-t">
            <FaHeart className="cursor-pointer hover:text-red-600" />
            <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
              <BsCart className="cursor-pointer hover:text-red-600" />
            </NavLink>
            <FaUser className="cursor-pointer hover:text-red-600" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;