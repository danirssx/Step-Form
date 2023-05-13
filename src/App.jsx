import React, { useState } from "react";

import "./App.css";
import Card from "./UI/Card";
import Right from "./Forms/Right/Right";
import Image from "./Forms/Left/Image";

import { ADDS_LIST, INFO_STEPS, PLAN_LIST } from "./helpers";

function App() {
  const [infoSteps, setInfoSteps] = useState([INFO_STEPS[0]]);
  const [actInfo, setActInfo] = useState(1);
  // Possible steps
  // States - Your Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // State - Plans
  const [planList, addPlanList] = useState(PLAN_LIST);
  const [activePlan, setActivePlan] = useState(PLAN_LIST[1]);

  // State - Add Ons
  const [addOns, setAddOns] = useState(ADDS_LIST);
  const [activeAdd, setActiveAdd] = useState([ADDS_LIST[1]]);

  const submitHandler = (value) => {
    console.log({
      name,
      email,
      phone,
      activePlan,
      activeAdd,
    });

    if (infoSteps.length < 4) {
      setInfoSteps((prevState) => {
        return [...prevState, INFO_STEPS[value - 1]];
      });
    }

    console.log(INFO_STEPS.length);

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
          setActiveAdd={setActiveAdd}
          // 3rd step
          addOns={addOns}
          setAddOns={setAddOns}
          // 4rd step
          activeAdd={activeAdd}
        />
      </Card>
    </div>
  );
}

export default App;
