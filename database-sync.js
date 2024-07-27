const {database} = require("./src/config");
const User = require('./src/models/user');

const sequelize = database

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
    console.log('Database synchronized.');

    // sample user
    await User.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'hasheddd123',
      phoneNumber : "+912121221"
    });

    console.log('Sample user created.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
