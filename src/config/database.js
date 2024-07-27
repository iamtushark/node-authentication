const Sequelize = require("sequelize");

const sequelize = new Sequelize('node', 'node', 'node', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize