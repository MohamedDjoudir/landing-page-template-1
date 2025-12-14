"use client";

import { Input, Textarea, Button } from "@/components/ui";

export function ContactForm() {
  return (
    <form className="space-y-6">
      <Input id="name" label="Name" type="text" placeholder="Your name" />
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="your.email@example.com"
      />
      <Textarea
        id="message"
        label="Message"
        rows={5}
        placeholder="Tell us about your project..."
      />
      <Button
        variant="primary"
        className="w-full relative group overflow-hidden"
      >
        <span className="relative z-10">Send Message</span>
        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>
    </form>
  );
}
