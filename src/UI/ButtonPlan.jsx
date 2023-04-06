import React from "react";

function ButtonPlan({
  bg,
  icon,
  text,
  price,
  buttonActiveHandler,
  activePlan,
}) {
  const buttonHandler = (event) => {
    event.preventDefault();
    event.target.value === undefined
      ? buttonActiveHandler(event.target.parentNode.value)
      : buttonActiveHandler(event.target.value);

    console.log({ text, activePlan });
  };

  return (
    <button
      className={`${
        text === activePlan ? bg : `bg-transparent`
      } bg-opacity-50 border-opacity-20 border-solid border-blue-400 border-2 hover:border-opacity-100 hover:border-blue-400 focus:outline-none
          `}
      value={text}
      onClick={buttonHandler}
    >
      <img src={icon} className="w-20" />
      <h2 className="h2 text-gray-400 ">{text}</h2>
      <p className="plainText text-gray-400 text-left pt-0">{price}</p>
    </button>
  );
}

export default ButtonPlan;
