import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App4 from "./App4";
import App3 from "./App3";

import App6 from "./App6";

import App1 from "./Registration";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
