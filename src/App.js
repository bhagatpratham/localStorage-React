import React from "react";

function App() {
  const Data = () => {
    localStorage.setItem("Name", JSON.stringify("Pratham"));
  };

  return (
    <div>
      <button onClick={Data}>Save Data</button>
    </div>
  );
}

export default App;
