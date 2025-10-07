"use client";
import React from "react";

export default function Footer() {
  return (
   <footer className="mt-20 w-full">
  <div className="flex md:flex-row items-center justify-between h-20 px-8 md:px-14 2xl:mx-20">
    {/* Left: Logo */}
    <div className="flex items-center">
      <img src="/assets/logo.svg" alt="Company Logo" className="h-15 w-auto brightness-0 dark:brightness-100" />
    </div>

        {/* Right: Links */}
        <div className="flex space-x-6 text-gray-800 dark:text-white text-xs sm:text-lg font-medium mt-4 md:mt-0">
          <a
            href="/terms"
            className="hover:text-gray-900 transition-colors"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="/privacy"
            className="hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
