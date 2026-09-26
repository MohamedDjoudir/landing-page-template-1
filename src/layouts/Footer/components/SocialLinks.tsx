"use client";

import { useTranslations } from "next-intl";
import { socialLinks } from "../constants";
import { SocialIcon } from "./SocialIcon";

export function SocialLinks() {
  const t = useTranslations("common.social");

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ key, href, icon: Icon }) => (
        <SocialIcon key={key} href={href} label={t(key)}>
          <Icon className="w-5 h-5" />
        </SocialIcon>
      ))}
    </div>
  );
}
