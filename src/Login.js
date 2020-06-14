
import React, {Component} from "react"
import {Redirect,withRouter} from "react-router-dom"
import Header from "./Header"
class Login extends Component {
    constructor(){
        super();
    this.state={
        Email:"",
        Password:"",
        status : ""
    }
    this.handlechange=this.handlechange.bind(this)
    this.submithandler=this.submithandler.bind(this)
    
    }
    async submithandler(){

        await fetch('http://127.0.0.1:9004/login', {
         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify( {
         "Email":this.state.Email,
        "Password":this.state.Password})
        
        
        })
        .then(res => res.json()).then(res => {localStorage.setItem('tok',res.token);localStorage.setItem('type',res.type);console.log(res)})
        if(localStorage.getItem('tok') && localStorage.getItem('tok')!=='undefined' && localStorage.getItem("type")=="Super_Admin"){
          this.props.history.push('/admin')
         } 
       else if(localStorage.getItem('tok') && localStorage.getItem('tok')!=='undefined'){
        this.props.history.push('/home')
       } 
       else{
this.setState({status:"Error while logging in"})
      }}
    handlechange(event){
    this.setState({
         [event.target.name]: event.target.value
    
        })
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
        <Header></Header>
    <title>Login V15</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
   
    <link rel="icon" type="image/png" href="/sta/images/icons/favicon.ico" />
 
    <link rel="stylesheet" type="text/css" href="/sta/vendor/bootstrap/css/bootstrap.min.css" />
    
    <link rel="stylesheet" type="text/css" href="/sta/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
    
    <link rel="stylesheet" type="text/css" href="/sta/fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
    
    <link rel="stylesheet" type="text/css" href="/sta/vendor/animate/animate.css" />
    	
    <link rel="stylesheet" type="text/css" href="/sta/vendor/css-hamburgers/hamburgers.min.css" />
    
    <link rel="stylesheet" type="text/css" href="/sta/vendor/animsition/css/animsition.min.css" />
    
    <link rel="stylesheet" type="text/css" href="/sta/vendor/select2/select2.min.css" />
    	
    <link rel="stylesheet" type="text/css" href="/sta/vendor/daterangepicker/daterangepicker.css" />
    
    <link rel="stylesheet" type="text/css" href="/sta/css/util.css" />
    <link rel="stylesheet" type="text/css" href="/sta/css/main.css" />

    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-form-title" style={{backgroundImage: 'url(images/bg-01.jpg)'}}>
            <span className="login100-form-title-1">
            
              Sign In
            </span>
          </div>
          <form className="login100-form validate-form" onSubmit ={this.submithandler}>
            <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
              <span className="label-input100">Email</span>
              <input className="input100" type="text" name="Email" value= {this.state.Email} placeholder="Enter username" onChange={this.handlechange} />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
              <span className="label-input100">Password</span>
              <input className="input100" type="Password" name="Password" value ={this.state.Password} placeholder="Enter password" onChange={this.handlechange} />
              <span className="focus-input100" />
            </div>
            <div className="flex-sb-m w-full p-b-30">
              <div className="contact100-form-checkbox">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>
              <div>
                <a href="/#" className="txt1">
                  Forgot Password?
                </a>
                {this.state.status}
              </div>
            </div>
          
            <div className="container-login100-form-btn">
              <button type = "Button" onClick = {this.submithandler} className="login100-form-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      
      </div>
    </div>
    {this.state.status}
    {localStorage.getItem('tok')}
    
    
    
    
    
    
  </div>
);
}
}
export default withRouter(Login)