import * as React from "react"

import CommandBar from "./components/CommandBar"
import Workouts from "./components/Workouts"
import { ThemeContext, type THEME_CONTEXT } from "./store/ThemeContext"
import WorkoutsProvider from "./store/WorkoutsContext"

const App: React.FC = () => {
  const { theme } = React.useContext(ThemeContext) as THEME_CONTEXT

  return (
    <main className="bg-white dark:bg-zinc-900">
      <WorkoutsProvider>
        <Workouts />
        <CommandBar />
      </WorkoutsProvider>
      <p className="fixed bottom-0 left-5 mb-5 hidden text-sm md:block">
        <span className="dark:text-zinc-500">Current Theme: </span>
        <span className="text-slate-500 dark:text-zinc-700">{theme}</span>
      </p>
      <p className="fixed bottom-0 right-5 mb-5 hidden text-sm md:block">
        <a
          href="https://github.com/nirnejak/workout-tracker"
          className="dark:text-zinc-500"
          target="_blank"
          rel="noreferrer"
        >
          View Source
        </a>
      </p>
    </main>
  )
}

export default App
