import React from "react";
import Servicelist from "./servicelist";
import Header from "./header";
import Footer from "./footer";
 


function App(){
    const companyName = 'Demosalon'
    return(
        <React.Fragment>
         <Header brand={companyName}/>
         <Servicelist/>
         <Footer brand={companyName}/>
        </React.Fragment>
    ) 
}
export default App;
