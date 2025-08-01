import React from 'react';

const Footer = () => {
  const links = {
    quickLinks: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Return Policy", href: "#" },
      { text: "Shipping Info", href: "#" }
    ],
    support: [
      { text: "Contact Us", href: "#" },
      { text: "FAQ", href: "#" },
      { text: "Order Tracking", href: "#" },
      { text: "Help Center", href: "#" }
    ],
    social: [
      { text: "Facebook", href: "#" },
      { text: "Instagram", href: "#" },
      { text: "Twitter", href: "#" }
    ]
  };

  return (
    <footer className="py-12 mt-16 text-white bg-gray-900">
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Info */}
        <div>
          <h2 className="mb-3 text-2xl font-bold">Exclusive</h2>
          <p className="text-sm text-gray-400">Subscribe to get 10% off your first order and stay updated.</p>
          <form className="flex flex-col items-start gap-2 mt-4 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded sm:w-auto focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm transition bg-red-600 rounded hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {links.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="transition hover:text-white">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {links.support.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="transition hover:text-white">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: exclusive@gmail.com</li>
            <li>Phone: +88015-88888-9999</li>
            <li>Address: 123 Tech Street, City, Country</li>
          </ul>
          <div className="flex mt-4 space-x-4">
            {links.social.map((link, index) => (
              <a key={index} href={link.href} className="transition hover:text-white">{link.text}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 mt-12 text-sm text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Exclusive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;