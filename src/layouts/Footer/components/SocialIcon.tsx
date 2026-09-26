"use client";

interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <a
      href={href}
      className="text-neutral-400 hover:text-white transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  );
}
