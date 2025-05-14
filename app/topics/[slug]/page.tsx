import { getTopicBySlug, allTopics } from "@/data/topics"
import { TopicsGrid } from "@/components/topics-grid"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface TopicPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.slug)

  if (!topic) {
    return {
      title: "Topic Not Found | RiseUp Therapy",
      description: "The requested topic could not be found.",
    }
  }

  return {
    title: `${topic.title} | RiseUp Therapy`,
    description: topic.description,
  }
}

export async function generateStaticParams() {
  return allTopics.map((topic) => ({
    slug: topic.slug,
  }))
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.slug)

  if (!topic) {
    notFound()
  }

  // Get related topics (same category, excluding current topic)
  const relatedTopics = allTopics.filter((t) => t.category === topic.category && t.id !== topic.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-[#FFF5F3]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <Link href="/topics" className="inline-flex items-center text-fuchsia-500 hover:text-fuchsia-600 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Topics
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-fuchsia-100 text-fuchsia-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {topic.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">{topic.title}</h1>
              <p className="text-lg text-[#4A4A4A]">{topic.description}</p>
            </div>
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={topic.imageUrl || "/placeholder.svg"}
                alt={topic.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Placeholder for actual content */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>Understanding {topic.title}</h2>
          <p>
            This is where detailed content about {topic.title.toLowerCase()} would go. This could include symptoms,
            causes, treatment options, and self-help strategies. The content would be comprehensive and evidence-based,
            providing valuable information to readers seeking help with {topic.title.toLowerCase()}.
          </p>

          <h2>How We Can Help</h2>
          <p>
            At RiseUp Therapy, we offer specialized support for individuals dealing with {topic.title.toLowerCase()}.
            Our experienced therapists and coaches use evidence-based approaches to help you develop coping strategies,
            build resilience, and improve your overall well-being.
          </p>

          <h2>Next Steps</h2>
          <p>
            If you're struggling with {topic.title.toLowerCase()}, consider reaching out to one of our specialists for a
            consultation. We offer both in-person and online sessions to accommodate your needs and preferences.
          </p>

          <div className="my-8 flex justify-center">
            <Button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-full px-8 py-6 h-auto text-lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      {relatedTopics.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-16 border-t border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">Related Topics</h2>
          <TopicsGrid topics={relatedTopics} variant="compact" columns={3} />
        </section>
      )}
    </main>
  )
}
