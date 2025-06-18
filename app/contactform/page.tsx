// File: app/form/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${name}, ${email}`);
    // Handle real form logic here
  };

  return (
    <main className="min-h-screen bg-white text-black font-prompt px-8 py-20">
      <h1 className="text-3xl font-bold mb-6">Request Pylon at your company</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-3 w-full rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-3 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
        >
          Submit Request
        </button>
      </form>
    </main>
  );
}
