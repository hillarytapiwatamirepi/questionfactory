
import {add_question} from "./Functions/Add_question.js";


// section houses the whole thing
var question_section = document.getElementById("card-section");

var card = document.getElementById("card")

//question factory is a class that creates questions
class QuestionFactory{

    constructor(){
     this.current_callback = null
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

        add_question(this,question_section);



    }

    add_option(element,type){

        var input_group= document.createElement("div")
        input_group.className = "my-input-group"
        
        var input_group_prepend = document.createElement("div")
        input_group_prepend.className = "my-input-group-prepend"
        
        var radio_button = document.createElement("input")
        radio_button.type = type
        radio_button.disabled = true
        //add prepend
        input_group_prepend.appendChild(radio_button)
        input_group.appendChild(input_group_prepend)
        
        //option_text
        
        var option_text = document.createElement("input")
        option_text.className = "option_text"
        option_text.value = "Type something"
        //add option_text
        input_group.appendChild(option_text)
        
        //append
        
        var append_div = document.createElement("div")
        append_div.className = "my-input-group-append"
        //close_option_button
        var close_option =document.createElement("div")
        close_option.className = "close_option"
        close_option.addEventListener("click",()=>{

            this.delete(element,input_group)

        })

        var option_image_uploads = document.createElement("div");
        option_image_uploads.className = "option_image_uploads"
        option_image_uploads.id = "upload_image"

        append_div.appendChild(option_image_uploads);
        append_div.appendChild(close_option)
        
        //add append_div
        input_group.appendChild(append_div)

        element.appendChild(input_group)


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



