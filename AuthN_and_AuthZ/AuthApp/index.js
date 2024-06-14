// insatantiating the server
const express = require("express");
const app = express();

// import .env dependencies
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// cookie-parser: parses cookies attached to the client request object
// It populates the req.cookies property with an object keyed by cookie names.
// If a secret is provided, it will also decrypt signed cookies.
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// body parser: parse the body of incoming request objects before your handlers
// making it available under the req.body property
app.use(express.json());

// DB connection
require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

// activating the portal
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})