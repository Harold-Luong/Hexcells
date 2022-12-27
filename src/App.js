import { useRef, useState, useEffect } from "react";
import HexCellsGame from "./component/HexCellsGame";

function App() {
  // const [inputValue, setInputValue] = useState(0);
  // const previousInputValue = useRef("");

  // useEffect(() => {
  //   previousInputValue.current = inputValue;
  // }, [inputValue]);

  // const changeState = () => {
  //   setInputValue((inputValue) => inputValue + 1);
  //   console.log(inputValue);
  //   console.log(previousInputValue.current);
  // };

  return (
    <>
      {/* <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      <button onClick={changeState}>onClick</button> */}
      <HexCellsGame />
    </>
  );
}

export default App;
