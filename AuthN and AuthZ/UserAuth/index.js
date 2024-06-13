// initiating an express server
const express = require("express");
const app = express();

// importing .env file to obtain port number
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

// DB connection
require("./config/database").connect();

//route import
const user = require("./routes/user");

// route mounting
app.use("/api/v1", user);

// activate server
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})