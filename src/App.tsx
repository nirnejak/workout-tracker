import * as React from "react"

import Workouts from "./components/Workouts"
import ThemeProvider from "./store/ThemeContext"
import WorkoutsProvider from "./store/WorkoutContext"

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <WorkoutsProvider>
        <Workouts />
      </WorkoutsProvider>
    </ThemeProvider>
  )
}

export default App
