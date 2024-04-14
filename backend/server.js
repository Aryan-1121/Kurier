// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'         // to get dotenv configuration 

import authRoutes from './routes/auth.js'
import connectToMongoDB from './db/connectMongoDB.js';



const app  = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());                // to get details form POST req body

//  using middleware for auth purpose 
// whenever someone tries to hit anything with '/api/auth' as prefix in route then navigate them to -> authRoutes MW
app.use('/api/auth', authRoutes );              



// app.get('/', (req,res)=>{
//     res.send('HEYY THERE !!! ')
// })




app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`app listening to port ${PORT}`);
})

