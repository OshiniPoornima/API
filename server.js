const express= require('express')
const mongoose= require('mongoose')
const app= express()


//route

app.get('/',(req,res)=>{
    res.send('Hello NODE API')
})

app.get('/blog',(req,res)=>{
    res.send('Hello Blog,          my name is Oshini')
})


app.post('/product',(req, res)=>{
    console.log(req.body);
    res.send(req.body)
})

mongoose.set("strictQuery",false)
mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000,()=>{
        console.log('Node API app is running on port 3000')
    });
}).catch((error)=>{
    console.log(error)
})

