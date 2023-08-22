// import React, { useState } from "react";
// import "./App.css";

// const DATA = [
//   {
//     id: 1,
//     placeholder: "First name",
//     type: "text",
//   },
//   {
//     id: 2,
//     placeholder: "Last name",
//     type: "text",
//   },
//   {
//     id: 3,
//     placeholder: "Email Address",
//     type: "text",
//   },
//   {
//     id: 4,
//     placeholder: "Password",
//     type: "number",
//   },
// ];

// function InputDisplay() {
//   const [inputValue, setInputValue] = useState(DATA.map(() => ""));
//   const [errorMessage, setErrorMessage] = useState(DATA.map(() => null));

//   const handleInputChange = (id, value) => {
//     setInputValue((prevInputValue) => {
//       const updatedValue = [...prevInputValue];
//       updatedValue[id - 1] = value;
//       return updatedValue;
//     });

//     setErrorMessage((prevErrorMessages) => {
//       const updatedErrors = [...prevErrorMessages];
//       if (id === 3) {
//         updatedErrors[id - 1] =
//           value.trim() === "" || !isValidEmail(value) ? "Invalid email" : null;
//       } else {
//         updatedErrors[id - 1] =
//           value.trim() === "" ? "This field is empty" : null;
//       }
//       return updatedErrors;
//     });
//   };

//   const isValidEmail = (email) => {
//     // Use a regular expression to validate the email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const hanldeClick = () => {
//     const isEmpty = inputValue.some((value) => value.trim() === "");
//     if (isEmpty) {
//       setErrorMessage(
//         inputValue.map((value, index) =>
//           value.trim() === "" ? "This field is empty" : errorMessage[index]
//         )
//       );
//     } else {
//       setErrorMessage(DATA.map(() => null));
//     }
//   };

//   return (
//     <div className="App">
//       {DATA.map((item) => (
//         <div key={item.id}>
//           <input
//             placeholder={item.placeholder}
//             type={item.type}
//             value={inputValue[item.id - 1]}
//             onChange={(e) => handleInputChange(item.id, e.target.value)}
//           />
//           <p>{errorMessage[item.id - 1]}</p>
//         </div>
//       ))}
//       <button onClick={hanldeClick}>Check Empty Fields</button>
//     </div>
//   );
// }

// export default InputDisplay;
