# Step-by-Step Workflow for Creating a RESTful API

1. Set up development environment - install node, 'npm init'
2. Install required packages - 'npm i express mongoose body-parser dotenv nodemon' (add more if needed)
3. Create directory structure:
sampleAPI/
├── Controllers/
├── config/
├── middlewares/
├── models/
├── routes/
├── .env
├── index.js
└── package.json

Definitions:
- Controllers: contain logic for handling req and res (like createTodo.js will contain logic to handle creating new todo item over HTTP POST method)
- config: contains configuration files of the app like database.js which contains code to connect the app to database
- middlewares: intercept the req and res for parsing req bodies, managing sessions, etc; used in authN and authZ
- models: defines data structures and schema used in the app (like the schema for a todo item)
- routes: defines how different HTTP req are handled by mapping them to corresponding controller functions. Basically, this defines all routes to operations like GET, POST, PATCH, DELETE (actual CRUD is handled by controller, routes/ is just making the URI (Uniform REsource Identifier))
- env: sensitive info like PORT no, API key, DB_URI, admin details
- index: the main entry point of the application, sets up the server, middleware, database, everything is set to one place here

4. Configure environment variables in .env file
5. Set up DB connection in 'config/' folder by creating a 'database.js' file
6. Define models (data schemas, data types)
7. Implement Controllers (actual logic to handle CRUD)
8. Set up routes (define API endpoints)
9. Implement middleware (using JWT, authN like 'isStudent', 'isTeacher', etc)
10. Integrate everything in 'index.js'
11. Test and docuument the API in Postman