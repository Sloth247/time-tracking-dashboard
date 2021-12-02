import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FrequencyProvider } from "./context/FrequencyContext";

ReactDOM.render(
  <React.StrictMode>
    <FrequencyProvider>
      <App />
    </FrequencyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
