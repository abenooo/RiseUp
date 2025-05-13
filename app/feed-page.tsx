import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Users, Heart, MessageSquare, Flag, Share2, Bell, Award, Calendar, Send } from "lucide-react"

export default function FeedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">RiseUp</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link href="/feed" className="text-sm font-medium text-teal-500 transition-colors">
              Feed
            </Link>
            <Link href="/groups" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Groups
            </Link>
            <Link href="/profile" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Profile
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-teal-500 text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
              <span className="font-bold text-teal-500">A</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-6">
            {/* Left Sidebar */}
            <div className="hidden lg:block space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Days Clean</span>
                    <Badge className="bg-teal-500">32 days</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to next badge</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-teal-500 w-[65%]"></div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Recent Badges</h4>
                    <div className="flex gap-2">
                      <div
                        className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center"
                        title="30 Days Clean"
                      >
                        <Award className="h-6 w-6 text-teal-500" />
                      </div>
                      <div
                        className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center"
                        title="Supportive Community Member"
                      >
                        <Heart className="h-6 w-6 text-teal-500" />
                      </div>
                      <div
                        className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center"
                        title="7-Day Streak"
                      >
                        <Calendar className="h-6 w-6 text-teal-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Groups</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-sm">
                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <Users className="h-3 w-3 text-teal-500" />
                    </div>
                    <span>Alcohol Recovery</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-sm">
                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <Users className="h-3 w-3 text-teal-500" />
                    </div>
                    <span>Mindfulness for Recovery</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-sm">
                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <Users className="h-3 w-3 text-teal-500" />
                    </div>
                    <span>Young Adults Support</span>
                  </Link>
                  <Button variant="ghost" size="sm" className="w-full mt-2">
                    View All Groups
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="space-y-6">
              {/* Create Post */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="font-bold text-teal-500">A</span>
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <Textarea placeholder="Share your progress or thoughts..." className="min-h-[80px]" />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-xs">
                            Add Photo
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs">
                            Check In
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs">
                            Feeling
                          </Button>
                        </div>
                        <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feed Tabs */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6 w-full justify-start">
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  <TabsTrigger value="groups">Group Posts</TabsTrigger>
                  <TabsTrigger value="following">Following</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  {/* Achievement Post */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                            <span className="font-bold text-teal-500">J</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">JourneyToRecovery</span>
                            <Badge variant="outline" className="text-xs">
                              30 days
                            </Badge>
                            <span className="text-xs text-muted-foreground">2 hours ago</span>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg mb-3 border">
                            <div className="flex items-center gap-3 mb-2">
                              <Award className="h-8 w-8 text-teal-500" />
                              <div>
                                <h3 className="font-medium">Achievement Unlocked: 30 Days Clean!</h3>
                                <p className="text-sm text-muted-foreground">
                                  A major milestone in the recovery journey
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="mb-4">
                            Just completed my first month without relapsing! The daily check-ins have been a
                            game-changer for me. Thank you all for the support! 🎉
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <Heart className="h-4 w-4" /> 24
                              </button>
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <MessageSquare className="h-4 w-4" /> 8 comments
                              </button>
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <Share2 className="h-4 w-4" /> Share
                              </button>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-teal-500">
                              <Flag className="h-4 w-4" /> Report
                            </button>
                          </div>

                          {/* Comments */}
                          <div className="mt-4 pt-4 border-t">
                            <div className="mb-4">
                              <div className="flex gap-2 mb-3">
                                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                  <span className="font-bold text-teal-500 text-xs">S</span>
                                </div>
                                <div className="bg-muted/50 p-2 rounded-lg flex-grow">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium">StrongerTogether</span>
                                    <span className="text-xs text-muted-foreground">1 hour ago</span>
                                  </div>
                                  <p className="text-sm">
                                    Congratulations! That's a huge milestone. Keep going, one day at a time. 💪
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                  <span className="font-bold text-teal-500 text-xs">N</span>
                                </div>
                                <div className="bg-muted/50 p-2 rounded-lg flex-grow">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium">NewBeginnings</span>
                                    <span className="text-xs text-muted-foreground">45 minutes ago</span>
                                  </div>
                                  <p className="text-sm">
                                    This is inspiring! I'm on day 15 and seeing posts like this gives me hope. What
                                    strategies worked best for you?
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Add Comment */}
                            <div className="flex gap-2">
                              <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-teal-500 text-xs">A</span>
                              </div>
                              <div className="flex-grow relative">
                                <Input placeholder="Write a comment..." className="pr-10" />
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6"
                                >
                                  <Send className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Group Meeting Post */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                            <span className="font-bold text-teal-500">S</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">StrongerTogether</span>
                            <Badge className="bg-teal-500 text-white text-xs">Group Admin</Badge>
                            <span className="text-xs text-muted-foreground">5 hours ago</span>
                          </div>
                          <p className="mb-3">
                            Our "Mindfulness for Recovery" group is meeting online tonight at 7PM. All are welcome!
                            We'll be discussing techniques for managing cravings through meditation.
                          </p>
                          <div className="bg-muted/50 p-4 rounded-lg mb-4 border">
                            <div className="flex items-center gap-3 mb-2">
                              <Calendar className="h-6 w-6 text-teal-500" />
                              <div>
                                <h3 className="font-medium">Group Meeting: Mindfulness for Recovery</h3>
                                <p className="text-sm">Today at 7:00 PM • Virtual Meeting</p>
                              </div>
                            </div>
                            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 mt-2">
                              Join Meeting
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <Heart className="h-4 w-4" /> 42
                              </button>
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <MessageSquare className="h-4 w-4" /> 15 comments
                              </button>
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <Share2 className="h-4 w-4" /> Share
                              </button>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-teal-500">
                              <Flag className="h-4 w-4" /> Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Regular Post */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                            <span className="font-bold text-teal-500">R</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">RecoveryWarrior</span>
                            <Badge variant="outline" className="text-xs">
                              90 days
                            </Badge>
                            <span className="text-xs text-muted-foreground">Yesterday</span>
                          </div>
                          <p className="mb-4">
                            Found this quote really helpful today when I was struggling with cravings: "Recovery is not
                            a race. You don't have to feel guilty if it takes you longer than you thought it would."
                            Sharing in case it helps someone else too.
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <Heart className="h-4 w-4" /> 56
                              </button>
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <MessageSquare className="h-4 w-4" /> 7 comments
                              </button>
                              <button className="flex items-center gap-1 hover:text-teal-500">
                                <Share2 className="h-4 w-4" /> Share
                              </button>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-teal-500">
                              <Flag className="h-4 w-4" /> Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="groups" className="space-y-6">
                  {/* Group-specific posts would go here */}
                  <Card>
                    <CardContent className="py-6">
                      <div className="text-center">
                        <h3 className="font-medium mb-2">Group Posts</h3>
                        <p className="text-sm text-muted-foreground">View posts from your groups here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="following" className="space-y-6">
                  {/* Following-specific posts would go here */}
                  <Card>
                    <CardContent className="py-6">
                      <div className="text-center">
                        <h3 className="font-medium mb-2">Following Feed</h3>
                        <p className="text-sm text-muted-foreground">View posts from people you follow</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trending Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="#" className="block p-2 rounded-md hover:bg-muted">
                    <span className="text-sm font-medium">#MindfulnessMonday</span>
                    <p className="text-xs text-muted-foreground mt-1">125 posts today</p>
                  </Link>
                  <Link href="#" className="block p-2 rounded-md hover:bg-muted">
                    <span className="text-sm font-medium">#RecoveryWins</span>
                    <p className="text-xs text-muted-foreground mt-1">89 posts today</p>
                  </Link>
                  <Link href="#" className="block p-2 rounded-md hover:bg-muted">
                    <span className="text-sm font-medium">#SoberSunday</span>
                    <p className="text-xs text-muted-foreground mt-1">76 posts today</p>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-teal-500" />
                      <span className="text-sm font-medium">Mindfulness Workshop</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Today, 7:00 PM</p>
                  </div>
                  <div className="p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-teal-500" />
                      <span className="text-sm font-medium">Newcomers Welcome</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Tomorrow, 6:30 PM</p>
                  </div>
                  <div className="p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-teal-500" />
                      <span className="text-sm font-medium">Weekend Check-in</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Saturday, 10:00 AM</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Suggested Connections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="font-bold text-teal-500 text-xs">H</span>
                      </div>
                      <span className="text-sm">HealingJourney</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="font-bold text-teal-500 text-xs">P</span>
                      </div>
                      <span className="text-sm">ProgressNotPerfection</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="font-bold text-teal-500 text-xs">G</span>
                      </div>
                      <span className="text-sm">GratitudeDaily</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">RiseUp</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              #AddictionRecovery
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RiseUp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
