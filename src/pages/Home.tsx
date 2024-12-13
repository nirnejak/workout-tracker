import * as React from "react"

import CommandBar from "../components/CommandBar"
import Workouts from "../components/Workouts"
import { useTheme } from "../context/ThemeContext"
import WorkoutsProvider from "../context/WorkoutsContext"

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <main>
      <WorkoutsProvider>
        <Workouts />
        <CommandBar />
      </WorkoutsProvider>
      <p className="fixed bottom-0 left-5 mb-5 hidden text-sm text-[--color-dark] md:block">
        Current Theme: {theme}
      </p>
      <p className="fixed bottom-0 right-5 mb-5 hidden text-sm md:block">
        <a
          href="https://github.com/nirnejak/workout-tracker"
          className="text-[--color-dark]"
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
