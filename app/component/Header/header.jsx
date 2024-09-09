"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-6 z-20 border-b top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-20">
            <Link
              href="/"
              className="text-2xl flex items-center space-x-1"
            >
             <h1 className="text-[232323] font-bold">LOGO</h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/desktopTwo" className="text-[18px] text-[#232323] hover:text-[#F26622] font-medium">
                Product
              </Link>
              <Link href="/bookNow" className="text-[18px] text-[#232323] hover:text-[#F26622] font-medium">
                Use Cases
              </Link>
              <Link href="#" className="text-[18px] text-[#232323] hover:text-[#F26622] font-medium">
                Resources
              </Link>
              <Link href="#" className="text-[18px] text-[#232323] hover:text-[#F26622] font-medium">
                Pricing
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-[#232323] !text-[19px] cursor-pointer text-sm px-4 py-2 flex items-center justify-center font-medium">
              Login
            </span>
            <button className="text-[#EEE8E2] text-[18px] bg-[#232323] px-6 py-2 rounded-full font-medium">Sign Up</button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "block bg-[#FFFCEE]" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/desktopTwo" className="block text-[#232323] hover:text-[#F26622] font-medium">
            Product
            </Link>
            <Link href="/bookNow" className="block text-[18px] text-[#232323] hover:text-[#F26622] font-medium">
              Use Cases
            </Link>
            <Link href="#" className="block text-[18px] text-[#232323] hover:text-[#F26622] font-medium">
              Resources
            </Link>
            <Link href="#" className="block text-[18px] text-[#232323] hover:text-[#F26622] font-medium">
              Pricing
            </Link>
            <span className="block text-[#F26622] border border-[#F26622] px-6 py-2 mt-2 font-medium">
              Login
            </span>
            <button className="block bg-[#F26622] text-white px-6 py-2 rounded mt-2 hover:bg-[#e65b20] w-full text-center">
              Try Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
