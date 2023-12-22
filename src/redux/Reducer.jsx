let initialState = 0;
let counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    case "Reset":
      return (state = 0);

    default:
     return state;
  }
};
export default counterReducer;
