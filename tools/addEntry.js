require('dotenv').config({ path: '../.env' });
const axios = require('axios');

const connectDB = require('../db/connect');
const Group = require('../models/Group');

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const expense = {
      from: process.argv[3],
      to: process.argv[4],
      amount: Number(process.argv[5]),
      for: process.argv[6],
    };
    await axios.post(
      `https://ledger-server.herokuapp.com/api/v1/groups/${process.argv[2]}`,
      expense
    );
    console.log('Success!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
