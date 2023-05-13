import React from "react";

function Card({ children, actInfo }) {
  return (
    <div
      className={`flex justify-center bg-gray-100 ${
        actInfo < 5 ? `p-4` : ""
      } rounded-lg`}
    >
      {children}
    </div>
  );
}

export default Card;
