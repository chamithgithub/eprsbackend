// functions/api.js (Netlify serverless function)
const serverless = require('serverless-http');
const app = require('../index'); // Import the Express app

module.exports.handler = serverless(app);