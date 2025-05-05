"use client"
import { useState, useEffect, useRef } from "react"

const testimonials = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  rating: 5,
  title: `Testimonial ${i + 1}`,
  content: `This is testimonial number ${i + 1}. The app is amazing!`,
  author: `user${i + 1}`
}))

function splitArray(arr: any[], n: number) {
  const mid = Math.ceil(arr.length / n)
  return [arr.slice(0, mid), arr.slice(mid)]
}

export default function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [animationDuration, setAnimationDuration] = useState("18s") // Speedier

  // Split testimonials into 2 rows
  const [row1, row2] = splitArray(testimonials, 2)

  // Helper for rendering a row
  const renderRow = (row: typeof testimonials) => (
    <div
      className={`flex gap-6 animate-scroll-reverse`}
      style={{
        animationDuration: animationDuration,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationPlayState: isPaused ? 'paused' : 'running'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {[...row, ...row].map((testimonial, index) => (
        <div
          key={`${testimonial.id}-${index}`}
          className="flex-shrink-0 w-80 bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-fuchsia-500 transition-colors"
        >
          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
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
      ))}
    </div>
  )

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            You do not have to take our word for it. Read through the testimonials of users who transformed themselves with our guidance.
          </p>
        </div>
        <div className="space-y-8">
          {renderRow(row1)}
          {renderRow(row2)}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-reverse {
          animation-name: scroll-reverse;
        }
      `}</style>
    </section>
  )
}