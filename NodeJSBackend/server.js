const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');

// Enable CORS for all routes
app.use(cors());


// Middleware to parse JSON bodies
app.use(express.json());

// Define your API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js API' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
