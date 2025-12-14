"use client";

import { useState } from "react";
import { useNavbarScroll } from "./hooks";
import {
  NavbarLogo,
  DesktopNav,
  MobileMenu,
  MobileMenuButton,
} from "./components";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useNavbarScroll();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <NavbarLogo />
          <DesktopNav />
          <MobileMenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
