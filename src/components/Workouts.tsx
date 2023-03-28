import * as React from "react"

import { Command } from "akar-icons"
import {
  CommandBarContext,
  type COMMAND_BAR_CONTEXT,
} from "src/store/CommandContext"

import WorkoutContainer from "./WorkoutContainer"
import {
  WorkoutsContext,
  type WORKOUTS_CONTEXT,
} from "../store/WorkoutsContext"

const Workouts: React.FC = () => {
  const { workouts, reduceCount, increaseCount } = React.useContext(
    WorkoutsContext
  ) as WORKOUTS_CONTEXT
  const { setIsOpen } = React.useContext(
    CommandBarContext
  ) as COMMAND_BAR_CONTEXT

  return (
    <div
      className="mx-auto w-full p-4 md:w-[300px]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="relative mb-3 flex items-center justify-between">
        <h1 className="text-xl font-medium text-slate-800 dark:text-zinc-300">
          Workouts
        </h1>
        <button
          className="rounded-md p-1.5 outline-none hover:bg-slate-100 focus:bg-slate-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <Command size={18} className="text-slate-800 dark:text-zinc-300" />
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
