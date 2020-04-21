import React from 'react';
import logo from './logo.svg';
import App6 from './App6';
import App4 from './App4';
import Login from './Login';
import Registration from './Registration';
import searchtest from './AddRest';
import searchFE from './searchFE';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';




function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" render={props => (
      <React.Fragment>
      <link
          href="Template/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Custom styles for this template */}
        <link href="Template/css/heroic-features.css" rel="stylesheet" />
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/#">
              Welcome!
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reserve">
                    Reserve
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>{/* Navigation */}
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/#">
              Welcome!
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reserve">
                    Reserve
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/searchrest">
                    Search Restaurant
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/addrest">
                    Add Restaurant
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <header className="App-header">
            
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bilal Ahsan Salam <code>14081</code> Fakhruddin Saifuddin <code>14819</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          WebApp Project
        </a>
      </header>

      </React.Fragment>
    )} />
    <Route exact path="/home" component={App6} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Registration} />
    <Route exact path="/reserve" component={App4} />
    <Route exact path="/addrest" component={searchtest} />
    <Route exact path="/searchrest" component={searchFE} />

    </div>
    </Router>
  );
}

export default App;
