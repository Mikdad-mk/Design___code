'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#ede7f6] overflow-x-hidden font-sans">

      {/* Grid background overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Navigation Bar */}
      <nav className="w-full max-w-[1400px] mx-auto px-4 md:px-16 pt-4 z-20 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="rotate-[-15deg] shadow-lg flex items-center justify-center mt-4 md:mt-12 w-32 sm:w-40 md:w-[186px] h-14 md:h-[72px] bg-[#4C5EFF] relative">
            <svg
              className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-12 w-12 md:w-[60px] h-12 md:h-[60px]"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 0 C10 30, 50 30, 30 60"
                stroke="#4C5EFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <img
              src="/design code logo-01-01.svg"
              alt="Logo"
              className="object-contain w-full h-full scale-150 md:scale-195"
            />
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
      <section className="relative flex flex-col-reverse md:flex-row items-center md:items-start justify-between px-4 md:px-16 mt-8 md:mt-16 w-full max-w-[1400px] mx-auto z-10 min-h-[320px] md:min-h-[420px]">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-4 max-w-full md:max-w-2xl pt-4 md:pt-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-black leading-tight" style={{ fontFamily: 'var(--font-architects)' }}>
            <span className="relative inline-block">
              We’re creative
              <span className="absolute left-0 bottom-3 w-full h-2 bg-yellow-200 -z-10 rounded-md"></span>
            </span>
          </h1>
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-2 mt-2">
            <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#444]" style={{ fontFamily: 'var(--font-archistico)', letterSpacing: '-2px', textShadow: '0 1px 0 #fff' }}>
              Design
            </span>
            <span className="bg-[#536dfe] text-white text-4xl sm:text-5xl md:text-7xl px-4 py-1 rounded-lg rotate-[5deg] shadow-lg ml-2" style={{ fontFamily: 'var(--font-archistico)' }}>
              Studio
            </span>
          </div>
        </div>

        {/* Hand SVG */}
        <div className="flex-1 flex justify-center items-center w-full mb-6 md:mb-0">
          <Image
            src="/hand-01.svg"
            alt="Hand illustration"
            width={800}
            height={800}
            className="object-contain w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] md:max-w-[600px] lg:max-w-[800px]"
            priority
          />
        </div>
      </section>

      {/* Floating Tags Desktop */}
      <div className="hidden md:block absolute z-20" style={{ left: '234.02px', top: '658.05px', transform: 'rotate(-75deg)', backdropFilter: 'blur(4px)', boxShadow: '0 3px 6px -1px rgba(0, 0, 0, 0.25)' }}>
        <div className="px-3 py-3 shadow-lg text-lg font-medium w-40 text-center" style={{ background: '#A695FD', color: 'white' }}>
          UI / UX Design
        </div>
      </div>
      <div className="hidden md:block absolute z-20" style={{ left: '394.02px', top: '643.83px', transform: 'rotate(-100deg)', backdropFilter: 'blur(4px)', boxShadow: '0 3px 6px -1px rgba(0, 0, 0, 0.25)' }}>
        <div className="px-9 py-5 text-lg font-medium text-center" style={{ background: '#1FE5B7', color: 'white' }}>
          Mobile App
        </div>
      </div>
      <div className="hidden md:block absolute z-20" style={{ left: '530.44px', top: '670.7px', transform: 'rotate(-70deg)', backdropFilter: 'blur(4px)', boxShadow: '0 3px 6px -1px rgba(153, 150, 150, 0.25)' }}>
        <div className="px-6 py-3 shadow-lg text-lg font-medium w-32 text-center" style={{ background: '#FEBA31', color: 'white' }}>
          Web App
        </div>
      </div>

      {/* Floating Tags Mobile */}
      <div className="flex md:hidden justify-center items-center flex-wrap gap-2 mt-4 px-4 z-20">
        <div className="bg-[#A695FD] text-white px-3 py-2 text-sm rounded shadow-md">UI / UX Design</div>
        <div className="bg-[#1FE5B7] text-white px-3 py-2 text-sm rounded shadow-md">Mobile App</div>
        <div className="bg-[#FEBA31] text-white px-3 py-2 text-sm rounded shadow-md">Web App</div>
      </div>

      {/* Tech Stack Bar */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-2 md:bottom-8 w-[95vw] md:w-[480px] max-w-[98vw] px-4 md:px-8 py-3 bg-white rounded-3xl shadow-lg flex items-center justify-between z-30 backdrop-blur-md">
        {["javascript-svgrepo-com", "reactjs-svgrepo-com", "next", "node-svgrepo-com", "expo-svgrepo-com"].map((icon, i) => (
          <Image
            key={i}
            src={`/${icon}.svg`}
            alt={icon}
            width={32}
            height={32}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        ))}
      </div>
    </div>
  );
}
