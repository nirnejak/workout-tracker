import * as React from "react";

import WorkoutContainer from "./components/WorkoutContainer";

const initialWorkouts = [
  { name: "Pushups", count: 0 },
  { name: "Squats", count: 0 },
  { name: "Deadlifts", count: 0 },
  { name: "Bicep Curls", count: 0 },
  { name: "Dumbell Up", count: 0 },
  { name: "Dumbell Side", count: 0 },
  { name: "Dumbell Lean Up", count: 0 },
];

const App: React.FC = () => {
  const [workouts, setWorkouts] =
    React.useState<WorkoutType[]>(initialWorkouts);

  React.useEffect(() => {
    const localWorkouts = localStorage.getItem("workouts");
    if (localWorkouts?.length) {
      setWorkouts(JSON.parse(localWorkouts));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const reduceCount = (index: number) => {
    setWorkouts((workouts) => {
      return workouts.map((workout, i) => {
        if (i === index) {
          return {
            ...workout,
            count: workout.count === 0 ? 0 : workout.count - 1,
          };
        } else {
          return workout;
        }
      });
    });
  };

  const increaseCount = (index: number) => {
    setWorkouts((workouts) => {
      return workouts.map((workout, i) => {
        if (i === index) {
          return {
            ...workout,
            count: workout.count + 1,
          };
        } else {
          return workout;
        }
      });
    });
  };

  return (
    <div
      className="w-full md:w-[300px] mx-auto p-4"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <h1 className="text-xl font-medium text-slate-800 mb-3">Workouts</h1>
      {workouts.map((workout, index) => (
        <WorkoutContainer
          key={index}
          workout={workout}
          reduceCount={() => reduceCount(index)}
          increaseCount={() => increaseCount(index)}
        />
      ))}
    </div>
  );
};

export default App;
