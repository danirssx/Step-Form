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
    <div>
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
        <div className="space-x-4">
          <button className="buttonBack">Go Back</button>
          <button className="buttonNext" onClick={buttonHandler}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Right;
