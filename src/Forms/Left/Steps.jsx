import React, { useState } from "react";

import StepButton from "./StepButton";

function Steps({ infoSteps, setInfoSteps, actInfo, setActInfo }) {
  const booleanHandler = (event) => {
    event.preventDefault();

    // Modifying status value

    setInfoSteps((prevSteps) => {
      const activeNum = +event.target.value;
      setActInfo(activeNum);

      const cloneHandler = prevSteps;
      cloneHandler.map((value) => {
        value.num === activeNum
          ? (value.status = true)
          : (value.status = false);
      });

      return [...cloneHandler];
    });
  };

  return (
    <form className="p-4">
      {infoSteps.map((value, id) => {
        return (
          <StepButton
            key={`step-${++id}`}
            num={value.num}
            status={value.status}
            info={value.info}
            actInfo={actInfo}
            booleanHandler={booleanHandler}
          />
        );
      })}
    </form>
  );
}

export default Steps;
