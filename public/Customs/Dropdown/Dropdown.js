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
var option_classNames = ["radio","check","image","text"]

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


var root = document.getElementById("root");

root.appendChild(options_selection)

