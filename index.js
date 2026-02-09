const express = require('express');
const app = express();

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

// About Route
app.get('/about', (req, res) => {
  res.send('This is About Page');
});

// Contact Route
app.get('/contact', (req, res) => {
  res.send('This is Contact Page');
});

// Server Port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});