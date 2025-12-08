"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function NavBar({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10 text-xl">
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="cursor-pointer block md:hidden text-primary-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 right-8 z-50 bg-primary-900	 text-primary-100 p-6 rounded-2xl shadow-lg flex flex-col gap-6 md:hidden w-64 border border-primary-800">
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors text-lg"
            onClick={() => setIsOpen(false)}
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4 text-lg"
              onClick={() => setIsOpen(false)}
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Guest area
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
