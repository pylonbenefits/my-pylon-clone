"use client";

import React, { useState } from "react";
import Image from "next/image";

const Signup = ({ onOpenLogin }: { onOpenLogin: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    account: "employee", // default account type, corresponds to role
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, account: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Something went wrong");
      } else {
        setSuccessMsg("Signup successful! Please log in.");
        setFormData({
          name: "",
          email: "",
          password: "",
          account: "employee",
        });
      }
    } catch (error) {
      setErrorMsg("Network error");
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center font-prompt p-4"
      style={{ backgroundImage: "url(/orangeslarge.png)" }}
    >
      <div className="bg-white rounded-md max-w-md w-full p-8 shadow-lg">
        <div className="flex justify-center mb-4">
          <Image
            src="/pylontextlogo.png"
            alt="Pylon Logo"
            width={180}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="space-y-2 mt-4">
            <label className="block font-medium">I am a:</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="account"
                  value="mortgage_lender"
                  checked={formData.account === "mortgage_lender"}
                  onChange={handleAccountChange}
                />
                <span>Mortgage Lending Partner</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="account"
                  value="employer"
                  checked={formData.account === "employer"}
                  onChange={handleAccountChange}
                />
                <span>Employer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="account"
                  value="employee"
                  checked={formData.account === "employee"}
                  onChange={handleAccountChange}
                />
                <span>Employee</span>
              </label>
            </div>
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
          {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Already a member?{" "}
          <button
            type="button"
            onClick={onOpenLogin}
            className="text-orange-600 hover:underline"
          >
            Log in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
