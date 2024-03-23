
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Tips() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card>
        <CardHeader className="flex gap-2 items-center">
          <HeartIcon className="h-4 w-4 fill-red-500" />
          <div className="text-sm font-medium text-red-500">Exercise</div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="font-semibold">Morning Yoga</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Start your day with a refreshing yoga session to energize your body.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex gap-2 items-center">
          <HeartIcon className="h-4 w-4 fill-green-500" />
          <div className="text-sm font-medium text-green-500">Nutrition</div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="font-semibold">Healthy Smoothies</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Blend fresh fruits and vegetables into delicious and nutritious smoothies.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex gap-2 items-center">
          <HeartIcon className="h-4 w-4 fill-blue-500" />
          <div className="text-sm font-medium text-blue-500">Mindfulness</div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="font-semibold">Meditation Breaks</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Take short breaks during the day to practice mindfulness and relax your mind.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex gap-2 items-center">
          <HeartIcon className="h-4 w-4 fill-yellow-500" />
          <div className="text-sm font-medium text-yellow-500">Sleep</div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="font-semibold">Nightly Stretching</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Wind down before bed with gentle stretching exercises to improve sleep quality.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex gap-2 items-center">
          <HeartIcon className="h-4 w-4 fill-purple-500" />
          <div className="text-sm font-medium text-purple-500">Hydration</div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="font-semibold">Drink More Water</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Stay hydrated throughout the day by drinking plenty of water for better health.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex gap-2 items-center">
          <HeartIcon className="h-4 w-4 fill-pink-500" />
          <div className="text-sm font-medium text-pink-500">Self-Care</div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="font-semibold">Me Time</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Dedicate time each day for self-care activities that bring you joy and relaxation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
