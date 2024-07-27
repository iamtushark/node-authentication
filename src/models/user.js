const { DataTypes, Model } = require('sequelize');
const { database } = require('../config');

const sequelize = database
const User = Model.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            allowNull: false,
            defaultValue: 'user',
        },
    },
    {
        tableName: 'users',
        sequelize,
    }
);

module.exports = User;
