"use client";

import React, { useState, useRef, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../posts";
import { UserCircle, ChevronDown, ChevronUp } from "lucide-react";
import Sidebar from "@/components/Sidebar"; // Adjust path if needed

interface Params {
  params: { slug: string };
}

// Mock user info — replace with your auth hook or context
const mockUser = {
  firstName: "Kelly",
};

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-prompt flex">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-72 sticky top-0 h-screen">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <main className="flex-1 px-8 py-12 max-w-none">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          {/* Back to Resource Library icon & link */}
          <Link
            href="/resourcelib"
            className="flex items-center gap-1 text-orange-600 hover:underline text-sm font-medium"
            aria-label="Back to Resource Library"
          >
            {/* Left arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Resource Library
          </Link>

          {/* User dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition font-medium"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <UserCircle size={28} />
              <span>{mockUser.firstName}</span>
              {dropdownOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                <Link
                  href="/account"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Account Settings
                </Link>
                <Link
                  href="/api/auth/signout"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Post content */}
        <h1 className="text-3xl font-semibold text-gray-800 mt-4 mb-6">{post.title}</h1>
        <article
          className="prose prose-orange max-w-none text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </div>
  );
}
