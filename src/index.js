import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter as Router } from "react-router-dom";
import swDev from "./swDev";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
swDev();
