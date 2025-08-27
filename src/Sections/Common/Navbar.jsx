import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/plants", label: "Plants" },
    { path: "/my-garden", label: "My Garden" },
    { path: "/blogs", label: "Blogs" },
    { path: "/cart", label: "Cart" },
    { path: "/admin", label: "Admin" },
  ];

  const hideOnRoutes = [
    "/login",
    "/signup",
    "/reset-password",
    "/forget-password",
    "/verify-code"
  ];

  if (hideOnRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            🌱 Plantify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-gray-200 transition ${isActive ? "underline underline-offset-4" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            <div className="flex gap-3 ml-6">
              <Link
                to="/login"
                className="px-4 py-1 rounded-lg bg-white text-green-700 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 rounded-lg border border-white hover:bg-white hover:text-green-700"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600 px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-green-500 hover:text-gray-200"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex gap-3 pt-3">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center px-4 py-2 rounded-lg bg-white text-green-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-green-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
