import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans text-[10px] overflow-y-scroll overflow-x-auto">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
