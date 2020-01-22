

export function change_to_read_only(current_card){

    const card_section = document.getElementById("card-section");

    const cards = card_section.childNodes
    // console.log(cards)

    if (cards!=null){
    cards.forEach((card)=>{
      if (card.id==="card"){
        if (card!==current_card){

            const card_header = card.childNodes[0];
            const card_body = card.childNodes[1];

            card_header.className="card_header_alternate"

            //change the maintext_area
            const main_text_area_div = card_header.childNodes[0]
            main_text_area_div.className = "main_text_area_div_alternate"

            const main_text = main_text_area_div.childNodes[0]
            main_text.setAttribute("readonly",true)
            main_text.className = "main-text-alternate"
        

            const text_area_append_div = main_text_area_div.childNodes[1]
            text_area_append_div.className = "text_area_append_div_alternate"

            // change the options in card_body
            card_body.childNodes[0].className = "options_alternate"
            const options =card_body.childNodes[0].childNodes



            if (options!==null){

                options.forEach((opt)=>{

                    opt.className = "my-input-group-alternate"

                    const option_input = opt.childNodes[1]
                    option_input.setAttribute('readonly',true)

                    option_input.className = "option_text_alternate"

                    const input_group_append = opt.childNodes[2]
                    input_group_append.className = "my-input-group-append-alternate"
                })

            }

            //change controls

            const controls = card_body.childNodes[1]
            controls.className = "controls-alternate"
        }
    }})
}}

export function change_from_read_only(card){


    const card_header = card.childNodes[0];
    const card_body = card.childNodes[1];

    card_header.className="card_header"

    //change the maintext_area
    const main_text_area_div = card_header.childNodes[0]
    main_text_area_div.className = "main_text_area_div"

    const main_text = main_text_area_div.childNodes[0]
    // main_text.setAttribute("readonly",null)
    main_text.removeAttribute("readonly")
   
    main_text.className = "main_txt"


    const text_area_append_div = main_text_area_div.childNodes[1]
    text_area_append_div.className = "text_area_append_div"

    // change the options in card_body
    card_body.childNodes[0].className = "options"
    const options =card_body.childNodes[0].childNodes



    if (options!==null){

        options.forEach((opt)=>{

            opt.className = "my-input-group"

            const option_input = opt.childNodes[1]
            option_input.removeAttribute("readonly")

            option_input.className = "option_text"

            const input_group_append = opt.childNodes[2]
            input_group_append.className = "my-input-group-append"
        })

    }

    //change controls

    const controls = card_body.childNodes[1]
    controls.className = "controls"




}