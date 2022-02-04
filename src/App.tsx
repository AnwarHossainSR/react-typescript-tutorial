import React from "react";
import "./App.css";
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <Button handleClick={(event, id) => console.log("clicked", event, id)} />
    </div>
  );
};

export default App;
