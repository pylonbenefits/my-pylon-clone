// File: components/Footer.tsx
import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-16 font-prompt">
      {/* Top row: 4 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold uppercase mb-4">About us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Our Mission</Link></li>
            <li><Link href="#">Our Team</Link></li>
            <li><Link href="#">Contact us</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold uppercase mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">For Lenders</Link></li>
            <li><Link href="#">For Employers</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold uppercase mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">What we do</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Partnership Opportunities</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold uppercase mb-4">Blog</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Testimonials</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-24 h-px bg-gray-500 mx-auto mb-8"></div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between text-sm space-y-4 md:space-y-0">
        {/* Left: Pylon and copyright */}
        <div className="text-lg font-semibold">© 2025 Pylon</div>

        {/* Center: Legal Links */}
        <div className="flex space-x-4">
          <Link href="/terms" className="hover:underline">Terms and Conditions</Link>
          <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>

      {/* Email address */}
      <div className="text-center mt-6 text-sm text-gray-400">
        pylonbenefits@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
