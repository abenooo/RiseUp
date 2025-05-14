"use client"

import Testimonials from '@/components/Testimonials';
import { FAQSection } from '@/components/FAQSection';
import Navbarr from '@/components/Navbar';
import HowItWorks from "@/components/How_it_works"
import OurExperts from '@/components/Our_expert';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
export default function Navbar() {

  return (
    <>
 <Navbarr />
    <Hero/>
<OurExperts/>
<Services/>
    <Testimonials/>
    <HowItWorks/>
    <FAQSection/>
    </>
  );
}