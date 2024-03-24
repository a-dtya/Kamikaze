
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <section className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Your Daily Quote</h1>
            <p className="text-gray-500 dark:text-gray-400">Click the button to generate a new quote every day</p>
          </div>
          <div className="flex flex-col gap-2">
            <blockquote className="text-2xl leading-8 italic text-gray-700 dark:text-gray-300">
              "You are enough just as you are."
            </blockquote>
            <Button className="bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900" size="sm">
              Generate New Quote
            </Button>
          </div>
        </section>
        <section className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Track Your Mood</h2>
            <p className="text-gray-500 dark:text-gray-400">Select the emoji that best represents your mood today</p>
          </div>
          <div className="flex items-center gap-2">
            <Label>
              <Input name="mood" type="radio" value="happy" />
              <span aria-label="Happy" role="img">
                😊 Happy
              </span>
            </Label>
            <Label>
              <Input name="mood" type="radio" value="sad" />
              <span aria-label="Sad" role="img">
                😢 Sad
              </span>
            </Label>
            <Label>
              <Input name="mood" type="radio" value="angry" />
              <span aria-label="Angry" role="img">
                😡 Angry
              </span>
            </Label>
            <Label>
              <Input name="mood" type="radio" value="calm" />
              <span aria-label="Calm" role="img">
                😌 Calm
              </span>
            </Label>
          </div>
        </section>
        <section className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Resources</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Browse our collection of articles, videos, and books to find inspiration and support
            </p>
          </div>
          <Card>
            <CardContent className="flex flex-col gap-2">
              <h3 className="font-semibold">Article Title</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Description of the article and why it's helpful
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 text-xs font-medium">
              <span>Read Article</span>
              <span className="ml-auto">4 min read</span>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-2">
              <h3 className="font-semibold">Video Title</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description of the video and why it's helpful</p>
            </CardContent>
            <CardFooter className="flex gap-2 text-xs font-medium">
              <span>Watch Video</span>
              <span className="ml-auto">10:32</span>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-2">
              <h3 className="font-semibold">Book Title</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description of the book and why it's helpful</p>
            </CardContent>
            <CardFooter className="flex gap-2 text-xs font-medium">
              <span>View Book</span>
              <span className="ml-auto">Available on Amazon</span>
            </CardFooter>
          </Card>
        </section>
      </main>
      <footer className="flex items-center justify-center w-full h-16 border-t bg-gray-100 dark:bg-gray-800">
        <nav className="flex items-center gap-4 text-sm">
          <Link className="font-medium text-gray-800 dark:text-gray-200" href="#">
            Privacy Policy
          </Link>
          <Link className="font-medium text-gray-800 dark:text-gray-200" href="#">
            Terms of Service
          </Link>
          <Link className="font-medium text-gray-800 dark:text-gray-200" href="#">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

