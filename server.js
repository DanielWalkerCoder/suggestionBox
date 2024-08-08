require('dotenv').config()
const mongoose=require('mongoose')
const app = require('./app')
const port = 3000

mongoose
    .connect("mongodb://127.0.0.1:27017/suggestion-box")
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`Server started on port ${port}`)
            console.log('MONGO DB CONNECTED')
        })
    }).catch((e)=>{
        console.log(e)
    })