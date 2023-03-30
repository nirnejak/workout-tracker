import * as React from "react"

interface Props {
  workout: WorkoutType
  reduceCount: () => void
  increaseCount: () => void
}

const WorkoutContainer: React.FC<Props> = ({
  workout,
  reduceCount,
  increaseCount,
}) => {
  return (
    <div className="mb-3 rounded-lg border-[0.7px] border-slate-400 p-3 text-sm dark:border-zinc-500">
      <div className="mb-5 flex justify-between">
        <p className="text-slate-800 dark:text-zinc-400">{workout.name}</p>
        <p className="text-slate-400 dark:text-zinc-700">
          Set of {workout.set}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          className="rounded-md bg-slate-900 p-1 text-white transition-colors active:scale-95 dark:bg-zinc-500 dark:text-zinc-900 dark:hover:bg-zinc-400"
          onClick={reduceCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <input
          className="rounded-md border-[0.5px] border-slate-400 bg-transparent text-center  text-slate-900 dark:border-zinc-500 dark:text-zinc-500"
          type="text"
          readOnly
          value={workout.count}
        />
        <button
          className="rounded-md bg-slate-900 p-1 text-white transition-colors active:scale-95 dark:bg-zinc-500 dark:text-zinc-900 dark:hover:bg-zinc-400"
          onClick={increaseCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default WorkoutContainer
