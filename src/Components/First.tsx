import { PropsWithChildren } from "react";

// interface FirstGoal  { title: string; description: string };
// interface FirstGoal {
//   title: string;
//   children: ReactNode;
// }
type FirstGoal =PropsWithChildren<{title:string; id:number; onDelete:(id:number)=>void;} >;

export default function First({ title, children ,id,onDelete}: FirstGoal) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
  );
}
