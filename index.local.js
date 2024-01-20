'use strict';
const app = require('./src/app');
const { connectDB } = require('./src/shared/providers/mysql-client');
const path = require("path");
require("dotenv").config({
    path: path.resolve(
        __dirname,
        process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env"
    ),
});

console.log(process.env.DB_HOST)

app.listen(process.env.PORT, async () => {
    await connectDB();
    console.log('Server running on port 3000');
});