"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "@/app/LoginModal";

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-sm font-prompt">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Left: Logo and slogan with homepage link */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/Pylon_logo3.png" alt="Pylon Logo" width={50} height={50} />
              <span className="text-5xl font-bold lowercase text-orange-600">pylon</span>
            </Link>
            <span className="hidden sm:inline text-sm text-gray-700">
              Homeownership benefits for modern employers
            </span>
          </div>

         {/* Center: Navigation Links */}
<ul className="hidden md:flex space-x-8 text-sm font-medium font-raleway">
  <li>
    <Link href="#model" className="text-gray-700 hover:text-orange-600">
      Our model
    </Link>
  </li>
  <li>
    <Link href="#home" className="text-gray-700 hover:text-orange-600">
      Home
    </Link>
  </li>
  <li>
    <Link href="#partners" className="text-gray-700 hover:text-orange-600">
      Partners
    </Link>
  </li>
  <li>
    <Link href="#team" className="text-gray-700 hover:text-orange-600">
      Team
    </Link>
  </li>
</ul>

          {/* Right: Login, Get Started, Search */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLoginOpen(true)}
              className="text-sm text-gray-700 hover:text-orange-600"
            >
              Login
            </button>

            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 text-sm">
              Get Started
            </button>

            <button className="text-gray-700 hover:text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Navbar;
