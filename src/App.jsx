import React, { useContext } from "react";
import { Context } from "./context/Context";
import { OperatorBtn } from "./components/OperatorBtn";
import { DigitBtn } from "./components/DigitBtn";
import { Equal } from "./components/Equal";
import { DeleteBtn } from "./components/DeleteBtn";

function App() {
  const { createDigits, operatorStyle, digitStyle, calc, result, deleteStyle } =
    useContext(Context);

  /**
   * Styles:
   * primary: #d81e5b
   * secondary: #131a26
   * dark: #131a26
   * light: #eee
   */

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white rounded-[16px] overflow-hidden shadow-[20px_20px_64px_rgba(0,0,0,1)] dark:bg-black">
        <div className="p-4 text-right bg-[#131a26] text-[#eee] text-2xl font-light">
          {result ? (
            <span className="text-sm text-[#888]">({result})</span>
          ) : (
            ""
          )}
          &nbsp;
          {calc || "0"}
        </div>

        <div className="flex">
          <OperatorBtn operator="/" style={operatorStyle}></OperatorBtn>
          <OperatorBtn operator="*" style={operatorStyle}></OperatorBtn>
          <OperatorBtn operator="+" style={operatorStyle}></OperatorBtn>
          <OperatorBtn operator="-" style={operatorStyle}></OperatorBtn>

          <DeleteBtn type="DEL" style={deleteStyle}></DeleteBtn>
        </div>

        <div className="flex flex-wrap">
          {createDigits()}
          <DigitBtn dig="0" style={digitStyle}></DigitBtn>
          <DigitBtn dig="." style={digitStyle}></DigitBtn>

          <Equal type="=" style={digitStyle}></Equal>
        </div>
      </div>
    </div>
  );
}

export default App;
