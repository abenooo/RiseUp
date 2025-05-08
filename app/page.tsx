"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/Testimonials';
import { FAQSection } from '@/components/FAQSection';

import HowItWorks from "@/components/How_it_works"
import OurExperts from '@/components/Our_expert';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expertsOpen, setExpertsOpen] = useState(false);

  return (
    <>
    <header className="w-full flex justify-center bg-black py-6 relative z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-8 py-3 bg-zinc-900/80 border border-zinc-800 rounded-full shadow-lg backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <Shield className="h-6 w-6 text-fuchsia-500" />
          <span className="text-2xl font-bold text-white">RiseUp</span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-4">
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full"
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div 
              className={`absolute left-0 mt-2 w-[1100px] rounded-xl shadow-lg bg-zinc-800 border border-zinc-700 z-[1000] py-4 px-4 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex">
                {/* Left Section - Get Help For (3 columns) */}
                <div className="w-[60%] pr-4">
                  <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">Get Help For:</h3>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                    {/* Column 1 */}
                    <div className="space-y-1">
                      <Link href="/anxiety" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Anxiety</Link>
                      <Link href="/stress" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Stress</Link>
                      <Link href="/sadness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Sadness</Link>
                      <Link href="/confusion" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Confusion</Link>
                      <Link href="/feeling-lost" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Feeling Lost</Link>
                      <Link href="/feeling-alone" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Feeling Alone</Link>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-1">
                      <Link href="/trauma" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Trauma</Link>
                      <Link href="/burnout" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Burnout</Link>
                      <Link href="/societal-pressure" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Societal Pressure</Link>
                      <Link href="/inferiority-complex" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Inferiority Complex</Link>
                      <Link href="/exam-anxiety" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Exam Anxiety</Link>
                    </div>
                    
                    {/* Column 3 */}
                    <div className="space-y-1">
                      <Link href="/panic-attacks" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Panic Attacks</Link>
                      <Link href="/peer-pressure" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Peer Pressure</Link>
                      <Link href="/toxic-workplace" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Toxic Workplace</Link>
                      <Link href="/imposter-syndrome" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Imposter Syndrome</Link>
                      <Link href="/lack-of-confidence" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Lack Of Confidence</Link>
                      <Link href="/social-anxiety" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Social Anxiety</Link>
                      <Link href="/low-self-esteem" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap">Low Self-Esteem</Link>
                    </div>
                  </div>
                </div>
                
                {/* Vertical Separator */}
                <div className="border-r border-zinc-700 mx-4 h-auto"></div>
                
                {/* Right Section - Therapy and Coaching (2 columns) */}
                <div className="w-[40%] flex">
                  {/* Therapy Column */}
                  <div className="w-1/2 pr-4">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">Therapy</h3>
                    <Link href="/therapy/mental-wellness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Therapy for Mental Wellness</Link>
                    <Link href="/therapy/marriage" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Marriage Counseling</Link>
                    <Link href="/therapy/relationship" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Relationship Counseling</Link>
                    <Link href="/therapy/depression" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Depression Counseling</Link>
                    <Link href="/therapy/individual" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Individual Therapy</Link>
                    <Link href="/therapy/anxiety" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Anxiety Therapy</Link>
                    <Link href="/therapy/online" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Online Therapy</Link>
                  </div>
                  
                  {/* Coaching Column */}
                  <div className="w-1/2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">Coaching</h3>
                    <Link href="/coaching/self-improvement" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Coaching For Self-Improvement</Link>
                    <Link href="/coaching/life" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Life Coaching</Link>
                    <Link href="/coaching/mindfulness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Mindfulness Coaching</Link>
                    <Link href="/coaching/positivity" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Positivity Coaching</Link>
                    <Link href="/coaching/career" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Career Coaching</Link>
                    <Link href="/coaching/sexual-wellness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Sexual Wellness Coaching</Link>
                    <Link href="/coaching/mindset" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Mindset Transformation</Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-zinc-700">
                <Link href="/all-services" className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 rounded transition-colors">View All →</Link>
              </div>
            </div>
          </div>

          {/* Talk to Experts Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full"
              onMouseEnter={() => setExpertsOpen(true)}
            >
              Talk to Experts
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div 
              className={`absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-zinc-800 border border-zinc-700 z-[1000] py-3 transition-all duration-200 ${expertsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              onMouseEnter={() => setExpertsOpen(true)}
              onMouseLeave={() => setExpertsOpen(false)}
            >
              <h3 className="text-sm font-semibold text-zinc-400 px-4 pb-2">Connect with</h3>
              <div className="space-y-1">
                <Link href="/therapists" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Therapist</Link>
                <Link href="/relationship-coaches" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Relationship Coach</Link>
                <Link href="/counseling-psychologists" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Counseling Psychologist</Link>
                <Link href="/clinical-psychologists" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Clinical Psychologist</Link>
                <Link href="/life-coaches" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Life Coach</Link>
                <Link href="/mindfulness-coaches" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Mindfulness Coach</Link>
                <Link href="/positivity-coaches" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Positivity Coach</Link>
                <Link href="/career-coaches" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Career Coach</Link>
                <Link href="/sexual-wellness-coaches" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Sexual Wellness Coach</Link>
                <Link href="/mindset-coaches" className="block px-4 py-2 text-sm hover:bg-zinc-700 transition-colors">Mindset Transformation Coach</Link>
              </div>
            </div>
          </div>

          {/* Other Nav Links */}
          {/* <Link href="/community" className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full">
            Community
          </Link> */}
          <Link href="/blogs" className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full">
            Blogs & Resources
          </Link>
          <Link href="/ai-friend" className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full">
            AI Friend
          </Link>
          <Link href="/find-therapists" className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full">
            Find Therapists
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="border-fuchsia-600 text-fuchsia-400 bg-transparent hover:bg-fuchsia-900/20 rounded-full px-6 py-2 text-base font-medium"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full px-6 py-2 text-base font-medium">
              Sign Up Free
            </Button>
          </Link>
        </div>
      </div>
    </header>
    <Hero/>
<OurExperts/>
<Services/>
    <Testimonials/>
    <HowItWorks/>
    <FAQSection/>
    </>
  );
}