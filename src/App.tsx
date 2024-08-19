import { useState } from "react";
import Header from "./Components/Header";
import GoalsImg from "./assets/goals.jpg";
import CourseGoalList from "./Components/CourseGoalList";
import { NewGoal } from "./Components/NewGoal";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }
  const handleDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: GoalsImg, alt: "list of Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList onDeleteGoal={handleDelete} goals={goals} />
    </main>
  );
}
