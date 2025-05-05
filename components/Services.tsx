"use client"
import Link from "next/link"
import { HeartPulse, Brain, HeartCrack, AlertTriangle, HelpCircle, SmilePlus, Activity, ShieldAlert, ChevronRight } from "lucide-react"

export default function Services() {
  const issues = [
    {
      title: "Anxiety",
      description: "Are negative thoughts taking you away from reality? Talk to renowned experts and feel better right away.",
      icon: <AlertTriangle className="h-6 w-6 text-fuchsia-500" />,
      href: "/anxiety"
    },
    {
      title: "Stress",
      description: "Has stress made you stop living your life to the fullest? Connect with top professionals and regain joy today.",
      icon: <Activity className="h-6 w-6 text-fuchsia-500" />,
      href: "/stress"
    },
    {
      title: "Depression",
      description: "Feeling persistently sad or empty? Our specialists can help you find light again.",
      icon: <HeartCrack className="h-6 w-6 text-fuchsia-500" />,
      href: "/depression"
    },
    {
      title: "Trauma",
      description: "Struggling with past experiences? Healing begins with compassionate professional support.",
      icon: <ShieldAlert className="h-6 w-6 text-fuchsia-500" />,
      href: "/trauma"
    },
    {
      title: "Relationship Issues",
      description: "Challenges in personal connections? Learn healthy ways to communicate and relate.",
      icon: <HeartPulse className="h-6 w-6 text-fuchsia-500" />,
      href: "/relationships"
    },
    {
      title: "Self-Esteem",
      description: "Doubting your self-worth? Build confidence with our positive psychology approaches.",
      icon: <SmilePlus className="h-6 w-6 text-fuchsia-500" />,
      href: "/self-esteem"
    },
    {
      title: "Life Transitions",
      description: "Struggling with change? Navigate life's transitions with expert guidance.",
      icon: <HelpCircle className="h-6 w-6 text-fuchsia-500" />,
      href: "/transitions"
    },
    {
      title: "Grief & Loss",
      description: "Processing a significant loss? Find compassionate support for your healing journey.",
      icon: <HeartCrack className="h-6 w-6 text-fuchsia-500" />,
      href: "/grief"
    },
    {
      title: "Addiction",
      description: "Seeking freedom from addictive behaviors? Discover sustainable recovery methods.",
      icon: <ShieldAlert className="h-6 w-6 text-fuchsia-500" />,
      href: "/addiction"
    }
  ]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          We've Got You Covered For Every Concern And Problem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-fuchsia-500 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-zinc-700 rounded-lg">
                  {issue.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{issue.title}</h3>
              </div>
              <p className="text-zinc-300 mb-6">{issue.description}</p>
              <Link 
                href={issue.href}
                className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors"
              >
                Know More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}