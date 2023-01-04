import React, { useContext } from "react";
import { Context } from "../context/Context";

export function OperatorBtn({ operator, style }) {
  const { updateCalc } = useContext(Context);
  return (
    <button className={style} onClick={() => updateCalc(operator)}>
      {operator}
    </button>
  );
}
