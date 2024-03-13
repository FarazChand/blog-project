import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";
// import { GeneralContext } from "./store/general-context";
import GeneralContextProvider from "./store/general-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <App />
    </GeneralContextProvider>
  </React.StrictMode>
);
