import * as React from "react"

import Workouts from "./components/Workouts"
import { ThemeContext, type THEME_CONTEXT } from "./store/ThemeContext"
import WorkoutsProvider from "./store/WorkoutsContext"

// TODO: Menu to Command Bar
// TODO: Lighter Colors in Dark Mode
// TODO: Radix UI

const App: React.FC = () => {
  const { theme } = React.useContext(ThemeContext) as THEME_CONTEXT

  return (
    <main className="bg-white dark:bg-zinc-900">
      <WorkoutsProvider>
        <Workouts />
      </WorkoutsProvider>
      <p className="fixed left-5 bottom-0 mb-5 hidden text-sm md:block">
        <span className="dark:text-zinc-500">Current Theme: </span>
        <span className="text-slate-500 dark:text-zinc-700">{theme}</span>
      </p>
    </main>
  )
}

export default App
