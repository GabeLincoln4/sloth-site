const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());

mongoose.connect("mongodb+srv://admin-gabriel:<password>@cluster0.n51sy.mongodb.net/slothDB?retryWrites=true&w=majority");

app.use("/", require("./routes/weekdayRoute.js"));

app.listen("3001", function(){
    console.log("Server running on port 3001");
});