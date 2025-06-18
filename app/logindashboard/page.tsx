// app/dashboard/page.tsx
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import DashHeader from "@/components/DashHeader";
import { signOut } from "next-auth/react"; // ✅ Import NextAuth signOut

export default function DashboardPage() {
  const handleLogout = () => {
    signOut({
      callbackUrl: "/", // ✅ Redirect to homepage after logout
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-prompt">
      <Navbar />
      <DashHeader onLogout={handleLogout} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
              Browse new guides in the <a href="/resourcelib" className="text-orange-600 hover:underline">Resource Library</a>.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-orange-600 mb-2">Account Overview</h2>
            <p className="text-sm text-gray-600">
              Update your preferences and contact info on the <a href="/account" className="text-orange-600 hover:underline">My Account</a> page.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-orange-600 mb-2">Partner Highlights</h2>
            <p className="text-sm text-gray-600">
              Meet new lending partners who can help you achieve your homeownership goals.
              <br />
              <a href="/partners" className="text-orange-600 hover:underline">View Partners</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
