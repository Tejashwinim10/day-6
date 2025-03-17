const express = require('express');
const app = express();
const port = 5000;
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});
app.get('/users', (req, res) => {
  res.json(users);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

