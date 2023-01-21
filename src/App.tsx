import * as React from "react"

import WorkoutContainer from "./components/WorkoutContainer"

const initialWorkouts = [
  { name: "Squats", set: 10, count: 0 },
  { name: "Pushups", set: 10, count: 0 },
  { name: "Pullups", set: 10, count: 0 },
  { name: "Deadlifts", set: 1, count: 0 },
  { name: "Bicep Curls", set: 15, count: 0 },
  { name: "Dumbell Up", set: 20, count: 0 },
  { name: "Dumbell Side", set: 10, count: 0 },
  { name: "Dumbell Lean Up", set: 10, count: 0 },
]

const App: React.FC = () => {
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

  return (
    <div
      className="w-full md:w-[300px] mx-auto p-4"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <h1 className="text-xl font-medium text-slate-800 mb-3">Workouts</h1>
      {workouts.map((workout, index) => (
        <WorkoutContainer
          key={index}
          workout={workout}
          reduceCount={() => {
            reduceCount(index)
          }}
          increaseCount={() => {
            increaseCount(index)
          }}
        />
      ))}
    </div>
  )
}

export default App
