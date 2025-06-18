"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setErrorMsg("Invalid email or password");
    } else {
      onClose();
      router.push("/logindashboard");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-opacity-90 flex items-center justify-center z-50"
      style={{
        backgroundImage: "url(/orangeslarge.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="bg-white rounded-md max-w-md w-full p-8 relative shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex justify-center mb-6">
          <Image
            src="/pylontextlogo.png"
            alt="Pylon Logo"
            width={180}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="text-right text-sm">
            <Link href="/forgot-password" className="text-orange-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition"
          >
            Login
          </button>
        </form>

        {/* Google Sign In Button */}
        <div className="mt-4">
          <button
              type="button"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/logindashboard",
                })
              }
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-3 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 533.5 544.3"
              className="w-5 h-5"
            >
              <path
                fill="#4285f4"
                d="M533.5 278.4c0-18.5-1.5-36.3-4.3-53.7H272v101.6h146.9c-6.3 34.2-25 63.3-53.5 82.9v68h86.3c50.7-46.7 81.8-115.4 81.8-198.8z"
              />
              <path
                fill="#34a853"
                d="M272 544.3c72.4 0 133.2-23.9 177.5-64.8l-86.3-68c-24 16.1-54.7 25.5-91.2 25.5-69.9 0-129.3-47.2-150.5-110.6h-89.4v69.6c44.1 86.7 134.5 148.3 239.9 148.3z"
              />
              <path
                fill="#fbbc04"
                d="M121.5 324.4c-10.6-31.3-10.6-65 0-96.3v-69.6h-89.4c-38.7 75.6-38.7 165.9 0 241.5l89.4-69.6z"
              />
              <path
                fill="#ea4335"
                d="M272 107.7c39.5 0 75.2 13.6 103.3 40.4l77.4-77.4C405.2 24.9 344.4 0 272 0 166.6 0 76.2 61.6 32.1 148.3l89.4 69.6c21.2-63.4 80.6-110.2 150.5-110.2z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-700">
          New to Pylon?{" "}
          <Link href="/signup" className="text-orange-600 hover:underline">
            Sign up here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
