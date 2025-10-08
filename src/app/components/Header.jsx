"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sun, Moon } from "lucide-react"; // icon library for toggle button

export default function Header() {
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // --- Theme toggle logic ---
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // --- Mobile drawer animation ---
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.to(mobileMenuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black transition-colors duration-500 z-100">
      <div className="h-18 flex items-center justify-between px-8 md:px-14 2xl:mx-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.svg" alt="Logo" className="h-14 w-auto brightness-0 dark:brightness-100" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-7 text-gray-700 dark:text-gray-200">
          <a
            href="#products"
            className="relative text-black dark:text-white whitespace-nowrap font-medium hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Our Vision
          </a>
          <a
            href="#products"
            className="relative text-black dark:text-white whitespace-nowrap font-medium hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            For Insurers
          </a>
          <a
            href="#products"
            className="relative text-black dark:text-white whitespace-nowrap font-medium hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Become a Cybersecurity Partner
          </a>
          <a
            href="#products"
            className="relative text-black dark:text-white whitespace-nowrap font-medium hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact us
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative overflow-hidden bg-black dark:bg-white text-white dark:text-black font-medium px-6 rounded-4xl h-8 flex items-center justify-center transition-colors duration-300"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* Right Side (Mobile): Theme toggle + Hamburger */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Theme Toggle Button (mobile position) */}
          <button
            onClick={toggleTheme}
            className="relative overflow-hidden bg-black dark:bg-white text-white dark:text-black font-medium px-3 rounded-4xl h-5 flex items-center justify-center transition-colors duration-300"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center space-y-1.5 w-8 h-8 focus:outline-none"
          >
            <span
              className={`block h-[2px] w-6 bg-black dark:bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-6 bg-black dark:bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden fixed top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-start space-y-4 py-6 px-6 opacity-0 -translate-y-full pointer-events-none text-gray-700 dark:text-gray-200"
      >
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-base w-full hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
        >
          Our Vision
        </a>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-base w-full hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
        >
          For Insurers
        </a>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-base w-full hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
        >
          Become a Cybersecurity Partner
        </a>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-base w-full hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}
