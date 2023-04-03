import React, { useState } from "react";

import "./App.css";
import Card from "./UI/Card";
import Right from "./Forms/Right/Right";
import Image from "./Forms/Left/Image";

const INFO_STEPS = [
  { num: 1, info: "YOUR INFO", status: true },
  { num: 2, info: "SELECT PLAN", status: false },
  { num: 3, info: "ADD-ONS", status: false },
  { num: 4, info: "SUMMARY", status: false },
];

function App() {
  const [infoSteps, setInfoSteps] = useState(INFO_STEPS);
  const [actInfo, setActInfo] = useState(1);


  // States - Your Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
      <Card>
        <Image infoSteps={infoSteps} setInfoSteps={setInfoSteps} actInfo={actInfo} setActInfo={setActInfo} />
        <Right
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
      </Card>
    </div>
  );
}

export default App;
