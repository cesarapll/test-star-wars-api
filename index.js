'use strict';
const app = require('./src/app');
const serverless = require('serverless-http');
const { connectDB } = require('./src/shared/providers/mysql-client');

const path = require("path");
require("dotenv").config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env"
  ),
});

const handler = serverless(app)
module.exports.handler = async (event, context) => {
  await connectDB();
  return handler(event, context)
};
