import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import PricingSection from "@/components/Pricing/PricingSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Features />
        <PricingSection />
        <TestimonialsSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
