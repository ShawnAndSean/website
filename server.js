//importing package

const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//static path

let staticPath = path.join(__dirname, "public");


//for express.js
const app = express();


// //middlewares
app.use(express.static(staticPath));
app.use(express.json())

//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.listen(3000, () => {
    console.log('connecting to port 3000....')
})


//signup route

app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})


app.post("/signup", (req, res) => {
    console.log(req.body);
    res.json('data-received');
})

// //404 route
// app.get("/404", (req, res) => {
//     res.sendFile(path.join(__dirname, "404.html"));
// })

// app.use((req, res) => {
//     res.redirect("/404");
// })