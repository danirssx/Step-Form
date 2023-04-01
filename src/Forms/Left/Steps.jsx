import React from "react";

import StepButton from "./StepButton";

const infoSteps = [
  { num: 1, info: "YOUR INFO" },
  { num: 2, info: "SELECT PLAN" },
  { num: 3, info: "ADD-ONS" },
  { num: 4, info: "SUMMARY" },
];

function Steps() {
  return (
    <form className="p-4">
      {infoSteps.map((value, id) => {
        return <StepButton key={id} num={value.num} info={value.info} />;
      })}
    </form>
  );
}

export default Steps;
