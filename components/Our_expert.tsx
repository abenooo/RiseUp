"use client"
import { useState } from "react"
import Link from "next/link"
import { Star, Heart, BrainCircuit, UserRound, Sparkles, Zap, Sun, Briefcase, HeartPulse } from "lucide-react"
import Image from "next/image"

export default function OurExperts() {
  // All expert categories with icons
  const expertCategories = [
    { name: "Relationship Coach", icon: <Heart className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Counselling Psychologist", icon: <UserRound className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Clinical Psychologist", icon: <BrainCircuit className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Life Coach", icon: <Zap className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Therapist", icon: <HeartPulse className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Positivity Coach", icon: <Sun className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Career Coach", icon: <Briefcase className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Sexual Wellness Coach", icon: <Heart className="h-4 w-4 text-fuchsia-500" /> },
    { name: "Mindset Transformation Coach", icon: <Sparkles className="h-4 w-4 text-fuchsia-500" /> }
  ]

  // Sample data for random experts
  const allExperts = [
    // Relationship Coaches
    { id: 1, name: "Kasmase K.", rating: 4.9, role: "Relationship Coach", experience: "8 years", sessions: "1420", image: "/experts/relationship1.jpg", category: "Relationship Coach" },
    { id: 2, name: "Mulisa T.", rating: 4.7, role: "Relationship Coach", experience: "5 years", sessions: "890", image: "/experts/relationship2.jpg", category: "Relationship Coach" },
    
    // Counselling Psychologists
    { id: 3, name: "Abenezer K.", rating: 4.8, role: "Counselling Psychologist", experience: "6 years", sessions: "1200", image: "/experts/psych1.jpg", category: "Counselling Psychologist" },
    { id: 4, name: "Rahul K.", rating: 4.6, role: "Counselling Psychologist", experience: "4 years", sessions: "750", image: "/experts/psych2.jpg", category: "Counselling Psychologist" },
    
    // Clinical Psychologists
    { id: 5, name: "Dr. Yoohannis Z.", rating: 4.9, role: "Clinical Psychologist", experience: "10 years", sessions: "2100", image: "/experts/clinical1.jpg", category: "Clinical Psychologist" },
    { id: 6, name: "Dr. Shemlies T.", rating: 4.7, role: "Clinical Psychologist", experience: "7 years", sessions: "1500", image: "/experts/clinical2.jpg", category: "Clinical Psychologist" },
    
    // Life Coaches
    { id: 7, name: "Mohammed T.", rating: 4.8, role: "Life Coach", experience: "9 years", sessions: "1858", image: "/experts/life1.jpg", category: "Life Coach" },
    { id: 8, name: "Tilahune K.", rating: 4.5, role: "Life Coach", experience: "3 years", sessions: "420", image: "/experts/life2.jpg", category: "Life Coach" },
    
    // Therapists
    { id: 9, name: "Abenezer K..", rating: 4.7, role: "Therapist", experience: "5 years", sessions: "920", image: "/experts/therapist1.jpg", category: "Therapist" },
    { id: 10, name: "Karan M.", rating: 4.9, role: "Therapist", experience: "8 years", sessions: "1600", image: "/experts/therapist2.jpg", category: "Therapist" },
    
    // Positivity Coaches
    { id: 11, name: "Mulat P.", rating: 4.8, role: "Positivity Coach", experience: "4 years", sessions: "680", image: "/experts/positivity1.jpg", category: "Positivity Coach" },
    { id: 12, name: "Matyas A.", rating: 4.6, role: "Positivity Coach", experience: "2 years", sessions: "350", image: "/experts/positivity2.jpg", category: "Positivity Coach" },
    
    // Career Coaches
    { id: 13, name: "Abenezer K..", rating: 4.7, role: "Career Coach", experience: "6 years", sessions: "1100", image: "/experts/career1.jpg", category: "Career Coach" },
    { id: 14, name: "Ekrem S.", rating: 4.9, role: "Career Coach", experience: "9 years", sessions: "1950", image: "/experts/career2.jpg", category: "Career Coach" },
    
    // Sexual Wellness Coaches
    { id: 15, name: "Dr.Semere R.", rating: 4.8, role: "Sexual Wellness Coach", experience: "7 years", sessions: "1250", image: "/experts/sexual1.jpg", category: "Sexual Wellness Coach" },
    { id: 16, name: "Aditya M.", rating: 4.5, role: "Sexual Wellness Coach", experience: "3 years", sessions: "480", image: "/experts/sexual2.jpg", category: "Sexual Wellness Coach" },
    
    // Mindset Transformation Coaches
    { id: 17, name: "Tilela K.", rating: 4.9, role: "Mindset Transformation Coach", experience: "5 years", sessions: "980", image: "/experts/mindset1.jpg", category: "Mindset Transformation Coach" },
    { id: 18, name: "Ahmed P.", rating: 4.7, role: "Mindset Transformation Coach", experience: "4 years", sessions: "720", image: "/experts/mindset2.jpg", category: "Mindset Transformation Coach" }
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [displayedExperts, setDisplayedExperts] = useState(allExperts.slice(0, 4))

  // Filter experts by category
  const filterExperts = (category:any) => {
    setSelectedCategory(category)
    if (category === "All") {
      // Show random 4 experts when "All" is selected
      const shuffled = [...allExperts].sort(() => 0.5 - Math.random())
      setDisplayedExperts(shuffled.slice(0, 4))
    } else {
      // Filter by category and show 2 random experts
      const filtered = allExperts.filter(expert => expert.category === category)
      const shuffled = [...filtered].sort(() => 0.5 - Math.random())
      setDisplayedExperts(shuffled.slice(0, 2))
    }
  }

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            A Qualified Panel Of Experts Dedicated<br />
            <span className="text-fuchsia-400">To Helping You Feel Like A Whole</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-3xl mx-auto">
            <button
              onClick={() => filterExperts("All")}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-colors ${selectedCategory === "All" ? 'bg-fuchsia-600 text-white' : 'bg-zinc-800 text-zinc-200'}`}
            >
              All Experts
            </button>
            
            {expertCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterExperts(category.name)}
                className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-colors ${selectedCategory === category.name ? 'bg-fuchsia-600 text-white' : 'bg-zinc-800 text-zinc-200'}`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedExperts.map((expert) => (
            <div key={expert.id} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-fuchsia-500 transition-all duration-300">
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
                <p className="text-zinc-300 text-sm">{expert.experience} of Experience</p>
                <p className="text-zinc-300 text-sm">{expert.sessions} Sessions booked</p>
              </div>
              
              <Link
                href={`/experts/${expert.id}`}
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