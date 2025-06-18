

import React, { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../posts";
import { UserCircle, ChevronDown, ChevronUp } from "lucide-react";
import Sidebar from "@/components/Sidebar";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Mock user data — replace with your auth/user fetching logic
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Simulate fetching logged-in user info
    const fetchUser = async () => {
      // Replace with your actual auth call
      const loggedInUser = { name: "Kelly" };
      setUser(loggedInUser);
    };
    fetchUser();
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-prompt flex">
      <aside className="hidden md:flex md:flex-col w-72 sticky top-0 h-screen">
        <Sidebar />
      </aside>

      <main className="flex-1 px-8 py-12 max-w-none">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/resourcelib"
            className="flex items-center gap-1 text-orange-600 hover:underline text-sm font-medium"
          >
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

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              <UserCircle size={28} />
              <span>{user ? user.name : "Loading..."}</span>
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
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mt-4 mb-6">
          {post.title}
        </h1>

        <article
          className="prose prose-orange max-w-none text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </div>
  );
}
