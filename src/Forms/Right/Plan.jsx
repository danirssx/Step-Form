import React from "react";

import ButtonPlan from "../../UI/ButtonPlan";

function Plan({ planList, activePlan, setActivePlan }) {
  const buttonActiveHandler = (value) => {
    // Find the plan that have the active value
    const actPlan = planList.find((option) => {
      return option.text === value;
    });

    setActivePlan(actPlan);
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
          {planList.map((option, id) => {
            return (
              <ButtonPlan
                key={id}
                text={option.text}
                icon={option.icon}
                price={option.price}
                bg={option.bg}
                activePlan={activePlan.text}
                buttonActiveHandler={buttonActiveHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Plan;
