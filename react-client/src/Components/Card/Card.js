import React,{Component} from "react";
import ReactDOM from "react-dom";
import Option from "../Option/Option.js";



import "./Card.css";
import "./Dropdown.css";
import { post } from "../../utilities.js";


export default class Card extends Component{

    constructor(props){
        super(props);


        this.optionsListContainerRef = React.createRef();
        this.optionsSelectionTextContainerRef = React.createRef();
        this.spawnOptionButtonRef = React.createRef();
        this.optionsContainerRef = React.createRef();
        this.option = React.createRef();

    
        
        this.state = {
            sectionId:this.props.sectionId,
            id:this.props.cardId,
            options:this.props.options,
            dropDownValue:"RadioButton",
            optionsData:[],
            currentOptionId:0,
            currentOptionState:"radio",
            question:this.props.question,

            questionData:{}


        }

        this.addRadioButton = this.addRadioButton.bind(this);
        this.addCheckBox = this.addCheckBox.bind(this);
        this.changedropDownValueCheck = this.changedropDownValueCheck.bind(this);
        this.changedropDownValueRadio = this.changedropDownValueRadio.bind(this);
        this.addOption = this.addOption.bind(this)
        this.ondropDownChange = this.ondropDownChange.bind(this);        

    }
  


    changedropDownValueRadio(){
        this.setState({dropDownValue:"RadioButton"});
        this.setState({currentOptionState:"radio"});
        const optionsListContainer = this.optionsListContainerRef.current;
        optionsListContainer.className = "optionsListContainer";
        const spawnOptionButtonRef = this.spawnOptionButtonRef.current;
        spawnOptionButtonRef.className = "spawnOptionButton";

        const optionsSelectionTextContainer = this.optionsSelectionTextContainerRef.current;
        optionsSelectionTextContainer.className = "optionsSelectionTextContainer";

    }

    changedropDownValueCheck(){

        this.setState({dropDownValue:"Checkbox"});
        this.setState({currentOptionState:"checkbox"});
        const optionsListContainer = this.optionsListContainerRef.current;
        optionsListContainer.className = "optionsListContainer";
        const spawnOptionButtonRef = this.spawnOptionButtonRef.current;
        spawnOptionButtonRef.className = "spawnOptionButton";
        const optionsSelectionTextContainer = this.optionsSelectionTextContainerRef.current;
        optionsSelectionTextContainer.className = "optionsSelectionTextContainer";

    }

    addOption(){

        if (this.state.dropDownValue==="RadioButton"){

            this.addRadioButton();

          
        }
        else if(this.state.dropDownValue==="Checkbox"){

            this.addCheckBox();
        
        }
        this.setState({questionData:{

            question:this.state.question,
            options:this.state.options


        }});
     

    
    }



    addRadioButton(){
        
        this.setState({currentOptionId:this.state.currentOptionId+1})
        const newOptions = this.state.options.concat([{
            
            type:this.state.currentOptionState,
            optionId:this.state.currentOptionId,
            optionValue:"Option"+" "+this.state.currentOptionId

        }]);
        this.setState({options:newOptions});
    
    }
    addCheckBox(){

        this.setState({currentOptionId:this.state.currentOptionId+1})
        const newOptions = this.state.options.concat([
            
            {
            
            type:this.state.currentOptionState,
            optionId:this.state.currentOptionId,
            optionValue:"Option"+" "+this.state.currentOptionId
        }
    
    ]);
        this.setState({options:newOptions});

    }

    removeOption(index){

        this.setState({options:this.state.options.filter((option,_)=>option.optionId!==index
        )});

    }


    ondropDownChange(){

        const optionsSelectionTextContainer = this.optionsSelectionTextContainerRef.current;
        optionsSelectionTextContainer.classList.toggle("optionsSelectionTextContainerAlternate");

        const optionsListContainer = this.optionsListContainerRef.current;
        optionsListContainer.classList.toggle("optionsListContainerAlternate")

        const spawnOptionButtonRef = this.spawnOptionButtonRef.current;
        spawnOptionButtonRef.className = "spawnOptionButton";


    }
    handleChange(ev){

        
        const delay = (() => {
            let timer = 0;
            return (callback, ms) => {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
            })();

        const question = ev.target.value
        this.setState({question:question});

        
        this.setState({

            questionData:{

            sectionId:this.props.sectionId,
            question:question,
            options:this.state.options


        }});

    
    }

    handleOptionChange=(optionState)=>{

        
        this.setState({options:this.state.options.map((option)=>{

            if (option.optionId===optionState.id){

                option.optionValue = optionState.value;
                return option

            }

            else{
                return option
                
            }
        })});
        
        

        
    }

    saveQuestion(){
        console.log("my question saved",this.state.question)
   
        post("api/updateQuestion",{
            sectionId:this.props.sectionId,
            cardId:this.state.id,
            question:this.state.question});
        
        this.props.updateCardQuestion({
            sectionId:this.props.sectionId,
            cardId:this.state.id,
            question:this.state.question});
    }

    saveOption(){

        console.log("My option saved",this.state.options)

        post("api/updateOption",{
            sectionId:this.props.sectionId,
            cardId:this.state.id,
            options:this.state.options
        
        });

        this.props.updateCardOption({
            sectionId:this.props.sectionId,
            cardId:this.state.id,
            options:this.state.options
        
        });

        

    }

    render(){

        let optionsList = this.state.options.map((opt,index)=>(

        
            
            <Option key={opt.optionId} 
            type={this.state.currentOptionState} 
            optionId={opt.optionId}
            removeChild={this.removeOption.bind(this,opt.optionId)}

            handleOptionChange = {this.handleOptionChange.bind(this)
            
            }

            saveOption = {this.saveOption.bind(this)}


            value = {opt.optionValue}          
            />          
        ));

       
        return(
                <div className="card">
                    <div className="cardSide">
                    </div>
                    <div className="cardContents">
                    <div id="card-header" className="Card cardHeader">
            
                        <div className="Card mainTextareaContainer">
                        <input type="text" className="Card mainText" onBlur={this.saveQuestion.bind(this)} onChange={this.handleChange.bind(this)} defaultValue={this.state.question}/>
                        <div className="textAreaappendContainer">
                        </div>
                        </div>
                    </div>
            
                    <div id="card-body">  
                        <div className="Card optionsContainer" ref={this.optionsContainerRef}>
                           {optionsList}
                        </div>
                        <div className="Card controlsContainer">
                            <div  className="Dropdown optionsSelectionContainer">
                                
                                    <div id="options-selection-placeholder" className="optionsSelectionTextContainer" ref={this.optionsSelectionTextContainerRef} onClick={this.ondropDownChange}>       
                                        <span id = "span_text" className="Dropdown optionsSelectionText">{this.state.dropDownValue}</span>
                                    </div>
                            
                                    <div id="options-root" className="Dropdown optionsListContainer" ref={this.optionsListContainerRef}>                     
                                        <ul>       
                                        <li id="rbtn" className="Dropdown radio" onClick={this.changedropDownValueRadio}>Radio Button</li>
                                        <li id="checkbox" className="Dropdown check" onClick={this.changedropDownValueCheck}>CheckButton</li>  
                                        <li  id="image" className="Dropdown image">Image</li>
                                        <li id="txt" className="Dropdown text">Text</li>       
                                        </ul>
                                    </div>  
                            </div>
                            <div id="spawn-option-button" className="Card spawnOptionButton" onClick={this.addOption} ref={this.spawnOptionButtonRef}>         
                          
                            <span className="spawnOptionButtonSpan">

                            Add Option

                            </span>

                            </div>
                        </div>
                    </div>
            
                  <div id="card-footer">
                    <div id="delete_div" className="deleteContainer">
            
            
                    </div>
                </div>
                </div>
            </div>

        );
    }

}
