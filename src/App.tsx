import React from "react";
import Card from "./Components/Card";

const App: React.FC = () => {
  const user = {
    name: "Manas",
    age: 22,
    place: "Andhra Pradesh",
  };

  return (
    <div>
      <h1>Information about a person</h1>
      <Card name={user.name} age={user.age} place={user.place} />
    </div>
  );
};

export default App;
