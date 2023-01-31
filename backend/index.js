const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') 
// cors for security : to handle the access between servers and different ports (server of node and react)

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello takoua!')
})    //home

const contactRoute = require('./Routes/Contact.js');
app.use('/contact',contactRoute )

// connect and test BD
mongoose.connect('mongodb://localhost:27017/merncoursedb',{
    // userNewUrParser:true ,  //no longer exist 
})
     const db = mongoose.connection ;

db.on("error",console.error.bind(console,'connection error'))
db.once('open',()=>{

    console.log('data base connected successfuly')
})

app.listen(port,()=> {
    console.log('example app listening at http://localhost:${port}')
})
