import React from "react";
import ServiceList from "./ServiceList";
import Header from "./Header";
import Footer from "./Footer";
 
const companyName = 'MacAppStudio'

function App(){
    return(
        <React.Fragment>
         <Header brand={companyName}/>
         <ServiceList/>
         <Footer brand={companyName}/>
        </React.Fragment>
    ) 
}
export default App;
