import { setRequestLocale } from "next-intl/server";
import { Navbar, Footer } from "@/layouts";
import {
  Hero,
  Features,
  Work,
  Process,
  Testimonials,
  Pricing,
  Contact,
} from "@/features";
import { NoiseBackground } from "@/components";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-black text-white min-h-screen">
      <NoiseBackground />
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
