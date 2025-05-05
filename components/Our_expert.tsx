"use client"
import Link from "next/link"
import { Star, Heart, BrainCircuit, UserRound, Sparkles } from "lucide-react"
import Image from "next/image"

export default function OurExperts() {
  const expertCategories = [
    "Relationship Coach",
    "Counselling Psychologist",
    "Clinical Psychologist",
    "Life Coach",
    "Therapist",
    "Positivity Coach",
    "Career Coach",
    "Sexual Wellness Coach",
    "Mindset Transformation Coach"
  ]

  const experts = [
    {
      name: "Gaurav R.",
      rating: 5,
      role: "Life Coach",
      experience: "9 years of Experience",
      sessions: "1858 Sessions booked",
      image: "/experts/gaurav.jpg"
    },
    {
      name: "Niharika S.",
      rating: 4.6,
      role: "Counselling Psychologist",
      experience: "2 years of Experience",
      sessions: "763 Sessions booked",
      image: "/experts/niharika.jpg"
    },
    {
      name: "Tanisha S. S.",
      rating: 4.6,
      role: "Psychodynamic Counsellor",
      experience: "3 years of Experience",
      sessions: "424 Sessions booked",
      image: "/experts/tanisha.jpg"
    },
    {
      name: "Ivneet K.",
      rating: 4.9,
      role: "Counselling Psychologist",
      experience: "5 years of Experience",
      sessions: "651 Sessions booked",
      image: "/experts/ivneet.jpg"
    }
  ]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            A Qualified Panel Of Experts Dedicated<br />
            <span className="text-fuchsia-400">To Helping You Feel Like A Whole</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-3xl mx-auto">
            {expertCategories.map((category, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 bg-zinc-800 text-zinc-200 px-4 py-2 rounded-full text-sm"
              >
                {index === 0 && <Heart className="h-4 w-4 text-fuchsia-500" />}
                {index === 5 && <Sparkles className="h-4 w-4 text-fuchsia-500" />}
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <div key={index} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-fuchsia-500 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-fuchsia-500">
                  <Image 
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-white">{expert.name}</h3>
                <div className="flex items-center justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(expert.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-500'}`}
                    />
                  ))}
                  <span className="text-zinc-400 ml-1 text-sm">{expert.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2 text-center mb-6">
                <p className="text-fuchsia-400 font-medium">{expert.role}</p>
                <p className="text-zinc-300 text-sm">{expert.experience}</p>
                <p className="text-zinc-300 text-sm">{expert.sessions}</p>
              </div>
              
              <Link
                href={`/experts/${expert.name.toLowerCase().replace(/ /g, '-')}`}
                className="block w-full text-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}