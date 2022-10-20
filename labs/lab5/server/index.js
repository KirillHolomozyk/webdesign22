const express = require('express')
const app = express()
// const path = require('path')

// require('dotenv').config();

const PORT = 3000;



app.listen(PORT,()=>{
    console.log(`server start at port ${PORT}`)
})