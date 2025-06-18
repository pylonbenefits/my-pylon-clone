"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Kelly McGlynn, Ph.D.",
    roleLine1: "Founder",
    roleLine2: "Business & Strategy",
    linkedin: "https://www.linkedin.com/in/mcglynnka/",
    imageSrc: "/1686424022156.jpg",
  },
  {
    name: "Jess Floro, Ph.D.",
    roleLine1: "Co-founder",
    roleLine2: "Client & Lender Relations",
    linkedin: "https://www.linkedin.com/in/jess-floro-phd-783bb596/",
    imageSrc: "/Jess_Floro_headshot2.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-12 max-w-5xl mx-auto font-railway">
        <h1
          className="text-5xl font-regular text-center mb-16"
          style={{ fontFamily: "'Palatino Linotype', Palatino, serif" }}
        >
          Meet the team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left side: Kelly */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg relative">
              <Image
                src={team[0].imageSrc}
                alt={`${team[0].name} headshot`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
            <p className="font-bold text-2xl">{team[0].name}</p>
            <p className="mt-3 text-lg">{team[0].roleLine1}</p>
            <p className="text-lg">{team[0].roleLine2}</p>
            <a
              href={team[0].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${team[0].name} LinkedIn`}
              className="mt-5 text-gray-500 hover:text-gray-700"
            >
              <FaLinkedin size={40} />
            </a>
          </div>

          {/* Right side: Jess */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg relative">
              <Image
                src={team[1].imageSrc}
                alt={`${team[1].name} headshot`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
            <p className="font-bold text-2xl">{team[1].name}</p>
            <p className="mt-3 text-lg">{team[1].roleLine1}</p>
            <p className="text-lg">{team[1].roleLine2}</p>
            <a
              href={team[1].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${team[1].name} LinkedIn`}
              className="mt-5 text-gray-500 hover:text-gray-700"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
