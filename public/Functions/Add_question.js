 
import {change_to_read_only} from "./change_read_only.js";
import {change_from_read_only} from "./change_read_only.js";
 //question card contains all the question info

function change_current_option_tags(type,options){



        var view_options = options.childNodes
        view_options.forEach((input_group)=>{

            var input_group_nodes = input_group.childNodes;
            var input_group_prepend = input_group_nodes[0]
            input_group_prepend.childNodes[0].type = type
        })
}
var add_option= (root,type,element)=>{

    if (type==="RadioButton"){

        root.add_option(element,"radio");

 
        
    }
    else if (type==="CheckBox"){



        root.add_option(element,"checkbox");



    }

    else if (type==="Text"){

        root.add_text();



    }
    
}
export function add_question(root,question_section){
    var card = document.createElement("div")
    card.id = "card"

    //card header
    var card_header = document.createElement("div")
    card_header.id = "card-header"
    card_header.className = "card_header"




    //main_text_area_div
    var main_text_area_div = document.createElement("div")
    main_text_area_div.className = "main_text_area_div"
    //text_area_input
    var main_text = document.createElement("input")
    main_text.id = "main_text"
    main_text.className = "main_txt"
    main_text.type = "text"
    main_text.value=""

    
    main_text_area_div.appendChild(main_text)
    var text_area_append_div = document.createElement("div");
    text_area_append_div.className = "text_area_append_div"
    main_text_area_div.appendChild(text_area_append_div)
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
    option_text.id = "option_txt"
    option_text.className = "option_text"
    option_text.value = "Option 1"
    
    //add option_text
    input_group.appendChild(option_text)

    //append

    var append_div = document.createElement("div")
    append_div.className = "my-input-group-append"

    // add image to option
    var image_option = document.createElement("div");
    image_option.className = "option_image_uploads";
    image_option.id = "upload_image"


    //close_option_button

    var close_option =document.createElement("div")
    close_option.className = "close_option"

    close_option.addEventListener("click",()=>{

        root.delete(options,input_group)
    })
    
    append_div.appendChild(image_option)
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
    o_s_p_text.id = "span_text"
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
    var option_ids = ["rbtn","checkbox","image","txt"]

    var options_names = ["radio","checkbox","img","text"]
    // add the options to the list

    //to spawn new options of a kind
    var spawn_option_button = document.createElement("div")
    spawn_option_button.className = "spawn_option_button";
    spawn_option_button.id = "spawn_option_button"





    option_classNames.forEach((option,index)=>{

        var li_option = document.createElement("li")
        li_option.className = option
        li_option.innerText = option_texts[index]
        li_option.id  = option_ids[index]
        
        li_option.addEventListener("click",()=>{


            spawn_option_button.removeEventListener("click",root.current_callback)
            change_current_option_tags(options_names[index],options);
            var event_listener_callback =()=>{
                add_option(root,option_texts[index],options)
            }         

            root.current_callback  = event_listener_callback;
            o_s_p_text.innerText = li_option.innerText;
            options_selection_options.className = "options-selection-options"

            
            spawn_option_button.addEventListener("click",event_listener_callback)


            // spawn_option_button.addEventListener("click",add_option(root,option_texts[index],options))
            spawn_option_button.className = "spawn_option_button"


        })



        options_list.appendChild(li_option)

        change_to_read_only(card);

        card.addEventListener("click",()=>{

            change_from_read_only(card);
            change_to_read_only(card);



        })

       

    })

    // add the list to the options root
    options_selection_options.appendChild(options_list)

    //add the options container tot the root
    options_selection.appendChild(options_selection_options)


    //add event listeners for dropdown

    options_selection_placeholder.addEventListener("click",()=>{
        options_selection_options.classList.toggle("options-selection-options-alternate");
        options_selection_placeholder.classList.toggle("options-selection-placeholder-alternate")
    });



    var controls_container = document.createElement('div')
    controls_container.className = "controls-container"

    var control =document.createElement("div")
    control.className = "control"






    var spawn_option_span = document.createElement("span");
    spawn_option_span.className = "spawn_option_span"
    spawn_option_span.innerText = "Add Option"

    spawn_option_button.appendChild(spawn_option_span)
    control.appendChild(spawn_option_button)
    // control.appendChild(spawn_option_span)
    controls_container.appendChild(control)
    controls.appendChild(options_selection)
    controls.appendChild(controls_container)


    card_body.appendChild(controls)

    var card_footer = document.createElement("div");
    card_footer.id = "card-footer"
   
    var delete_div = document.createElement("div");
    delete_div.id = "delete_div"
    delete_div.className = "delete"
    delete_div.addEventListener("click",()=>{

        root.delete_question(question_section,card)



    })

    // var add_question_div = document.createElement("div");
    // add_question_div.className = "add_question"
    // add_question.id = "add_question_div"

    // card_footer.appendChild(add_question_div)

    // add_question_div.addEventListener("click",()=>{

    //     root.add_question();

    // }
    // )
    card_footer.appendChild(delete_div)

    card.appendChild(card_header)
    card.appendChild(card_body)
    card.appendChild(card_footer)
    question_section.appendChild(card)


}

