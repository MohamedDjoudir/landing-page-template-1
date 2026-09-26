"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader, Button } from "@/components/ui";
import { projectItems } from "./constants";
import { ProjectCard } from "./components";

export function Work() {
  const t = useTranslations("work");

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          action={
            <Button
              variant="secondary"
              className="border-2 border-white/20 hover:border-white hover:bg-white/5 group"
            >
              {t("viewAll")}
              <ArrowRight className="ms-2 h-4 w-4 rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectItems.map((project) => (
            <ProjectCard
              key={project.key}
              title={t(`projects.${project.key}.title`)}
              subtitle={t(`projects.${project.key}.subtitle`)}
              image={project.image}
              year={project.year}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 end-0 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 start-0 w-48 h-48 border border-white/5"></div>
    </section>
  );
}
