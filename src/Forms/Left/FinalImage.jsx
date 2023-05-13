import React from "react";

import gaming from "../../../icons/gaming.png";

function FinalImage({ bg }) {
  return (
    <div className="flex flex-col pr-2 bg-blue-200 rounded-md">
      <div className="p-2 pl-0">
        <div
          className="relative bg-cover bg-center bg-no-repeat h-96 w-72"
          style={{
            backgroundImage: `url(${gaming})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FinalImage;
