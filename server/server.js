const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ahmedaaamm2:lQn8PzwYBNeh9v0S@cluster0.yi4p4.mongodb.net/frems?retryWrites=true&w=majority&appName=Cluster0")


const UserModel = require("./models/Users")


app.get("/users", async (req, res)=>{
    const users = await UserModel.find();
    res.json(users) 
})

app.listen("3001", ()=>{
    console.log("server is working well ahmed mansi")
})