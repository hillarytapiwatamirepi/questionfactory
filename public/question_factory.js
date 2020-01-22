// import { openSync } from "fs";


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
     //question card contains all the question info

        var card = document.createElement("div")
        card.id = "card"

        //card header
        var card_header = document.createElement("div")
        card_header.id = "card-header"

        //contents of card header

        //close button div
        var first_container = document.createElement("div")

        var close_button_div = document.createElement("div")
        close_button_div.id="close_button_div"

        //close button
        var close_button = document.createElement("div")
        close_button.className = "close_button"
        close_button.addEventListener("click",()=>{

            this.delete_question(question_section,card)



        })
        close_button_div.appendChild(close_button)

        first_container.appendChild(close_button_div)
        //appends closing option
        card_header.appendChild(first_container)


        //main_text_area_div
        var main_text_area_div = document.createElement("div")
        main_text_area_div.className = "main_text_area_div"
        //text_area_input
        var main_text = document.createElement("input")
        main_text.id = "main_text"
        main_text.type = "text"
        main_text.value="Type Something"


        main_text_area_div.appendChild(main_text)

        card_header.appendChild(main_text_area_div)
        //card body

        var card_body = document.createElement("div")
        card_body.id = "card-body"

        //options in card body

        var options = document.createElement("div")
        options.className = "options"

        //input group for an option

        var input_group= document.createElement("div")
        input_group.className = "my-input-group"

        var input_group_prepend = document.createElement("div")
        input_group_prepend.className = "my-input-group-prepend"

        var radio_button = document.createElement("input")
        radio_button.type = "radio"
        radio_button.disabled = true
        //add prepend
        input_group_prepend.appendChild(radio_button)
        input_group.appendChild(input_group_prepend)

        //option_text

        var option_text = document.createElement("input")
        option_text.type = "text"
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

            this.delete(options,input_group)

        })

        append_div.appendChild(close_option)

        //add append_div
        input_group.appendChild(append_div)


        options.appendChild(input_group)

        card_body.appendChild(options)
        //now_lets go to the controls class

        var controls = document.createElement("div")
        controls.className = "controls"
        //select options container
        var options_selection = document.createElement("div");
        options_selection.className = "options-selection"

        //the text
        //the div for the text
        var options_selection_placeholder= document.createElement("div");
        options_selection_placeholder.id = "options-selection-placeholder"
        options_selection_placeholder.className = "options-selection-placeholder"


        //span that contains the text
        var o_s_p_text = document.createElement("span");
        o_s_p_text.className = 'o-s-p-text'
        o_s_p_text.innerText = "Select..."
        //add the span to the div for texts
        options_selection_placeholder.appendChild(o_s_p_text)

        //add options_selection_placeholder to the root
        options_selection.appendChild(options_selection_placeholder)

        //options root/container, where the list of options is
        var options_selection_options = document.createElement("div")
        options_selection_options.className = "options-selection-options"
        options_selection_options.id = "options-root"

        //create the list of options
        var options_list = document.createElement("ul")
        var option_classNames = ["radiobutton","check","image","text"]

        var option_texts = ["RadioButton","CheckBox","Image","Text"]
        // add the options to the list
        option_classNames.forEach((option,index)=>{

            var li_option = document.createElement("li")
            li_option.className = option
            li_option.innerText = option_texts[index]
            options_list.appendChild(li_option)
        })

        // add the list to the options root
        options_selection_options.appendChild(options_list)

        //add the options container tot the root
        options_selection.appendChild(options_selection_options)


        //add event listeners for dropdown

        options_selection_placeholder.addEventListener("click",()=>{

        

            options_selection_options.classList.toggle("options-selection-options-alternate");

            options_selection_placeholder.classList.toggle("options-selection-placeholder-alternate")
            
        


        })
        // var select = document.createElement("select")
        // select.className = 'controls-select'

        // var optns = ["Checkbox","RadioButton"]
        // optns.forEach((opt_text)=>{
        //     var opt  =document.createElement("option") 
        //     opt.className = "select-opt";

        //     opt.setAttribute("data-icon","&#x25a8")
        //     opt.setAttribute("data-subtext","petrification")
        //     opt.text = opt_text      
        //     select.add(opt)
        // })


        var controls_container = document.createElement('div')
        controls_container.className = "controls-container"

        

        var control  =document.createElement("div")
        control.className = "control"

    
        var spawn_option_button = document.createElement("div")
        spawn_option_button.className = "spawn_option_button"
        var call_back = () =>{
            this.add_radio_button_option(options)
        }

        var call_back_2 = ()=>{


            this.add_check_button_option(options)
        }


        spawn_option_button.addEventListener("click",call_back)
        this.current_callback  = call_back
     
    //     select.addEventListener("change",()=>{



    //         var index = select.selectedIndex;

    //         if (select.options[index].value == "Checkbox"){

    //             spawn_option_button.removeEventListener("click",this.current_callback)
                
  
    //             var view_options = options.childNodes
    //             view_options.forEach((input_group)=>{

    //                 var input_group_nodes = input_group.childNodes;
    //                 var input_group_prepend = input_group_nodes[0]
    //                 input_group_prepend.childNodes[0].type = "checkbox"
    //             })

    //             this.current_callback = call_back_2
    //             spawn_option_button.addEventListener("click",call_back_2)
    //     }
    //     else if (select.options[index].value == "RadioButton"){
    //         spawn_option_button.removeEventListener("click",this.current_callback)
    //         var view_options = options.childNodes
    //         view_options.forEach((input_group)=>{

    //             var input_group_nodes = input_group.childNodes;
    //             var input_group_prepend = input_group_nodes[0]
    //             input_group_prepend.childNodes[0].type = "radio"


    //         })
    //         this.current_callback = call_back
    //         spawn_option_button.addEventListener("click",call_back)


    //     }
    
    
    
    
    // })


        var spawn_option_span = document.createElement("span");
        spawn_option_span.className = "spawn_option_span"
        spawn_option_span.innerText = "Add Option"
        control.appendChild(spawn_option_button)
        control.appendChild(spawn_option_span)
        controls_container.appendChild(control)
        controls.appendChild(options_selection)
        controls.appendChild(controls_container)

        card_body.appendChild(controls)

        card.appendChild(card_header)
        card.appendChild(card_body)
        question_section.appendChild(card)


    }
    add_check_button_option(element){

        var input_group= document.createElement("div")
        input_group.className = "my-input-group"
        
        var input_group_prepend = document.createElement("div")
        input_group_prepend.className = "my-input-group-prepend"
        
        var radio_button = document.createElement("input")
        radio_button.type = "checkbox"
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

        append_div.appendChild(close_option)
        
        //add append_div
        input_group.appendChild(close_option)

        element.appendChild(input_group)

    }
    add_radio_button_option(element){



        
        //input group for an option
        
        var input_group= document.createElement("div")
        input_group.className = "my-input-group"
        
        var input_group_prepend = document.createElement("div")
        input_group_prepend.className = "my-input-group-prepend"
        
        var radio_button = document.createElement("input")
        radio_button.type = "radio"
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

        append_div.appendChild(close_option)
        
        //add append_div
        input_group.appendChild(close_option)

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



