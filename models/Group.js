const mongoose = require("mongoose");
const EntrySchema = require('./EntrySchema')

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  },
  description: {
    type: String,
    maxlength: 300
  },
  participants: {
    type: Array,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  ledger: {
    type: [EntrySchema],
    default: []
  },
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;