import Card from "../Card/Card.js";

import React,{Component} from "react";

import {get} from "../../utilities.js";
export default class CardSection extends Component{

    constructor(props){

        super(props);
        this.state={

            sectionId:this.props.sectionId,

            cards:[]
        }


    }

    // componentDidMount(){

    //     console.log("Section Id",this.props.sectionId);

    //     get("api/questionsForSection",{SectionId:this.props.sectionId})
    //     .then((data)=>{

    //         console.log("Data from Components",data);


    //         data.map((question)=>{

    //             console.log("question",question)

    //             this.setState({cards:this.state.cards.concat(question)})
             
    //         })
        
        
        
    //     });

    //     console.log("my card state", this.state.cards)


    // }

    render(){

        let Cards = this.props.cardInfo.map((card)=>(

            <Card 
            
            key={card.cardId}
            cardId={card.cardId}
            options={card.options}
            question={card.question}
            sectionId={this.props.sectionId}
            updateCardQuestion={this.props.updateCardQuestion}
            updateCardOption = {this.props.updateCardOption}

            
            />
        )




        );


        return(
            <>

            {Cards}

            {/* {console.log(this.state.cards)} */}
        
            </>

        )
    }






}

