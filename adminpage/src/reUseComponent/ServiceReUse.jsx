import React from "react";

function ServiceReUse({label,price,className}){
    return(
     <>
    <div className={className}>
     <h3>{label}</h3>
     <p>Rs:{price}</p>
    </div>
     </>
    )
}
export default ServiceReUse;