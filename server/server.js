const express = require("express")
const app = express()
const _port = "3001";
const cors = require("cors")
app.use(cors())
app.use(express.json())



// connect to db

const  username = process.env.USERNAME,
       password = process.env.PASSWORD,
       database = process.env.DATABASE;
       
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.yi4p4.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`)



// user model
const UserModel = require("./models/Users")


// get request
app.get("/users", async (req, res)=>{
    const users = await UserModel.find();
    res.json(users) 
})


// create user 
app.post("/createUser", async (req, res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(req.user);
})


app.listen(_port, ()=>{
    console.log("server is working well ahmed mansi")
})