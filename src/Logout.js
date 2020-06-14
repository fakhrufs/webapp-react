import React from 'react'
import {withRouter} from "react-router-dom"
class Logout extends React.Component{
constructor(){
    super();
this.submithandler=this.submithandler.bind(this)
}
submithandler(){
    localStorage.removeItem('tok')
    localStorage.removeItem('type')
    this.props.history.push('/')
}
    render(){
        return(
            <div>
                <button onClick={this.submithandler}>Log Out</button>
            </div>
        )
    }
}
export default withRouter(Logout)