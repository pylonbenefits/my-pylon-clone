"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 font-prompt">
      {/* Sidebar */}
      {/* On desktop always visible, on mobile toggle via sidebarOpen */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md transform
          md:relative md:translate-x-0 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar />
      </aside>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        <main className="flex-1 p-6">
          {/* Mobile header with logo and menu button */}
          <header className="flex items-center justify-between mb-8 md:hidden">
            <Link href="/">
              <Image
                src="/pylontextlogo.png"
                alt="Pylon Logo"
                width={140}
                height={36}
                priority
              />
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </header>

          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Welcome to your Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ... cards unchanged ... */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-orange-600 mb-2">
                Upcoming Appointments
              </h2>
              <p className="text-sm text-gray-600">
                You currently have no upcoming appointments.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-orange-600 mb-2">
                Latest Resources
              </h2>
              <p className="text-sm text-gray-600">
                Browse new guides in the{" "}
                <Link href="/resourcelib" className="text-orange-600 hover:underline">
                  Resource Library
                </Link>
                .
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-orange-600 mb-2">
                Account Overview
              </h2>
              <p className="text-sm text-gray-600">
                Update your preferences and contact info on the{" "}
                <Link href="/account" className="text-orange-600 hover:underline">
                  My Account
                </Link>{" "}
                page.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-orange-600 mb-2">
                Partner Highlights
              </h2>
              <p className="text-sm text-gray-600">
                Meet new lending partners who can help you achieve your homeownership
                goals.
                <br />
                <Link href="/partners" className="text-orange-600 hover:underline">
                  View Partners
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
