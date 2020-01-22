import React,{Component} from "react";
import {BrowserRouter as Router,Link,Switch} from "react-router-dom";
import "./Mainpage.css";

import  {GoogleLogout}  from "react-google-login";


const GOOGLE_CLIENT_ID = "315668836139-p2mcra1vsop11dqhdb83i0kqn4k8shkr.apps.googleusercontent.com";
export default class MainPage extends Component{


    constructor(props){

        super(props);


    }

    render(){


        return(
       
            <div className="mainPageContainer">
                <div className="mainPageFormalities">

                <div className="mainPageLogoContainer">

                </div>
                <span className="mainPageGreeting">
                    Hello {this.props.userName}
                </span>

                </div>

                <div className="mainPageAccessories">
                    <div className="mainPageProfileContainer" style={{backgroundImage:`url(${this.props.imageUrl})`}}>
                    </div>

                </div>

                <div className="mainPageLinks">

                    <div className="mainPageLink">

                        <Link to="/courses">Courses</Link>

                    </div>

                    <div className="mainPageLink">

                        <Link to="/profile">Profile</Link>

                    </div>

                    <div className="mainPageLink">

                        <Link to="/createquiz">Create Quiz</Link>

                    </div>

                    <div className="mainPageLink">

                        <GoogleLogout

                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={this.props.handleLogout}
                        onFailure={(err)=>console.log(err)}
  
                        
                        
                        />

   

                    </div>
                </div>








            </div>

     





        )





    }









}