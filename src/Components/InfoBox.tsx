import { ReactNode } from "react";

type InfoBoxProps =HintInfoBox | WarningInfoBox;


type HintInfoBox = {
  mode: "hint";
  children: ReactNode;
};
type WarningInfoBox = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

const InfoBox = (props: InfoBoxProps) => {
  const {mode, children}=props;
  if (mode === "hint") {
    return (
      <aside className=" infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const {severity}=props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
