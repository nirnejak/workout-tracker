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
    <div className="text-sm border-[0.7px] border-slate-400 rounded-lg p-3 mb-3">
      <div className="flex justify-between mb-5">
        <p className="text-slate-800">{workout.name}</p>
        <p className="text-slate-400">Set of {workout.set}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-slate-900 text-white rounded-md p-1"
          onClick={reduceCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <input
          className="text-center border-[0.5px] border-slate-400 rounded-md"
          type="text"
          readOnly
          value={workout.count}
        />
        <button
          className="bg-slate-900 text-white rounded-md p-1"
          onClick={increaseCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
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
