
import React, { Component } from "react";
import "./Seac.css";
class searchFE extends Component {
  constructor() {
    super();

    this.state = {
      Donors: [],
      RestName: "",
      status: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submitHandler() {
    fetch("http://127.0.0.1:9004/hakun", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        RestName: this.state.RestName,
      }),
    })
      .then((res) => res.json())
      .then((arr) => this.setState({ Donors: arr }));
  }
  render() {
    return (
      <div>
        <div>
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
                 
                </ul>
              </div>
            </div>
          </nav>
          {/*---- Include the above in your HEAD tag --------*/}
          <title>Awesome Search Box</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossOrigin="anonymous"
          />
          {/* Coded with love by Mutiullah Samim*/}

          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input"
                  name="RestName"
                  value={this.state.RestName}
                  onChange={this.handlechange}
                  type="text"
                  placeholder="Enter Restaurant Name"
                />
                <a
                  href="#"
                  className="search_icon"
                  onClick={this.submitHandler}
                >
                  <i className="fas fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
        Name | Cuisine | Location | Rating
        <ul>
          {this.state.Donors.map((arr) => (
            <li key={arr.RestName}>
              {arr.RestName + " | "}
              {arr.Cuisine + " | "}
              {arr.Location + " | "}
              {arr.Rating + ""}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default searchFE;


