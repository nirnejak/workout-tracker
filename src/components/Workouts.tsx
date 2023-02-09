import * as React from "react"

import WorkoutContainer from "./WorkoutContainer"
import useWorkout from "../hooks/useWorkout"

const Workouts: React.FC = () => {
  const { workouts, reduceCount, increaseCount } = useWorkout()
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

export default Workouts
