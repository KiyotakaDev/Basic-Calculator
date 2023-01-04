import React, { createContext, useState } from "react";
import { DigitBtn } from "../components/DigitBtn";

export const Context = createContext();

 /**
   * Styles: 
   * primary: #d81e5b
   * secondary: #131a26
   * dark: #131a26
   * light: #eee
   */

export function ContextProvider(props) {
  let operatorStyle = "flex-1 bg-[#d81e5b] font-bold";
  let digitStyle = "flex-[1_1_33.333%] max-w-[33.333] bg-[#131a26]";

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ['/','*','+','-','.'];

  const updateCalc = (value) => {
    setCalc(calc + value)
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 7; i <= 9; i++) {
      digits.push(<DigitBtn key={i} dig={i} style={digitStyle}></DigitBtn>);
    }
    for (let i = 4; i <= 6; i++) {
      digits.push(<DigitBtn key={i} dig={i} style={digitStyle}></DigitBtn>);
    }
    for (let i = 1; i <= 3; i++) {
      digits.push(<DigitBtn key={i} dig={i} style={digitStyle}></DigitBtn>);
    }
    return digits;
  };

  return (
    <Context.Provider
      value={{
        createDigits,
        operatorStyle,
        digitStyle,
        calc,
        result,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
