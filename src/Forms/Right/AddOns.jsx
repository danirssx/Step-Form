import React, { useState } from "react";

import ButtonAdd from "../../UI/ButtonAdd";

const addsList = [
  {
    service: "Online Service",
    info: "Access to Multiplayer games",
    price: "+$1/mo",
    status: true,
  },
  {
    service: "Larger Storage",
    info: "Extra 1 TB of cloud save",
    price: "+$2/mo",
    status: false,
  },
  {
    service: "Customizable profile",
    info: "Custom theme on your profile",
    price: "+$2/mo",
    status: false,
  },
];

function AddOns() {
  const [addState, setAddState] = useState(addsList);

  const addOptionHandler = (id, value) => {
    console.log(addState);
    setAddState((prevState) => {
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
        {addState.map((option, id) => {
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
        <ButtonAdd
          option="Online"
          id="1"
          addState={addState}
          setAddState={setAddState}
        />
      </div>
    </>
  );
}

export default AddOns;
