import React,{Component} from "react";
import GoogleLogin from "react-google-login";
import {post} from "../../utilities.js";
import "./LandingPage.css";


const GOOGLE_CLIENT_ID = "315668836139-p2mcra1vsop11dqhdb83i0kqn4k8shkr.apps.googleusercontent.com";

import "../../Components/NavBar/NavBar.js";


class LandingPage extends Component{

    constructor(props){

        super(props);
        this.signInDropdownTextRef = React.createRef();
        this.signInDropwdownOptionsRef  =React.createRef();

        this.state={

            role:"Role",
            roleSet:false



        }



    }

    onChangeDropDown(){

        const signInDropdownText = this.signInDropdownTextRef.current;
        signInDropdownText.classList.toggle("signInDropdownTextAlternate");
        const signInDropwdownOptions = this.signInDropwdownOptionsRef.current;
        signInDropwdownOptions.classList.toggle("signInDropwdownOptionsAlternate");




    }
    changeDropDownValue(ev){
        const innerText = ev.target.innerText
        const signInDropdownText = this.signInDropdownTextRef.current;
        signInDropdownText.innerText = innerText;
        const signInDropwdownOptions = this.signInDropwdownOptionsRef.current;
        signInDropwdownOptions.className = "signInDropwdownOptions";

        this.setState({role:innerText});
        this.setState({roleSet:true});




    }

    handleLogin=(res)=>{


        console.log("Handle login res",res);
        const UserToken = res.tokenObj.id_token;
        post("api/login",{token:UserToken,role:this.state.role}).then((user)=>this.props.handleLogin(user))
        console.log("This is my response",res);
    }
        


    render(){


        return(

            <div className="loginFormContainer">

                <div className="loginLogoContainer">

                </div>

                <span className="loginFormMotto">


                    Africa's largest learning platform


                </span>

               


                    <div className="signInDropdownContainer">

                        <div className="signInDropdownText" ref={this.signInDropdownTextRef} onClick={this.onChangeDropDown.bind(this)}>

                            {this.state.role}

                        </div>

                        <div className="signInDropwdownOptions" ref={this.signInDropwdownOptionsRef}>
                        <ul>
                        <li onClick={this.changeDropDownValue.bind(this)}>Student</li>
                        <li onClick={this.changeDropDownValue.bind(this)}>Lecturer</li>
                        </ul>
                        </div>

                    </div>

            
                

                {
         
                    
                    this.state.roleSet &&


                        
                        <GoogleLogin

                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.handleLogin.bind(this)}
                        onFailure={(err)=>console.log(err)}

                        className="signInButtonContainer"

                        />
                        
                        
        







                

                }




            </div>



        )
    }





}

export default LandingPage;