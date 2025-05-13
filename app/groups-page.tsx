import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Users, Search, Plus, MessageCircle, Calendar, Clock, ArrowRight } from "lucide-react"

export default function GroupsPage() {
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
            <Link href="/feed" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Feed
            </Link>
            <Link href="/groups" className="text-sm font-medium text-teal-500 transition-colors">
              Groups
            </Link>
            <Link href="/profile" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Profile
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
              <span className="font-bold text-teal-500">A</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Recovery Groups</h1>
              <p className="text-muted-foreground mt-1">Find and join groups specific to your recovery journey</p>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600">
              <Plus className="mr-2 h-4 w-4" /> Create Group
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search groups..." className="pl-8" />
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-sm">Your Groups</h3>
                <div className="space-y-1">
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
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-sm">Categories</h3>
                <div className="space-y-1">
                  <Link href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-muted text-sm">
                    <span>Substance Specific</span>
                    <Badge variant="outline">24</Badge>
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-muted text-sm">
                    <span>Age Groups</span>
                    <Badge variant="outline">12</Badge>
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-muted text-sm">
                    <span>Recovery Methods</span>
                    <Badge variant="outline">18</Badge>
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-2 rounded-md hover:bg-muted text-sm">
                    <span>Mental Health</span>
                    <Badge variant="outline">15</Badge>
                  </Link>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <Tabs defaultValue="recommended" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                </TabsList>

                <TabsContent value="recommended" className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                            <Users className="h-6 w-6 text-teal-500" />
                          </div>
                          <div>
                            <CardTitle>Opioid Recovery Support</CardTitle>
                            <CardDescription>A safe space for those recovering from opioid addiction</CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Recommended</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1,245 members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>Very active</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>Private group</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        This group provides support, resources, and a judgment-free zone for individuals at any stage of
                        recovery from opioid addiction. We share experiences, strategies, and celebrate milestones
                        together.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full bg-teal-100 border-2 border-background flex items-center justify-center"
                            >
                              <span className="font-bold text-teal-500 text-xs">{String.fromCharCode(64 + i)}</span>
                            </div>
                          ))}
                          <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                            <span className="text-xs font-medium">+1.2k</span>
                          </div>
                        </div>
                        <Button className="bg-teal-500 hover:bg-teal-600">Join Group</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                            <Users className="h-6 w-6 text-teal-500" />
                          </div>
                          <div>
                            <CardTitle>Young Adults in Recovery (18-30)</CardTitle>
                            <CardDescription>Support for young adults facing addiction challenges</CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Recommended</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>876 members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>Active</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>Public group</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        A community specifically for young adults navigating recovery. We discuss challenges unique to
                        our age group, share resources, and organize virtual meetups and activities.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full bg-teal-100 border-2 border-background flex items-center justify-center"
                            >
                              <span className="font-bold text-teal-500 text-xs">{String.fromCharCode(64 + i)}</span>
                            </div>
                          ))}
                          <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                            <span className="text-xs font-medium">+873</span>
                          </div>
                        </div>
                        <Button className="bg-teal-500 hover:bg-teal-600">Join Group</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-teal-500" />
                          </div>
                          <div>
                            <CardTitle>Daily Check-in Circle</CardTitle>
                            <CardDescription>Daily accountability and support group</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            Meeting Today
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Recommended</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>2,103 members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>Very active</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>Public group</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        Members check in daily to share their progress, challenges, and victories. We host daily virtual
                        meetings and provide 24/7 support through group chat. Perfect for building a consistent recovery
                        routine.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full bg-teal-100 border-2 border-background flex items-center justify-center"
                            >
                              <span className="font-bold text-teal-500 text-xs">{String.fromCharCode(64 + i)}</span>
                            </div>
                          ))}
                          <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                            <span className="text-xs font-medium">+2k</span>
                          </div>
                        </div>
                        <Button className="bg-teal-500 hover:bg-teal-600">Join Group</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="popular" className="space-y-6">
                  {/* Similar structure as recommended tab but with different groups */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                            <Users className="h-6 w-6 text-teal-500" />
                          </div>
                          <div>
                            <CardTitle>Mindfulness for Recovery</CardTitle>
                            <CardDescription>Using mindfulness techniques to support recovery</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">Popular</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>3,452 members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>Very active</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        Learn and practice mindfulness techniques specifically tailored for addiction recovery. We share
                        guided meditations, breathing exercises, and strategies for managing cravings and triggers.
                      </p>
                      <Button className="bg-teal-500 hover:bg-teal-600">Join Group</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="new" className="space-y-6">
                  {/* Similar structure as recommended tab but with different groups */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                            <Users className="h-6 w-6 text-teal-500" />
                          </div>
                          <div>
                            <CardTitle>Gaming Addiction Support</CardTitle>
                            <CardDescription>Support for those struggling with gaming addiction</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">New Group</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>124 members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>Growing</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        A new community focused on supporting those dealing with gaming addiction. We discuss healthy
                        gaming habits, strategies for reducing screen time, and alternative activities.
                      </p>
                      <Button className="bg-teal-500 hover:bg-teal-600">Join Group</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-8 text-center">
                <h3 className="text-lg font-medium mb-2">Discover More Groups</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse all available groups or create your own to connect with others on similar recovery paths.
                </p>
                <Button variant="outline" className="mx-auto">
                  View All Groups <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">Rise</span>
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
            &copy; {new Date().getFullYear()} Rise. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
