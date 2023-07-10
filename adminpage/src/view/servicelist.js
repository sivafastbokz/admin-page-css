import React from 'react';
import '/home/siva/Documents/admin-page-css/adminpage/src/view/servicelist.css';
import Service from '../component/Service'

function Servicelist() {
  return (
   <React.Fragment>
    <div className='flex'>
    <div className='container'>
    <Service/>
    <Service/>
    <Service/>
    <Service/>
    <Service/>
    <Service/>
    </div>
    </div>
    
   </React.Fragment>
  );
}

export default Servicelist;
