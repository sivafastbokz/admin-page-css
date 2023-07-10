import React from "react";
import '/home/siva/Documents/admin-page-css/adminpage/src/view/footer.css'

function Footer(props){
    return(
        <React.Fragment>
          <footer className='footer'>
        <div className='flex-container-2'>
        <nav className='nav2'>
          <h4>Business</h4>
          <ul >
            <li><a  href='Service'>Service</a></li>
            <li><a  href='About'>About</a></li>
            <li><a  href='Contact'>Contact</a></li>
            <li><a  href='Privacy Policy'>PrivacyPolicy</a></li>
          </ul>
        </nav>
        </div>
        <div class="footer-col">
  	 		<h4>Get Help</h4>
  	 		<ul>
  	 		<li><a href='FQA'>FAQ</a></li>
  	 		<li><a href='Order Stauts'>Order Status</a></li>
  	 		<li><a href='Payment Options'>PaymentOptions</a></li>
            <li><a href='Terms of Service'>Terms of Service</a></li>
  	 		</ul>
  	 		</div>
         <h3 className='ad'>{props.brand}</h3>
         <h4 className='followus'>Follow Us On:</h4>
         <br/>
         <div className='socialmedia'>
            <a href='Facebook'><i class="fa-brands fa-facebook fa-2xl"></i></a>
  	 		<a href='Twitter'><i class="fa-brands fa-twitter fa-2xl"></i></a>
  	 		<a href='Instagram'><i class="fa-brands fa-instagram fa-2xl"></i></a>
            <a href='Linkedin'><i class="fa-brands fa-linkedin fa-2xl"></i></a>
            <a href='Tiktok'><i class="fa-brands fa-tiktok fa-2xl"></i></a>
            <a href='Youtube'><i class="fa-brands fa-youtube fa-2xl"></i></a>
         </div>
         <h4 className='findus'>FindUs:</h4>
         <address>C 17, Guru Nanak Pura,delhi-21</address>
         {/* <h4 className='mailus'>MailUs</h4> */}
      </footer>
      <hr></hr>
        <div class='copywrite'>&copy;<span>2023</span>
           <span> DemoSalon. All rights reserved.</span>
        </div>
        </React.Fragment>
    )
}
export default Footer;

