
import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      RestName: "",
      Cuisine: "",
      Location: "",
      Rating: "",
      status: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  submithandler() {
    fetch("http://localhost:9004/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        RestName: this.state.RestName,
        Cuisine: this.state.Cuisine,
        Location: this.state.Location,
        Rating: this.state.Rating,
      }),
    })
      .then((res) => res.text())
      .then((res) => this.setState({ status: res }));
  }
  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
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
                  <a className="nav-link" href="/addrest">
                    Add Restaurant
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <title>Login V15</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="icon"
          type="image/png"
          href="/sta/images/icons/favicon.ico"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/vendor/bootstrap/css/bootstrap.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/vendor/animate/animate.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/vendor/css-hamburgers/hamburgers.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/vendor/animsition/css/animsition.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/vendor/select2/select2.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/sta/vendor/daterangepicker/daterangepicker.css"
        />

        <link rel="stylesheet" type="text/css" href="/sta/css/util.css" />
        <link rel="stylesheet" type="text/css" href="/sta/css/main.css" />

        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div
                className="login100-form-title"
                style={{ backgroundImage: "url(images/bg-01.jpg)" }}
              >
                <span className="login100-form-title-1">Add Restaurant</span>
              </div>
              <form
                className="login100-form validate-form"
                onSubmit={this.submithandler}
              >
                <div
                  className="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span className="label-input100">Name</span>
                  <input
                    className="input100"
                    type="text"
                    name="RestName"
                    value={this.state.RestName}
                    placeholder="Enter restaurant name"
                    onChange={this.handlechange}
                  />
                  <span className="focus-input100" />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-18"
                  data-validate="Password is required"
                >
                  <span className="label-input100">Cuisine</span>
                  <input
                    className="input100"
                    type="text"
                    name="Cuisine"
                    value={this.state.Cuisine}
                    placeholder="Enter restaurant cuisine"
                    onChange={this.handlechange}
                  />
                  <span className="focus-input100" />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span className="label-input100">Location</span>
                  <input
                    className="input100"
                    type="text"
                    name="Location"
                    value={this.state.Location}
                    placeholder="Enter area"
                    onChange={this.handlechange}
                  />
                  <span className="focus-input100" />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span className="label-input100">Rating</span>
                  <input
                    className="input100"
                    type="text"
                    name="Rating"
                    value={this.state.Rating}
                    placeholder="Enter rating out of 5"
                    onChange={this.handlechange}
                  />
                  <span className="focus-input100" />
                </div>
                <div className="flex-sb-m w-full p-b-30">
                  <div>{this.state.status}</div>
                </div>

                <div className="container-login100-form-btn">
                  <button
                    type="Button"
                    onClick={this.submithandler}
                    className="login100-form-btn"
                  >
                    Add Restaurant
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

