"use client"

import { useState } from "react"
import type { Topic } from "@/data/topics"
import { TopicCard } from "@/components/topic-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface TopicsGridProps {
  topics: Topic[]
  categories?: string[]
  showSearch?: boolean
  variant?: "default" | "compact" | "featured"
  columns?: 2 | 3 | 4
  limit?: number
}

export function TopicsGrid({
  topics,
  categories,
  showSearch = false,
  variant = "default",
  columns = 3,
  limit,
}: TopicsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Get unique categories if not provided
  const uniqueCategories = categories || Array.from(new Set(topics.map((topic) => topic.category)))

  // Filter topics based on active category and search query
  const filteredTopics = topics.filter((topic) => {
    const matchesCategory = activeCategory === "all" || topic.category === activeCategory
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Limit the number of topics if specified
  const displayedTopics = limit ? filteredTopics.slice(0, limit) : filteredTopics

  // Determine grid columns class based on the columns prop
  const gridColumnsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }[columns]

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-6">
        {showSearch && (
          <div className="relative max-w-md mx-auto w-full">
            <Input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        )}

        {categories && categories.length > 0 && (
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full max-w-4xl mx-auto flex flex-wrap justify-center bg-transparent h-auto p-1">
              <TabsTrigger
                value="all"
                className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
              >
                All
              </TabsTrigger>
              {uniqueCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
      </div>

      {displayedTopics.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No topics found matching your criteria.</p>
        </div>
      ) : (
        <div className={`grid ${gridColumnsClass} gap-6`}>
          {displayedTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              imageUrl={topic.imageUrl}
              slug={topic.slug}
              category={topic.category}
              variant={variant}
            />
          ))}
        </div>
      )}
    </div>
  )
}
