import Header from "./components/Header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;

  // api dùng chung cho 4 input
  function handleChange(inputIndentifier, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {(!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )) || <Results userInput={userInput}></Results>}
    </>
  );
}

export default App;
