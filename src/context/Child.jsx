import React, { useContext } from "react";
import { Jio } from "./Context";
const Child = () => {
  let {state} = useContext(Jio);
    console.log(state);
    document.write(state)
  return <div>Child</div>;
};

export default Child;
