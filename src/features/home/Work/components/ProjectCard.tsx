"use client";

import Image from "next/image";
import { Badge } from "@/components/ui";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  year: string;
}

export function ProjectCard({
  title,
  subtitle,
  image,
  year,
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden border-2 border-white/20 mb-4 group-hover:border-white/50 transition-all duration-300">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <Badge>{year}</Badge>
        </div>

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-xs uppercase tracking-widest text-white/80 mb-1">
            View Project
          </div>
        </div>
      </div>

      {/* Project title */}
      <h3 className="text-2xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">
        {title}
      </h3>
      <p className="text-white/70 group-hover:text-white/90 transition-colors">
        {subtitle}
      </p>

      {/* Animated underline */}
      <div className="h-px w-0 bg-white group-hover:w-20 transition-all duration-300 mt-2"></div>
    </div>
  );
}
