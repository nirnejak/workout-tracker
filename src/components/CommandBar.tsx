import * as React from "react"

import { GithubFill } from "akar-icons"
import { Command } from "cmdk"
import { ThemeContext, type THEME_CONTEXT } from "src/store/ThemeContext"
import {
  WorkoutsContext,
  type WORKOUTS_CONTEXT,
} from "src/store/WorkoutsContext"

const commandItemClass =
  "px-3 py-1.5 cursor-pointer hover:bg-zinc-900 focus:bg-zinc-900 rounded-md"

const CommandBar: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const { changeTheme } = React.useContext(ThemeContext) as THEME_CONTEXT
  const { resetWorkouts } = React.useContext(
    WorkoutsContext
  ) as WORKOUTS_CONTEXT

  React.useEffect(() => {
    const down = (e: React.KeyboardEvent): void => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => {
      document.removeEventListener("keydown", down)
    }
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-1/2 left-1/2 z-50 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-md bg-zinc-800/95 p-3"
    >
      <Command.Input className="w-full rounded-md px-3 py-1.5 dark:bg-zinc-900 dark:text-zinc-300" />

      <Command.List className="pt-3 text-sm dark:text-zinc-300">
        <Command.Item
          className={commandItemClass}
          tabIndex={0}
          onClick={() => {
            resetWorkouts()
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") resetWorkouts()
          }}
        >
          <span>Reset Workouts</span>
        </Command.Item>
        <Command.Separator className="my-1 h-[0.5px] bg-gray-900 dark:bg-zinc-500" />
        <Command.Item
          className={commandItemClass}
          onClick={() => {
            changeTheme("Dune")
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") changeTheme("Dune")
          }}
          tabIndex={0}
        >
          Dune
        </Command.Item>
        <Command.Item
          className={commandItemClass}
          onClick={() => {
            changeTheme("Oasis")
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") changeTheme("Oasis")
          }}
          tabIndex={0}
        >
          Oasis
        </Command.Item>
        <Command.Separator />
        <Command.Item
          className={commandItemClass}
          onClick={() => {
            changeTheme("Rain Forest")
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") changeTheme("Rain Forest")
          }}
          tabIndex={0}
        >
          Rain Forest
        </Command.Item>
        <Command.Separator className="my-1 h-[0.5px] bg-gray-900 dark:bg-zinc-500" />
        <Command.Item
          className={`${commandItemClass} flex items-center gap-1`}
          onClick={() => {
            window.open("https://github.com/nirnejak/workout-tracker", "_blank")
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter")
              window.open(
                "https://github.com/nirnejak/workout-tracker",
                "_blank"
              )
          }}
          tabIndex={0}
        >
          <GithubFill size={13} />
          <span>View Source</span>
        </Command.Item>
      </Command.List>
    </Command.Dialog>
  )
}

export default CommandBar
