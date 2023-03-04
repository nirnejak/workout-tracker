import * as React from "react"

import { MoreVerticalFill } from "akar-icons"

import WorkoutContainer from "./WorkoutContainer"
import useClickOutside from "../hooks/useClickOutside"
import { ThemeContext } from "../store/ThemeContext"
import { WorkoutsContext } from "../store/WorkoutsContext"

const Workouts: React.FC = () => {
  const menuRef = React.useRef(null)
  const themeCtx = React.useContext(ThemeContext)
  const workoutsCtx = React.useContext(WorkoutsContext)

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  useClickOutside(menuRef, () => {
    setIsMenuOpen(false)
  })

  return (
    <div
      className="mx-auto w-full p-4 md:w-[300px]"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="relative mb-2 flex justify-between">
        <h1 className="text-xl font-medium text-slate-800">Workouts</h1>
        <div className="flex align-middle">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
            className="rounded-md py-1 px-1.5 text-slate-900 hover:bg-slate-50"
          >
            <MoreVerticalFill size={18} />
          </button>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-3 right-3 rounded-lg border-[1px] border-slate-100 bg-white text-left text-sm shadow-lg"
            >
              <button
                onClick={() => {
                  workoutsCtx?.resetWorkouts()
                }}
                className="w-full rounded-t-md px-3 py-2 text-left hover:bg-slate-100"
              >
                Reset Workouts
              </button>
              <hr className="border-slate-100" />
              <div className="w-full px-3 py-1">
                <div className="flex gap-1 rounded-b-md py-1">
                  <button
                    className="rounded-md px-2 py-1 hover:bg-slate-100"
                    onClick={() => themeCtx?.changeTheme("Dune")}
                  >
                    Dune
                  </button>
                  <button
                    className="rounded-md px-2 py-1 hover:bg-slate-100"
                    onClick={() => themeCtx?.changeTheme("Oasis")}
                  >
                    Oasis
                  </button>
                  <button
                    className="rounded-md px-2 py-1 hover:bg-slate-100"
                    onClick={() => themeCtx?.changeTheme("Rain Forest")}
                  >
                    Rain Forest
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mb-5 text-sm">
        <span>Current Theme: </span>
        <span className="text-gray-500">{themeCtx?.theme}</span>
      </p>
      {workoutsCtx?.workouts.map((workout, index) => (
        <WorkoutContainer
          key={index}
          workout={workout}
          reduceCount={() => {
            workoutsCtx?.reduceCount(index)
          }}
          increaseCount={() => {
            workoutsCtx?.increaseCount(index)
          }}
        />
      ))}
    </div>
  )
}

export default Workouts
