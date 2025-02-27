"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="primary-bg fixed left-0 top-0 w-full z-10">
      <div className="mx-auto px-2 sm:px-6 lg:px-16">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 nav-link-color"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <Image
                  className="relative"
                  src="/img/logo.png"
                  alt="Logo"
                  width={256}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 font-semibold nav-link-color hover:bg-[#16649e] hover:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="/#works"
                  className="rounded-md px-3 py-2 font-semibold nav-link-color hover:bg-[#16649e] hover:text-white"
                >
                  Works
                </Link>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 font-semibold nav-link-color hover:bg-[#16649e] hover:text-white"
                >
                  Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 nav-link-color font-semibold hover:bg-[#16649e] hover:text-white"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/#works"
              className="block rounded-md px-3 py-2 font-semibold nav-link-color hover:bg-[#16649e] hover:text-white"
            >
              Works
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 font-semibold nav-link-color hover:bg-[#16649e] hover:text-white"
            >
              Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
