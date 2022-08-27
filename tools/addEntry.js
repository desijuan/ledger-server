require('dotenv').config();

const connectDB = require('../db/connect');
const Group = require('../models/Group');

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const entry = {
      from: 'Nahue',
      to: 'Fran',
      amount: 30,
      for: 'salsa camping',
    };
    await Group.findByIdAndUpdate(process.argv[2], {
      $push: { ledger: entry },
    });
    console.log('Success!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
