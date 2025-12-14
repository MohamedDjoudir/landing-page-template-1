"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card variant="hover" className="group rounded-sm">
      <div className="mb-6 text-white/80 group-hover:text-white transition-colors">
        <div className="bg-white/10 p-3 inline-block rounded-sm group-hover:bg-white/20 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/70 group-hover:text-white/90 transition-colors">
        {description}
      </p>
    </Card>
  );
}
