import "./ChildComponent.css";
import { useState } from "react";

export default function ChildComponent() {
  const [firstNameValue, setfirstNameValue] = useState("");
  const [lastNameValue, setlastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorFirstNameMessage, setErrorFirstNameMessage] = useState("");
  const [errorLastNameMessage, setErrorLastNameMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

  //   onChanges
  const handlerFirstNameChange = (e) => {
    setfirstNameValue(e.target.value);
  };
  const handlerLastNameChange = (e) => {
    setlastNameValue(e.target.value);
  };
  const handlerEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlerPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  //   Error message ?
  const clickErrorMessageFirstName = (event) => {
    event.preventDefault();
    if (firstNameValue === "") {
      setErrorFirstNameMessage("first name input is empty");
    }
    if (lastNameValue === "") {
      setErrorLastNameMessage("last name input is empty");
    }
    if (emailValue === "") {
      setErrorEmailMessage("email input is empty");
    } else if (!isValidEmail(emailValue)) {
      setErrorEmailMessage("Please enter a valid email address");
    } else if (isValidEmail(emailValue)) {
      setErrorEmailMessage("");
    }
    if (passwordValue === "") {
      setErrorPasswordMessage("password input is empty");
    }
  };

  //email valid dunction

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //   const clickErrorMessageLastName = () => {
  //     if (lastNameValue === "") {
  //       setErrorMessage("last name input is empty");
  //     }
  //   };
  //   const clickErrorMessageEmail = () => {
  //     if (emailValue === "") {
  //       setErrorMessage("email input is empty");
  //     }
  //   };
  //   const clickErrorMessagePassword = () => {
  //     if (passwordValue === "") {
  //       setErrorMessage("Password input is empty");
  //     }
  //   };

  //   console.logs
  console.log(firstNameValue);
  console.log(lastNameValue);
  console.log(emailValue);
  console.log(passwordValue);
  console.log(errorFirstNameMessage);
  console.log(errorLastNameMessage);

  return (
    <div className="childComponentBox">
      <form>
        <div className="inputBox">
          <input
            placeholder="first name"
            type="text"
            value={firstNameValue}
            onChange={handlerFirstNameChange}
          />
          <p>{errorFirstNameMessage}</p>
        </div>
        <div className="inputBox">
          <input
            placeholder="last name"
            type="text"
            value={lastNameValue}
            onChange={handlerLastNameChange}
          />
          <p>{errorLastNameMessage}</p>
        </div>
        <div className="inputBox">
          <input
            placeholder="email"
            type="email"
            value={emailValue}
            onChange={handlerEmailChange}
          />
          <p>{errorEmailMessage}</p>
        </div>
        <div className="inputBox">
          <input
            placeholder="password"
            type="password"
            value={passwordValue}
            onChange={handlerPasswordChange}
          />
          <p>{errorPasswordMessage}</p>
        </div>
        {/* <button onClick={clickErrorMessageFirstName}>click me </button> */}
        <input
          type="submit"
          value="Submit"
          className="inputSubmit"
          onClick={clickErrorMessageFirstName}
        />
      </form>
    </div>
  );
}
