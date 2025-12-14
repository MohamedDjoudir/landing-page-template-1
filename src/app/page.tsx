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

export default function Home() {
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
