const express = require('express')

const app  = express();

app.get('/', (req,res)=>{
    res.send('HEYY THERE !!! ')
})

app.listen(5000, () =>{
    console.log('app listening to port 5000');
})

