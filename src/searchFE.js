
import React, { Component } from "react";
import "./Seac.css";
import Header_customer from './Header_customer';

class searchFE extends Component {
  constructor() {
    super();

    this.state = {
      Donors: [],
      RestName: "",
      status: "",
      restraunts:[]
    };
    this.handlechange = this.handlechange.bind(this);
  }
  async componentDidMount(){
    await fetch("http://127.0.0.1:9004/getrestraunt", {
       method: "get"
       
     }).then(res=>res.json()).then(res => this.setState({restraunts:res}))
   }
  async handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    var namess=this.state.RestName+"%"
    await fetch("http://127.0.0.1:9004/hakun", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        RestName: namess,
      }),
    })
      .then(async (res) =>await res.json())
      .then((res) => this.setState({ restraunts: res }));
  }
  
  render() {
    return (
      <div>
        <Header_customer></Header_customer>
        <div>
          {/* Navigation */}
          
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
                  onChange={this.handlechange}
                  placeholder="Enter Restaurant Name"
                />
                <a
                  href=""
                  className="search_icon"
                >
                  <i className="fas fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
        Name | Cuisine | Location | Rating
        <ul>
          {this.state.restraunts.map((arr) => (
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


