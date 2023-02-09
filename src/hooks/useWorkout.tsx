import * as React from "react"

const initialWorkouts = [
  { name: "Squats", set: 10, count: 0 },
  { name: "Pushups", set: 10, count: 0 },
  { name: "Plank", set: 1, count: 0 },
  { name: "Deadlifts", set: 1, count: 0 },
  { name: "Bicep Curls", set: 15, count: 0 },
  { name: "Bar Pull", set: 10, count: 0 },
  { name: "Dumbell Up", set: 20, count: 0 },
  { name: "Dumbell Side", set: 10, count: 0 },
  { name: "Dumbell Lean Up", set: 10, count: 0 },

  { name: "Fist Exercise", set: 20, count: 0 },
  { name: "Wrist Exercise Side", set: 10, count: 0 },
  { name: "Wrist Exercise Up", set: 10, count: 0 },

  { name: "Crunches", set: 10, count: 0 },
  { name: "Pullups", set: 10, count: 0 },
]

interface HookReturnType {
  workouts: WorkoutType[]
  reduceCount: (index: number) => void
  increaseCount: (index: number) => void
}

const useWorkout = (): HookReturnType => {
  const [workouts, setWorkouts] = React.useState<WorkoutType[]>(initialWorkouts)

  React.useEffect(() => {
    const localWorkouts = localStorage.getItem("workouts")
    if (localWorkouts?.length === undefined || localWorkouts?.length < 0) {
      setWorkouts(JSON.parse(localWorkouts as string))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts))
  }, [workouts])

  const reduceCount = (index: number): void => {
    setWorkouts((workouts) => {
      return workouts.map((workout, i) => {
        if (i === index) {
          return {
            ...workout,
            count: workout.count === 0 ? 0 : workout.count - 1,
          }
        } else {
          return workout
        }
      })
    })
  }

  const increaseCount = (index: number): void => {
    setWorkouts((workouts) => {
      return workouts.map((workout, i) => {
        if (i === index) {
          return {
            ...workout,
            count: workout.count + 1,
          }
        } else {
          return workout
        }
      })
    })
  }

  return { workouts, reduceCount, increaseCount }
}

export default useWorkout
