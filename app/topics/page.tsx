import { allTopics } from "@/data/topics"
import { TopicsGrid } from "@/components/topics-grid"

export const metadata = {
  title: "Mental Health Topics | RiseUp Therapy",
  description: "Explore our comprehensive collection of mental health, therapy, and coaching topics.",
}

export default function TopicsPage() {
  // Get unique categories
  const categories = Array.from(new Set(allTopics.map((topic) => topic.category)))

  return (
    <main className="min-h-screen bg-[#FFF5F3]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">Mental Health Topics</h1>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
            Explore our comprehensive collection of resources on mental health, therapy, and coaching to support your
            well-being journey.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <TopicsGrid topics={allTopics} categories={categories} showSearch={true} />
      </section>
    </main>
  )
}
