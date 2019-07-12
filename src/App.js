import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

    import NavbarPage from './Navbar';
    import FormPage from './Page2';
    import Acceuil from './Acceuil';
    

import FormPage3 from './AutocompletePage'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Register from './Register';
import CardExample from './CardExemple';
import Register2 from './Register2'; 


export default () => {
    
    return (
        
        <div >
      
      <BrowserRouter>
    <div className="App">
    
               
    <NavbarPage></NavbarPage>
                <Route path="/" exact component={Acceuil}/>
                <Route path="/FormPage" exact component={FormPage}/>
                <Route path="/FormPage3" exact component={FormPage3}/>    
                          
      </div>
      <div class="App2">
        <CardExample></CardExample>
          <Route path="/Register2" exact component={Register2}/>
          <Route path="/Register" exact component={Register}/>
        
      </div>
      </BrowserRouter>
     
      
      
      
              </div>
              
    )}
    
    
   
