
const express = require("express")
const router = express.Router();
const auth = require("./auth.js");


let data = [          
    {
    sectionId:0,
    currentCardId:0,
    cards:[{

        cardId:0,
        question:"Question",
        options:[]


    }
]
}]
router.get("/questions",(req,res)=>{

    res.send(data);
    // console.log("This is my data",data);




})


router.post("/addSection",(req,res)=>{


   data.push(req.body);

   

   console.log("added a section",JSON.stringify(data.length));


})


router.get("/questionsForSection",(req,res)=>{

   
    data.map((section)=>{
        console.log("section id",section.sectionId,"This is my query id",req.query.SectionId);
        // console.log("",)
        if (JSON.stringify(section.sectionId)===req.query.SectionId){
                console.log("got it",section.cards)
                res.send(section.cards) 


            }
        // else{
        //     return null
        }
    
    )
    // console.log("I sent this data",cardData);
    // res.send(cardData);





})
router.post("/addQuestion",(req,res)=>{

    // console.log("reqbody",req.body);

    data.map((section)=>{

        if (section.sectionId===req.body.sectionId){



            section.cards.push(
                {
                cardId:req.body.cardId,
                question:req.body.question,
                options:req.body.options
        

            });

            return section

        }
        else{
            return section
        }


    })
    

    console.log(JSON.stringify(data));

});

var body = []

router.post("/updateQuestion",(req,res)=>{

    // console.log("updateQuestion",req.body);
    // body.push(req.body);
    // console.log("Here is my body",body)
    


    data.map((section)=>{

        if (section.sectionId===req.body.sectionId){

            section.cards = section.cards.map((card)=>{

                if (card.cardId===req.body.cardId){


                    card.question = req.body.question;
                    return card;
                }
                else{

                    return card;
                }

            });

        }

        return section


    });

    console.log("data after update",JSON.stringify(data));
    console.log("________________________________________");

});
router.post("/updateOption",(req,res)=>{

    console.log("updateOption",req.body);
    // console.log(JSON.stringify(data));
    data.map((section)=>{

        // console.log("section cards",section.cards)


        section.cards.map((card)=>{

        
        if (section.sectionId===req.body.sectionId){

            if (card.cardId===req.body.cardId){


                card.options = req.body.options;
                return card;
            }
            else{

                return card;
            }
        }

        return section


    })});


    console.log("data after update option",JSON.stringify(data));

});

router.get("/whoami",(req,res)=>{

    console.log(req.user);
    if(req.user){
        res.send(req.user)
    }
    else{

        res.send({});
    }


})
router.post("/login",auth.login);
router.post("/logout",auth.logout);

// router.get("/")

module.exports = router