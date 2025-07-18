'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#ede7f6] overflow-x-hidden font-sans w-full max-w-full">

      {/* Grid background overlay (always behind all content) */}
      <div className="pointer-events-none absolute inset-0 z-0 glow-gradient-animate" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40" style={{backgroundImage: 'linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

      {/* Navigation Bar */}
      <nav className="w-full max-w-[1400px] mx-auto px-4 md:px-16 pt-4 z-20 relative animate-fadeInUp">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative flex items-center justify-center mt-14 overflow-visible" style={{height: '72px'}}>
            <svg
              className="absolute left-1/2 -translate-x-1/2 -top-16 w-20 md:w-[120px] h-40 md:h-[160px] z-0 pointer-events-none bounce-vertical"
              viewBox="0 0 60 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 0 C10 80, 50 80, 30 70"
                stroke="#4C5EFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <div className="rotate-[-15deg] shadow-lg flex items-center justify-center w-28 sm:w-36 md:w-[186px] h-14 md:h-[72px] bg-[#4C5EFF] bounce-vertical relative z-10">
              <img
                src="/design code logo-01-01.svg"
                alt="Logo"
                className="object-contain w-full h-full scale-[1.5] md:scale-[1.95]"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 text-base font-light items-center">
            <li className="border-b-2 border-black pb-1">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Service</li>
            <li className="hover:text-black cursor-pointer">Contact us</li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="border-2 border-black rounded-full px-6 py-2 font-semibold text-black bg-white shadow-md hover:bg-gray-100 transition-all text-sm">
              Get started
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white border rounded shadow px-4 py-2 space-y-3">
            <ul className="flex flex-col gap-2 text-gray-700 text-base">
              <li className="border-b-2 border-black pb-1">Home</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Service</li>
              <li className="hover:text-black cursor-pointer">Contact us</li>
            </ul>
            <button className="w-full border-2 border-black rounded-full px-4 py-2 font-semibold text-black bg-white shadow-md hover:bg-gray-100 transition-all text-sm">
              Get started
            </button>
          </div>
        )}
      </nav>

      {/* Headline Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 xl:px-16 -mt-6 w-full max-w-full lg:max-w-[1100px] xl:max-w-[1300px] 2xl:max-w-[1400px] mx-auto z-10 animate-fadeInUp delay-200">
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 mb-2 md:mb-6 text-center md:text-left px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight" style={{ fontFamily: 'var(--font-architects)' }}>
            <span className="relative inline-block">
              We’re creative
              <span className="absolute left-0 bottom-2 md:bottom-3 w-full h-2 bg-yellow-200 -z-10 rounded-md"></span>
            </span>
          </h1>
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-2 mt-2">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#444]" style={{ fontFamily: 'var(--font-archistico)', letterSpacing: '-2px', textShadow: '0 1px 0 #fff' }}>
              Design
            </span>
            <span className="bg-[#536dfe] text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl px-4 py-1 rounded-lg rotate-[5deg] shadow-lg ml-2" style={{ fontFamily: 'var(--font-archistico)' }}>
              Studio
            </span>
          </div>
        </div>

        {/* Hand SVG */}
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <Image
            src="/hand-01.svg"
            alt="Hand illustration"
            width={800}
            height={800}
            className="object-contain w-full max-w-[240px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[600px]"
            priority
          />
        </div>
      </section>

      {/* Floating Tags - Fixed Position & Responsive Spacing */}
      <div className="flex flex-wrap justify-center items-center gap-3 px-4 mt-4 mb-8 z-20 w-full relative animate-fadeInUp delay-300">
        <div className="bg-[#A695FD] text-white px-4 py-2 text-sm md:text-base rounded shadow-md hover-scale-up hover-shadow-lg animate-scaleIn delay-400">UI / UX Design</div>
        <div className="bg-[#1FE5B7] text-white px-4 py-2 text-sm md:text-base rounded shadow-md hover-scale-up hover-shadow-lg animate-scaleIn delay-500">Mobile App</div>
        <div className="bg-[#FEBA31] text-white px-4 py-2 text-sm md:text-base rounded shadow-md hover-scale-up hover-shadow-lg animate-scaleIn delay-500">Web App</div>
      </div>

      {/* Tech Stack Bar */}
      <div
        className="w-full max-w-[90%] sm:max-w-[500px] md:max-w-[520px] xl:w-[480px] rounded-4xl shadow-xl flex items-center justify-between gap-2 md:gap-4 px-2 md:px-6 xl:px-8 py-2 md:py-4 z-30 mx-auto mt-6 xl:mt-0 xl:absolute xl:left-1/2 xl:bottom-8 xl:-translate-x-1/2 bg-white relative border border-gray-200 animate-fadeInUp delay-400"
      >
        <Image src="/javascript-svgrepo-com.svg" alt="JavaScript" width={32} height={32} className="w-8 h-8 lg:w-10 lg:h-10 hover-scale-up hover-shadow-lg animate-scaleIn delay-400" />
        <Image src="/reactjs-svgrepo-com.svg" alt="React" width={32} height={32} className="w-8 h-8 lg:w-10 lg:h-10 hover-scale-up hover-shadow-lg animate-scaleIn delay-500" />
        <Image src="/next.svg" alt="Next.js" width={32} height={32} className="w-8 h-8 lg:w-10 lg:h-10 hover-scale-up hover-shadow-lg animate-scaleIn delay-500" />
        <Image src="/node-svgrepo-com.svg" alt="Node.js" width={32} height={32} className="w-8 h-8 lg:w-10 lg:h-10 hover-scale-up hover-shadow-lg animate-scaleIn delay-500" />
        <Image src="/expo-svgrepo-com.svg" alt="Expo" width={32} height={32} className="w-8 h-8 lg:w-10 lg:h-10 hover-scale-up hover-shadow-lg animate-scaleIn delay-500" />
      </div>
    </div>
  );
}
