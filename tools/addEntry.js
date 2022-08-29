require('dotenv').config({ path: '../.env' });

const connectDB = require('../db/connect');
const Group = require('../models/Group');

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const newExpense = {
      from: process.argv[3],
      to: process.argv[4],
      amount: process.argv[5],
      for: process.argv[6],
    };
    await Group.findByIdAndUpdate(process.argv[2], {
      $push: { expenses: newExpense },
    });
    console.log('Success!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();

