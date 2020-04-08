import React, {Component} from "react"
class Registration extends Component{
constructor(){
    super();
this.state={
    Email:"",
    Password:"",
    Name : "",
    Gender : "",
    Phone : "",
    Status : ""

}
this.handlechange=this.handlechange.bind(this)
this.submithandler=this.submithandler.bind(this)

}
submithandler(){

    fetch('http://127.0.0.1:9004/signup', {
     method: 'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify( {
     "Email":this.state.Email,
    "Password":this.state.Password,
    "Gender":this.state.Gender,
    "Phone":this.state.Phone,
    "Name":this.state.Name
      } )
    
    
    })
    .then(res => res.text()).then(res => this.setState({status:res}))
   }
handlechange(event){
this.setState({
     [event.target.name]: event.target.value

    })
}

    render(){
        return(    <div>
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        <title>Sign Up Form by Colorlib</title>
        
        <link rel="stylesheet" href="/A/fonts/material-icon/css/material-design-iconic-font.min.css" />
 
        <link rel="stylesheet" href="/A/css/style.css" />
        <div className="main">
          <section className="signup">
        
            <div className="container">
              <div className="signup-content">
                <form method="POST" id="signup-form" className="signup-form">
                  <h2 className="form-title">Create account</h2>
                  <div className="form-group">
                    <input type="text" className="form-input" value={this.state.Name} name="Name"placeholder="Your Name" onChange={this.handlechange}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-input" value={this.state.Email} name="Email" placeholder="Your Email"  onChange={this.handlechange}/>
                  </div>
                  <div className="form-group">
                    <input type="Password" className="form-input" value={this.state.Password} name="Password"  placeholder="Password"  onChange={this.handlechange}/>
                    
                  </div>
                  <div className="form-group">
                    <input type="Phone" className="form-input" value={this.state.Phone} name="Phone"  placeholder="Enter Phone Number"  onChange={this.handlechange}/>
                  </div>
                  <div className = "col-2">
                  <div className = "input-group">
                      <label className = "label">Gender</label>
                      <div className = "p-t-10">
             <lable>   Male: 
             <div><input type="Radio" className="form-input" value={this.state.Gender==="M"} name="Gender"  onChange={this.handlechange}/></div>      </lable> 
             <lable >   Female: <div><input type="Radio" className="form-input" value={this.state.Gender==="F"} name="Gender"  onChange={this.handlechange}/></div>      </lable>                     
             
             </div>
             </div>
             </div>

                </form>
                <div className="form-group">
                    <button type="Button" onClick = {this.submithandler}> Signup</button>
                    
                  </div>
                  {this.state.status}
              </div>
            </div>
          </section>
        </div>
        /}
      </div>
    );
  }
}

export default Registration