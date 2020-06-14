import React, {Component} from "react"

class App3 extends Component {
    constructor(){
        super();
    this.state={
        Email:"",
        Password:"",
        Name : "",
        Gender : "",
        Phone : "",
        usertypeid:1

    }
    this.handlechange=this.handlechange.bind(this)
    this.submithandler=this.submithandler.bind(this)
    
    }
    submithandler(){

        fetch('http://localhost:4000/Signup', {
         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify( {
         "Email":this.state.Email,
        "Password":this.state.Password,
        "Gender":this.state.Gender,
        "Phone":this.state.Phone,
        "Name":this.state.Name,
        'usertype':this.state.usertypeid
          } )
        
        
        })
       }
    handlechange(event){
    this.setState({
         [event.target.name]: event.target.value
    
        })
    }
}

export default App3;