import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceReUse from '../reUseComponent/ServiceReUse';
import './serviceList.css';

function ServiceList() {
  const[serviceList,setServiceList]=useState([]);

  const serviceData=async()=>{
    try {
      await axios.get('http://localhost:5000/servicelist').then((res)=>{
           setServiceList(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    serviceData();
  },[])

  return (
   <React.Fragment>
    <div className='flex'>
    {serviceList.map((data) => (
          <div key={data.id} className='container'>
            <ServiceReUse label={data.serviceName} price={data.serviceCharge} />
          </div>
        ))}
    </div>
   </React.Fragment>
  );
}

export default ServiceList;
