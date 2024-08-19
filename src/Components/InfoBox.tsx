import { ReactNode } from "react";

type InfoBoxProps={
    mode: 'hint'|'warning',
    children:ReactNode;
}

const InfoBox = ({mode,children}:InfoBoxProps) => {
  return (
    <aside>
        <h2>warning</h2>
      <p>{children}</p>


    </aside>
  );
};

export default InfoBox;
