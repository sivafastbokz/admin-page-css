import React from 'react';
import FooterReUse from '../reUseComponent/FooterReUse';
import './footer.css'

const reuse = [
  {href:'App Development',label:'AppDevelopment'},
  {href:'Technology Consulting',label:'TechnologyConsulting'},
  {href:'Research and Development',label:'ResearchandDevelopment'}
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
          <h4>Business</h4>
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
            <h4 className='followus'>FOLLOW US:</h4>
            <a href='Linkedin'><i class='fa-brands fa-linkedin fa-2xl'></i></a>
            <a href='Youtube'><i class='fa-brands fa-youtube fa-2xl'></i></a>
         </div>
      </footer>
        <div class='copyright'>
           <span> MacAppStudio &copy; Copyright <span>2023</span> | All rights reserved.</span>
        </div>
        </React.Fragment>
    )
}
export default Footer;

