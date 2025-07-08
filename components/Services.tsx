"use client"
import Link from "next/link"
import { HeartPulse, Brain, HeartCrack, AlertTriangle, HelpCircle, SmilePlus, Activity, ShieldAlert, ChevronRight } from "lucide-react"

export default function Services() {
  const issues = [
    {
      title: "Prayer Life",
      description: "Strengthen your connection with God through guided prayer practices and community prayer support.",
      icon: <HeartPulse className="h-6 w-6 text-fuchsia-500" />,
      href: "/prayer-life"
    },
    {
      title: "Bible Study",
      description: "Dive deeper into God's Word with structured study plans and community discussion groups.",
      icon: <Brain className="h-6 w-6 text-fuchsia-500" />,
      href: "/bible-study"
    },
    {
      title: "Fellowship",
      description: "Build meaningful relationships with fellow believers through small groups and community events.",
      icon: <HeartPulse className="h-6 w-6 text-fuchsia-500" />,
      href: "/fellowship"
    },
    {
      title: "Spiritual Disciplines",
      description: "Develop consistent habits of prayer, fasting, meditation, and service to grow closer to God.",
      icon: <Activity className="h-6 w-6 text-fuchsia-500" />,
      href: "/spiritual-disciplines"
    },
    {
      title: "Christian Relationships",
      description: "Build Christ-centered relationships in marriage, family, and friendships with biblical guidance.",
      icon: <HeartPulse className="h-6 w-6 text-fuchsia-500" />,
      href: "/christian-relationships"
    },
    {
      title: "Identity in Christ",
      description: "Discover your true identity and worth as a beloved child of God through biblical truth.",
      icon: <SmilePlus className="h-6 w-6 text-fuchsia-500" />,
      href: "/identity-in-christ"
    },
    {
      title: "Purpose & Calling",
      description: "Discover God's unique purpose for your life and how to walk in your calling with confidence.",
      icon: <HelpCircle className="h-6 w-6 text-fuchsia-500" />,
      href: "/purpose-calling"
    },
    {
      title: "Worship & Praise",
      description: "Learn to worship God in spirit and truth through music, prayer, and lifestyle worship.",
      icon: <SmilePlus className="h-6 w-6 text-fuchsia-500" />,
      href: "/worship-praise"
    },
    {
      title: "Christian Service",
      description: "Find opportunities to serve others and use your gifts to build God's kingdom in your community.",
      icon: <ShieldAlert className="h-6 w-6 text-fuchsia-500" />,
      href: "/christian-service"
    }
  ]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Grow In Every Area Of Your Christian Life
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