// const express = require('express')
// import express from 'express'
import dotenv from 'dotenv'         // to get dotenv configuration 
import authRoutes from './routes/auth.js'
import messageRoutes from './routes/messageRoute.js'
import userRoutes from './routes/userRoutes.js'
import connectToMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser'
import { app, server } from './socket/socket.js';



// instead of using object of express here we will get it from socket.js file where we wrap it with socket server 

const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());                // to get and parse details form POST req body into json 
app.use(cookieParser());

//  using middleware for auth purpose 
// whenever someone tries to hit anything with '/api/auth' as prefix in route then navigate them to -> authRoutes MW
app.use('/api/auth', authRoutes );              
app.use('/api/messages', messageRoutes );              
app.use('/api/users', userRoutes );              



// app.get('/', (req,res)=>{
//     res.send('HEYY THERE !!! ')
// })


// instead of listening with express server we will listen with socket server

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`app listening to port ${PORT}`);
})

