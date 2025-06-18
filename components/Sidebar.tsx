"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { LogOut, Home, BookOpen, User, Users } from "lucide-react";

export default function Sidebar() {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white shadow-lg p-3 sticky top-0 h-screen">
      <Link href="/" className="mb-4 flex items-start p-4 gap-2">
        <Image
          src="/pylontextlogo.png"
          alt="Pylon Logo"
          width={180}
          height={50}
          priority
          className="select-none"
        />
      </Link>
      <nav className="flex flex-col gap-2 text-gray-700">
        <Link
          href="/logindashboard"
          className="flex items-start gap-2 text-lg rounded-lg px-5 py-3 hover:bg-orange-100 hover:text-orange-700 transition"
        >
          <Home size={28} />
          Home
        </Link>
        <Link
          href="/resourcelib"
          className="flex items-start gap-2 text-lg rounded-lg px-5 py-3 hover:bg-orange-100 hover:text-orange-700 transition"
        >
          <BookOpen size={28} />
          Resource Library
        </Link>
        <Link
          href="/account"
          className="flex items-start gap-2 text-lg rounded-lg px-5 py-3 hover:bg-orange-100 hover:text-orange-700 transition"
        >
          <User size={28} />
          My Account
        </Link>
        <Link
          href="/partners"
          className="flex items-start gap-2 text-lg rounded-lg px-5 py-3 hover:bg-orange-100 hover:text-orange-700 transition"
        >
          <Users size={28} />
          Partners
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-start gap-2 text-lg rounded-lg px-5 py-3 hover:bg-orange-100 hover:text-orange-700 w-full text-left transition"
        >
          <LogOut size={28} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
