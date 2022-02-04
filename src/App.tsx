import React from "react";
import "./App.css";
import Container from "./components/Container";
import Parents from "./components/Parents";
import Status from "./components/Status";

const App: React.FC = () => {
  return (
    <div className="App">
      <Status status="success" data="Mahedi Hasan" />
      <Parents>
        <Container>This is container text</Container>
      </Parents>
    </div>
  );
};

export default App;
