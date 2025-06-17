'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-600">PylonClone</span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <Link href="#features">Benefits</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 text-sm font-medium text-gray-700">
          <Link href="#features">Benefits</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
