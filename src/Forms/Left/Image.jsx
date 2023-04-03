import React from "react";
import imageForm from "../../../icons/form-image.png";

import Steps from "./Steps";


function Image({ infoSteps, setInfoSteps, actInfo, setActInfo }) {
  return (
    <div className="flex flex-col pr-2">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-96 w-52"
        style={{
          backgroundImage: `url(${imageForm})`,
        }}
      >
        <Steps infoSteps={infoSteps} setInfoSteps={setInfoSteps} actInfo={actInfo} setActInfo={setActInfo} />
      </div>
    </div>
  );
}

export default Image;
