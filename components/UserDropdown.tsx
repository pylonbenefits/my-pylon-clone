"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { UserCircle, ChevronDown, ChevronUp } from "lucide-react";

interface UserDropdownProps {
  firstName: string;
}

export default function UserDropdown({ firstName }: UserDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium"
      >
        <UserCircle size={28} />
        <span>{firstName}</span>
        {dropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
          <Link
            href="/account"
            className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
            onClick={() => setDropdownOpen(false)}
          >
            Account Settings
          </Link>
          <Link
            href="/api/auth/signout"
            className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
            onClick={() => setDropdownOpen(false)}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
