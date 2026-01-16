import * as React from "react"

import { Command } from "akar-icons"
import { useCommandBar } from "src/context/CommandContext"
import { useWorkouts } from "src/context/WorkoutsContext"

import WorkoutContainer from "./WorkoutContainer"

const Workouts: React.FC = () => {
  const { workouts, reduceCount, increaseCount } = useWorkouts()
  const { setIsOpen } = useCommandBar()

  return (
    <div
      className="
        mx-auto w-full p-4
        md:w-75
      "
    >
      <div className="relative mb-3 flex items-center justify-between">
        <h1 className="text-xl font-medium text-[--color-dark]">Workouts</h1>
        <button
          className="
            rounded-md p-1.5 transition-colors outline-none
            hover:bg-[--color-primary]
          "
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <Command size={18} className="text-[--color-dark]" />
        </button>
      </div>
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
