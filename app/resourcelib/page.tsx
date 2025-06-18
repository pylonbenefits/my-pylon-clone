"use client";

import React, { useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/authOptions";
import Link from "next/link";
import { blogPosts } from "./posts";
import Image from "next/image";
import {
  Home,
  BookOpen,
  User,
  Users,
  LogOut,
  Menu,
} from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Fixed vs. Adjustable Rate Mortgages",
    description:
      "Learn the pros and cons of each mortgage type to find the best fit for your financial goals.",
    slug: "fixed-vs-adjustable",
  },
  {
    title: "First-Time Homebuyer Mortgage Tips",
    description:
      "Get expert advice and actionable steps for navigating your first mortgage with confidence.",
    slug: "first-time-buyer-tips",
  },
  {
    title: "What’s Included in a Mortgage Payment?",
    description:
      "Break down the components of your monthly mortgage bill and how they impact affordability.",
    slug: "mortgage-payment-breakdown",
  },
  {
    title: "How Credit Score Affects Your Mortgage Rate",
    description:
      "Discover how your credit history can influence your home loan interest rate and eligibility.",
    slug: "credit-score-impact",
  },
  {
    title: "Getting Pre-Approved vs. Pre-Qualified",
    description:
      "Understand the difference and why pre-approval matters when you’re shopping for a home.",
    slug: "preapproval-vs-prequalification",
  },
];

export default function ResourceLibraryPage() {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const [loan, setLoan] = useState(400000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [payment, setPayment] = useState<number | null>(null);

  const calculateMortgage = () => {
    const principal = loan;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;

    if (!principal || !monthlyRate || !numberOfPayments) {
      setPayment(null);
      return;
    }

    const monthly =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    setPayment(monthly);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 font-prompt">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-6 hidden md:block">
        <Link href="/" className="block mb-8">
          <Image
            src="/pylontextlogo.png"
            alt="Pylon Logo"
            width={160}
            height={40}
            priority
          />
        </Link>
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
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          {/* Mobile Header */}
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
            <button>
              <Menu size={24} />
            </button>
          </header>

          <h1 className="text-3xl font-semibold text-gray-800 mb-8">
            Resource Library
          </h1>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-orange-600 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">{post.description}</p>
                <Link
                  href={`/resourcelib/${post.slug}`}
                  className="text-sm text-orange-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          {/* Mortgage Calculator */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mortgage Calculator
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl"
            >
              <label className="text-sm text-gray-700">
                Loan Amount ($)
                <input
                  type="number"
                  value={loan}
                  onChange={(e) => setLoan(Number(e.target.value))}
                  className="mt-1 w-full border rounded px-3 py-2"
                />
              </label>

              <label className="text-sm text-gray-700">
                Interest Rate (%)
                <input
                  type="number"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="mt-1 w-full border rounded px-3 py-2"
                />
              </label>

              <label className="text-sm text-gray-700">
                Loan Term (Years)
                <input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="mt-1 w-full border rounded px-3 py-2"
                />
              </label>
            </form>

            <div className="mt-4">
              <button
                onClick={calculateMortgage}
                className="bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700"
              >
                Calculate
              </button>
            </div>

            {payment !== null && (
              <div className="mt-4 text-sm text-gray-800">
                Estimated Monthly Payment:{" "}
                <span className="font-semibold">${payment.toFixed(2)}</span>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
