import { FAQSection } from "@/components/FAQSection";
import HowItWorks from "@/components/How_it_works";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import OurExperts from "@/components/Our_expert";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F3] overflow-x-hidden">
      <Hero />
      <OurExperts />
      <Services />
      <Testimonials />
      <HowItWorks />
      <FAQSection />
    </main>
  );
}
