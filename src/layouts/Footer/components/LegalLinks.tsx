"use client";

import { legalLinks } from "../config";

export function LegalLinks() {
  return (
    <div className="flex gap-6">
      {legalLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-neutral-400 hover:text-white transition-colors text-sm"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
