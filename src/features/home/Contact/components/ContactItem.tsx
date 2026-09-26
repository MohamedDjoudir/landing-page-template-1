"use client";

import type { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

export function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <div className="flex items-start">
      <div className="bg-white/10 p-2 rounded-sm me-4">{icon}</div>
      <div>
        <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}
