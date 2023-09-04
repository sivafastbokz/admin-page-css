import React, { useEffect, useState } from 'react';
import axiosClient from '../helper/axiosClient';
import ServiceReUse from '../reUseComponent/ServiceReUse';
import './serviceList.css';

function ServiceList() {
  const[serviceList,setServiceList]=useState([]);

  const serviceData=async()=>{
    try {
      await axiosClient.get('/servicelist').then((res)=>{
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
