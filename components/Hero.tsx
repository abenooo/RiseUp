import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import Hero from "../public/Hero-img.png"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F3] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
                Grow Your Faith Daily
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">With FaithConnect</h2>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-[#F97E5A] text-3xl mr-4 mt-1">•</span>
                <p className="text-lg text-[#4A4A4A]">
                  Build consistent spiritual habits with daily devotionals, prayer tracking, and Bible reading plans.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#F97E5A] text-3xl mr-4 mt-1">•</span>
                <p className="text-lg text-[#4A4A4A]">
                  Connect with fellow believers in small groups, prayer circles, and community events.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#F97E5A] text-3xl mr-4 mt-1">•</span>
                <p className="text-lg text-[#4A4A4A]">
                  Share your spiritual journey, prayer requests, and testimonies with a supportive Christian community.
                </p>
              </li>
            </ul>

            <Button
              size="lg"
              className="text-lg bg-fuchsia-400 text-white hover:bg-fuchsia-500 rounded-md px-6 py-6 h-auto flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Join Community
            </Button>
          </div>

          {/* Right Column - Circular Image with Chat Bubbles */}
          <div className="relative flex justify-center items-center py-10 md:py-16 min-h-[450px] sm:min-h-[500px]">
            {/* Circular Image Container */}
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
              <Image
                src={Hero || "/placeholder.svg"}
                alt="Person feeling better after therapy"
                fill
                sizes="(max-width: 768px) 280px, 350px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Chat Bubbles and Elements - Responsive positioning */}
            {/* Top Thought Bubble */}
            <div className="absolute top-0 md:top-0 right-0 md:right-[20%] max-w-[200px] z-20">
              <div className="relative">
                <div className="bg-white p-3 rounded-xl shadow-md w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xs text-gray-500">Daily Devotion</div>
                    <div className="text-xs bg-yellow-100 text-gray-500 px-2 py-0.5 rounded-full">Blessed</div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">God's grace is sufficient for me...</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span>🙏</span>
                    <span>✝️</span>
                    <span className="text-xs ml-1">13</span>
                  </div>
                </div>
                {/* Connector */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white"></div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-300"></div>
              </div>
            </div>

            {/* Bottom Left Profile Card */}
            <div className="absolute -bottom-4 md:bottom-4 left-0 md:left-0 max-w-[200px] z-20">
              <div className="relative">
                <div className="bg-white p-3 rounded-xl shadow-md w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                        alt="Pastor"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-500 font-medium">Pastor David</p>
                        <span className="ml-1 text-orange-500">●</span>
                      </div>
                      <p className="text-xs text-gray-600">Spiritual Mentor</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-1">
                    <p className="text-xs text-gray-500">(1461 Sessions)</p>
                    <div className="ml-2 text-xs text-yellow-500">★★★★★</div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-gray-500">
                      Starts at: <span className="font-bold text-gray-500">Free</span>
                    </div>
                    <Button className="bg-[#2A6B67] hover:bg-[#235753] text-white text-xs py-1 px-3 h-auto rounded-md">
                      Connect
                    </Button>
                  </div>
                </div>
                {/* Connector */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-white"></div>
                <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-gray-300"></div>
              </div>
            </div>

            {/* Right Side Chat Bubbles - Hidden on very small screens */}
            <div className="absolute right-0 md:right-0 top-1/3 max-w-[150px] hidden sm:block z-20">
              <div className="relative">
                <div className="bg-[#F97E5A] text-white p-2 rounded-xl shadow-md w-full">
                  <p className="text-xs md:text-sm">"Please pray for my family."</p>
                </div>
                {/* Connector */}
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-[#F97E5A]"></div>
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-gray-300"></div>
              </div>
            </div>

            <div className="absolute right-0 md:right-0 bottom-1/3 max-w-[180px] hidden sm:block z-20">
              <div className="relative">
                <div className="bg-[#F97E5A] text-white p-2 rounded-xl shadow-md w-full">
                  <p className="text-xs md:text-sm">I'm praying for you right now. 🙏</p>
                </div>
                {/* Connector */}
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-[#F97E5A]"></div>
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-0.5 w-6 bg-gray-300"></div>
              </div>
            </div>

            {/* Floating Emojis */}
            <div className="absolute top-[15%] right-[5%] text-2xl animate-bounce-slow z-0">👋</div>
            <div className="absolute top-[10%] left-[10%] text-2xl animate-pulse z-0">❤️</div>
            <div className="absolute bottom-[20%] right-[15%] text-2xl animate-bounce-slow z-0">😊</div>
          </div>
        </div>

        <Separator className="my-16 bg-gray-200" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-semibold flex items-center justify-center gap-3">
            <Link href="/" className="text-fuchsia-400">Why FaithConnect?</Link>
          </h3>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
            Christian community is built on faith, love, and mutual support. At FaithConnect, we provide you with the right spiritual mentors and community to help you grow in your faith journey.
          </p>
        </div>
      </div>
    </main>
  )
}