import React from "react";
import '/home/siva/Documents/admin-page-css/adminpage/src/view/header.css'


function Header(props){
    return(
        <React.Fragment>
        <header className="header">
        <h3>{props.brand}</h3>
        <nav className='nav'>
          <ul>
            <li><a href='Home'>Home</a></li>
            <li><a href='Service'>Service</a></li>
            <li><a href='About'>About</a></li>
            <li><a href='Contact'>Contact</a></li>
            <li><a href='Account'>Account</a></li>
          </ul>
        </nav>
      </header>
        </React.Fragment>
    )
}
export default Header;