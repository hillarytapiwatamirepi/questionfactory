import React,{Component} from "react";
import "./FormControl.css"

export default class FormControl extends Component{

    constructor(props){


        super(props);
    
        
        this.state = {


            currentSection:""



        }
    }

    render(){

        return(
            
            <div className="formControlContainer">

                <div className="formControlBody">

                    <div className="spawnCardcontainer" onClick={this.props.addCard}>

                        <span className="spawnCardContainerSpan">
                        Add Card
                        </span>
                    </div>
                    <div className="spawnSectionContainer" onClick={this.props.addSection}>
                    <span className="spawnSectionContainerSpan">
                        Add Section
                    </span> 
                    </div>

                    <div className="changeThemeContainer" onClick={this.props.addSection}>
                    <span className="changeThemeContainerSpan">
                       Change Theme
                    </span> 

                    </div>

                    <div className="spawnTitleDescriptionContainer" onClick={this.props.addSection}>

                    <span className="spawnTitleDescriptionContainerSpan">
                      Add Title and Description
                    </span> 

                    </div>

                    <div className="spawnVideoContainer" onClick={this.props.addSection}>

                    <span className="spawnVideoSpan">
                       Add Video
                    </span> 

                    </div>
                </div>


            </div>


        )


    }




}