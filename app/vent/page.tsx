
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, PlusCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";


const ventPosts = [
  {
    id: 1,
    identity: "Anonymous Believer",
    content:
      "I'm struggling with my prayer life lately. I feel like God isn't hearing me and I'm going through the motions. How do you stay consistent in prayer when you feel distant from God? I know He's there but I feel spiritually dry. Please pray for me.",
    tags: ["Prayer", "Spiritual Growth"],
  },
  {
    id: 2,
    identity: "Anonymous Believer",
    content:
      "I've been a Christian for years but lately I'm questioning everything. I see so much pain in the world and wonder where God is. I feel guilty for doubting but I can't help it. Has anyone else gone through a season of doubt? How did you get through it?",
    tags: ["Faith", "Doubt", "Spiritual Growth"],
  },
  {
    id: 3,
    identity: "Anonymous Believer",
    content:
      "Please pray for my family. My parents are going through a difficult time in their marriage and I don't know how to help. I've been praying but it's hard to watch them struggle. I believe God can restore their relationship but I need faith to keep believing.",
    tags: ["Family", "Prayer Request"],
  },
  {
    id: 4,
    identity: "Anonymous Believer",
    content:
      "I'm struggling with forgiveness. Someone hurt me deeply and I know as a Christian I should forgive, but I'm finding it so hard. I want to obey God but my heart is still angry and hurt. How do you forgive when the pain is still fresh? I need prayer and wisdom.",
    tags: ["Forgiveness", "Healing", "Prayer Request"],
  },
  {
    id: 5,
    identity: "Anonymous Believer",
    content:
      "God has been so good to me lately! I got the job I've been praying for and my relationship with my family is healing. I just wanted to share this testimony to encourage others who might be waiting on God. He is faithful and His timing is perfect! Praise Him!",
    tags: ["Testimony", "Praise", "Encouragement"],
  },
  {
    id: 6,
    identity: "Anonymous Believer",
    content:
      "I'm feeling called to ministry but I'm scared. I don't feel qualified or worthy. Moses felt the same way, I know, but it's still intimidating. How do you know if God is really calling you to something? I need prayer for clarity and courage.",
    tags: ["Calling", "Ministry", "Prayer Request"],
  },
  {
    id: 7,
    identity: "Anonymous Believer",
    content:
      "I've been reading through the Bible this year and I'm amazed by God's faithfulness throughout history. Even when His people failed Him, He remained faithful. It's giving me hope in my own struggles. Anyone else doing a Bible reading plan this year?",
    tags: ["Bible Study", "Encouragement", "Spiritual Growth"],
  },
  {
    id: 8,
    identity: "Anonymous Believer",
    content:
      "I'm struggling with loneliness even though I'm surrounded by people at church. I feel like I don't really belong anywhere and it's hard to make deep friendships. I know God sees me but I wish I had a close Christian friend to walk this journey with. Please pray for me.",
    tags: ["Loneliness", "Fellowship", "Prayer Request"],
  },
  {
    id: 9,
    identity: "Anonymous Believer",
    content:
      "I want to share how God answered a prayer I've been praying for months! I was struggling financially and didn't know how I'd pay rent. I prayed and trusted God, and He provided through an unexpected source. His provision is always on time! Never give up on prayer!",
    tags: ["Testimony", "Provision", "Prayer"],
  },
  {
    id: 10,
    identity: "Anonymous Believer",
    content:
      "I'm in a relationship with someone who doesn't share my faith and it's becoming harder. I love them but I feel like I'm compromising my values. I know the Bible says not to be unequally yoked but my heart is torn. Has anyone been in this situation? I need wisdom and prayer.",
    tags: ["Relationships", "Faith", "Prayer Request"],
  },
  {
    id: 11,
    identity: "Anonymous Believer",
    content:
      "My family is going through a really tough time and I discovered something that's shaking my faith in people I trusted. I don't know how to handle this situation biblically. I want to honor God but I'm so hurt and confused. Please pray for wisdom and healing for my family.",
    tags: ["Family", "Wisdom", "Prayer Request"],
  },
  {
    id: 12,
    identity: "Anonymous Believer",
    content:
      'I\'ve been thinking about God\'s sovereignty and why there\'s so much inequality in the world. Some people seem to have everything while others struggle. I believe God is good but sometimes I wonder why He allows such differences. Does anyone else wrestle with these questions? How do you reconcile God\'s goodness with life\'s unfairness?',
    tags: ["Theology", "Questions", "Faith"],
  },
  {
    id: 13,
    identity: "Anonymous Believer",
    content:
      "I made some choices that I regret and I'm dealing with the consequences. I know God forgives but I'm struggling to forgive myself. I feel like I've disappointed God and I don't know how to move forward. I need prayer for healing and restoration. God's grace is bigger than my mistakes, right?",
    tags: ["Forgiveness", "Grace", "Healing", "Prayer Request"],
  },
  {
    id: 14,
    identity: "Anonymous Believer",
    content:
      'I\'m struggling with how to love someone in my life who is living in a way that goes against biblical teachings. I want to show Christ\'s love but I also want to stand for truth. How do you balance love and truth? I don\'t want to be judgmental but I also can\'t compromise my faith. Need wisdom.',
    tags: ["Love", "Truth", "Relationships", "Wisdom"],
  },
  {
    id: 15,
    identity: "Anonymous Believer",
    content:
      "I'm struggling with an addiction that's affecting my relationship with God. I feel so much shame and I keep falling into the same patterns. I know God loves me but I feel like I'm disappointing Him. Has anyone overcome addiction through faith? I need prayer and maybe accountability.",
    tags: ["Addiction", "Shame", "Prayer Request", "Accountability"],
  },
]

// Available tags for creating a new vent
const tags = [
  "Prayer Request",
  "Testimony", 
  "Spiritual Growth",
  "Fellowship",
  "Family",
  "Faith",
  "Encouragement",
  "Wisdom",
  "Healing",
  "Relationships",
  "Bible Study",
  "Prayer",
  "Praise",
  "Ministry",
  "Calling"
];

interface VentCardProps {
  id: number;
  identity: string;
  content: string;
  tags: string[];
}

function VentCard({ id, identity, content, tags }: VentCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white hover:border-fuchsia-500/30 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-zinc-400">{identity}</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-zinc-300 mb-4 line-clamp-4">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function VentPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState("");
  const [hideIdentity, setHideIdentity] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ventPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(ventPosts.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 4) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContent("");
    setSelectedTags([]);
    setIsCreating(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-fuchsia-500" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-fuchsia-300 bg-clip-text text-transparent">
              Share Prayer Requests & Testimonies
            </h1>
          </div>
          
          {isCreating ? (
            <Button 
              variant="outline" 
              className="border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-2"
              onClick={() => setIsCreating(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Community
            </Button>
          ) : (
            <Button
              className="bg-fuchsia-600 hover:bg-fuchsia-700 flex items-center gap-2"
              onClick={() => setIsCreating(true)}
            >
              <PlusCircle className="h-4 w-4" />
              Share Your Heart
            </Button>
          )}
        </div>

        {isCreating ? (
          <Card className="max-w-2xl mx-auto bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Share Your Heart with the Community</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="hideIdentity"
                    checked={hideIdentity}
                    onCheckedChange={(checked) => setHideIdentity(checked as boolean)}
                  />
                  <label htmlFor="hideIdentity" className="text-sm text-zinc-300">
                    Post Anonymously
                  </label>
                </div>

                <Textarea
                  placeholder="Share your prayer request, testimony, or what's on your heart..."
                  className="min-h-[200px] bg-zinc-800 border-zinc-700 text-white resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />

                <div>
                  <p className="text-sm text-zinc-300 mb-2">Select Tags (up to 4)</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedTags.includes(tag)
                            ? "bg-fuchsia-600 hover:bg-fuchsia-700"
                            : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                        }`}
                        onClick={() => handleTagToggle(tag)}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white"
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                  Share with Community
                </Button>
              </CardFooter>
            </form>
          </Card>
        ) : (
          <>
            <div className="grid gap-6">
              {currentPosts.map((post) => (
                <VentCard
                  key={post.id}
                  id={post.id}
                  identity={post.identity}
                  content={post.content}
                  tags={post.tags}
                />
              ))}
            </div>

            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="cursor-pointer bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                )}

                {pageNumbers.map((number) => (
                  <PaginationItem key={number}>
                    <PaginationLink
                      onClick={() => setCurrentPage(number)}
                      isActive={currentPage === number}
                      className={`cursor-pointer ${
                        currentPage === number
                          ? "bg-fuchsia-600 text-white"
                          : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                      }`}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="cursor-pointer bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </PaginationLink>
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>
      
    </main>
  );
}