"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, mobileMenuAnimationConfig } from "../config";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={mobileMenuAnimationConfig.initial}
      animate={mobileMenuAnimationConfig.animate}
      exit={mobileMenuAnimationConfig.exit}
      className="md:hidden bg-black"
    >
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-white py-2 text-2xl font-light"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          <button className="border border-white px-5 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full mt-4">
            Contact
          </button>
        </nav>
      </div>
    </motion.div>
  );
}
