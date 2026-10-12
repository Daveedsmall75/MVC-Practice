const express = require('express')
const app = express()

// const router = require('./router/router')

app.use(express.json())

app.listen(2000, ()=>{
    console.log(`Server is running on PORT: 2000`)
})
