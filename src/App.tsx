import React from "react";
import "./App.css";
import Container from "./components/Container";
import Teacher from "./components/Teacher";

const App: React.FC = () => {
  const teacherList = [
    {
      firstName: "Shakil",
      lastName: "Ahmed",
    },
    {
      firstName: "Jahid",
      lastName: "Mahmud",
    },
    {
      firstName: "Sultan",
      lastName: "Ahmed",
    },
  ];
  return (
    <div className="App">
      <Container name="Mahedi Hasan" messages={54} isLogged={false} />
      <Teacher teacherList={teacherList} />
    </div>
  );
};

export default App;
