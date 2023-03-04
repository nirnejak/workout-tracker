import * as React from "react"

import { ArrowCycle } from "akar-icons"
import { toast } from "sonner"

const initialWorkouts = [
  { name: "Pushups", set: 10, count: 0 },
  { name: "Crunches", set: 10, count: 0 },
  { name: "Squats", set: 10, count: 0 },

  { name: "Bicep Curls", set: 15, count: 0 },
  { name: "Bar Pull", set: 10, count: 0 },
  { name: "Dumbell Up", set: 20, count: 0 },
  { name: "Dumbell Side", set: 10, count: 0 },

  { name: "Fist Exercise", set: 20, count: 0 },
  { name: "Wrist Exercise Side", set: 10, count: 0 },
  { name: "Wrist Exercise Up", set: 10, count: 0 },

  { name: "Plank", set: 1, count: 0 },
  { name: "Deadlifts", set: 1, count: 0 },
  { name: "Pullups", set: 10, count: 0 },
  { name: "Dumbell Lean Up", set: 10, count: 0 },
]

interface WORKOUTS {
  name: string
  set: number
  count: number
}

export interface WORKOUTS_CONTEXT {
  workouts: WORKOUTS[]
  resetWorkouts: () => void
  reduceCount: (index: number) => void
  increaseCount: (index: number) => void
}

export const WorkoutsContext = React.createContext<
  WORKOUTS_CONTEXT | undefined
>(undefined)

interface Props {
  children: React.ReactNode
}

const LOCAL_STORAGE_FIELD = "workouts"

const WorkoutsProvider: React.FC<Props> = ({ children }) => {
  const [workouts, setWorkouts] = React.useState<WorkoutType[]>(initialWorkouts)

  React.useEffect(() => {
    const localWorkouts = localStorage.getItem(LOCAL_STORAGE_FIELD)
    if (localWorkouts !== null) {
      setWorkouts(JSON.parse(localWorkouts))
    }
  }, [])

  const resetWorkouts = (): void => {
    setWorkouts(initialWorkouts)
    localStorage.setItem(LOCAL_STORAGE_FIELD, JSON.stringify(initialWorkouts))
    toast("Workouts reset", {
      icon: <ArrowCycle size={15} />,
    })
  }

  const reduceCount = (index: number): void => {
    setWorkouts((workouts) => {
      const updatedWorkouts = workouts.map((workout, i) => {
        if (i === index) {
          return {
            ...workout,
            count: workout.count === 0 ? 0 : workout.count - 1,
          }
        } else {
          return workout
        }
      })
      localStorage.setItem(LOCAL_STORAGE_FIELD, JSON.stringify(updatedWorkouts))
      return updatedWorkouts
    })
  }

  const increaseCount = (index: number): void => {
    setWorkouts((workouts) => {
      const updatedWorkouts = workouts.map((workout, i) => {
        if (i === index) {
          return {
            ...workout,
            count: workout.count + 1,
          }
        } else {
          return workout
        }
      })
      localStorage.setItem(LOCAL_STORAGE_FIELD, JSON.stringify(updatedWorkouts))
      return updatedWorkouts
    })
  }

  return (
    <WorkoutsContext.Provider
      value={{ workouts, resetWorkouts, reduceCount, increaseCount }}
    >
      {children}
    </WorkoutsContext.Provider>
  )
}

export default WorkoutsProvider
