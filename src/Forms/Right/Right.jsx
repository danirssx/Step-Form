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
  activePlan,
  setActivePlan,
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

    console.log("bien hecho");
  };

  return (
    <form className="relative" onSubmit={buttonHandlerNext}>
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
          <Plan activePlan={activePlan} setActivePlan={setActivePlan} />
        )}
        {actInfo === 3 && <AddOns />}
        {actInfo === 4 && <Summary />}
      </div>
      <div className="space-x-40 inset-x-0 bottom-5 absolute">
        <button className="buttonBack" onClick={buttonHandlerBack}>
          Go Back
        </button>
        <button className="buttonNext" onClick={buttonHandlerNext}>
          Next Step
        </button>
      </div>
    </form>
  );
}

export default Right;
