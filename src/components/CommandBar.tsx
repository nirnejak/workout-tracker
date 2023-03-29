import * as React from "react"

import {
  ArrowCounterClockwise,
  Cloud,
  GithubFill,
  LinkOut,
  MoonFill,
  SunFill,
} from "akar-icons"
import { Command } from "cmdk"
import {
  CommandBarContext,
  type COMMAND_BAR_CONTEXT,
} from "src/store/CommandContext"
import { ThemeContext, type THEME_CONTEXT } from "src/store/ThemeContext"
import {
  WorkoutsContext,
  type WORKOUTS_CONTEXT,
} from "src/store/WorkoutsContext"

const commandItemClass =
  "px-3 py-2 cursor-pointer hover-bg flex items-center gap-1.5 outline-0"

// TODO: Add load animation
// TODO: Fix click action
// TODO: Add keyboard navigation with arrows

const CommandBar: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(
    CommandBarContext
  ) as COMMAND_BAR_CONTEXT
  const { changeTheme } = React.useContext(ThemeContext) as THEME_CONTEXT
  const { resetWorkouts } = React.useContext(
    WorkoutsContext
  ) as WORKOUTS_CONTEXT

  React.useEffect(() => {
    const eventHandler = (e: any | React.KeyboardEvent): void => {
      if ((e as KeyboardEvent).key === "k" && (e as KeyboardEvent).metaKey) {
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", eventHandler)
    return () => {
      document.removeEventListener("keydown", eventHandler)
    }
  }, [setIsOpen])

  return (
    <Command.Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      label="Global Command Menu"
      className="fixed left-1/2 top-1/2 z-50 w-5/12 -translate-x-1/2 -translate-y-1/2 animate-zoomIn rounded-lg bg-slate-100/95 p-3 dark:bg-zinc-800/95"
    >
      <Command.Input className="w-full rounded-lg px-3 py-2 outline-none dark:bg-zinc-900 dark:text-zinc-300" />

      <Command.List className="pt-2 dark:text-zinc-300">
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
          <ArrowCounterClockwise size={13} />
          <span>Reset Workouts</span>
        </Command.Item>
        <Command.Separator className="my-1 h-[0.5px] bg-slate-900 dark:bg-zinc-700" />
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
          <SunFill size={13} />
          Dune Theme
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
          <MoonFill size={13} />
          Oasis Theme
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
          <Cloud size={13} />
          Rain Forest Theme
        </Command.Item>
        <Command.Separator className="my-1 h-[0.5px] bg-slate-900 dark:bg-zinc-700" />
        <Command.Item
          className={commandItemClass}
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
          <LinkOut size={13} className="ml-auto" />
        </Command.Item>
      </Command.List>
    </Command.Dialog>
  )
}

export default CommandBar
