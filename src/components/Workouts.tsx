import * as React from "react"

import { Command } from "akar-icons"

import WorkoutContainer from "./WorkoutContainer"
import {
  WorkoutsContext,
  type WORKOUTS_CONTEXT,
} from "../store/WorkoutsContext"

const Workouts: React.FC = () => {
  const { workouts, reduceCount, increaseCount } = React.useContext(
    WorkoutsContext
  ) as WORKOUTS_CONTEXT

  return (
    <div
      className="mx-auto w-full p-4 md:w-[300px]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="relative mb-3 flex items-center justify-between">
        <h1 className="text-xl font-medium text-slate-800 dark:text-zinc-300">
          Workouts
        </h1>
        <Command
          className="text-slate-800 dark:text-zinc-300"
          onClick={() => {
            // TODO: open command bar
          }}
        />
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
