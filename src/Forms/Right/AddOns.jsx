import React, { useState } from "react";

import ButtonAdd from "../../UI/ButtonAdd";

function AddOns({ addOns, setAddOns }) {
  const addOptionHandler = (id, value) => {
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
        <p className="plainText text-left pb-2">
          Add-Ons help enhance your gaming experience.
        </p>
        <div className="pb-2">
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
      </div>
    </>
  );
}

export default AddOns;
