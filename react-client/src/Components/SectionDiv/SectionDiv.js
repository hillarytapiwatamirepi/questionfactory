import React,{Component} from "react";
import {BrowserRouter as Router,Link} from "react-router-dom";
import "./SectionDiv.css";
export default class SectionDiv extends Component{

    constructor(props){

        super(props);
        this.state={

            id:this.props.tag
        }

    }

    render(){
     
        return(

            <div className="SectionLink">
               
                <Link to={"/"+JSON.stringify(this.props.tag)} onClick={()=>this.props.handleLinkClick(this.props.tag)}> {this.props.tag} </Link>
               

            </div>

            
        )
    }



}


