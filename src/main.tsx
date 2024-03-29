import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./input.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
