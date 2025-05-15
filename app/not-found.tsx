import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFF5F3] px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-fuchsia-500">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Coming soon</h2>
      <p className="mb-8 max-w-md text-gray-600">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button className="rounded-full bg-fuchsia-500 px-6 py-2 text-white hover:bg-fuchsia-600">
          Return to Home
        </Button>
      </Link>
    </div>
  )
}
