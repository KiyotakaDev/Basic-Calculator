import React, { useContext } from "react";
import { Context } from "../context/Context";

export function DigitBtn({ dig, style }) {
  const { updateCalc } = useContext(Context);
  return (
    <button className={style} onClick={() => updateCalc(dig.toString())}>
      {dig}
    </button>
  );
}
