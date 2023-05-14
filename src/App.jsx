import React, { useState } from "react";

import "./App.css";
import Card from "./UI/Card";
import Right from "./Forms/Right/Right";
import Image from "./Forms/Left/Image";
// Final
import FinalInfo from "./Forms/Right/FinalInfo";
import FinalImage from "./Forms/Left/FinalImage";

import { ADDS_LIST, INFO_STEPS, PLAN_LIST } from "./helpers";

function App() {
  const [infoSteps, setInfoSteps] = useState([INFO_STEPS[0]]);
  const [actInfo, setActInfo] = useState(1);

  // States - Your Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validForm, setValidForm] = useState(false);

  // State - Plans
  const [planList, addPlanList] = useState(PLAN_LIST);
  const [activePlan, setActivePlan] = useState(PLAN_LIST[1]);

  // State - Add Ons
  const [addOns, setAddOns] = useState(ADDS_LIST);
  const [activeAdd, setActiveAdd] = useState([ADDS_LIST[1]]);

  const validFormHandler = () => {
    const reEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(validForm);

    if (reEmail.test(email) && name.length > 2 && phone.length > 2) {
      setValidForm(true);
      console.log(true);
    } else {
      console.log(false);
    }
  };

  const addStepsHandler = (value) => {
    if (infoSteps.length < 4 && validForm && value > infoSteps.length) {
      setInfoSteps((prevState) => {
        return [...prevState, INFO_STEPS[value - 1]];
      });
    } else {
      alert("Indica bien la información.");
    }
  };

  const submitHandler = (value) => {
    console.log({
      name,
      email,
      phone,
      activePlan,
      activeAdd,
    });

    if (validForm) {
      setActInfo(value);
    }
  };

  return (
    <div className="App">
      <Card actInfo={actInfo}>
        {actInfo < 5 ? (
          <Image
            infoSteps={infoSteps}
            setInfoSteps={setInfoSteps}
            actInfo={actInfo}
            setActInfo={setActInfo}
          />
        ) : (
          <FinalImage />
        )}

        {actInfo < 5 ? (
          <Right
            //Handling
            submitHandler={submitHandler}
            addStepsHandler={addStepsHandler}
            validFormHandler={validFormHandler}
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
        ) : (
          <FinalInfo />
        )}
      </Card>
    </div>
  );
}

export default App;
