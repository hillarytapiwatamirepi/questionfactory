import React,{Component} from "react";


export default class Option extends Component{

    constructor(props){
        super(props);

        this.state = {

            optionType:this.props.type,
            value:this.props.value,
            id:this.props.optionId

        }



}
    handleChange(ev){

        const option = ev.target.value
        this.setState({value:option});
        this.props.handleOptionChange({id:this.state.id,value:option});
        // console.log("this is my change",this.state.value);
    }
    render(){

        return(

            <div className="Card inputGroupContainer">         
            <div className="Card inputGroupContainerPrepend">
                <input type={this.props.type} disabled={true}/>
            </div>

            <input type="text" id="optionText" onBlur={this.props.saveOption} className="Card optionText" defaultValue={this.state.value} onChange={this.handleChange.bind(this)}/>
            <div className="Card inputGroupContainerAppend">
                <div className="Card optionImageupload" id="upload_image"></div>
                <div className="Card closeOptionContainer" onClick={this.props.removeChild}>
                </div>
            </div>
        </div>
        )
    }



}