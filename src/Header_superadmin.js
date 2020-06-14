import React from 'react'
import Logout from './Logout'
class Header_superadmin extends React.Component{

    render(){
        return(
            <div>
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
              <li className="nav-item">
                  <a className="nav-link" href="/admin">
                    Home 
                  </a>
                </li>
              
                <li className="nav-item">
                  <a className="nav-link" href="/addrest">
                Add Restraunt 
                  </a>
                </li>
              <Logout></Logout>
              </ul>
            </div>
          </div>
        </nav>
          </div>
        )
    }
}
export default Header_superadmin