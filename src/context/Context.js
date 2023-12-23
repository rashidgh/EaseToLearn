import React, { createContext, useState } from 'react';
export const Jio = createContext();

const Context = ({ children }) => {
    let[state,setState]=useState("Hello I'm contextAPI")
  return (
      <Jio.Provider value={{state}}>
          {children}
    </Jio.Provider>
  )
}

export default Context