import React, { useState } from "react";

import "./App.css";
import Card from "./UI/Card";
import Right from "./Forms/Right/Right";
import Image from "./Forms/Left/Image";

import { ADDS_LIST, INFO_STEPS, PLAN_LIST } from "./helpers";

function App() {
  const [infoSteps, setInfoSteps] = useState(INFO_STEPS);
  const [actInfo, setActInfo] = useState(1);

  // States - Your Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // State - Plans
  const [planList, addPlanList] = useState(PLAN_LIST);
  const [activePlan, setActivePlan] = useState(PLAN_LIST[1]);

  // State - Add Ons
  const [addOns, setAddOns] = useState(ADDS_LIST);

  const submitHandler = (value) => {
    // Set empty values
    // setName("");
    // setEmail("");
    // setPhone("");

    // handling next and back
    setActInfo(value);
  };

  return (
    <div className="App">
      <Card>
        <Image
          infoSteps={infoSteps}
          setInfoSteps={setInfoSteps}
          actInfo={actInfo}
          setActInfo={setActInfo}
        />
        <Right
          //Handling
          submitHandler={submitHandler}
          // 1st step
          actInfo={actInfo}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          // 2nd step
          planList={planList}
          addPlanList={addPlanList}
          activePlan={activePlan}
          setActivePlan={setActivePlan}
          // 3rd step
          addOns={addOns}
          setAddOns={setAddOns}
        />
      </Card>
    </div>
  );
}

export default App;
