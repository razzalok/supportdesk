const express = require('express')
const colors = require('colors')
require('dotenv').config()
const PORT=process.env.PORT
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app=express()


connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/users',require('./routes/userRoutes'))

app.get('/',(req,res)=>{
    res.send('get ')
})

app.use(errorHandler)
app.listen(PORT,(req,res)=>{
    console.log(`server is running on ${PORT}`);
})
