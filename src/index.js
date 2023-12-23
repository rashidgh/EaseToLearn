import { createRoot } from "react-dom/client";

import Counter from "./redux/Counter";
import { Provider } from "react-redux";

import store from "./redux/store";
import Context from "./context/Context";
import Parent from "./hoc/Parent";

// ! Redux:
// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// );

// !Context API:
// createRoot(document.getElementById("root")).render(
//   <Context>
//     <Parent />
//   </Context>
// );

// !HOC:
createRoot(document.getElementById("root")).render(<Parent />)
