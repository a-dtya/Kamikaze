"use client"
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveLine } from "@nivo/line"

export default function Caloriedashboard() {
  return (
    <div className="flex flex-col min-h-screen w-full gap-4 p-4 md:p-10 bg-white text-black dark:bg-lightgreen dark:text-white">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Calorie Intake Goal</CardTitle>
            <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">2000</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">You have 1000 calories left to consume today.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Calorie Intake</CardTitle>
            <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Card>
                <CardContent className="flex flex-row items-center space-x-4">
                  <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <div className="text-sm font-medium">Today</div>
                  <div className="ml-auto font-semibold">1200</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-row items-center space-x-4">
                  <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <div className="text-sm font-medium">Yesterday</div>
                  <div className="ml-auto font-semibold">1400</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-row items-center space-x-4">
                  <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <div className="text-sm font-medium">Mar 15, 2024</div>
                  <div className="ml-auto font-semibold">1800</div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Calorie Intake</CardTitle>
          <div className="flex items-center gap-2 text-xs text-gray-500 md:text-sm dark:text-gray-400">
            <Button className="rounded-full w-6 h-6" size="icon" variant="ghost">
              <ChevronLeftIcon className="w-4 h-4" />
              <span className="sr-only">Previous day</span>
            </Button>
            <Button className="rounded-full w-6 h-6" size="icon" variant="ghost">
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next day</span>
            </Button>
            <span className="font-semibold">Today</span>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0">
                <div className="grid gap-0.5">
                  <CardTitle className="text-sm font-medium">Total Calories</CardTitle>
                  <CardDescription className="text-xs">Your overall calorie intake.</CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="text-4xl font-bold">1200</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0">
                <div className="grid gap-0.5">
                  <CardTitle className="text-sm font-medium">Carbs</CardTitle>
                  <CardDescription className="text-xs">Carbohydrates consumed.</CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="text-4xl font-bold">520</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0">
                <div className="grid gap-0.5">
                  <CardTitle className="text-sm font-medium">Protein</CardTitle>
                  <CardDescription className="text-xs">Protein consumed.</CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="text-4xl font-bold">300</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0">
                <div className="grid gap-0.5">
                  <CardTitle className="text-sm font-medium">Fats</CardTitle>
                  <CardDescription className="text-xs">Fats consumed.</CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="text-4xl font-bold">400</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0">
                <div className="grid gap-0.5">
                  <CardTitle className="text-sm font-medium">Pie Chart</CardTitle>
                  <CardDescription className="text-xs">Distribution of nutrients.</CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <PieChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0">
                <div className="grid gap-0.5">
                  <CardTitle className="text-sm font-medium">Calories</CardTitle>
                  <CardDescription className="text-xs">Your overall calorie intake.</CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
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


function ChevronLeftIcon(props:any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CurvedlineChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function PieChart(props:any) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
