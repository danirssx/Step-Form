import React from "react";

import Button from "../../UI/Button";
import iconMalo from "../../../icons/malo.png";

function Plan() {
  return (
    <>
      <div className="pb-4">
        <h1 className="h1">Select your plan</h1>
        <p className="plainText">
          You can choose between monthly or yearly billing options.
        </p>
      </div>
      <div>
        <div className="space-x-4">
          <Button
            bg="bg-blue-100"
            icon={iconMalo}
            text="Arcade"
            price="$9/mo"
          />
          <Button bg="bg-purple" />
        </div>
      </div>
    </>
  );
}

export default Plan;
