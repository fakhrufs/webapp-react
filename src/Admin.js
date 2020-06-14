import React from 'react'
import Header_superadmin from "./Header_superadmin"
class Admin extends React.Component{
  constructor(){
    super()
    this.state={
      bookings:[]
    
    }}
  async componentDidMount(){
    console.log('hello');
    if(localStorage.getItem('type')=='Super_Admin'){
        fetch('http://localhost:9004/admingetrestrauntss', {
         method: 'get',
         headers:new Headers({'Content-Type':'application/json','authorization':localStorage.getItem('tok')})
        }).then(res=>res.json()).then(res=>this.setState({bookings:res}))
    }
      }
    
      render() {
        if(localStorage.getItem('tok')!=='undefined' && localStorage.getItem('type')=='Super_Admin')
        return(<div>
            
          <Header_superadmin></Header_superadmin>
        Admin
        <br></br>
        {this.state.bookings.map(arr=>
          <li key={arr.reservationid}>
          
            <div class="list-group">
            <button onClick={()=>this.OnAccept(arr.reservationid)}>Accept</button>
        <button onClick={()=>this.OnDelete(arr.reservationid)}>Decline</button>
      <a href="" class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{arr.restName}</h5>
        <small>No of People:{arr.noofpeople}</small>
        <small>ID:{arr.reservationid}</small>
        <br></br>
    
        </div>
        <p class="mb-1">{arr.reservationname}</p>
        <small>{arr.timereservation}</small>
      </a>
      
    </div>
          </li>)}
        </div>)
    }
}
export default Admin