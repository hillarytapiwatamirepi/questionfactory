
document.getElementsByTagName
var options_selection_placeholder = document.getElementById("options-selection-placeholder")
var options_selection_options = document.getElementById("options-root")
var spawn_option_button = document.getElementById("spawn-option-button")

var spawn_text = document.getElementById("span_text")

options_selection_placeholder.addEventListener("click",()=>{

 

    options_selection_options.classList.toggle("options-selection-options-alternate");

    options_selection_placeholder.classList.toggle("options-selection-placeholder-alternate")

    spawn_option_button.classList.toggle("spawn_option_button_alternate");
    
    
});

var opts = ["rbtn","checkbox","image","txt"]

opts.forEach((option)=>{

    var opt  = document.getElementById(option);
    opt.addEventListener("click",()=>{
        spawn_text.innerText = opt.innerText
        options_selection_options.className = "options-selection-options"
        spawn_option_button.className = "spawn_option_button"
    })
    

})

var option_texts = document.getElementsByClassName("option_text")


// (option_image_uploads[0]
// console.log(option_image_upload)
// console.log("Here are my option image uploads",option_image_uploads[2]);


// for (var id=0;id<len;id++){
//     var opt_text = option_texts[id]
//     var opt_image = option_image_uploads[id]
//     // console.log(opt_image);
//     // console.log(id);
//     // console.log("Here are my option image uploads",option_image_uploads[id]);


//     opt_text.addEventListener("click",()=>{
//         // alert("I've been clicked",id)
//         // var option_image_uploads = document.getElementsByClassName("option_image_uploads");
//         // console.log(option_image_uploads);
//         // console.log("Here is the id",id)
//         // take(id);
//         console.log(opt_image);
//         // var opt_image = option_image_uploads[id]
//         // console.log("Here are my option image uploads",opt_image);
//         // option_image_uploads[id].classList.toggle("option_image_uploads_alternate");
// });
// }