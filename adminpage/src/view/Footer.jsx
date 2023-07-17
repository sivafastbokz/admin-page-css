import React from 'react';
import FooterReUse from '../reUseComponent/FooterReUse';
import './footer.css'

const reuse = [
  {href:'App Development',label:'App Development'},
  {href:'Technology Consulting',label:'Technology Consulting'},
  {href:'Research and Development',label:'Research and Development'}
]
const reuse2=[
  {href:'How we do it?',label:'How we do it?'},
  {href:'SuccessStoroes',label:'Success Storoes'},
  {href:'For Enterprises',label:'For Enterprises'},
  {href:'Who are we',label:'Who are we'},
  {href:'Contact Us',label:'Contact Us'},
  {href:'Careers',label:'Careers'},
  {href:'Accelerator',label:'Accelerator'},
]

function Footer(props){
    return(
        <React.Fragment>
          <footer className='footer'>
        <div className='flex-container-2'>
        <nav className='nav2'>
        <h3 className='ad'>{props.brand}</h3>
         <a href='What we do'><span className='span'>What we do?</span></a> 
          <ul >
            {reuse.map((content)=>{
              return(
                <FooterReUse href={content.href} label={content.label}/>
              )
            })}
          </ul>
        </nav>
        </div>
        <div class='footer-col'>
  	 		<ul>
  	 		{reuse2.map((links)=>{
          return(
            <FooterReUse href={links.href} label={links.label}/>
          )
        })}
  	 		</ul>
  	 		</div> 
         <div className='socialmedia'>
            <h2 className='followus'>FOLLOW US</h2>
            <ul>
              <li><a href='Linkedin'><i class="fa-brands fa-linkedin-in fa-xl"></i></a></li>
              <li><a href='Youtube'><i class='fa-brands fa-youtube fa-xl'></i></a></li>
            </ul>
         </div>
      </footer>
        <div class='copyright'>
           <span> MacAppStudio &copy; Copyright <span>2023</span> |All rights reserved.</span>
        </div>
        </React.Fragment>
    )
}
export default Footer;

