import React, { createContext } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const createDigits = () => {
    const digits = [];

    for (let i = 7; i <= 9; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    for (let i = 4; i <= 6; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    for (let i = 1; i <= 3; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };

  return (
    <Context.Provider
      value={{
        createDigits,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
