import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Title from "./components/Header/Title";
// import { useState } from "react";
// import InputDisplay from "./InputDisplay";
// import ChildComponent from "./ChildComponent";

function App() {
  return (
    <div className="App">
      {/* <ChildComponent /> */}

      <Title />
      <Main />
    </div>
  );
}

export default App;
