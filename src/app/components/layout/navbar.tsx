"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setHoveredDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const handleProfileToggle = () => setIsProfileOpen(!isProfileOpen);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-primary px-6 sm:px-12 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Humaness
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-200">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-gray-200 focus:outline-none">
                Shop
              </button>
              {hoveredDropdown === "products" && (
                <div className="absolute left-0 pt-2 w-48 bg-primary shadow-lg rounded-md">
                  <Link
                    href="/views/shop/allProducts"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/views/shop/newArrival"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href="/views/shop/brandedApparel"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Branded Apparel
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-gray-200 focus:outline-none">
                About
              </button>
              {hoveredDropdown === "about" && (
                <div className="absolute left-0 pt-2 w-48 bg-primary shadow-lg rounded-md">
                  <Link
                    href="/views/about/ourStory"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/views/about/impactReports"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Impact Reports
                  </Link>
                  <Link
                    href="/views/about/sustainability"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/views/about/charitableInitiatives"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Charitable Initiatives
                  </Link>
                </div>
              )}
            </div>

            <Link href="/views/contact" className="text-gray-700 hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Cart & Profile */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link href="/cart" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700 hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 5m12-5l2 5m-2-5H7"
                />
              </svg>
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={handleProfileToggle}
                className="flex items-center focus:outline-none"
              >
                <Image
                  src="/images/oyin.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full border border-gray-300"
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-primary shadow-lg rounded-md">
                  <Link href="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Account
                  </Link>
                  <Link href="/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Cart
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button className="block px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100">
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-gray-700 hover:text-gray-200">
              Home
            </Link>
            <Link href="/views/shop/allProducts" className="text-gray-700 hover:text-gray-200">
              All Products
            </Link>
            <Link href="/views/shop/newArrival" className="text-gray-700 hover:text-gray-200">
              New Arrivals
            </Link>
            <Link href="/views/shop/brandedApparel" className="text-gray-700 hover:text-gray-200">
              Branded Apparel
            </Link>
            <Link href="/views/about/ourStory" className="text-gray-700 hover:text-gray-200">
              Our Story
            </Link>
            <Link href="/views/about/impactReports" className="text-gray-700 hover:text-gray-200">
              Impact Reports
            </Link>
            <Link href="/views/contact" className="text-gray-700 hover:text-gray-200">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;