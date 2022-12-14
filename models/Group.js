const mongoose = require('mongoose');
const ExpenseSchema = require('./ExpenseSchema');

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  participants: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expenses: {
    type: [ExpenseSchema],
    default: [],
  },
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
