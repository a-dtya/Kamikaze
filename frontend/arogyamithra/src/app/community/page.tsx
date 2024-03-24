/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hkB60cEiXQi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <section className="flex flex-col gap-4">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Community Engagement
              </CardTitle>
              <Button className="bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-200" size="sm">
                Create Post
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-300">
                  How do you stay motivated to exercise?
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I find it hard to stay motivated to exercise regularly. What are some tips to keep me on track?
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <ArrowUpIcon className="w-4 h-4" />
                    <span className="sr-only">Upvote</span>
                  </Button>
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <ArrowDownIcon className="w-4 h-4" />
                    <span className="sr-only">Downvote</span>
                  </Button>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <MessageSquareIcon className="w-4 h-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <HeartIcon className="w-4 h-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Community Management
              </CardTitle>
              <Button className="bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-200" size="sm">
                Create Discussion
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-300">
                  Best Practices for Community Engagement
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn how to foster a thriving community and keep members engaged.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <MessageCircleIcon className="w-4 h-4" />
                    <span className="sr-only">Discuss</span>
                  </Button>
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <UsersIcon className="w-4 h-4" />
                    <span className="sr-only">Members</span>
                  </Button>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <SettingsIcon className="w-4 h-4" />
                    <span className="sr-only">Settings</span>
                  </Button>
                  <Button className="rounded-full bg-gray-200 dark:bg-gray-700" size="icon">
                    <BellIcon className="w-4 h-4" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col gap-4">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Announcements & Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-300">
                  New Feature: Sleep Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We're excited to announce the launch of our new Sleep Tracking feature! You can now track your sleep
                  patterns and get insights into your sleep quality.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

function ArrowDownIcon(props) {
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function ArrowUpIcon(props) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
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


function MessageCircleIcon(props:any) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function MessageSquareIcon(props:any) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}


function SettingsIcon(props:any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props:any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
