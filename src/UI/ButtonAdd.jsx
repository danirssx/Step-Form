import React from "react";

function ButtonAdd({ service, info, price, status, id, addOptionHandler }) {
  const inputHandler = (e) => {
    console.log({ service, info, price, status });

    addOptionHandler(id, e.target.checked);
  };

  return (
    <form className=" grid grid-cols-4 cursor-pointer p-4 bg-blue-300 pb-2">
      <div>
        <input
          className="col-span-1"
          type="checkbox"
          name="Add-Ons"
          id={id}
          value={service}
          checked={status === true}
          onChange={inputHandler}
        />
      </div>

      <div className="col-span-2 text-left">
        <h2 className="h2">{service}</h2>
        <h3>{info}</h3>
      </div>
      <h1 className="h1 col-span-1">{price}</h1>
    </form>
  );
}

export default ButtonAdd;
