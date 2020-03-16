import React from "react"
class App4 extends React.Component{
    constructor(){
             
        super()
        this.state={
            persons:"",
            Name:"",
            Email:"",
            Phone:"",
            Datetime:"",
            comment:""
        }
       
this.submithandler=this.submithandler.bind(this)
this.handlechange=this.handlechange.bind(this)

    }
    submithandler(){

        fetch('http://localhost:4000/reserve', {
         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify( {
         "Email":this.state.Email,
        "Name":this.state.Name,
        "Phone":this.state.Phone,
        "persons":this.state.persons,
         "Datetime":this.state.Datetime,
         "comment":this.state.comment 
     })
        
        
        })
        .then(res => res.text()).then(res => this.setState({status:res}))
       }
    handlechange(event){
        this.setState({
             [event.target.name]: event.target.value
        
            })}
render(){
    return(
        <div>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>RegistrationForm_v5 by Colorlib</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	
		<link rel="stylesheet" href="asset/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css"/>

	
		<link rel="stylesheet" href="asset/css/style.css"/>
	</head>

	<body>

		<div class="wrapper">
			<div class="inner">
				<form action="">
					<h3>Set The Event</h3>
					
					<div class="form-wrapper form-select">
						<label for="">People</label>
						<div class="form-holder">
							<select name="" id="" class="form-control" name="persons" value= {this.state.persons} placeholder="Enter username" onChange={this.handlechange}>
								<option value="1" class="option">1</option>
								<option value="2" class="option">2</option>
								<option value="3" class="option">3</option>
								<option value="4" class="option">4</option>
								<option value="5" class="option">5</option>
								<option value="6" class="option">6</option>
								<option value="7" class="option">7</option>
								<option value="8" class="option">8</option>
								<option value="9" class="option">9</option>
								<option value="10" class="option">10</option>
							</select>
							<i class="zmdi zmdi-chevron-down"></i>
						</div>
					</div>
					<div class="form-wrapper">
						<label for="" class="label-input">Name</label>
						<input type="text" class="form-control" name="Name" value= {this.state.Name} placeholder="Enter Name" onChange={this.handlechange}/>
					</div>
					<div class="form-wrapper">
						<label for="" class="label-input">Email</label>
						<input type="text" class="form-control"  type="text" name="Email" value= {this.state.Email} placeholder="Enter Email" onChange={this.handlechange}/>
					</div>
					<div class="form-wrapper">
						<label for="" class="label-input">Phone</label>
						<input type="text" class="form-control" type="Phone" name="Phone" value= {this.state.Phone} placeholder="Enter Phone" onChange={this.handlechange}/>
					</div>
                    <div class="form-wrapper">
						<label for="" class="label-input">Date and Time</label>
						<input type="datetime" class="form-control" name="Datetime" value= {this.state.Datetime} placeholder="YY-MM-D HH-MM-SS" onChange={this.handlechange}/>
					</div>
					<div class="form-wrapper">
						<label for="" class="label-comment">Comment</label>
						<textarea name="" id="" class="form-control" name="comment" value= {this.state.comment} placeholder="Enter comment" onChange={this.handlechange} style={{height: "69px"}}></textarea>
					</div>
					<button type="button" onClick={this.submithandler}>Send your booking</button>
				</form>
               
				<div class="image-holder">
					<img src="asset/images/registration-form-5.jpg" alt=""/>
				</div>
			</div>
		</div>

		<script src="asset/js/jquery-3.3.1.min.js"></script>
		<script src="asset/js/main.js"></script>
	</body>
</html>
</div>
    )

    
}
}
export default App4