import { useState } from "react";

import "./App.css";
import Card from "./UI/Card";
import Right from "./Forms/Right/Right";
import Image from "./Forms/Left/Image";

function App() {
  const [count, setCount] = useState(0);

  // States - Your Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
      <Card>
        <Image />
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
