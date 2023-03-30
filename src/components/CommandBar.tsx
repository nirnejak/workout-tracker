import * as React from "react"

import {
  ArrowCounterClockwise,
  Cloud,
  GithubFill,
  LinkOut,
  MoonFill,
  SunFill,
  ArrowDown,
  ArrowForward,
  ArrowUp,
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
  "command-item px-3 py-2 cursor-pointer hover-bg flex items-center gap-1.5 outline-0"

const CommandBar: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(
    CommandBarContext
  ) as COMMAND_BAR_CONTEXT
  const { changeTheme } = React.useContext(ThemeContext) as THEME_CONTEXT
  const { resetWorkouts } = React.useContext(
    WorkoutsContext
  ) as WORKOUTS_CONTEXT

  const listRef = React.useRef(null)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const [value, setValue] = React.useState("Reset Workout")

  React.useEffect(() => {
    inputRef?.current?.focus()

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
    <Command
      className={
        isOpen ? "fixed left-0 top-0 z-50 h-screen w-full bg-zinc-900/90" : ""
      }
    >
      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        loop={true}
        value={value}
        onValueChange={(v) => {
          setValue(v)
        }}
        label="Global Command Menu"
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-[580px] -translate-x-1/2 -translate-y-1/2 animate-rise select-none rounded-lg bg-slate-100/95 p-3 dark:bg-zinc-800/95"
      >
        <Command.Input
          className="w-full rounded-lg px-3 py-2 outline-none dark:bg-zinc-900 dark:text-zinc-300"
          ref={inputRef}
        />

        <Command.List className="py-2 dark:text-zinc-300" ref={listRef}>
          <Command.Item
            className={commandItemClass}
            value="Reset Workout"
            onSelect={() => {
              resetWorkouts()
              setIsOpen(false)
            }}
          >
            <ArrowCounterClockwise size={13} />
            <span>Reset Workouts</span>
          </Command.Item>
          <Command.Separator className="my-1 h-[0.5px] bg-slate-900 dark:bg-zinc-700" />
          <Command.Item
            className={commandItemClass}
            value="Dune Theme"
            onSelect={() => {
              changeTheme("Dune")
              setIsOpen(false)
            }}
          >
            <SunFill size={13} />
            Dune Theme
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            value="Oasis Theme"
            onSelect={() => {
              changeTheme("Oasis")
              setIsOpen(false)
            }}
          >
            <MoonFill size={13} />
            Oasis Theme
          </Command.Item>
          <Command.Separator />
          <Command.Item
            className={commandItemClass}
            value="Rain Forest Theme"
            onSelect={() => {
              changeTheme("Rain Forest")
              setIsOpen(false)
            }}
          >
            <Cloud size={13} />
            Rain Forest Theme
          </Command.Item>
          <Command.Separator className="my-1 h-[0.5px] bg-slate-900 dark:bg-zinc-700" />
          <Command.Item
            className={commandItemClass}
            value="View Source"
            onSelect={() => {
              window.open(
                "https://github.com/nirnejak/workout-tracker",
                "_blank"
              )
              setIsOpen(false)
            }}
          >
            <GithubFill size={13} />
            <span>View Source</span>
            <LinkOut size={13} className="ml-auto" />
          </Command.Item>
        </Command.List>
        <div className="-mx-3 -mb-3 flex justify-between rounded-b-lg border-t-[0.5px] border-zinc-700 p-3 text-xs text-zinc-300">
          <p className="flex items-center gap-1.5">
            <span>Navigate with</span>
            <span className="rounded-md bg-zinc-700 p-1">
              <ArrowUp size={10} />
            </span>
            <span className="rounded-md bg-zinc-700 p-1">
              <ArrowDown size={10} />
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Open Link</span>
            <span className="rotate-180 rounded-md bg-zinc-700 p-1">
              <ArrowForward size={10} />
            </span>
          </p>
        </div>
      </Command.Dialog>
    </Command>
  )
}

export default CommandBar
