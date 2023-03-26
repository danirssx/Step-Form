import React from "react";

function Card({ children }) {
  return (
    <div className="flex justify-center bg-gray-100 p-4 rounded-lg">
      {children}
    </div>
  );
}

export default Card;
