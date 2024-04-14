// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
// const dotenv = require('dotenv');               // to get dotenv configuration 



const app  = express();

dotenv.config();
const PORT = process.env.PORT || 5000;



app.get('/', (req,res)=>{
    res.send('HEYY THERE !!! ')
})

app.listen(PORT, () =>{
    console.log(`app listening to port ${PORT}`);
})

