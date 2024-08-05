"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const NavigationMenu = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-full bg-white">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between">
        <div className="flex h-full items-center">
          <Link
            href="/"
            className="flex justify-center items-center px-4 py-2 font-bold cursor-pointer"
          >
            TE
          </Link>
          <div>
            <div className="w-full flex justify-center space-x-0.5">
              <Link
                href="/dashboard"
                className={`flex justify-center items-center px-4 py-2 cursor-pointer ${
                  isActive("/dashboard")
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-800 hover:text-white"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/jobs"
                className={`flex justify-center items-center px-4 py-2 cursor-pointer ${
                  isActive("/jobs")
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-800 hover:text-white"
                }`}
              >
                Jobs
              </Link>
              <Link
                href="/learn"
                className={`flex justify-center items-center px-4 py-2 cursor-pointer ${
                  isActive("/learn")
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-800 hover:text-white"
                }`}
              >
                Learn
              </Link>
              <Link
                href="/content"
                className={`flex justify-center items-center px-4 py-2 cursor-pointer ${
                  isActive("/content")
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-800 hover:text-white"
                }`}
              >
                Content
              </Link>
            </div>
          </div>
        </div>
        <Link
          href="/account"
          className="px-4 py-2 flex items-center cursor-pointer"
        >
          Account
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-2">
          <Link href="/" className="font-bold text-xl cursor-pointer">
            TE
          </Link>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col">
            <Link
              href="/dashboard"
              className={`px-4 py-2 cursor-pointer ${
                isActive("/dashboard")
                  ? "bg-blue-800 text-white"
                  : "hover:bg-blue-800 hover:text-white"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/jobs"
              className={`px-4 py-2 cursor-pointer ${
                isActive("/jobs")
                  ? "bg-blue-800 text-white"
                  : "hover:bg-blue-800 hover:text-white"
              }`}
            >
              Jobs
            </Link>
            <Link
              href="/learn"
              className={`px-4 py-2 cursor-pointer ${
                isActive("/learn")
                  ? "bg-blue-800 text-white"
                  : "hover:bg-blue-800 hover:text-white"
              }`}
            >
              Learn
            </Link>
            <Link
              href="/content"
              className={`px-4 py-2 cursor-pointer ${
                isActive("/content")
                  ? "bg-blue-800 text-white"
                  : "hover:bg-blue-800 hover:text-white"
              }`}
            >
              Content
            </Link>
            <Link
              href="/account"
              className={`px-4 py-2 cursor-pointer ${
                isActive("/account")
                  ? "bg-blue-800 text-white"
                  : "hover:bg-blue-800 hover:text-white"
              }`}
            >
              Account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;
