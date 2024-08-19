import First from "./First";
import { CourseGoal } from "../App";
 type CourseGoalListProps = {
  goals: CourseGoal[];
  onDeleteGoal:(id:number)=>void;
 };

const CourseGoalList = ({ goals, onDeleteGoal}:CourseGoalListProps ) => {
  return (
    <div>
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
