/*****************************************************************************
 * FILENAME: app.js
 *****************************************************************************/

const express = require('express');
const app = express();
const PORT = 3000;

const pageRoutes = require('./routes/pages');

// Serve static files from 'public' folder
app.use(express.static('public'))

// Basic route
app.use('/', pageRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})