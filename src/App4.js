import React from "react";
import Header_customer from "./Header_customer"
class App4 extends React.Component {
  constructor() {
    super();
    this.state = {
      noofpeople: "",
      restraunts:[],
      reservationname: "",
      selected_restraunt:"",
      email: "",
      phone: "",
      timereservation: "",
      comments: "",
      status : ""
    };

    this.submithandler = this.submithandler.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }
  async componentDidMount(){
   await fetch("http://127.0.0.1:9004/getrestraunt", {
      method: "get"
      
    }).then(res=>res.json()).then(res => this.setState({restraunts:res}))
  }
  submithandler() {
    fetch("http://127.0.0.1:9004/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json","authorization":localStorage.getItem('tok') },
      body: JSON.stringify({
        email: this.state.email,
        reservationname: this.state.reservationname,
        restname:this.state.selected_restraunt,
        phone: this.state.phone,
        noofpeople: this.state.noofpeople,
        timereservation: this.state.timereservation,
        comments: this.state.comments,
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
<Header_customer></Header_customer>
        <html>
        
          <head>
            <meta charset="utf-8" />
            
            <title>RegistrationForm_v5 by Colorlib</title>
            
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />

            <link
              rel="stylesheet"
              href="asset/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css"
            />
            

            <link rel="stylesheet" href="asset/css/style.css" />
            
          </head>
          

          <body>
          
            <div class="wrapper">
            
              <div class="inner">
              
                <form action="">
                  <h3>Set The Event</h3>

                  <div class="form-wrapper form-select">
                    <label for="">People</label>
                    <div class="form-holder">
                      <select
                        name=""
                        id=""
                        class="form-control"
                        name="noofpeople"
                        value={this.state.noofpeople}
                        placeholder="Enter username"
                        onChange={this.handlechange}
                      >
                        <option value="1" class="option">
                          1
                        </option>
                        <option value="2" class="option">
                          2
                        </option>
                        <option value="3" class="option">
                          3
                        </option>
                        <option value="4" class="option">
                          4
                        </option>
                        <option value="5" class="option">
                          5
                        </option>
                        <option value="6" class="option">
                          6
                        </option>
                        <option value="7" class="option">
                          7
                        </option>
                        <option value="8" class="option">
                          8
                        </option>
                        <option value="9" class="option">
                          9
                        </option>
                        <option value="10" class="option">
                          10
                        </option>
                      </select>
                      <i class="zmdi zmdi-chevron-down"></i>
                    </div>
                  </div>
                  
                  <div class="form-wrapper form-select">
                    <label for="">Restaurants</label>
                   
                    <div class="form-holder">
                     
                      <select
                        name=""
                        id=""
                        class="form-control"
                        name="selected_restraunt"
                        value={this.state.selected_restraunt}
                        placeholder="Enter username"
                        onChange={this.handlechange}
                      >
                         {
                       this.state.restraunts.map(arr=>
                        <option key={arr.RestName} value={arr.RestName} class="option">
                          {arr.RestName}
                        </option>
                       )}
                      </select>
                       
                      <i class="zmdi zmdi-chevron-down"></i>
                       
                    </div>
                       
                  </div>
                        
                  <div class="form-wrapper">
                    <label for="" class="label-input">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="reservationname"
                      value={this.state.reservationname}
                      placeholder="Enter Name"
                      onChange={this.handlechange}
                    />
                  </div>
                  <div class="form-wrapper">
                    <label for="" class="label-input">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      type="text"
                      name="email"
                      value={this.state.email}
                      placeholder="Enter Email"
                      onChange={this.handlechange}
                    />
                  </div>
                  <div class="form-wrapper">
                    <label for="" class="label-input">
                      Phone
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      type="phone"
                      name="phone"
                      value={this.state.phone}
                      placeholder="Enter Phone"
                      onChange={this.handlechange}
                    />
                  </div>
                  <div class="form-wrapper">
                    <label for="" class="label-input">
                      Date and Time
                    </label>
                    <input
                      type="datetime"
                      class="form-control"
                      name="timereservation"
                      value={this.state.timereservation}
                      placeholder="YY-MM-D HH-MM-SS"
                      onChange={this.handlechange}
                    />
                  </div>
                  <div class="form-wrapper">
                    <label for="" class="label-comment">
                      Comment
                    </label>
                    <textarea
                      name=""
                      id=""
                      class="form-control"
                      name="comments"
                      value={this.state.comments}
                      placeholder="Enter comment"
                      onChange={this.handlechange}
                      style={{ height: "69px" }}
                    ></textarea>
                  </div>
                  <button type="button" onClick={this.submithandler}>
                    Send your booking
                  </button>
                  {this.state.status}
                </form>

                <div class="image-holder">
                  <img src="asset/images/registration-form-5.jpg" alt="" />
                </div>
              </div>
            </div>
{this.state.noofpeople}
{this.state.selected_restraunt}
            <script src="asset/js/jquery-3.3.1.min.js"></script>
            <script src="asset/js/main.js"></script>
          </body>
        </html>
      </div>
    );
  }
}
export default App4;
