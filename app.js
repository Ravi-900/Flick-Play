const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { response } = require("express");

const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/",(req,res)=>{
    res.render("Home")
})

app.get("/login",(req,res)=>{
    res.render("Login")
})

app.post("/Users",(req,res)=>{
    var email=req.body.Email
    var pass=req.body.Password
    if(email=== "ravi900kumawat@gmail.com" && pass==="Ravi900"){
        res.render("Users")
    }
    else{
        console.log(email,pass);
    }
})

app.get("/Users",(req,res)=>{
    res.render("Users")
})


app.listen("3000",()=>{
    console.log("Server is up and running!!!!")
})