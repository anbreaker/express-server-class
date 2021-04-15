const mongoose = require('mongoose');

const dbLink = process.env.MONGODB_URI;

const dbConnection = async () => {
  try {
    const db = await mongoose.connect(dbLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`Database ${mongoose.connection.name} is connected.`);
  } catch (error) {
    console.log(error);

    throw new Error('Error on Database');
  }
};

module.exports = {
  dbConnection,
};
