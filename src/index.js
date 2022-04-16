import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import InfoProvider from "./components/Context/GetContext";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <InfoProvider>
      <App />
    </InfoProvider>
  </Router>,
  document.getElementById("root")
);
