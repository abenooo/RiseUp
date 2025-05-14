import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface TopicCardProps {
  title: string
  description: string
  imageUrl: string
  slug: string
  category?: string
  variant?: "default" | "compact" | "featured"
  className?: string
}

export function TopicCard({
  title,
  description,
  imageUrl,
  slug,
  category,
  variant = "default",
  className,
}: TopicCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/topics/${slug}`} className="block h-full">
        <div
          className={cn(
            "group relative h-full overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg",
            className,
          )}
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {category && (
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800">
                {category}
              </span>
            )}
          </div>
          <div className="p-5">
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mb-4 text-gray-600 line-clamp-2">{description}</p>
            <span className="inline-flex items-center text-fuchsia-500 font-medium">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === "featured") {
    return (
      <div className={cn("overflow-hidden rounded-xl bg-white shadow-lg", className)}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-between p-6">
            {category && (
              <span className="mb-2 inline-block rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-medium text-fuchsia-600">
                {category}
              </span>
            )}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>
              <p className="mb-6 text-gray-600">{description}</p>
            </div>
            <Link href={`/topics/${slug}`}>
              <Button className="rounded-full bg-fuchsia-500 px-6 text-white hover:bg-fuchsia-600">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn("overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg", className)}>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {category && (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Link href={`/topics/${slug}`}>
          <Button className="rounded-full bg-fuchsia-500 px-6 text-white hover:bg-fuchsia-600">Learn More</Button>
        </Link>
      </div>
    </div>
  )
}
