"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const tags = [
  "Relationship",
  "Teen",
  "School",
  "Friendship",
  "Family",
  "Adult",
  "MentalIllness",
  "HealthComplications",
  "Melancholy",
  "SexualAssault",
]

export default function CreateVent() {
  const router = useRouter()
  const [content, setContent] = useState("")
  const [hideIdentity, setHideIdentity] = useState(true)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the data to your backend
    // For now, just redirect back to the home page
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-purple-900">Share Your Thoughts</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hideIdentity"
                  checked={hideIdentity}
                  onCheckedChange={(checked) => setHideIdentity(checked as boolean)}
                />
                <label htmlFor="hideIdentity" className="text-sm font-medium">
                  Hide my Identity
                </label>
              </div>

              <div>
                <Textarea
                  placeholder="I need to vent..."
                  className="min-h-[200px] resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Select Tags (up to 4)</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedTags.includes(tag) ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-100"
                      }`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => router.push("/")}>
                Cancel
              </Button>
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Post Vent
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
