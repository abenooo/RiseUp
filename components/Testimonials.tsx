"use client"
import { useState, useEffect } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "Growing in Faith",
      content: "FaithConnect has helped me build consistent prayer habits and connect with amazing believers. My faith has grown so much!",
      author: "blessed_believer"
    },
    {
      id: 2,
      rating: 5,
      title: "Amazing Community",
      content: "I love the Christian community here. These believers don't even know me but they pray for me and encourage me daily.",
      author: "grace_receiver"
    },
    {
      id: 3,
      rating: 5,
      title: "God's Love Through Others",
      content: "I feel so loved by God through this community. The encouragement came just when I needed it most in my spiritual journey.",
      author: "faithful_heart"
    },
    {
      id: 4,
      rating: 5,
      title: "Recommending to Church Friends",
      content: "I'll definitely recommend this wonderful app to my church friends; it's brought such joy and growth to my faith walk.",
      author: "joyful_servant"
    },
    {
      id: 5,
      rating: 5,
      title: "Never Alone in Christ",
      content: "This app is a true blessing from God. It helped me feel connected to the body of Christ during difficult times.",
      author: "hopeful_soul"
    },
    {
      id: 6,
      rating: 5,
      title: "Peace in God's Presence",
      content: "The prayer support and biblical encouragement gave me God's peace when I needed it most.",
      author: "peaceful_warrior"
    },
    {
      id: 7,
      rating: 5,
      title: "Body of Christ",
      content: "Connecting with fellow believers on this app was absolutely amazing. Thank you for showing Christ's love!",
      author: "united_in_christ"
    },
    {
      id: 8,
      rating: 5,
      title: "Spiritual Home",
      content: "Found a place that's spiritually nourishing where I can call everyone my brother and sister in Christ.",
      author: "family_of_faith"
    }
  ]

  const [isPaused, setIsPaused] = useState(false)
  const [duplicatedTestimonials] = useState([...testimonials, ...testimonials])

  return (
    <section className="py-16 bg-zinc-900">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Community Testimonies</h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            You don't have to take our word for it. Read testimonies from believers who have grown in their faith through our Christian community.
          </p>
        </div>

        <div 
          className="space-y-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* First Row - Right to Left */}
          <div className="relative overflow-hidden">
            <div 
              className={`flex gap-6 ${isPaused ? 'pause-animation' : 'animate-marquee-right'}`}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`right-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Second Row - Left to Right */}
          <div className="relative overflow-hidden">
            <div 
              className={`flex gap-6 ${isPaused ? 'pause-animation' : 'animate-marquee-left'}`}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`left-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="flex-shrink-0 w-80 bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-fuchsia-500 transition-colors">
      <div className="flex mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg 
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{testimonial.title}</h3>
      <p className="text-zinc-300 mb-4">{testimonial.content}</p>
      <p className="text-zinc-400 text-sm">— {testimonial.author}</p>
    </div>
  )
}