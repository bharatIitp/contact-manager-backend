// Importing necessary packages
import express from 'express';
import dotenv from 'dotenv';

// Configure dotenv to load environment variables from a .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Define the port the server will run on.
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests.
// This allows us to access the request body via `req.body`.
app.use(express.json());

// A simple GET route for health check.
// This is useful to verify that the server is running.
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server and make it listen for incoming requests on the specified PORT.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});