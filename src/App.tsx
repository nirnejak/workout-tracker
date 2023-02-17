import * as React from "react"

import Workouts from "./components/Workouts"
import ThemeProvider from "./store/ThemeContext"

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Workouts />
    </ThemeProvider>
  )
}

export default App
