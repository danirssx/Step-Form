import React from "react";

import Info from "./Info";
import Plan from "./Plan";

function Right({ name, setName, email, setEmail, phone, setPhone, actInfo }) {
  const buttonHandler = (e) => {
    e.preventDefault();

    // Set empty values
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="relative">
      <div className="p-4">
        {actInfo === 1 && (
          <Info
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        )}
        {actInfo === 2 && <Plan />}
      </div>
      <div className="space-x-40 inset-x-0 bottom-5 absolute">
        <button className="buttonBack">Go Back</button>
        <button className="buttonNext" onClick={buttonHandler}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Right;
