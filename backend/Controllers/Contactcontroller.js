const contactmodel = require('../models/contact');
//fonction ajouter 
exports.ajoutercontact= (req,res) => {
    contactobj ={
        nom :req.body.nom,
        numero :req.body.numero
    }
    console.log(contactobj)
    const contact = new contactmodel(contactobj)
    // save in DB +test

    contact.save((error , contactcreated) => {

        if (error) {
            return res.status(400).json({error})
        }

        if (contactcreated){
            console.log("success")
            return res.status(200).json({contactcreated})

        }
    }
      //400 for bad request ,in postman to test api
 )
}

// fonction modifier
exports.modifiercontact = (req,res) => {
    // res.send("corps pour modifier un contact")
    const contactobjprime ={
        nom :req.body.nom,
        numero :req.body.numero
    }
    const param=req.params.id;
          // "params" refers to the parameters 
    contactmodel.findByIdAndUpdate(param , contactobjprime).exec((error,contactmodified)=>{
        if (error) return res.status(400).json({error})
        if (contactmodified){

         return res.status(200).json({"message":"contact modifier avec succée"})
        }
    })
}  

// fonction supprimer 
exports.supprimercontact = (req,res) => {
    // "corps pour supprimer un contact"
    const param=req.params.id;
    console.log(param)
    contactmodel.findByIdAndDelete(param).exec((error,contactdeleted)=>{
        if (error) return res.status(400).json({error})
        if (contactdeleted){

         return res.status(200).json({"message":"contact supprimer avec succée"})
        }
    })
} 

// fonction lister
exports.listercontact = (req,res) => {

    // "corps pour lister un contact"
    contactmodel.find({}).exec((error,contactlist)=>{
        if (error) return res.status(400).json({error})
        if (contactlist) return res.status(200).json({contactlist})
    })
} 
