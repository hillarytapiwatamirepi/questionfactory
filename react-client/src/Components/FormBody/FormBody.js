import React,{Component} from "react";
import Card from "../Card/Card.js";
import "./FormBody.css"
import CardSection from "../CardSection/CardSection.js"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import {get} from "../../utilities.js";
import {post} from "../../utilities.js";
import CardSectionsContainer from "../CardSectionsContainer/CardSectionsContainer.js";
import "../FormControl/FormControl.css";
import FormControl from "../FormControl/FormControl.js";
// import "../FormControl/FormControl.css";
export default class FormBody extends Component{

    constructor(props){


     
        super(props);

        this.state={

            // sectionsInfo:this.props.sectionsInfo,
            SectionId:null,
            sectionsInfo:[],
            currentSectionId:0,

        }


    }

    componentDidMount(){

        get("api/questions")
        .then((data)=>{
            
            console.log("api data",data);
        

            data.map((question)=>{

                this.setState({sectionsInfo:this.state.sectionsInfo.concat([question])});
                console.log(typeof(question.sectionId))

                if (question.sectionId===data.length-1){

                    this.setState({SectionId:data.length});



                }
             
            });


            console.log("Mounted state has changed to ",this.state.sectionsInfo)
       })}

    addSection(){

        const newSectionsInfo = this.state.sectionsInfo.concat([
            {
                sectionId:this.state.SectionId,
                currentCardId:0,
                cards:[{
                    
                    cardId:0,
                    question:"Question",
                    options:[]
                
                }]
            
            }
        ]);
        post("api/addSection",{
            sectionId:this.state.SectionId,
            currentCardId:0,
            cards:[{
                
                cardId:0,
                question:"Question",
                options:[]
            
            }]
        
        });
        this.setState({SectionId:this.state.SectionId+1});
        this.setState({sectionsInfo:newSectionsInfo});

        


    }

    addCard(){



        this.setState({sectionsInfo:this.state.sectionsInfo.map((section)=>

       
        {
            console.log(typeof(section.sectionId),typeof(this.state.currentSectionId))
             if(section.sectionId===this.state.currentSectionId){

                    section.currentCardId+=1;
                    console.log("before",section.cards.length);
                    section.cards.push(
                     
                    
                    {
                        sectionId:section.sectionId,
                        cardId:section.currentCardId,
                        question:"Question",
                        options:[]
                    
                    
                    }


                    
                    
                    );

                    post("/api/addQuestion",{
                        
                        sectionId:section.sectionId,
                        cardId:section.currentCardId,
                        question:"Question",
                        options:[]
                    
                    
                    });
                    console.log("after",section.cards.length);
                 return section
             }

             else{

                 return section
             }
         }
     
         
         )});

        // this.setState({sectionsInfo:newSectionsInfo});




    }

    // addSomething=(root)=>{


    //     root.setState({true:true})


    // }
    handleLinkClick=(id)=>{

        this.setState({currentSectionId:id});
        // console.log("current sec id",this.state.currentSectionId)
        console.log(id);



    }

    updateCardQuestion=(cardData)=>{
        console.log("card updated",cardData)

        this.setState({sectionsInfo:this.state.sectionsInfo.map((section)=>{


        if (section.sectionId===cardData.sectionId){

            section.cards.map((card)=>{

                if (card.cardId===cardData.cardId){


                    card.question = cardData.question;
                    return card;
                }
                else{

                    return card;
                }

            });

        

        }
        return section




        })})





    }

    updateCardOption=(cardOption)=>{



        this.setState({sectionsInfo:this.state.sectionsInfo.map((section)=>{

            if (section.sectionId===cardOption.sectionId){
            section.cards.map((card)=>{

        
                
        
                    if (card.cardId===cardOption.cardId){
        
        
                        card.options = cardOption.options;
                        return card;
                    }
                    else{
        
                        return card;
                    }
                
             
            });}
        
        
            return section
        
        
        
        
        })})}










    render(){

        let CardSections = this.state.sectionsInfo.map((sectionInfo)=>(
            <Route key={sectionInfo.sectionId} path={"/"+JSON.stringify(sectionInfo.sectionId)}>
            
            
            <CardSection 

            key={sectionInfo.sectionId}
            sectionId={sectionInfo.sectionId}
            cardInfo = {sectionInfo.cards}
            updateCardQuestion = {this.updateCardQuestion.bind(this)}
            updateCardOption = {this.updateCardOption.bind(this)}
            
            />
            </Route>     



        ))

        return(




            <>
    
            <div className="CardSectionsContainer">

            <CardSectionsContainer 
            sectionsInfo={this.state.sectionsInfo}


            handleLinkClick = {this.handleLinkClick.bind(this)}
            
            />

            </div> 
            

         

            <div className="formBody">

            {
                
                CardSections


            }
            
        


       
            </div>

            <FormControl

            addCard = {this.addCard.bind(this)}
            addSection = {this.addSection.bind(this)}
            
            
            />


    



         
            
            </>



      
   





        )

    }





}
