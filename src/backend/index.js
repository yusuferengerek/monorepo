const express = require('express');
const fs = require('fs');
const path = require('path');

const { backend } = require('../config.json');
const app = express();

// Parser Using for Web Requests
app.use(require('cookie-parser')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const routesPath = path.join(__dirname, 'routes');

if (fs.existsSync(routesPath)) {
  fs.readdirSync(routesPath).forEach(file => {
    if (file.endsWith('.js')) {
      const route = require(path.join(routesPath, file));
      app.use('/', route);
    }
  });
}

app.get('/', async (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.listen(backend.PORT, () => {
  console.log(`Backend is running on port ${backend.PORT}`);
});