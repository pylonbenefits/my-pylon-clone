"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Menu, LogOut, Home, BookOpen, User, Users } from "lucide-react";

export default function DashboardPage() {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-prompt">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <div className="text-2xl font-bold text-orange-600 mb-8">Dashboard</div>
        <nav className="space-y-4">
          <Link href="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <Home size={20} /> Home
          </Link>
          <Link href="/resourcelib" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <BookOpen size={20} /> Resource Library
          </Link>
          <Link href="/account" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <User size={20} /> My Account
          </Link>
          <Link href="/partners" className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
            <Users size={20} /> Partners
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-gray-700 hover:text-orange-600 w-full text-left"
          >
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6">
        <header className="flex items-center justify-between mb-8 md:hidden">
          <div className="text-xl font-bold text-orange-600">Dashboard</div>
          <button>
            <Menu size={24} />
          </button>
        </header>

        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome to your Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-orange-600 mb-2">Upcoming Appointments</h2>
            <p className="text-sm text-gray-600">You currently have no upcoming appointments.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-orange-600 mb-2">Latest Resources</h2>
            <p className="text-sm text-gray-600">
              Browse new guides in the <Link href="/resourcelib" className="text-orange-600 hover:underline">Resource Library</Link>.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-orange-600 mb-2">Account Overview</h2>
            <p className="text-sm text-gray-600">
              Update your preferences and contact info on the <Link href="/account" className="text-orange-600 hover:underline">My Account</Link> page.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-orange-600 mb-2">Partner Highlights</h2>
            <p className="text-sm text-gray-600">
              Meet new lending partners who can help you achieve your homeownership goals.
              <br />
              <Link href="/partners" className="text-orange-600 hover:underline">View Partners</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
