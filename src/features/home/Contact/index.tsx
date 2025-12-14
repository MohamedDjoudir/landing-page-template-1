"use client";

import { SectionHeader } from "@/components/ui";
import { contactConfig } from "@/config";
import { ContactForm, ContactInfo } from "./components";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={contactConfig.label}
          title={contactConfig.title}
          subtitle={contactConfig.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
