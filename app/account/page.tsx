"use client";

import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import UserDropdown from "@/components/UserDropdown";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import { useState, FormEvent } from "react";

export default async function AccountPageWrapper() {
  // This wrapper fetches session on the server, then renders Client component
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <AccountPage user={session.user} />;
}

interface AccountPageProps {
  user: {
    name?: string | null;
    email?: string | null;
  };
}

function AccountPage({ user }: AccountPageProps) {
  const [email, setEmail] = useState(user.email ?? "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/account/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          currentPassword,
          newPassword: newPassword || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to update account.");
      } else {
        setMessage("Account updated successfully.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-prompt flex">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-72 sticky top-0 h-screen">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 px-8 py-12 max-w-none">
        {/* Top bar with user dropdown */}
        <div className="flex items-center justify-end mb-8">
          <UserDropdown firstName={user.name ?? "User"} />
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Account Settings
        </h1>

        <section className="bg-white rounded-md shadow p-6 max-w-15xl">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Current Password */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                id="currentPassword"
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password (optional)
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="Leave blank to keep current password"
              />
            </div>

            {/* Confirm New Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="Repeat new password"
              />
            </div>

            {error && <p className="text-red-600">{error}</p>}
            {message && <p className="text-green-600">{message}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Account"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
