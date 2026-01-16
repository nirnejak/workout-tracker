import * as React from "react"

import CommandBar from "src/components/CommandBar"
import Workouts from "src/components/Workouts"
import { useTheme } from "src/context/ThemeContext"
import WorkoutsProvider from "src/context/WorkoutsContext"

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <main>
      <WorkoutsProvider>
        <Workouts />
        <CommandBar />
      </WorkoutsProvider>
      <p
        className="
          text-dark fixed bottom-0 left-5 mb-5 hidden text-sm
          md:block
        "
      >
        Current Theme: {theme}
      </p>
      <p
        className="
          fixed right-5 bottom-0 mb-5 hidden text-sm
          md:block
        "
      >
        <a
          href="https://github.com/nirnejak/workout-tracker"
          className="text-dark"
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
