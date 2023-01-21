import * as React from "react";

type WorkoutType = {
  name: string;
  count: number;
};

type Props = {
  workout: WorkoutType;
  reduceCount: () => void;
  increaseCount: () => void;
};

const WorkoutContainer: React.FC<Props> = ({
  workout,
  reduceCount,
  increaseCount,
}) => {
  return (
    <div className="text-sm border-[0.7px] border-slate-400 rounded-lg p-3 mb-3">
      <p className="text-slate-800 text-left mb-3">{workout.name}</p>
      <div className="flex justify-between">
        <button
          className="bg-slate-900 text-white rounded-md py-1 px-3"
          onClick={reduceCount}
        >
          -
        </button>
        <input
          className="text-center border-[0.5px] border-slate-400 rounded-md"
          type="text"
          readOnly
          value={workout.count}
        />
        <button
          className="bg-slate-900 text-white rounded-md py-1 px-3"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default WorkoutContainer;
