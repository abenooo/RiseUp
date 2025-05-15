import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Search, Clock, User, ArrowRight } from "lucide-react"

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  slug: string;
}

interface TopicCardProps {
  icon: string;
  title: string;
  description: string;
  articleCount: number;
  slug: string;
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FFF5F3]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">Blogs & Resources</h1>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto mb-8">
            Explore our collection of articles, guides, and resources to help you on your mental health journey.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search for articles, topics, or keywords..."
              className="pl-12 py-6 rounded-full border-gray-200 bg-white shadow-md text-base"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-10 max-w-7xl mx-auto px-5">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-4xl mx-auto flex flex-wrap justify-center bg-transparent h-auto p-1 mb-8">
            <TabsTrigger
              value="all"
              className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="anxiety"
              className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
            >
              Anxiety
            </TabsTrigger>
            <TabsTrigger
              value="depression"
              className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
            >
              Depression
            </TabsTrigger>
            <TabsTrigger
              value="relationships"
              className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
            >
              Relationships
            </TabsTrigger>
            <TabsTrigger
              value="self-care"
              className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
            >
              Self-Care
            </TabsTrigger>
            <TabsTrigger
              value="mindfulness"
              className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
            >
              Mindfulness
            </TabsTrigger>
            <TabsTrigger
              value="trauma"
              className="rounded-full px-6 py-2 data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white text-gray-700"
            >
              Trauma
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Understanding Anxiety: Signs, Symptoms, and Coping Strategies"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-fuchsia-100 text-fuchsia-600 text-xs font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                    Anxiety
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                  Understanding Anxiety: Signs, Symptoms, and Coping Strategies
                </h2>
                <p className="text-[#4A4A4A] mb-6 line-clamp-3 lg:line-clamp-4">
                  Anxiety is more than just feeling stressed or worried. It's a persistent feeling of worry, fear, or
                  nervousness that can interfere with daily activities. Learn about the signs, symptoms, and effective
                  coping strategies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">8 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">Dr. Sarah Johnson</span>
                  </div>
                </div>
                <Link href="/blogs/understanding-anxiety">
                  <Button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-full px-6">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Latest Articles</h2>
          <Link href="/blogs/latest" className="text-fuchsia-500 font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article Card 1 */}
          <ArticleCard
            image="/placeholder.svg?height=400&width=600"
            title="5 Mindfulness Exercises to Reduce Stress"
            excerpt="Discover simple mindfulness practices that can help you manage stress and improve your overall well-being."
            category="Mindfulness"
            readTime="5 min read"
            author="Emma Wilson"
            slug="mindfulness-exercises"
          />

          {/* Article Card 2 */}
          <ArticleCard
            image="/placeholder.svg?height=400&width=600"
            title="Building Healthy Relationships: Communication Tips"
            excerpt="Effective communication is the foundation of healthy relationships. Learn key strategies to improve how you connect with others."
            category="Relationships"
            readTime="7 min read"
            author="Dr. Michael Chen"
            slug="healthy-relationships"
          />

          {/* Article Card 3 */}
          <ArticleCard
            image="/placeholder.svg?height=400&width=600"
            title="Recognizing Depression: Beyond Feeling Sad"
            excerpt="Depression is more than just sadness. Learn to recognize the signs and when to seek professional help."
            category="Depression"
            readTime="6 min read"
            author="Dr. Lisa Patel"
            slug="recognizing-depression"
          />
        </div>
      </section>

      {/* Popular Topics */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">Popular Topics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Topic Card 1 */}
          <TopicCard
            icon="🧠"
            title="Mental Health Basics"
            description="Foundational knowledge about mental health, common conditions, and well-being."
            articleCount={24}
            slug="mental-health-basics"
          />

          {/* Topic Card 2 */}
          <TopicCard
            icon="💆‍♀️"
            title="Self-Care Practices"
            description="Practical self-care routines and habits to maintain your mental well-being."
            articleCount={18}
            slug="self-care"
          />

          {/* Topic Card 3 */}
          <TopicCard
            icon="🧘‍♂️"
            title="Meditation & Mindfulness"
            description="Techniques to stay present, reduce stress, and cultivate inner peace."
            articleCount={15}
            slug="meditation-mindfulness"
          />

          {/* Topic Card 4 */}
          <TopicCard
            icon="💑"
            title="Relationship Wellness"
            description="Building and maintaining healthy connections with partners, family, and friends."
            articleCount={20}
            slug="relationship-wellness"
          />
        </div>
      </section>

      {/* Expert Insights */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Expert Insights</h2>
          <Link href="/blogs/experts" className="text-fuchsia-500 font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expert Article 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row">
            <div className="sm:w-1/3 relative h-48 sm:h-auto">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Dr. Sarah Johnson"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="sm:w-2/3 p-6">
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                Expert Opinion
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A] mt-3 mb-2">
                The Impact of Social Media on Mental Health
              </h3>
              <p className="text-[#4A4A4A] text-sm mb-4 line-clamp-3">
                Social media has transformed how we connect, but it also brings unique challenges to our mental
                well-being. Here's what research tells us.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Dr. Sarah Johnson"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">Dr. Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Clinical Psychologist</p>
                </div>
              </div>
              <Link href="/blogs/social-media-mental-health">
                <Button
                  variant="outline"
                  className="text-fuchsia-500 border-fuchsia-500 hover:bg-fuchsia-50 rounded-full px-4"
                >
                  Read Article
                </Button>
              </Link>
            </div>
          </div>

          {/* Expert Article 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row">
            <div className="sm:w-1/3 relative h-48 sm:h-auto">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Dr. Michael Chen"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="sm:w-2/3 p-6">
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                Expert Opinion
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A] mt-3 mb-2">
                Sleep and Mental Health: The Crucial Connection
              </h3>
              <p className="text-[#4A4A4A] text-sm mb-4 line-clamp-3">
                The relationship between sleep and mental health is bidirectional. Poor sleep can contribute to the
                development of mental health issues, and mental health problems can make it harder to sleep well.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Dr. Michael Chen"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">Dr. Michael Chen</p>
                  <p className="text-xs text-gray-500">Neuropsychologist</p>
                </div>
              </div>
              <Link href="/blogs/sleep-mental-health">
                <Button
                  variant="outline"
                  className="text-fuchsia-500 border-fuchsia-500 hover:bg-fuchsia-50 rounded-full px-4"
                >
                  Read Article
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  )
}

// Article Card Component
function ArticleCard({ image, title, excerpt, category, readTime, author, slug }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-fuchsia-100 text-fuchsia-600 text-xs font-medium px-3 py-1 rounded-full">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
        <p className="text-[#4A4A4A] mb-4 flex-grow line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-500" />
            <span className="text-sm text-gray-500">{readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} className="text-gray-500" />
            <span className="text-sm text-gray-500">{author}</span>
          </div>
        </div>
      </div>
      <Link
        href={`/blogs/${slug}`}
        className="block p-4 text-center border-t border-gray-100 text-fuchsia-500 font-medium hover:bg-fuchsia-50 transition-colors"
      >
        Read Article
      </Link>
    </div>
  )
}

// Topic Card Component
function TopicCard({ icon, title, description, articleCount, slug }: TopicCardProps) {
  return (
    <Link href={`/blogs/topics/${slug}`}>
      <div className="bg-white rounded-xl p-6 shadow-md h-full hover:shadow-lg transition-shadow">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-[#4A4A4A] text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{articleCount} articles</span>
          <ArrowRight size={16} className="text-fuchsia-500" />
        </div>
      </div>
    </Link>
  )
}
