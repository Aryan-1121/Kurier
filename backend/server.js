// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'         // to get dotenv configuration 

import authRoutes from './routes/auth.js'
import connectToMongoDB from './db/connectMongoDB.js';



const app  = express();

dotenv.config();
const PORT = process.env.PORT || 5000;



app.get('/', (req,res)=>{
    res.send('HEYY THERE !!! ')
})

//  using middleware for auth purpose 
app.use('/api/auth', authRoutes );              // whenever someone tries to hit anything with '/api/auth' as prefix in route then navigate them to -> authRoutes MW






app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`app listening to port ${PORT}`);
})

