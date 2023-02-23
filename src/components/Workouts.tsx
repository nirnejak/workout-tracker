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
      className="w-full md:w-[300px] mx-auto p-4"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="flex justify-between relative mb-2">
        <h1 className="text-xl font-medium text-slate-800">Workouts</h1>
        <div className="flex align-middle">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
            className="py-1 px-1.5 hover:bg-slate-50 rounded-md text-slate-900"
          >
            <MoreVerticalFill size={18} />
          </button>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-3 right-3 bg-white border-slate-100 border-[1px] shadow-lg rounded-lg text-left text-sm"
            >
              <button
                onClick={() => {
                  workoutsCtx?.resetWorkouts()
                }}
                className="w-full hover:bg-slate-100 px-3 py-2 rounded-t-md text-left"
              >
                Reset Workouts
              </button>
              <hr className="border-slate-100" />
              <div className="w-full px-3 py-1">
                <div className="flex gap-1 py-1 rounded-b-md">
                  <button
                    className="px-2 py-1 rounded-md hover:bg-slate-100"
                    onClick={() => themeCtx?.changeTheme("Dune")}
                  >
                    Dune
                  </button>
                  <button
                    className="px-2 py-1 rounded-md hover:bg-slate-100"
                    onClick={() => themeCtx?.changeTheme("Oasis")}
                  >
                    Oasis
                  </button>
                  <button
                    className="px-2 py-1 rounded-md hover:bg-slate-100"
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
      <p className="text-sm mb-5">
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
