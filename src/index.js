import { createRoot } from "react-dom/client";

import Counter from "./redux/Counter";
import { Provider } from "react-redux";

import store from './redux/store';


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
