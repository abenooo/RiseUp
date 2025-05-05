"use client"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, MessageSquare, BookOpen, Users, Bot, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [expertsOpen, setExpertsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-zinc-800 bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-fuchsia-500" />
            <span className="text-xl font-bold text-black">BreakFree</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 relative">
            {/* Get Help For Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHelpOpen(true)}
              onMouseLeave={() => setHelpOpen(false)}
            >
              <button
                className="flex items-center text-sm font-medium text-orange-500 hover:text-fuchsia-600 transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={helpOpen}
              >
                Get Help For
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {helpOpen && (
                <div className="absolute left-0 mt-2 w-[800px] rounded-xl shadow-2xl bg-white border border-zinc-200 z-50 p-8 flex gap-12">
                  {/* Column 1 */}
                  <div>
                    <div className="text-base font-semibold text-orange-500 mb-4">Get Help For:</div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-black text-sm min-w-[220px]">
                      <span>Anxiety</span>
                      <span>Trauma</span>
                      <span>Panic Attacks</span>
                      <span>Stress</span>
                      <span>Burnout</span>
                      <span>Peer Pressure</span>
                      <span>Sadness</span>
                      <span>Societal Pressure</span>
                      <span>Toxic Workplace</span>
                      <span>Confusion</span>
                      <span>Inferiority Complex</span>
                      <span>Imposter Syndrome</span>
                      <span>Feeling Lost</span>
                      <span>Exam Anxiety</span>
                      <span>Lack Of Confidence</span>
                      <span>Feeling Alone</span>
                      <span>Social Anxiety</span>
                      <span>Low Self-Esteem</span>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div>
                    <div className="text-base font-semibold text-orange-500 mb-4">Therapy for Mental Wellness</div>
                    <ul className="space-y-2 text-black text-sm">
                      <li>Marriage Counseling</li>
                      <li>Relationship Counseling</li>
                      <li>Depression Counseling</li>
                      <li>Individual Therapy</li>
                      <li>Anxiety Therapy</li>
                      <li>Online Therapy</li>
                    </ul>
                  </div>
                  {/* Column 3 */}
                  <div>
                    <div className="text-base font-semibold text-orange-500 mb-4">Coaching For Self-Improvement</div>
                    <ul className="space-y-2 text-black text-sm">
                      <li>Life Coaching</li>
                      <li>Mindfulness Coaching</li>
                      <li>Positivity Coaching</li>
                      <li>Career Coaching</li>
                      <li>Sexual Wellness Coaching</li>
                      <li>Mindset Transformation</li>
                      <li>
                        <a href="#" className="text-orange-500 font-medium hover:underline">View All</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {/* Talk to Experts Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setExpertsOpen(true)}
              onMouseLeave={() => setExpertsOpen(false)}
            >
              <button
                className="flex items-center text-sm font-medium text-black hover:text-fuchsia-600 transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={expertsOpen}
              >
                Talk to Experts
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {expertsOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white border border-zinc-200 z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-fuchsia-600">Connect with</div>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Therapist</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Relationship Coach</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Counseling Psychologist</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Clinical Psychologist</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Life Coach</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Mindfulness Coach</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Positivity Coach</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Career Coach</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Sexual Wellness Coach</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-zinc-100">Mindset Transformation Coach</Link>
                  </div>
                </div>
              )}
            </div>
            {/* Other nav items */}
            <Link href="#community" className="text-sm font-medium text-black hover:text-fuchsia-600 transition-colors">
              Community
            </Link>
            <Link href="#blogs" className="text-sm font-medium text-black hover:text-fuchsia-600 transition-colors">
              Blogs & Resources
            </Link>
            <Link href="#corporates" className="text-sm font-medium text-black hover:text-fuchsia-600 transition-colors">
              For Corporates
            </Link>
            <Link href="#ai-friend" className="text-sm font-medium text-black hover:text-fuchsia-600 transition-colors">
              AI Friend
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50"
            >
              Find Therapist
            </Button>
            <Link href="/dashboard">
              <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Anonymous Support</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Break Free From Addiction
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your anonymous hub to overcome addiction with community support, expert advice, and AI guidance.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                      Join Now - It's Free
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-zinc-700 hover:bg-zinc-800 text-white">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span>100% Anonymous</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span>Free Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span>AI Guidance</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                  width={600}
                  height={600}
                  alt="BreakFree Dashboard Preview"
                  className="rounded-lg shadow-2xl border border-zinc-800"
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-zinc-800 p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500 text-white">Achievement</Badge>
                    <span className="font-medium">10 Days Clean! 🎉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Support System
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
                <MessageSquare className="h-8 w-8 text-fuchsia-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">Talk to Experts</h3>
                <p className="text-zinc-400 text-sm">Connect with certified addiction specialists</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-fuchsia-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">Community</h3>
                <p className="text-zinc-400 text-sm">Join our supportive recovery community</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
                <BookOpen className="h-8 w-8 text-fuchsia-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">Resources</h3>
                <p className="text-zinc-400 text-sm">Access helpful articles and guides</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-fuchsia-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">For Groups</h3>
                <p className="text-zinc-400 text-sm">Support for organizations and teams</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
                <Bot className="h-8 w-8 text-fuchsia-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">AI Friend</h3>
                <p className="text-zinc-400 text-sm">24/7 AI support companion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Help For Section */}
        <section id="get-help" className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">We Can Help</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Help For</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-zinc-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Addiction Types</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Substance Addiction</li>
                  <li>Alcohol Dependence</li>
                  <li>Nicotine Addiction</li>
                  <li>Gambling Problems</li>
                  <li>Internet Addiction</li>
                </ul>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Emotional Challenges</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Anxiety & Stress</li>
                  <li>Depression</li>
                  <li>Peer Pressure</li>
                  <li>Low Self-Esteem</li>
                  <li>Feeling Lost</li>
                </ul>
              </div>
              <div className="bg-zinc-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Social Issues</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Social Anxiety</li>
                  <li>Isolation</li>
                  <li>Relationship Strain</li>
                  <li>Family Conflicts</li>
                  <li>Workplace Stress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy Section */}
        <section id="therapy" className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Professional Help</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Therapy & Coaching</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-lg font-bold mb-3">Therapy Services</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Addiction Counseling</li>
                  <li>Individual Therapy</li>
                  <li>Group Therapy</li>
                  <li>Online Sessions</li>
                  <li>Family Therapy</li>
                </ul>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-lg font-bold mb-3">Recovery Coaching</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Life Coaching</li>
                  <li>Mindfulness Training</li>
                  <li>Relapse Prevention</li>
                  <li>Habit Formation</li>
                  <li>Goal Setting</li>
                </ul>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-lg font-bold mb-3">Specialized Support</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Youth Programs</li>
                  <li>LGBTQ+ Support</li>
                  <li>Trauma Therapy</li>
                  <li>Dual Diagnosis</li>
                  <li>Aftercare Planning</li>
                </ul>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-lg font-bold mb-3">Wellness Programs</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Mind-Body Connection</li>
                  <li>Nutrition Guidance</li>
                  <li>Sleep Improvement</li>
                  <li>Stress Management</li>
                  <li>View All Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community Testimonial */}
        <section id="community" className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="bg-zinc-800 p-8 rounded-xl max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-fuchsia-900 flex items-center justify-center">
                  <span className="font-bold text-fuchsia-400">A</span>
                </div>
                <div>
                  <p className="font-semibold">AnonymousUser</p>
                  <p className="text-sm text-zinc-400">60 days sober</p>
                </div>
              </div>
              <blockquote className="text-lg italic text-zinc-300 mb-6">
                "I love this platform. It's unusual for me to open up to anyone. My heart used to be stacked up with heavy thoughts and negativity. But here it's nice that I can vent about stuff to random people without feeling judged. I feel a lot better after joining."
              </blockquote>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-fuchsia-500 text-fuchsia-400">Anxiety</Badge>
                <Badge variant="outline" className="border-fuchsia-500 text-fuchsia-400">Recovery</Badge>
                <Badge variant="outline" className="border-fuchsia-500 text-fuchsia-400">Community</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-fuchsia-900 to-purple-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Your Recovery Journey?</h2>
              <p className="max-w-[600px] text-zinc-300 md:text-xl">
                Join thousands who have found support and strength in our community.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-white hover:bg-zinc-100 text-fuchsia-800">
                    SIGN UP FREE
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="border-white hover:bg-white/10 text-white">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-800 bg-black">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-fuchsia-500" />
            <span className="text-xl font-bold">BreakFree</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-zinc-400 hover:text-white hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="rounded-full bg-zinc-800 p-2 hover:bg-zinc-700">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="rounded-full bg-zinc-800 p-2 hover:bg-zinc-700">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="rounded-full bg-zinc-800 p-2 hover:bg-zinc-700">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
