// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'         // to get dotenv configuration 
import authRoutes from './routes/auth.js'
import messageRoutes from './routes/messageRoute.js'
import connectToMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser'



const app  = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());                // to get and parse details form POST req body into json 
app.use(cookieParser());

//  using middleware for auth purpose 
// whenever someone tries to hit anything with '/api/auth' as prefix in route then navigate them to -> authRoutes MW
app.use('/api/auth', authRoutes );              
app.use('/api/messages', messageRoutes );              



// app.get('/', (req,res)=>{
//     res.send('HEYY THERE !!! ')
// })




app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`app listening to port ${PORT}`);
})

