"use client";

import Link from "next/link";
import { navLinks } from "../config";

interface DesktopNavProps {
  onContactClick?: () => void;
}

export function DesktopNav({ onContactClick }: DesktopNavProps) {
  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <button
          onClick={onContactClick}
          className="border border-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Contact
        </button>
      </div>
    </>
  );
}
