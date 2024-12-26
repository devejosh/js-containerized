const express = require ('express')
const app = express ()
const port  = 3000

// routes
app.get ('/' , (req, res) =>{
    res.send("Welcome, friend. this should work now, well this is perfect! Which is awesome")
})

app.get ('/about' , (req, res) =>{
    res.send("This is the about page")
})

app.get('/admin' , (req, res) => {
    res.send("This is the admin page")
})


app.listen (port, () => {
    console.log (`Server is up on port : ${port}`)
})