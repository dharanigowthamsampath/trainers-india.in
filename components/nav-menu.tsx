"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUsers";

type Props = {};

const NavigationMenu = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await checkUser();
    };
    fetchUser();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const signOutFunction = async () => {
    setLoading(true);
    try {
      router.push("/");
      await signOut();
      // router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoading(false);
    }
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
                href="/job"
                className={`flex justify-center items-center px-4 py-2 cursor-pointer ${
                  isActive("/job")
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
        <div
          onClick={signOutFunction}
          className="px-4 py-2 flex items-center cursor-pointer text-red-500 hover:bg-red-500 hover:text-white"
        >
          {loading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Logging out...
            </div>
          ) : (
            "Logout"
          )}
        </div>
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
              href="/job"
              className={`px-4 py-2 cursor-pointer ${
                isActive("/job")
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
            <div
              onClick={signOutFunction}
              className="px-4 py-2 mb-2 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging out...
                </div>
              ) : (
                "Logout"
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;
