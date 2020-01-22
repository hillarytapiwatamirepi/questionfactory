import React,{Component} from "react";

import FormBody from "../FormBody/FormBody.js";
import FormHeader from "../FormHeader/FormHeader.js";
import FormFooter from "../FormFooter/FormFooter.js";
import CardSectionsContainer from "../CardSectionsContainer/CardSectionsContainer.js";

import {BrowserRouter as Router,Switch} from "react-router-dom";


import "./Form.css"
export default class Form extends Component{



    constructor(props){

    

        super(props);



    }
    render(){

    return(

   

        <Router>
        


        <div className="formContainer">

        <FormHeader/>
        
        <FormBody/>
       
        </div>

        

        </Router>

    

    )

    }





}