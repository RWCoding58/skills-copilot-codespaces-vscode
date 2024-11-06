// Create web server
// Open a terminal
// Run: node comments.js
// In a web browser, go to: http://localhost:3000

const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the 'index.html' file when a request is made to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Listen for connections on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});