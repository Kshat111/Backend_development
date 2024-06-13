EVERYTHING EXPLAINED IN A NUTSHELL

This is done for POST method
(1) In '.env' file, we have defined all the dependencies like the port number and the localhost url.

(2) In 'index.js', we have first created an instance of the express server named as app, then defined a post number, then applied a middleware, then we are importing the routes and then mounting or appending onto the base route "/api/v1", then we have started the server at the given port number in '.env' file, then database connection is made (by importing "./config/database"- its just making a connection with MongoDB), and finally we have created a default route (this is optional, it reflects some text on the homepage).

(3) 'Router()' method is used to create a route, an instance named route is made, then an API route is defined for 'POST' methos of HTTP while mapping it to 'createTodo' controller (which is imported above it).

(4) Controller - 'createTodo.js' is just a function which is destructuring the request body and extracting title and description from it, then creating a 'Todo' object (the structure of this object is defined in /models/todo.js) .

(5) Model - 'todo.js' is defining a mongoose schema i.e. what will my data look like after being added to the sampleDatabase.



THIS THE THE OPTIMAL FOLDER HIERARCHY (A GOOD PRCATICE)