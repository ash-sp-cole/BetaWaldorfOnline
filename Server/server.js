const express = require ("express");
const App = express ();
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
require('dotenv').config();
App.use(bodyParser.json());
const mainLessonRoutes = require("./Routes/mainLessonRoute.js");
const mainSearch = require("./Routes/mainLessonRoute.js");
App.use(cors());

const Port = 3001 || process.env;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true


})



mongoose.connection.on("error", (error) => {
    console.log(error)
})


mongoose.connection.once("open", () => {
    console.log("connected to database successfully")
})



App.get ("/", (req,res)=>{

    res.send("working server get ");


})

App.use("/mainlesson", mainLessonRoutes);
App.use("/mainsearch", mainSearch)

App.listen(Port, ()=>{

    console.log("Server is up and running on port : ", Port , "  .")



})