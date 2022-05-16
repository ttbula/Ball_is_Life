require("dotenv").config();

const { PORT = 3000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require('mongoose')

//db connection
mongoose.connect(MONGODB_URL)
mongoose.connection
    .on("open", () => console.log('Connected to Mongoose'))
    .on("close", () => console.log('Disconnected'))
    .on("error", (error) => console.log(error))

//test route
app.get("/", (req, res) => {
    res.send("hello world");
});

//listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));