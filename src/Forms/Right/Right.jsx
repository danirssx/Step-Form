import React from "react";

import Info from "./Info";

function Right({ name, setName, email, setEmail, phone, setPhone }) {
  return (
    <div>
      <Info
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />
    </div>
  );
}

export default Right;
