const { Sequelize } = require("sequelize");

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        define: {
            timestamps: false,
        },
        dialectOptions: {
            decimalNumbers: true,
        },
        pool: {
            max: 20,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

async function connectDB() {
    db.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((error) => {
            console.error('Unable to connect to the database:', error);
        });
}

module.exports = {
    db,
    connectDB
};
