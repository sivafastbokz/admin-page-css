import React, { useState } from 'react';
import HeaderReUse from '../reUseComponent/HeaderReUse';
import './header.css'

const links = [
  {href:'Who we are?',label:'Who we are?'},
  {href:'What we do?',label:'What we do?'},
  {href:'How we do it?',label:'How we do it?'},
  {href:'SuccessStoroes',label:'Success Stories'},
  {href:'For Enterprises',label:'For Enterprises'}
]

function Header(props){
     const[showNavBar,setShowNavBar]=useState(false);

    return(
        <React.Fragment>
        <header className='header'>
        <h2>{props.brand}</h2>
        <nav className={showNavBar ? 'nav expand': 'nav'}>
          <ul>
            {links.map((link)=>{
             return(
              <HeaderReUse href={link.href} label={link.label}/>
             )
            })}
            <li><button>Get a Proposal</button></li>
          </ul>
        </nav>
        <button className='btn-icon' onClick={()=>{setShowNavBar(!showNavBar)}}><i class="fa-solid fa-bars fa-lg"></i></button>
      </header>
        </React.Fragment>
    )
}
export default Header;