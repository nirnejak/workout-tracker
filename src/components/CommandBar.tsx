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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        isOpen ? "fixed top-0 left-0 z-50 h-screen w-full bg-black/70" : ""
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
        className="
          animate-rise bg-light fixed top-1/2 left-1/2 z-50 w-11/12 max-w-145
          -translate-1/2 rounded-lg p-3 select-none
          md:w-full
        "
      >
        <Command.Input
          className="
            bg-primary text-dark w-full rounded-lg px-3 py-2 outline-none
          "
          ref={inputRef}
        />

        <Command.List className="text-dark py-2" ref={listRef}>
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
          <Command.Separator className="bg-primary my-1 h-[0.5px]" />
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
          <Command.Separator className="bg-primary my-1 h-[0.5px]" />
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
        <div
          className="
            text-dark border-primary -mx-3 -mb-3 flex justify-between
            rounded-b-lg border-t-[0.5px] p-3 text-xs
          "
        >
          <p className="flex items-center gap-1.5">
            <span>Navigate with</span>
            <span className="bg-primary rounded-md p-1">
              <ArrowUp size={10} />
            </span>
            <span className="bg-primary rounded-md p-1">
              <ArrowDown size={10} />
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Open Link</span>
            <span className="bg-primary rotate-180 rounded-md p-1">
              <ArrowForward size={10} />
            </span>
          </p>
        </div>
      </Command.Dialog>
    </Command>
  )
}

export default CommandBar
