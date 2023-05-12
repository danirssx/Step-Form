import React from "react";

function ButtonAdd({
  service,
  info,
  price,
  status,
  id,
  addOns,
  addOptionHandler,
  setActiveAdd,
}) {
  const inputHandler = (e) => {
    console.log({ service, info, price, status });

    console.log(addOns);

    setActiveAdd(() => {
      const active = [];
      addOns.map((act) => {
        act.status === true ? active.push(act) : "";
      });

      return [...active];
    });

    if (e.target.checked !== undefined) {
      addOptionHandler(id, e.target.checked);
    } else {
      addOptionHandler(id, !status);
    }
  };

  return (
    <div className="pb-3" onClick={inputHandler}>
      <form className=" addOns">
        <div className="pt-2">
          <input
            className=" check_Box"
            type="checkbox"
            name="Add-Ons"
            id={id}
            value={service}
            checked={status === true}
            onChange={inputHandler}
          />
        </div>

        <div className="col-span-2 text-left">
          <h2 className="text-lg text-gray-300  font-semibold ">{service}</h2>
          <h3 className=" text-xs text-gray-200 font-medium">{info}</h3>
        </div>
        <h1 className="text-base text-blue-400 font-medium pt-2 ">{price}</h1>
      </form>
    </div>
  );
}

export default ButtonAdd;
