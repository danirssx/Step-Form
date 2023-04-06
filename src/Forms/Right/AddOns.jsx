import React, { useState } from "react";

import ButtonAdd from "../../UI/ButtonAdd";

function AddOns({ addOns, setAddOns }) {
  const addOptionHandler = (id, value) => {
    console.log(addOns);
    setAddOns((prevState) => {
      const cloneState = prevState.slice();

      cloneState[id].status = value;

      return [...cloneState];
    });
  };

  return (
    <>
      <div className="pb-4">
        <h1 className="h1">Add-Ons</h1>
        <p className="plainText text-left pb-4">
          Add-Ons help enhance your gaming experience.
        </p>
        {addOns.map((option, id) => {
          return (
            <ButtonAdd
              key={id}
              service={option.service}
              info={option.info}
              price={option.price}
              status={option.status}
              id={id}
              addOptionHandler={addOptionHandler}
            />
          );
        })}
      </div>
    </>
  );
}

export default AddOns;
