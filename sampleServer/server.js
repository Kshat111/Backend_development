const express = require('express'); 
const app = express(); 
// creating an instance of express named app

let portNumber = 3000;

// MIDDLEWARE
const bodyParser = require('body-parser');
// used to parse req.body in express for PUT or POST
app.use(bodyParser.json());
// specifically parsing JSON data and adding it to req.body object

app.listen(portNumber, () => {
    console.log("server started at port number "+portNumber);
});
// port number 3000 is assigned to the server
// http://localhost:300/ will not work now (for example)

app.get('/', (request, response) => {
    response.send("This is a sample response");
});
// .get() is a method used to define a route handler for GET requests
// '/' specifies the path for which this route handler will be executed
// In this case, '/' represents the root URL of the application

// the callback function used here is the route handler function
// takes two parameters: request and response

// "This is a sample response" is the string that will be sent as the response body when the home page of the application is encountered


app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Sample car response")
});


// connecting with MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error")} );