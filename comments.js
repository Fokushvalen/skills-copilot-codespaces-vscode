// Create web server
// Create a new web server using the express module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up the app to use body-parser
app.use(bodyParser.json());

// Create an array to store the comments
let comments = [];

// Create a new route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a new route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});