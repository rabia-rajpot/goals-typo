import First from "./First";
import { CourseGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";
type CourseGoalListProps = {
  goals: CourseGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint" >
        You have no Course Goals yet,start adding some!
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length >= 5) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You are collecting a lot of goals.Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <div>
        {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <First title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </First>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
