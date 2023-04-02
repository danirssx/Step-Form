import React, { useState } from "react";

import StepButton from "./StepButton";

const INFO_STEPS = [
  { num: 1, info: "YOUR INFO", status: true },
  { num: 2, info: "SELECT PLAN", status: false },
  { num: 3, info: "ADD-ONS", status: false },
  { num: 4, info: "SUMMARY", status: false },
];

function Steps() {
  const [infoSteps, setInfoSteps] = useState(INFO_STEPS);
  const [actInfo, setActInfo] = useState(0);

  return (
    <form className="p-4">
      {infoSteps.map((value, id) => {
        console.log({ infoSteps });
        return (
          <StepButton
            key={`step-${++id}`}
            num={value.num}
            steps={infoSteps}
            status={value.status}
            info={value.info}
            actInfo={actInfo}
            setActInfo={setActInfo}
          />
        );
      })}
    </form>
  );
}

export default Steps;
