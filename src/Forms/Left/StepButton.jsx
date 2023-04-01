import React from "react";
import { useState } from "react";

function StepButton({ num, info }) {
  const [actInfo, setActInfo] = useState("");

  const buttonHandler = (event) => {
    event.preventDefault();
    const activeNum = event.target.value;
    setActInfo(activeNum);
    console.log(actInfo);
  };

  return (
    <div className="grid grid-cols-3 justify-center pb-2">
      <div className="col-span-1 ">
        <button
          key={num}
          value={num}
          checked={num === actInfo}
          className="font-bold text-lg px-3 py-1 rounded-full border-solid border-2 bg-transparent border-y-gray-100 hover:border-gray-100 hover:bg-orange-100 focus:outline-none focus:ring"
          onClick={buttonHandler}
        >
          {num}
        </button>
      </div>
      <div className="col-span-2 text-left">
        <div className="grid-rows-3">
          <h2 className=" row-span-1 font-medium text-xs">Step {num}</h2>
          <h1 className=" row-span-2  font-medium text-base">{info}</h1>
        </div>
      </div>
    </div>
  );
}

export default StepButton;
