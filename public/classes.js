

// section houses the whole thing
var question_section = document.getElementById("section");


//question factory is a class that creates questions
class QuestionFactory{

    constructor(){
 
    }
    
    delete_question(from,question){
        // delete a whole question from question section

        from.removeChild(question)

    }

    delete(from,element){
        // delete an option from options_choices

        from.removeChild(element)
    }
    add_question(){
        // adds a question card to the factory
        
        //question card contains the question info
        var question_card = document.createElement("div")
        //class name is card from bootstrap
        question_card.className = "card"
        
        // let's the build the header here
        var card_header = document.createElement("div")
        card_header.className="card-header"
        
        // let's create the text input type here
        var text_area = document.createElement("input")
        text_area.type="text"
        text_area.id = "text_area"
        text_area.className = "form-control"
        text_area.placeholder = "Type Something"

        //container for the "delete question" button
        var append_div = document.createElement("div")
        append_div.className = "input-group-append"
        append_div.id = "append_div"

        // the delete question button
        var delete_question_button = document.createElement("button");
        delete_question_button.id  = "delete_question_button"
        // add event listener which is a method in the class
        delete_question_button.addEventListener("click",()=>{

            this.delete_question(question_section,question_card)

        })
        
        // add the "delete question button" to the container
        append_div.appendChild(delete_question_button)
        //append the text area to the header
        card_header.appendChild(text_area)
        //append the delete question button container to the card header
        card_header.appendChild(append_div)
        // add the card header
        question_card.appendChild(card_header)


        //let's create card body here
        var option_card_body = document.createElement("div")
        option_card_body.className = "card-body"

        // in the body
        // controls side
        // contains the "add options" button; floats right
        var controls = document.createElement("div");
        controls.className = "container"
        controls.id = "controls"

        // this is the options button
        var options_button = document.createElement("button")
        options_button.id = "options_button"

        // These contains the choices; floats left
        var options_choices = document.createElement("div")
        options_choices.id = "choices"

        // add event listener to the button
        options_button.addEventListener("click",()=>{

            this.add_radio_button_option(options_choices)

        })
        //append it to the controls
        controls.appendChild(options_button)

        
    
        //add the choices tab to the body
        //+ the controls tab
        //add the body to the card
        option_card_body.appendChild(options_choices)
        option_card_body.appendChild(controls)
        question_card.append(option_card_body)    
        // add the card to the question section
        question_section.appendChild(question_card)
  
    }

    add_radio_button_option(element){

        // Parameters: element to append radio  button to

        // this is the container for a radio button
        // a text area and the "delete radio button" button
        var option_container  = document.createElement("div");
        option_container.className = "row input-group mb-3";
        option_container.id ="option_container"
    
        
        //prepend div stores the radiobutton
        var prepend_div  =document.createElement("div")
        prepend_div.className = "input-group-prepend"
        prepend_div.id = "prepend_div"

        //group text stores the text to be written
        var group_text = document.createElement("div")
        group_text.className = "input-group-text"

        // here is the radio button
        var option = document.createElement("input")

        option.type = "radio"
        option.disabled = true
        
        // append the radio button to group text
        group_text.appendChild(option)
        // append group text to prepend div
        prepend_div.append(group_text)

        // the actual text area div for options 
        var option_text_area_div = document.createElement("div")
        option_text_area_div.id = "area_div"
        
        //input text area for that div
        var option_text_area  = document.createElement("input")
        option_text_area.type="text"
        option_text_area.className = "form-control"
        option_text_area.placeholder = "Type Something"
        
        //this stores the "delete radio button" button
        var delete_div = document.createElement("div")
        delete_div.className = "input-group-append"
        delete_div.id = 'delete_div'
        // the delete button
        var delete_button = document.createElement("button")
        delete_button.id = "delete_button" 
        
        //add it to the delete div

        delete_div.appendChild(delete_button)

        //append all the components to respective parents
        option_text_area_div.appendChild(option_text_area)
        
        //append prepend_div, text area, and delete_div
        option_container.appendChild(prepend_div)
        option_container.appendChild(option_text_area_div)  
        option_container.appendChild(delete_div) 
        
        // add event_listener to delete button
        delete_button.addEventListener("click",()=>{

            this.delete(element,option_container)
        })
        // element, add container
        element.appendChild(option_container)  
    }
}



//creates an instance of buttob factory
var button_factory = new QuestionFactory()
//get the main button
// add event listener
var MAINBUTTON = document.getElementById("mybutton");

MAINBUTTON.addEventListener("click",()=>{
    //implement factory method
    button_factory.add_question()


})



