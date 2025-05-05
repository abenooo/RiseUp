import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-fuchsia-500" />
            <span className="text-xl font-bold">BreakFree</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-fuchsia-400 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-fuchsia-400 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-fuchsia-400 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-fuchsia-400 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-zinc-700 hover:bg-zinc-800 text-white"
              >
                Log In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                Get Started
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
                  Your Journey to Recovery Starts Here
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BreakFree is your anonymous hub to overcome addiction. Chat, share, and earn points from community
                  votes. Together, we heal.
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

        {/* Features Grid Section */}
        <section id="features" className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Key Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tools for Your Recovery Journey
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BreakFree provides everything you need to overcome addiction, with a supportive community and
                  personalized guidance.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Anonymous Addiction Support"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Anonymous Addiction Support</h3>
                <p className="text-zinc-400">Connect with others in a safe, anonymous space to share and heal.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Chat Rooms"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Chat Rooms</h3>
                <p className="text-zinc-400">Engage in real-time discussions and support with our active community.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Community Voting System"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Voting System</h3>
                <p className="text-zinc-400">
                  Participate in community decisions through our interactive voting system.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Badges System"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Badges System</h3>
                <p className="text-zinc-400">Earn badges as you progress and achieve milestones in your journey.</p>
              </div>

              {/* Feature 5 */}
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="AI Personalized Advice"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Personalized Advice</h3>
                <p className="text-zinc-400">Receive customized advice from our AI tailored to your unique needs.</p>
              </div>

              {/* Feature 6 */}
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Progress Tracking"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                <p className="text-zinc-400">Monitor your progress over time with detailed tracking features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Simple Process</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How BreakFree Works</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting started on your recovery journey is easy with BreakFree.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-fuchsia-900">
                  <span className="text-2xl font-bold text-fuchsia-400">1</span>
                </div>
                <h3 className="text-xl font-bold">Create Your Anonymous Profile</h3>
                <p className="text-zinc-400">
                  Sign up without sharing personal information. Choose a username that resonates with your journey.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-fuchsia-900">
                  <span className="text-2xl font-bold text-fuchsia-400">2</span>
                </div>
                <h3 className="text-xl font-bold">Connect With The Community</h3>
                <p className="text-zinc-400">
                  Join discussions, share your experiences, and support others on their recovery journey.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-fuchsia-900">
                  <span className="text-2xl font-bold text-fuchsia-400">3</span>
                </div>
                <h3 className="text-xl font-bold">Track Progress & Earn Rewards</h3>
                <p className="text-zinc-400">
                  Check in daily, complete challenges, and watch as your achievements and badges accumulate.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                  Start Your Journey Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Success Stories</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hear From Our Community</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real stories from real people who have found support through BreakFree.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-fuchsia-900 flex items-center justify-center">
                      <span className="font-bold text-fuchsia-400">A</span>
                    </div>
                    <div>
                      <p className="font-semibold">Anonymous27</p>
                      <p className="text-sm text-zinc-400">90 days clean</p>
                    </div>
                  </div>
                  <p className="text-zinc-400">
                    "The daily check-ins and badges kept me accountable. For the first time, I felt proud of my progress
                    and had a community that understood my struggles."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-fuchsia-900 flex items-center justify-center">
                      <span className="font-bold text-fuchsia-400">B</span>
                    </div>
                    <div>
                      <p className="font-semibold">HealingJourney</p>
                      <p className="text-sm text-zinc-400">6 months clean</p>
                    </div>
                  </div>
                  <p className="text-zinc-400">
                    "The AI guidance was like having a personal coach available 24/7. It helped me identify triggers and
                    develop coping strategies that actually worked for me."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-fuchsia-900 flex items-center justify-center">
                      <span className="font-bold text-fuchsia-400">C</span>
                    </div>
                    <div>
                      <p className="font-semibold">NewBeginnings</p>
                      <p className="text-sm text-zinc-400">1 year milestone</p>
                    </div>
                  </div>
                  <p className="text-zinc-400">
                    "Being able to share anonymously removed the shame I felt. The community challenges connected me
                    with others who became my support system through the hardest times."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Break Free?</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community today and start your journey towards recovery.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                    SIGN UP
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="border-zinc-700 hover:bg-zinc-800 text-white">
                    LOG IN
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
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white hover:underline underline-offset-4">
              Contact Us
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
