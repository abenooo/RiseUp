"use client"
import { useState, useEffect } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "So grateful",
      content: "This app helped me so much I just want to thank all of you for the help",
      author: "shressam"
    },
    {
      id: 2,
      rating: 5,
      title: "Extremely grateful",
      content: "I love the community here. These people don't even know me and still listen to my feelings.",
      author: "anonymous"
    },
    {
      id: 3,
      rating: 5,
      title: "Never felt so loved",
      content: "Feel so validated because of her, just what I needed at this point of my life.",
      author: "better_eye"
    },
    {
      id: 4,
      rating: 5,
      title: "Will recommend friends",
      content: "I'll definitely recommend this wonderful app to my friends; it made me happy again.",
      author: "anonymous"
    },
    {
      id: 5,
      rating: 5,
      title: "Helped me when alone",
      content: "This app is a blessing, helped me so much especially during difficult times.",
      author: "anonymous"
    },
    {
      id: 6,
      rating: 5,
      title: "Made me feel calm",
      content: "Very humble and gave me support when I needed it most.",
      author: "funny_rain"
    },
    {
      id: 7,
      rating: 5,
      title: "Wonderful people",
      content: "Connecting with people on this app was absolutely amazing. Thank you all!",
      author: "lean_yacht_2"
    },
    {
      id: 8,
      rating: 5,
      title: "Quite different",
      content: "Found a place that's therapeutic and I can call everybody.",
      author: "lean_animal"
    }
  ]

  const [isPaused, setIsPaused] = useState(false)
  const [duplicatedTestimonials] = useState([...testimonials, ...testimonials])

  return (
    <section className="py-16 bg-zinc-900">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            You don't have to take our word for it. Read testimonials from users who transformed themselves with our guidance.
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