import React from "react";
import imageForm from "C:/Users/user/Desktop/Code/Step-form/Step-Form/icons/form-image.png";

import Steps from "./Steps";

function Image() {
  return (
    <div
      className="flex flex-col pr-2
    "
    >
      <div
        className="relative bg-cover bg-center bg-no-repeat  h-96 w-52"
        style={{
          backgroundImage: `url(${imageForm})`,
        }}
      >
        <Steps />
      </div>
    </div>
  );
}

export default Image;
