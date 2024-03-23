/**
 * v0 by Vercel.
 * @see https://v0.dev/t/viKAXuxMZtz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

export default function Mainbar() {
  return (
    <div className="min-h-screen bg-[#e5f1ff] p-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center">
          <CalendarIcon className="text-gray-600 mr-4" />
          <SettingsIcon className="text-gray-600" />
        </div>
      </header>
      <main>
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <h2 className="text-lg font-semibold mb-2">Nutrition</h2>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm">Carbs</p>
                  <p className="text-sm font-bold">70g/277g</p>
                </div>
                <div>
                  <p className="text-sm">Protein</p>
                  <p className="text-sm font-bold">15g/111g</p>
                </div>
                <div>
                  <p className="text-sm">Fat</p>
                  <p className="text-sm font-bold">54g/74g</p>
                </div>
              </div>
              <div className="text-center relative">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-3/4" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Kcal left: 1350</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h2 className="text-lg font-semibold mb-2">Activities</h2>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm">Burned Calories</p>
                  <p className="text-sm font-bold">96 kcal</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold">16%</p>
                  <p className="text-sm">Goal 600 kcal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <div className="bg-white rounded-lg p-4 shadow mb-4">
            <h2 className="text-lg font-semibold mb-2">Everyday Dining</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Breakfast</p>
                <p className="text-sm">Bread, Peanut Butter, Hard Boiled Egg, Oatmeal</p>
                <p className="text-lg font-bold">433 kcal</p>
              </div>
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Snack</p>
                <p className="text-sm">Recommended: 57-77 kcal</p>
              </div>
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Lunch</p>
                <p className="text-sm">Recommended: 57-77 kcal</p>
              </div>
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Dinner</p>
                <p className="text-sm">Recommended: 57-77 kcal</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">Workouts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Walking the dog</p>
                <p className="text-sm">08:00 am</p>
                <p className="text-lg font-bold">0:15</p>
              </div>
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Outdoor Cycle</p>
                <p className="text-sm">09:00 am</p>
                <p className="text-lg font-bold">1:45</p>
              </div>
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Running</p>
                <p className="text-sm">05:00 pm</p>
                <p className="text-lg font-bold">0:45</p>
              </div>
              <div className="text-center rounded-full bg-gray-200 p-4">
                <p className="text-sm">Yoga</p>
                <p className="text-sm">08:00 pm</p>
                <p className="text-lg font-bold">1:45</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">Hero Section</h2>
            <div className="grid grid-cols-2">
              <div className="bg-white rounded-lg p-4 shadow">
                <Calendar />
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="slider">
                  <div className="slide">
                    <img alt="Image 1" src="/placeholder.svg" />
                    <div className="text-overlay">Text Overlay 1</div>
                  </div>
                  <div className="slide">
                    <img alt="Image 2" src="/placeholder.svg" />
                    <div className="text-overlay">Text Overlay 2</div>
                  </div>
                  <div className="slide">
                    <img alt="Image 3" src="/placeholder.svg" />
                    <div className="text-overlay">Text Overlay 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-between items-center">
          <Button className="bg-blue-500 text-white">Home</Button>
          <Button className="bg-transparent text-blue-500">Search</Button>
          <Button className="bg-transparent text-blue-500">Profile</Button>
        </section>
      </main>
    </div>
  )
}

function CalendarIcon(props:any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
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
