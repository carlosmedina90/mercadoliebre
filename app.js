const express = require("express");
const { format } = require("path");
const path =require("path")
const app = express()

app.listen(3030,()=> console.log("el servidor esta vivo en el puerto 3030"));

const publicFolder= path.resolve(__dirname,"./public")
app.use(express.static(publicFolder))

app.get("/",(req,res) => {
  res.sendFile(path.join(__dirname,"./views/home.html"))})

app.get("/views/regisdter.html",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/regisdter.html"))})

app.get("/views/login.html",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"))})

/* var input = document.getElementById("username");
input.oninvalid =function(event){ event.target.setCustomValidity("username solo acepta letras")} */