const express = require ('express')
const app = express ()
const port  = 3000

// routes
app.get ('/' , (req, res) =>{
    res.send("Welcome to express inside a container. updated text")
})

app.listen (port, () => {
    console.log (`Server is up on port : ${port}`)
})