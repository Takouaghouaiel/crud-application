// lehné nhotou el mongoose schema (define the structure) bch node app tefhem w testaaml l documentation eli 3ana
// this is the model 
const { default: mongoose } = require("mongoose")


const contactschema =new mongoose.Schema({
    nom:{
        type: String ,
        required:true
    },
    numero:{
        type: String ,
        required:true
    }

    

}, {timestamps : true}) 
// In Mongoose, the timestamps option, when set to true, will automatically add createdAt and updatedAt fields to the documents in the collection. 

module.exports=mongoose.model('contacts',contactschema)