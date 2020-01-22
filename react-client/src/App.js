import React,{Component} from "react";
import Interface from "./Interface.js";
import NavBar from "./Components/NavBar/NavBar.js";
import {get, post} from "./utilities.js"
import LandingPage from "./Pages/LoginPage/LandingPage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";

import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage.js";

import { GoogleLogout } from "react-google-login";
export default class App extends Component{

    constructor(props){
        super(props);
        this.state={

            mountLanding:true,
            loggedIn:false,
            userId:null,
            givenName:null,
            imageUrl:null


 
        }
    }

    componentDidMount(){

        get("api/whoami").then((user)=>{


            if (user._id){
            this.setState({userId:user._id}) 
            this.setState({givenName:user.givenName});
            this.setState({imageUrl:user.imageUrl});
            // console.log(user._id)
          
        }})
        
    }


    handleLogin=(user)=>{

        console.log("This is my user",user)
        this.setState({userId:user._id});
        this.setState({givenName:user.givenName});
        this.setState({imageUrl:user.imageUrl});

   

    }
    handleLogout=()=>{

        console.log("logged out");

        post("api/logout");
        this.setState({userId:null});
        

    }


    

    render(){




        return(

       
            
            <>

            {

                this.state.userId&&

              <Router>
                {/* <Switch> */}
                <Route exact path="/">
                <MainPage

                handleLogout={this.handleLogout.bind(this)}
                userName ={this.state.givenName}
                imageUrl = {this.state.imageUrl}
                
        
                
                />
                </Route>

                <Route exact path="/createquiz">
                <NavBar
            
                 handleLogout={this.handleLogout.bind(this)}
                    />

                 <Interface/>
                </Route>    


                {/* </Switch> */}

                </Router>

            }

            {
                !this.state.userId&&
            <LandingPage

            handleLogin={this.handleLogin.bind(this)}
            
            
            />
            
            
            }

            </>


        )
    }



}