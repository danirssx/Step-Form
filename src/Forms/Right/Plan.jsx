import React from "react";

import ButtonPlan from "../../UI/ButtonPlan";
import iconMalo from "../../../icons/malo.png";

function Plan({ activePlan, setActivePlan }) {
  const buttonActiveHandler = (value) => {
    console.log(activePlan);
    setActivePlan(value);
  };

  return (
    <>
      <div className="pb-4">
        <h1 className="h1">Select your plan</h1>
        <p className="plainText text-left">
          You can choose between monthly or yearly billing options.
        </p>
      </div>
      <div>
        <div className="space-x-4 p-2">
          <ButtonPlan
            bg="bg-orange-200"
            icon={iconMalo}
            text="Arcade"
            price="$9/mo"
            activePlan={activePlan}
            buttonActiveHandler={buttonActiveHandler}
          />
          <ButtonPlan
            bg="bg-blue-300"
            icon={iconMalo}
            text="Advanced"
            price="$12/mo"
            activePlan={activePlan}
            buttonActiveHandler={buttonActiveHandler}
          />
          <ButtonPlan
            bg="bg-purple"
            icon={iconMalo}
            text="Pro"
            price="$14/mo"
            activePlan={activePlan}
            buttonActiveHandler={buttonActiveHandler}
          />
        </div>
      </div>
    </>
  );
}

export default Plan;
