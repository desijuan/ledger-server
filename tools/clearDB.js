require('dotenv').config();

const connectDB = require('../db/connect');
const Group = require('../models/Group');

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Group.deleteMany();
    console.log('Success!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
