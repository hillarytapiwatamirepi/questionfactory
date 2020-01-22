import React,{Component} from "react";
import  {GoogleLogout}  from "react-google-login";
import "./NavBar.css";
import "../../Pages/LoginPage/LandingPage.css";

import {BrowserRouter as Router,Link} from "react-router-dom";

const GOOGLE_CLIENT_ID = "315668836139-p2mcra1vsop11dqhdb83i0kqn4k8shkr.apps.googleusercontent.com";
export default class NavBar extends Component{

    constructor(props){

        super(props);

    }

    // publishQuiz(){

    //     post
    // }

    // componentDidMount(){


    //     console.log(this.props.handleLogout);
    // }

    render(){


        return(
            // <Router>
            <div className="NavbarContainer">

                <div className="NavbarLogoContainer">



                </div>

                <div className="NavbarLinks">
                    <div className="navbarLink">
                    <Link to="/">Publish</Link>
                    </div>
                    <div className="navbarLink">
                    <Link to="/">Home</Link>
                    </div>
                    <div className="googleLogout">

                    <GoogleLogout

                           clientId={GOOGLE_CLIENT_ID}
                           buttonText="Logout"
                           onLogoutSuccess={this.props.handleLogout}
                           onFailure={(err)=>console.log(err)}
   
                           className="signInButtonContainer"                
                    
                    
                    />
                    </div>


                </div>
            </div>
            // </Router>


        )
    }



}