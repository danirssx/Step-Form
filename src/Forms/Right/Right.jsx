import React from "react";

import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

function Right({
  // handling
  submitHandler,
  // 1st step
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  actInfo,
  // 2nd step
  planList,
  addPlanList,
  activePlan,
  setActivePlan,
  // 3rd step
  setActiveAdd,
  addOns,
  setAddOns,
  // 4rd step
  activeAdd,
}) {
  const buttonHandlerBack = (e) => {
    e.preventDefault();
    const actNum = actInfo > 1 ? actInfo - 1 : actInfo;
    submitHandler(actNum);
  };

  const buttonHandlerNext = (e) => {
    e.preventDefault();
    const actNum = actInfo <= 3 ? actInfo + 1 : actInfo;
    submitHandler(actNum);
  };

  return (
    <div className="relative">
      <div className="p-4">
        {actInfo === 1 && (
          <Info
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        )}
        {actInfo === 2 && (
          <Plan
            planList={planList}
            addPlanList={addPlanList}
            activePlan={activePlan}
            setActivePlan={setActivePlan}
          />
        )}
        {actInfo === 3 && (
          <AddOns
            addOns={addOns}
            setAddOns={setAddOns}
            setActiveAdd={setActiveAdd}
          />
        )}
        {actInfo === 4 && (
          <Summary
            // 1st step
            name={name}
            email={email}
            phone={phone}
            // 2nd step
            activePlan={activePlan}
            // 3rd step
            activeAdd={activeAdd}
            submitHandler={submitHandler}
          />
        )}
      </div>
      <div className="space-x-40 inset-x-0 bottom-4 absolute">
        <button className="buttonBack" onClick={buttonHandlerBack}>
          Go Back
        </button>
        <button className="buttonNext" onClick={buttonHandlerNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Right;
