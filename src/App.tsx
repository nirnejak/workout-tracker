import * as React from "react"

import Workouts from "./components/Workouts"
import { ThemeContext } from "./store/ThemeContext"
import WorkoutsProvider from "./store/WorkoutsContext"

const App: React.FC = () => {
  const themeCtx = React.useContext(ThemeContext)

  return (
    <>
      <WorkoutsProvider>
        <Workouts />
      </WorkoutsProvider>
      <p className="fixed left-5 bottom-0 mb-5 text-sm">
        <span>Current Theme: </span>
        <span className="text-gray-500">{themeCtx?.theme}</span>
      </p>
    </>
  )
}

export default App
