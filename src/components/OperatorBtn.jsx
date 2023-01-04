import React from "react";

export function OperatorBtn({ operator, style }) {
  return <button className={style}>{operator}</button>;
}
