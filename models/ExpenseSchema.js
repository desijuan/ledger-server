const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  to: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  for: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ExpenseSchema;
