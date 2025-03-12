// functions/api.js
const serverless = require('serverless-http');
process.env.NODE_ENV = 'serverless';

// Import the Express app
const app = require('../index');

// Export the serverless handler
module.exports.handler = serverless(app);