import React, { useState } from "react";

import Button from "../../UI/Button";
import iconMalo from "../../../icons/malo.png";

function Plan() {
  const [active, setActive] = useState("Arcade");

  const buttonActiveHandler = (value) => {
    console.log(active);
    setActive(value);
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
          <Button
            bg="bg-orange-200"
            icon={iconMalo}
            text="Arcade"
            price="$9/mo"
            active={active}
            buttonActiveHandler={buttonActiveHandler}
          />
          <Button
            bg="bg-blue-300"
            icon={iconMalo}
            text="Advanced"
            price="$12/mo"
            active={active}
            buttonActiveHandler={buttonActiveHandler}
          />
          <Button
            bg="bg-purple"
            icon={iconMalo}
            text="Pro"
            price="$14/mo"
            active={active}
            buttonActiveHandler={buttonActiveHandler}
          />
        </div>
      </div>
    </>
  );
}

export default Plan;
