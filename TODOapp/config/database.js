const mongoose = require('mongoose');

require('dotenv').config(); // everything defined in env is loaded

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    // all the configurations int=side the .env file can only be fed to the process object after installing dotenv library
    .then(() => {console.log("Connection Successful")})
    .catch( (error) => {
        console.log("Recieved an error");
        console.error(error.message);
        process.exit(1);
        // terminates the Node.js process with an exit code of 1, indicating an error
    } );
}

module.exports = dbConnect;

// process object in Node.js ia a global object that gives info of current NOde.js process
// A Node.js process is an instance of the Node.js runtime, which runs your JavaScript code
// It is the running environment in which your Node.js application executes