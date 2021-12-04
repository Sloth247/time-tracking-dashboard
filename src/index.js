import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FrequencyProvider } from "./context/FrequencyContext";

ReactDOM.render(
  <React.StrictMode>
    <FrequencyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </FrequencyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
