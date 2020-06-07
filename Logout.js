import React from 'react'

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
export default Logout