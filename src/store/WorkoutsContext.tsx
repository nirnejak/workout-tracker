import * as React from "react"

import useLocalStorage from "../hooks/useLocalStorage"

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

const WorkoutsProvider: React.FC<Props> = ({ children }) => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage("workouts")

  const [workouts, setWorkouts] = React.useState<WorkoutType[]>(initialWorkouts)

  React.useEffect(() => {
    const localWorkouts = getLocalStorage()
    if (localWorkouts !== null) {
      setWorkouts(JSON.parse(localWorkouts))
    }
  }, [])

  const resetWorkouts = (): void => {
    setWorkouts(initialWorkouts)
    setLocalStorage(JSON.stringify(initialWorkouts))
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
      setLocalStorage(JSON.stringify(updatedWorkouts))
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
      setLocalStorage(JSON.stringify(updatedWorkouts))
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
