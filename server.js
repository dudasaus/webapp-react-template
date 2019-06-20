/**
 * Express server that statically serves a dsitrubtion directory
 */
const path = require('path');
const fs = require('fs');
const express = require('express');

// Distribution directory and default port
const distribution = 'dist';
const PORT = process.env.PORT || 8000;
const notFoundHtml = path.join(__dirname, distribution, '404.html');


// Start the server
const app = express();
app.use(express.static(distribution));
// 404 Page if the static file wasn't found
app.get('*', (req, res) => {
  responseHtml = fs.readFileSync(notFoundHtml, { encoding: 'utf-8' });
  res.status(404).send(responseHtml);
});
// Listen
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));