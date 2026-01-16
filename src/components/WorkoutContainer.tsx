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
    <div className="bg-primary text-dark mb-3 rounded-xl p-3 text-sm">
      <div className="text-dark mb-5 flex justify-between">
        <p>{workout.name}</p>
        <p>Set of {workout.set}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="
            text-light bg-dark rounded-lg p-1 transition-all
            hover:opacity-95
            active:scale-95
          "
          onClick={reduceCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <div
          className="
            text-dark border-dark mx-2 flex w-full items-center justify-center
            rounded-lg border
          "
        >
          {workout.count}
        </div>
        <button
          className="
            text-light bg-dark rounded-lg p-1 transition-all
            hover:opacity-95
            active:scale-95
          "
          onClick={increaseCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
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
