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
import { useCommandBar } from "src/store/CommandContext"
import { useTheme } from "src/store/ThemeContext"
import { useWorkouts } from "src/store/WorkoutsContext"

const commandItemClass =
  "command-item px-3 py-2 cursor-pointer hover-bg flex items-center gap-1.5 outline-0"

const CommandBar: React.FC = () => {
  const { isOpen, setIsOpen } = useCommandBar()
  const { changeTheme } = useTheme()
  const { resetWorkouts } = useWorkouts()

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
        isOpen
          ? "fixed left-0 top-0 z-50 h-screen w-full bg-slate-400/90 dark:bg-zinc-900/90"
          : ""
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
        className="fixed left-1/2 top-1/2 z-50 w-11/12 max-w-[580px] -translate-x-1/2 -translate-y-1/2 animate-rise select-none rounded-lg bg-white p-3 md:w-full dark:bg-zinc-800/95"
      >
        <Command.Input
          className="w-full rounded-lg bg-slate-200 px-3 py-2 outline-none dark:bg-zinc-900 dark:text-zinc-300"
          ref={inputRef}
        />

        <Command.List
          className="py-2 text-slate-700 dark:text-zinc-300"
          ref={listRef}
        >
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
          <Command.Separator className="my-1 h-[0.5px] bg-slate-300 dark:bg-zinc-700" />
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
            value="Forest Theme"
            onSelect={() => {
              changeTheme("Forest")
              setIsOpen(false)
            }}
          >
            <Cloud size={13} />
            Forest Theme
          </Command.Item>
          <Command.Separator className="my-1 h-[0.5px] bg-slate-300 dark:bg-zinc-700" />
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
        <div className="-mx-3 -mb-3 flex justify-between rounded-b-lg border-t-[0.5px] border-slate-300 p-3 text-xs text-slate-700 dark:border-zinc-700 dark:text-zinc-300">
          <p className="flex items-center gap-1.5">
            <span>Navigate with</span>
            <span className="rounded-md bg-slate-300 p-1 dark:bg-zinc-700">
              <ArrowUp size={10} />
            </span>
            <span className="rounded-md bg-slate-300 p-1 dark:bg-zinc-700">
              <ArrowDown size={10} />
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Open Link</span>
            <span className="rotate-180 rounded-md bg-slate-300 p-1 dark:bg-zinc-700">
              <ArrowForward size={10} />
            </span>
          </p>
        </div>
      </Command.Dialog>
    </Command>
  )
}

export default CommandBar
