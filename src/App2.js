import React from "react";
import "./App.css";
// import InputDisplay from "./InputDisplay";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    placeholder: "First name",
    type: "text",
    // active: false,
  },

  {
    id: 2,
    placeholder: "Last name",
    type: "text",
    // active: false,
  },

  {
    id: 3,
    placeholder: "Email Address",
    type: "text",
    // value: { inputValue },
    // active: false,
  },

  {
    id: 4,
    placeholder: "Password",
    type: "number",
    // active: false,
  },
];

function App() {
  // const [newDATA, setNewDATA] = useState(DATA);
  const [inputValue, setInputValue] = useState(DATA.map(() => ""));
  const [errorMessage, setErrorMessage] = useState(DATA.map(() => null));
  // const [active, setActive] = useState(null);

  const handleInputChange = (id, value) => {
    setInputValue((prevInputValue) => {
      const updatedValue = [...prevInputValue];
      updatedValue[id - 1] = value;
      return updatedValue;
    });

    setErrorMessage((prevErrorMessages) => {
      const updatedErrors = [...prevErrorMessages];
      updatedErrors[id - 1] =
        value.trim() === "" ? "This field is empty" : null;
      return updatedErrors;
    });
  };

  // const newInputValue = () => {
  //   setInputValue(inputValue);
  // };

  const hanldeClick = () => {
    // setInputValue(id.target.value);
    const isEmpty = inputValue.some((value) => value.trim() === "");
    if (isEmpty) {
      setErrorMessage(
        inputValue.map((value) =>
          value.trim() === "" ? "This field is empty" : null
        )
      );
    } else {
      setErrorMessage(DATA.map(() => null));
    }
  };

  console.log(errorMessage);
  return (
    <div className="App">
      {DATA.map((item) => (
        <div key={item.id}>
          <input
            placeholder={item.placeholder}
            type={item.type}
            value={inputValue[item.id - 1]}
            onChange={(e) => handleInputChange(item.id, e.target.value)}
          />
          <p>{errorMessage[item.id - 1]}</p>
        </div>
      ))}
      <button onClick={hanldeClick}>Onclick</button>
    </div>
  );
}

export default App;
