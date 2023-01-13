import React, { createContext } from "react";

const LanguageContext = createContext();

function LanguageContextProvider(props) {
  return (
    <LanguageContext.Provider value={{}}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
export { LanguageContextProvider };
