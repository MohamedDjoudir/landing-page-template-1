"use client";

import {
  FooterLogo,
  FooterNav,
  SocialLinks,
  LegalLinks,
  Copyright,
} from "./components";

export function Footer() {
  return (
    <footer className="py-7 pb-5 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <FooterLogo />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <FooterNav />
            <div className="h-6 w-px bg-neutral-800 hidden md:block"></div>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-6 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <Copyright />
          <LegalLinks />
        </div>
      </div>
    </footer>
  );
}
