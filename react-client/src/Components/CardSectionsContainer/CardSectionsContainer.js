import React,{Component} from "react";
import "./CardSectionsContainer.css";
import {BrowserRouter as Router,Link} from "react-router-dom";
import SectionDiv from "../SectionDiv/SectionDiv.js";


// import CardSection
export default class CardSectionsContainer extends Component{

    constructor(props){

        super(props);

    }

    render(){


        let SectionDivs = this.props.sectionsInfo.map((section)=>(

            <SectionDiv 
            key={section.sectionId}
             tag={section.sectionId}
             handleLinkClick={this.props.handleLinkClick}
             />


        ))
        return(
            <>
            
               
                 
           
                    {
                    SectionDivs
                    }

                    {/* {console.log("sections info",this.props.sectionsInfo)} */}
            
                    
                   

            
            
            </>
            


        )


    }



}