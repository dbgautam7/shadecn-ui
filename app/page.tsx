"use client"
import { DateRangePicker } from "@/components/customUi/dateRangePicker"
import { ToggleTheme } from "@/components/customUi/toggleTheme"
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Shade cn ui
      <Button>Click me</Button>
   <DateRangePicker />
  <ToggleTheme />
    </main>
  )
}
