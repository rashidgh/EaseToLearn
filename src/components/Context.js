import React, { createContext, useState } from "react";
export let Sender = createContext();
let Context2 = ({ children }) => {
  let [state, setState] = useState();
  return (
    <Sender.Provider value={{state, setState}}>{children}</Sender.Provider>
  );
};
export default Context2;
