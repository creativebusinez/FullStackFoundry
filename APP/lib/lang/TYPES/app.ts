import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


// Import route modules
// import exampleRoute from './routes/exampleRoute';


const app = express();

// Application-level middleware
app.use(cors());           // Enable CORS for all requests
app.use(helmet());         // Add security-related HTTP headers
app.use(express.json());   // Parse JSON bodies

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Example route usage
// app.use('/api/example', exampleRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
