import { useState } from "react";

import "./App.css";
import Card from "./UI/Card";
import Info from "./Forms/Right/Info";
import Image from "./Forms/Left/Image";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <Image />
        <Info />
      </Card>
    </div>
  );
}

export default App;
