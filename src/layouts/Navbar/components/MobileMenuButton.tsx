"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  const t = useTranslations("navigation");

  return (
    <button
      className="md:hidden text-white"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? t("closeMenu") : t("openMenu")}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}
