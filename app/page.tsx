import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LogosBar } from "@/components/LogosBar";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-midnight">
        <Navbar />
        <Hero />
      </div>
      <LogosBar />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
