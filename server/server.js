const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect()


app.get("/users", (req, res)=>{
    res.send("<h1>it is working well now  ... </h1>")
})

app.listen("3001", ()=>{
    console.log("server is working well ahmed mansi")
})