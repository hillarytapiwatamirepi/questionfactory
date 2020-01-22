import React,{Component} from "react";
import "./FormHeader.css";

export default class FormHeader extends Component{

    constructor(props){

        super(props);

    }

    render(){
    return(

    <div className="formHeaderContainer" id="formHeader" >
    <div className="formHeaderheadband">
    </div>

    <span className="formHeaderTitleContainer" id="formHeaderTitle">

        <input type="text" className="formHeaderTitleText" id="formHeaderText" placeholder="Form Title" defaultValue="Untitled Form"/>

    </span>

    <span className="formHeaderDescriptionContainer" id="formHeaderDescription">

        <input type="text" className="formHeaderTitleDescription" placeholder="Form Description"/>

    </span>

    </div>

    )


}






}