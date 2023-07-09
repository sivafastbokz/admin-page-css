import React from 'react';
import './App.css';

function App() {
  return (
   <React.Fragment>
    <header className="header">
        <h3>AdminPage</h3>
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
      <div className='flex-container'>
        <div className='flex-items'>
          <h3>Haircut</h3>
          <p>Rs.200</p>
          <small>Includes GST</small>
        </div>
        <div className='flex-items'>
          <h3>Facial</h3>
          <p>Rs.150</p>
          <small>Includes GST</small>
        </div>
        <div className='flex-items'>
          <h3>Haircut and colouring</h3>
          <p>Rs.250</p>
          <small>Includes GST</small>
        </div>
        <div className='flex-items'>
          <h3>Haircare and Washing</h3>
          <p>Rs.300</p>
          <small>Includes GST</small>
        </div>
        <div className='flex-items'>
          <h3>Haircut and strighting</h3>
          <p>Rs.150</p>
          <small>Includes GST</small>
        </div>
        <div className='flex-items'>
          <h3>Haircut and OilMassage</h3>
          <p>Rs.250</p>
          <small>Includes GST</small>
        </div>
      </div>
      <footer className='footer'>
        <div className='flex-container-2'>
        <nav className='nav2'>
          <h4>Company</h4>
          <ul >
            <li ><a  href='Service'>Service</a></li>
            <li ><a  href='About'>About</a></li>
            <li ><a  href='Contact'>Contact</a></li>
            <li ><a  href='Privacy Policy'>PrivacyPolicy</a></li>
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
         <h3 className='ad'>AdminPage</h3>
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
        <div class="copywrite">&copy;<span>2023</span>
           <span> AdminPage. All rights reserved.</span>
        </div>
   </React.Fragment>
      
    
  );
}

export default App;
