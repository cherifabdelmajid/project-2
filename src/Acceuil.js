import React from 'react';
import CardExample from './CardExemple';
import {BrowserRouter, Route, Link } from "react-router-dom";
function Acceuil(){
    return(
<div>
<img height="500px"
    background-size="cover"
    width="100%" src="/Transportation.png"/>
        
        <h1> Welcome to our website </h1>
        
        <h2>This site will help you to move easily
            without waiting in a queue or oblige to learn the rules of the road to take a permit and after buying a car very expensive so this site allows you to avoid stress and panic of the road, simply it makes your daily life easier .
            Just create an account so that we can use our orders. Once you have created an account. You can fill out a form for a travel request and then we will send you a message or we will tell you if we are available or not.


            
             
        </h2>
    <h3>If you need help you can contact us on our phone number 94867491.</h3>
    <CardExample></CardExample>
    

    </div>
    )}


        export default Acceuil;