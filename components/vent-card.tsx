import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VentCardProps {
  id: number
  identity: string
  content: string
  tags: string[]
}

export function VentCard({ id, identity, content, tags }: VentCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="bg-purple-50 text-white py-3 px-4 flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
          {id}
        </div>
        <div>
          <p className="text-sm font-medium text-purple-900">Hey Unihorse 🦄</p>
          <p className="text-xs text-gray-500">{identity}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-100 whitespace-pre-line">{content}</p>
      </CardContent>
      <CardFooter className="px-4 py-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-gray-600 hover:bg-gray-100">
            #{tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
