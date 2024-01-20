const { DataTypes } = require('sequelize');
const mysqlClient = require('../../shared/providers/mysql-client');

const Starship = mysqlClient.define('Starship', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost_in_credits: {
        type: DataTypes.STRING,
        allowNull: false
    },
    crew: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    passengers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cargo_capacity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    consumables: {
        type: DataTypes.STRING,
        allowNull: false
    },
    starship_class: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    edited: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Starship;
