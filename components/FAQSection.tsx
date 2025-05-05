"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Can I share my personal stories and experiences on RiseUp?",
      answer: "Absolutely! RiseUp encourages sharing personal stories and experiences in a safe, supportive environment. Your contributions help build our compassionate community."
    },
    {
      question: "How can I connect with others on RiseUp?",
      answer: "You can connect by joining communities, participating in discussions, reacting to posts, and sending private messages (when both users have opted in)."
    },
    {
      question: "Is RiseUp an app?",
      answer: "Yes! RiseUp is available as both a mobile app (iOS and Android) and a web platform, so you can access support wherever you are."
    },
    {
      question: "Can I message other users privately on RiseUp?",
      answer: "Private messaging is available when both users have enabled this feature in their privacy settings, ensuring comfortable communication for everyone."
    },
    {
      question: "How can I find relevant discussions and communities on RiseUp?",
      answer: "Use our discovery tools - browse by topics, search keywords, or explore recommended communities based on your interests and needs."
    },
    {
      question: "Is there a limit to the number of posts I can make on RiseUp?",
      answer: "No strict limits exist, but we encourage meaningful engagement. Our moderation team may reach out if they notice unusually high activity to ensure you're getting the support you need."
    },
    {
      question: "How can I engage with others' posts and provide support?",
      answer: "You can react with emojis, leave thoughtful comments, share resources, or use our 'Support' button to send direct words of encouragement."
    },
    {
      question: "Are there any age restrictions for using RiseUp?",
      answer: "Yes, you must be at least 13 years old to use RiseUp. Some communities may have higher age requirements based on their content."
    },
    {
      question: "Is there a moderation team that ensures the safety of users on RiseUp?",
      answer: "Absolutely. Our 24/7 moderation team and AI systems work together to maintain a safe space. You can also report any concerns directly through the app."
    },
    {
      question: "Can I talk on RiseUp in multiple languages?",
      answer: "Yes! RiseUp supports multiple languages. While English is primary, many communities welcome posts in other languages - look for language-specific groups."
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }


  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-zinc-700 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className={`w-full flex justify-between items-center p-6 text-left ${activeIndex === index ? 'bg-zinc-800' : 'bg-zinc-800/50'}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex-1 pr-4"> {/* Added flex container for text */}
                  <h3 className="text-lg font-medium text-left">{faq.question}</h3>
                </div>
                <div className="flex-shrink-0"> {/* Fixed width for icon */}
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180 text-fuchsia-500' : 'text-zinc-400'}`}
                  />
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="text-zinc-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}