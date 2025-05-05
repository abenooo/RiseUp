"use client"
import Link from "next/link"
import { Shield, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [helpOpen, setHelpOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar */}
      <header className="w-full flex justify-center bg-black py-6 relative z-50">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-8 py-3 bg-zinc-900/80 border border-zinc-800 rounded-full shadow-lg backdrop-blur-md">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50">
            <Shield className="h-6 w-6 text-fuchsia-500" />
            <span className="text-2xl font-bold text-white">BreakFree</span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-4">
            {/* Services Dropdown - Now Wider and Fixed Hover */}
            <div className="relative group">
              <button 
                className="flex items-center text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full"
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-[900px] rounded-xl shadow-lg bg-zinc-800 border border-zinc-700 z-[1000] py-4 px-4 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="grid grid-cols-5 gap-4">
                  {/* Column 1 */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">Therapy</h3>
                    <Link href="/therapy/mental" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Therapy for Mental</Link>
                    <Link href="/therapy/anxiety" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Anxiety</Link>
                    <Link href="/therapy/trauma" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Trauma</Link>
                    <Link href="/therapy/panic-attacks" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Panic Attacks</Link>
                    <Link href="/therapy/wellness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Wellness</Link>
                    <Link href="/therapy/marriage" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Marriage Counseling</Link>
                  </div>
                  
                  {/* Column 2 */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">Coaching</h3>
                    <Link href="/coaching/self-improvement" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Coaching For Self-Improvement</Link>
                    <Link href="/coaching/life" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Life Coaching</Link>
                    <Link href="/coaching/stress" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Stress</Link>
                    <Link href="/coaching/burnout" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Burnout</Link>
                    <Link href="/coaching/peer-pressure" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Peer Pressure</Link>
                    <Link href="/coaching/relationship" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Relationship Counseling</Link>
                  </div>
                  
                  {/* Column 3 */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">Mind & Emotions</h3>
                    <Link href="/mind/mindfulness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Mindfulness Coaching</Link>
                    <Link href="/mind/sadness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Sadness</Link>
                    <Link href="/mind/societal-pressure" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Societal Pressure</Link>
                    <Link href="/mind/toxic-workplace" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Toxic Workplace</Link>
                    <Link href="/mind/depression" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Depression Counseling</Link>
                    <Link href="/mind/positivity" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Positivity Coaching</Link>
                  </div>
                  
                  {/* Column 4 */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">Specialized Support</h3>
                    <Link href="/specialized/confusion" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Confusion</Link>
                    <Link href="/specialized/inferiority" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Inferiority Complex</Link>
                    <Link href="/specialized/imposter" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Imposter Syndrome</Link>
                    <Link href="/specialized/career" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Career Coaching</Link>
                    <Link href="/specialized/feeling-lost" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Feeling Lost</Link>
                  </div>
                  
                  {/* Column 5 */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">More Support</h3>
                    <Link href="/support/exam-anxiety" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Exam Anxiety</Link>
                    <Link href="/support/confidence" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Lack Of Confidence</Link>
                    <Link href="/support/individual" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Individual Therapy</Link>
                    <Link href="/support/sexual-wellness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Sexual Wellness Coaching</Link>
                    <Link href="/support/loneliness" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Feeling Alone</Link>
                    <Link href="/support/social-anxiety" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Social Anxiety</Link>
                    <Link href="/support/low-self-esteem" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Low Self-Esteem</Link>
                    <Link href="/support/anxiety-therapy" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Anxiety Therapy</Link>
                    <Link href="/support/mindset" className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors">Mindset Transformation</Link>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-zinc-700">
                  <Link href="/online-therapy" className="block px-3 py-1.5 text-sm font-medium text-fuchsia-400 hover:bg-zinc-700 rounded transition-colors">Online Therapy</Link>
                  <Link href="/all-services" className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 rounded transition-colors">View All Services →</Link>
                </div>
              </div>
            </div>

            {/* Get Help For Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full"
                onMouseEnter={() => setHelpOpen(true)}
              >
                Get Help For
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-72 rounded-xl shadow-lg bg-zinc-800 border border-zinc-700 z-[1000] py-2 transition-all duration-200 ${helpOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setHelpOpen(true)}
                onMouseLeave={() => setHelpOpen(false)}
              >
                <div className="grid grid-cols-2 gap-1 p-2">
                  <Link href="/anxiety" className="block px-3 py-2 text-sm hover:bg-zinc-700 rounded transition-colors">Anxiety</Link>
                  <Link href="/stress" className="block px-3 py-2 text-sm hover:bg-zinc-700 rounded transition-colors">Stress</Link>
                  <Link href="/depression" className="block px-3 py-2 text-sm hover:bg-zinc-700 rounded transition-colors">Depression</Link>
                  <Link href="/addiction" className="block px-3 py-2 text-sm hover:bg-zinc-700 rounded transition-colors">Addiction</Link>
                  <Link href="/peer-pressure" className="block px-3 py-2 text-sm hover:bg-zinc-700 rounded transition-colors">Peer Pressure</Link>
                  <Link href="/self-esteem" className="block px-3 py-2 text-sm hover:bg-zinc-700 rounded transition-colors">Low Self-Esteem</Link>
                </div>
              </div>
            </div>

            {/* Regular Nav Links */}
            <Link href="/therapy" className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full">
              Therapy
            </Link>
            <Link href="/community" className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full">
              Community
            </Link>
            <Link href="/progress-tracker" className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full">
              Progress Tracker
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

      {/* Rest of your components */}
    </div>
  )
}