"use client";

import React from "react";
import Link from "next/link";

const Header = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <header className="w-full bg-white shadow-md font-prompt">
      

      {/* Horizontal menu bar with logout button */}
      <nav className="w-full border-t border-gray-200 bg-orange-400 shadow-sm">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-10 py-3 text-sm font-medium text-white">
          <li>
            <Link href="/partners" className="hover:text-white/80 transition">
              Meet our Partners
            </Link>
          </li>
          <li>
            <Link href="/appointments" className="hover:text-white/80 transition">
              My Appointments
            </Link>
          </li>
          <li>
            <Link href="/resourcelib" className="hover:text-white/80 transition">
              Resource Library
            </Link>
          </li>
          <li>
            <Link href="/account" className="hover:text-white/80 transition">
              My Account
            </Link>
          </li>
          <li>
            <button
              onClick={onLogout}
              className="ml-4 bg-white text-orange-600 px-4 py-2 rounded hover:bg-orange-100 transition text-sm"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
