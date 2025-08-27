import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">🌱 Plantify</h2>
            <p className="mt-2 text-sm text-gray-400">
              Your one-stop destination for plants, gardening tips, and green lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plants" className="hover:text-white">
                  Plants
                </Link>
              </li>
              <li>
                <Link to="/my-garden" className="hover:text-white">
                  My Garden
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
            <p className="text-sm text-gray-400 mb-2">
              Email: support@plantify.com
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white">🌐</a>
              <a href="#" className="hover:text-white">🐦</a>
              <a href="#" className="hover:text-white">📘</a>
              <a href="#" className="hover:text-white">📸</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Plantify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
