import React from 'react';
import logo from './logo.svg';
import App6 from './App6';
import App4 from './App4';
import Login from './Login';
import Registration from './Registration';
import searchtest from './AddRest';
import searchFE from './searchFE';
import Logout from './Logout';
import Header from './Header';
import Mybookings from './Mybookings'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin from "./Admin"
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
     <Header></Header>
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
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/mybookings" exact component={Mybookings} />
    <Route exact path="/admin" component={Admin} />
    </div>
    </Router>
  );
}

export default App;
