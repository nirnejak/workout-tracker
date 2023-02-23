import * as React from "react"

import { WorkoutsContext, type WORKOUTS_CONTEXT } from "../store/WorkoutContext"

const useWorkout = (): WORKOUTS_CONTEXT | undefined => {
  const ctx = React.useContext(WorkoutsContext)

  return ctx
}

export default useWorkout
