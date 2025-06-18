"use client";

import React from "react";
import Navbar from "@/components/Navbar";

import Link from "next/link";
import LoginModal from "@/app/LoginModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-prompt">
      <Navbar />

 {/* Banner below navbar */}
        <div
          className="w-full bg-cover bg-center py-16 text-white"
          style={{ backgroundImage: "url(/oranges.png)" }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
              Benefits for the modern workplace
            </h1>
            <p className="text-md md:text-lg max-w-xl text-left leading-snug">
              Provide homeownership benefits that support employee needs <br />
              and lead to longer employee retention
            </p>
          </div>
        </div>
        
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Row 1: Image left, Text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/stockphoto1.png"
              alt="Attract and retain talent"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-xl font-bold mb-2 leading-tight">
              Attract and retain talent
            </p>
            <p className="text-base leading-relaxed">
              Offering mortgage assistance benefits helps attract top talent and retain valuable employees. We partner with lenders to ensure the best match - and we'll handle all of the paperwork.
            </p>
          </div>
        </div>

        {/* Row 2: Text left, Image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left order-2 md:order-1">
            <p className="text-xl font-bold mb-2 leading-tight">
              Cost-effective mortgage assistance benefits
            </p>
            <p className="text-base leading-relaxed whitespace-pre-line">
              Actively contribute to the financial wellness of your employees. With a secure living situation, employees can better focus on planning for the future, such as saving for retirement or investing in professional development. Financially secure employees are more likely to be financially responsible, which can lead to lower stress levels and a healthier work-life balance.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/stockphoto2.png"
              alt="Cost-effective mortgage assistance benefits"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Row 3: Centered orange text */}
        <div>
          <p className="text-center text-5xl font-bold text-orange-600">
            Serving clients across the Greater Boston area
          </p>
        </div>
      </section>

      {/* Row 4: Join the Club section */}
      <section
        className="relative bg-[url('/orangeswithbluebackground.png')] bg-cover bg-center text-white py-24 px-12 flex flex-col justify-center"
      >
        <h2 className="text-5xl font-extrabold mb-6">Join the Club</h2>

        <Link href="/contactform" passHref>
          <button
            type="button"
            className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-8 py-3 rounded w-max"
          >
            Request Pylon at your company
          </button>
        </Link>
      </section>
       
    </main>
  );
}
