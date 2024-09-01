// Import  modules
const express = require('express');        // Framework for building web applications
const cors = require('cors');              // Middleware for enabling Cross-Origin Resource Sharing
const helmet = require('helmet');          // Middleware for securing HTTP headers
const cookieParser = require('cookie-parser'); // Middleware for parsing cookies
const dotenv = require('dotenv');          // Module for loading environment variables from a .env file

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Load database configuration 
require('./dbConfig');

// Apply middleware
app.use(express.json({ limit: '5mb' }));   // Parse incoming JSON requests with a 5MB limit
app.use(cors());                           // Enable CORS for all routes
app.use(helmet());                         // Apply security-related HTTP headers
app.use(cookieParser());                   // Parse cookies attached to client requests

// Define a general route for the root URL
app.get('/', async (req, res) => {
    res.send('hello from coder');          // Send a simple greeting message
});

// Import route modules
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Set up routes for handling user, authentication, and post-related requests
app.use('/api/users', userRoute);          // Routes for user-related operations
app.use('/api/auth', authRoute);           // Routes for authentication operations
app.use('/api/posts', postRoute);          // Routes for post-related operations

// Define the port on which the server will listen
const port = process.env.PORT ;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`server listen at port http://localhost:${port}`); // Log message indicating the server is running
});
