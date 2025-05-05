import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Search,
  Home,
  User,
  MessageSquare,
  Users,
  LayoutGrid,
  Share2,
  Calendar,
  Award,
  HelpCircle,
  LogOut,
  MoreVertical,
  MessageCircle,
  ThumbsUp,
  Bell,
  MapPin,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-950 fixed h-full">
        <div className="p-4 flex items-center gap-2 border-b border-zinc-800">
          <Shield className="h-6 w-6 text-fuchsia-500" />
          <span className="text-xl font-bold">Connected Users</span>
        </div>

        <nav className="p-4 space-y-6">
          <div>
            <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link href="/dashboard/profile" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <User className="h-5 w-5" />
              <span>Your Profile</span>
            </Link>
          </div>

          <div className="space-y-1">
            <h3 className="px-2 text-xs uppercase text-zinc-500 font-semibold">Your Favorites</h3>
            <Link href="/dashboard/messages" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
            </Link>
            <Link href="/dashboard/friends" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <Users className="h-5 w-5" />
              <span>Friends Network</span>
            </Link>
            <Link href="/dashboard/feed" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <LayoutGrid className="h-5 w-5" />
              <span>Community Feed</span>
            </Link>
            <Link href="/dashboard/stories" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <Share2 className="h-5 w-5" />
              <span>Share Stories</span>
            </Link>
            <Link href="/dashboard/calendar" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <Calendar className="h-5 w-5" />
              <span>Events Calendar</span>
            </Link>
            <Link href="/dashboard/achievements" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <Award className="h-5 w-5" />
              <span>Achievements</span>
            </Link>
          </div>

          <div className="space-y-1">
            <h3 className="px-2 text-xs uppercase text-zinc-500 font-semibold">Support Groups</h3>
            <Link
              href="/dashboard/groups/recovery"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800"
            >
              <div className="h-5 w-5 rounded bg-zinc-800 flex items-center justify-center text-xs">R</div>
              <span>Recovery</span>
            </Link>
            <Link href="/dashboard/groups/gamers" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <div className="h-5 w-5 rounded bg-zinc-800 flex items-center justify-center text-xs">G</div>
              <span>Gamers in Recovery</span>
            </Link>
            <Link
              href="/dashboard/groups/adventure"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800"
            >
              <div className="h-5 w-5 rounded bg-zinc-800 flex items-center justify-center text-xs">A</div>
              <span>Adventure</span>
            </Link>
            <Link href="/dashboard/groups/pet" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <div className="h-5 w-5 rounded bg-zinc-800 flex items-center justify-center text-xs">P</div>
              <span>Funny Pet</span>
            </Link>
          </div>

          <div className="pt-6 space-y-1">
            <Link href="/dashboard/help" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <HelpCircle className="h-5 w-5" />
              <span>Help & Support</span>
            </Link>
            <Link href="/" className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800">
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
            <Input placeholder="Search for Support" className="pl-10 bg-zinc-800 border-zinc-700 text-white w-full" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-fuchsia-900 flex items-center justify-center">
              <span className="font-bold text-fuchsia-400">A</span>
            </div>
          </div>
        </header>

        <div className="p-6 grid grid-cols-[1fr_300px] gap-6">
          {/* Main Feed */}
          <div className="space-y-6">
            {/* Create Post */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex gap-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-fuchsia-900 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-fuchsia-400">A</span>
                  </div>
                  <Input placeholder="Share your journey" className="bg-zinc-700 border-zinc-600 text-white" />
                </div>
                <div className="flex mt-3 gap-2">
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <Image className="h-5 w-5 mr-2" src="/placeholder.svg" width={20} height={20} alt="Photo" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <Users className="h-5 w-5 mr-2" />
                    Tag
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <MapPin className="h-5 w-5 mr-2" />
                    Check In
                  </Button>
                  <Button className="ml-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white">VOTE</Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 1 */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                      <Image src="/placeholder.svg" width={40} height={40} alt="User" className="rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Anonymous user expressing gratitude</span>
                        <span className="text-xs text-zinc-500">20 min. ago</span>
                      </div>
                      <p className="text-sm text-zinc-300 mt-1">
                        Share your recovery journey and milestones. Here are some moments of strength and hope from the
                        community. 😊
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1469571486292-b53601010376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    width={300}
                    height={200}
                    alt="Recovery journey"
                    className="rounded-md w-full h-32 object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    width={300}
                    height={200}
                    alt="Recovery journey"
                    className="rounded-md w-full h-32 object-cover"
                  />
                </div>

                <div className="flex justify-between border-t border-zinc-700 pt-3">
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Supp <Badge className="ml-1 bg-zinc-700">238</Badge>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Advice <Badge className="ml-1 bg-zinc-700">6</Badge>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <Share2 className="h-4 w-4 mr-2" />
                    Conn <Badge className="ml-1 bg-zinc-700">2</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                      <Image src="/placeholder.svg" width={40} height={40} alt="User" className="rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Join the community</span>
                        <span className="text-xs text-zinc-500">Get personalized advice now</span>
                      </div>
                      <p className="text-sm text-zinc-300 mt-1">Share your experience with others</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                    width={100}
                    height={100}
                    alt="Community"
                    className="rounded-md w-full h-16 object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                    width={100}
                    height={100}
                    alt="Community"
                    className="rounded-md w-full h-16 object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1573497019236-61f12a137312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                    width={100}
                    height={100}
                    alt="Community"
                    className="rounded-md w-full h-16 object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                    width={100}
                    height={100}
                    alt="Community"
                    className="rounded-md w-full h-16 object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                    width={100}
                    height={100}
                    alt="Community"
                    className="rounded-md w-full h-16 object-cover"
                  />
                </div>

                <div className="flex justify-between border-t border-zinc-700 pt-3">
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Vote <Badge className="ml-1 bg-zinc-700">18</Badge>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat <Badge className="ml-1 bg-zinc-700">2</Badge>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <Share2 className="h-4 w-4 mr-2" />
                    Earn <Badge className="ml-1 bg-zinc-700">0</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 3 */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                      <span className="font-medium">5</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">User 5</span>
                        <span className="text-xs text-zinc-500">Tuesday, 15 August 1:38 PM</span>
                      </div>
                      <p className="text-sm text-zinc-300 mt-1">
                        Sharing my recovery journey and challenges. Feeling grateful for the support. 🙏
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex justify-between border-t border-zinc-700 pt-3">
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Supp <Badge className="ml-1 bg-zinc-700">18</Badge>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Share <Badge className="ml-1 bg-zinc-700">2</Badge>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    <Share2 className="h-4 w-4 mr-2" />
                    Conn <Badge className="ml-1 bg-zinc-700">110</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Community Polls */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Community polls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80"
                        width={32}
                        height={32}
                        alt="Poll"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Outdoor therapy</p>
                      <p className="text-xs text-zinc-500">Sat 16 June, Recovery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80"
                        width={32}
                        height={32}
                        alt="Poll"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Community decision</p>
                      <p className="text-xs text-zinc-500">Sat 16 June, Community</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80"
                        width={32}
                        height={32}
                        alt="Poll"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Music therapy</p>
                      <p className="text-xs text-zinc-500">Sat 16 June, Recovery</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Achievement unlocked</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-zinc-700 flex items-center justify-center text-xs">
                      <Image src="/placeholder.svg" width={32} height={32} alt="User" className="rounded" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">User 1</p>
                      <p className="text-xs text-zinc-500">Reaching a milestone</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">New achievement</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-zinc-700 flex items-center justify-center text-xs">
                      <Image src="/placeholder.svg" width={32} height={32} alt="User" className="rounded" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">User 3</p>
                      <p className="text-xs text-zinc-500">Sharing success story</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">New milestone</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-zinc-700 flex items-center justify-center text-xs">
                      <Image src="/placeholder.svg" width={32} height={32} alt="User" className="rounded" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">User 4</p>
                      <p className="text-xs text-zinc-500">Overcoming challenges</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    width={300}
                    height={200}
                    alt="Badges"
                    className="rounded-md w-full h-32 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">New badges unlocked!</h3>
                  <p className="text-xs text-zinc-500">Earn points for your progress and achievements!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
