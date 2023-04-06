import React from "react";

function Button({ bg, icon, text, price }) {
  return (
    <button
      className={`${bg} border-gray-300
          `}
    >
      <img src={icon} className="w-20" />
      <h2 className="h2">{text}</h2>
      <p className="plainText text-left pt-0">{price}</p>
    </button>
  );
}

export default Button;
