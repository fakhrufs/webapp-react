import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App4 from "./App4";
import App3 from "./App3";
import Admin from './Admin';
import App6 from "./App6";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App1 from "./Registration";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
