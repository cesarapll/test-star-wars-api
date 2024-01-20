const path = require("path");
require("dotenv").config({
    path: path.resolve(
        __dirname,
        process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env"
    ),
});
const app = require('./src/translator');

const { connectMySqlDB } = require('./src/shared/providers/mysql-client');

app.listen(process.env.PORT, async () => {
    await connectMySqlDB();
    console.log('Server running on port 3000');
});