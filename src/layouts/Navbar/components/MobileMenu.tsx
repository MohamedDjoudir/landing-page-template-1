"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { LocaleSwitcher } from "@/components";
import { sectionLinks } from "../../constants";
import { mobileMenuAnimation } from "../constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("navigation");

  if (!isOpen) return null;

  return (
    <motion.div
      initial={mobileMenuAnimation.initial}
      animate={mobileMenuAnimation.animate}
      exit={mobileMenuAnimation.exit}
      className="md:hidden bg-black"
    >
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-6">
          {sectionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-white py-2 text-2xl font-light"
              onClick={onClose}
            >
              {t(link.key)}
            </Link>
          ))}
          <LocaleSwitcher className="self-start px-0" />
          <Button variant="outline" className="px-5 w-full mt-4 transition-colors">
            {t("contact")}
          </Button>
        </nav>
      </div>
    </motion.div>
  );
}
