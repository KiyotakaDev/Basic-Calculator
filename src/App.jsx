import React, { useContext } from "react";
import { Context } from "./context/Context";
import { OperatorBtn } from "./components/OperatorBtn";
import { DigitBtn } from "./components/DigitBtn"

function App() {
  const { createDigits } = useContext(Context);

  /**
   * Styles: 
   * primary: #d81e5b
   * secondary: #131a26
   * dark: #131a26
   * light: #eee
   */


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>

        <div className="operators">
          <OperatorBtn operator="/"></OperatorBtn>
          <OperatorBtn operator="*"></OperatorBtn>
          <OperatorBtn operator="+"></OperatorBtn>
          <OperatorBtn operator="-"></OperatorBtn>

          <OperatorBtn operator="DEL"></OperatorBtn>
        </div>

        <div className="digits">
          {createDigits()}
          <DigitBtn dig="0"></DigitBtn>
          <DigitBtn dig="."></DigitBtn>

          <DigitBtn dig="="></DigitBtn>
        </div>
      </div>
    </div>
  )
}

export default App;
