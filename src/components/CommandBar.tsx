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
  TrashBin,
} from "akar-icons"
import { Command } from "cmdk"
import { toast } from "sonner"
import { useCommandBar } from "src/context/CommandContext"
import { useTheme } from "src/context/ThemeContext"
import { useWorkouts } from "src/context/WorkoutsContext"

const commandItemClass =
  "command-item px-3 py-2 cursor-pointer hover-bg flex items-center gap-1.5 outline-0"

const CommandBar: React.FC = () => {
  const { isOpen, setIsOpen } = useCommandBar()
  const { setTheme } = useTheme()
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

  const clearLocalStorage = (): void => {
    localStorage.clear()
    toast("Local Storage Cleared", {
      icon: <TrashBin size={15} />,
    })
  }

  return (
    <Command
      className={
        isOpen ? "fixed left-0 top-0 z-50 h-screen w-full bg-black/70" : ""
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
        className="fixed left-1/2 top-1/2 z-50 w-11/12 max-w-[580px] -translate-x-1/2 -translate-y-1/2 animate-rise select-none rounded-lg bg-[--color-light] p-3 md:w-full"
      >
        <Command.Input
          className="w-full rounded-lg bg-[--color-primary] px-3 py-2 text-[--color-dark] outline-none"
          ref={inputRef}
        />

        <Command.List className="py-2 text-[--color-dark]" ref={listRef}>
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
          <Command.Item
            className={commandItemClass}
            value="Clear Local Storage"
            onSelect={() => {
              clearLocalStorage()
              setIsOpen(false)
            }}
          >
            <TrashBin size={13} />
            <span>Clear Local Storage</span>
          </Command.Item>
          <Command.Separator className="my-1 h-[0.5px] bg-[--color-primary]" />
          <Command.Item
            className={commandItemClass}
            value="Dune Theme"
            onSelect={() => {
              setTheme("Dune")
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
              setTheme("Oasis")
              setIsOpen(false)
            }}
          >
            <MoonFill size={13} />
            Oasis Theme
          </Command.Item>
          <Command.Item
            className={commandItemClass}
            value="Forest Theme"
            onSelect={() => {
              setTheme("Forest")
              setIsOpen(false)
            }}
          >
            <Cloud size={13} />
            Forest Theme
          </Command.Item>
          <Command.Separator className="my-1 h-[0.5px] bg-[--color-primary]" />
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
        <div className="-mx-3 -mb-3 flex justify-between rounded-b-lg border-t-[0.5px] border-[--color-primary] p-3 text-xs text-[--color-dark]">
          <p className="flex items-center gap-1.5">
            <span>Navigate with</span>
            <span className="rounded-md bg-[--color-primary] p-1">
              <ArrowUp size={10} />
            </span>
            <span className="rounded-md bg-[--color-primary] p-1">
              <ArrowDown size={10} />
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Open Link</span>
            <span className="rotate-180 rounded-md bg-[--color-primary] p-1">
              <ArrowForward size={10} />
            </span>
          </p>
        </div>
      </Command.Dialog>
    </Command>
  )
}

export default CommandBar
