import * as React from "react"

import { MoreVerticalFill } from "akar-icons"
import useClickOutside from "src/hooks/useClickOutside"
import { ThemeContext, type THEME_CONTEXT } from "src/store/ThemeContext"
import {
  WorkoutsContext,
  type WORKOUTS_CONTEXT,
} from "src/store/WorkoutsContext"

const Menu: React.FC = () => {
  const menuRef = React.useRef(null)

  const { changeTheme } = React.useContext(ThemeContext) as THEME_CONTEXT
  const { resetWorkouts } = React.useContext(
    WorkoutsContext
  ) as WORKOUTS_CONTEXT

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  useClickOutside(menuRef, () => {
    setIsMenuOpen(false)
  })

  return (
    <div className="flex align-middle">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
        className="rounded-md py-1 px-1.5 text-slate-900 hover:bg-slate-50 dark:text-zinc-100 dark:hover:bg-zinc-800"
      >
        <MoreVerticalFill size={18} />
      </button>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-3 right-3 rounded-lg border-[1px] border-slate-100 bg-white text-left text-sm shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
        >
          <button
            onClick={() => {
              resetWorkouts()
            }}
            className="w-full rounded-t-md px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-zinc-800"
          >
            Reset Workouts
          </button>
          <hr className="border-slate-100 dark:border-zinc-800" />
          <div className="w-full px-3 py-1">
            <div className="flex gap-1 rounded-b-md py-1">
              <button
                className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-zinc-800"
                onClick={() => {
                  changeTheme("Dune")
                }}
              >
                Dune
              </button>
              <button
                className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-zinc-800"
                onClick={() => {
                  changeTheme("Oasis")
                }}
              >
                Oasis
              </button>
              <button
                className="rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-zinc-800"
                onClick={() => {
                  changeTheme("Rain Forest")
                }}
              >
                Rain Forest
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
