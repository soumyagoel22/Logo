import React, { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import "./styles.css";

const App = () => {
  const [state, setState] = useState("");
  const [logo, setLogo] = useState({ val1: false, val2: false });
  return (
    <div className="App header">
      <Input logo={logo} setLogo={setLogo} state={state} setState={setState} />
      <Button logo={logo} setLogo={setLogo} state={state} />
    </div>
  );
};

export default App;
