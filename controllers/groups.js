const Group = require('../models/Group');
const CustomAPIError = require('../errors/custon-error');

const getAllGroups = async (req, res) => {
  const groups = await Group.find({});
  res.status(200).json(groups);
};

const createGroup = async (req, res) => {
  const group = await Group.create(req.body);
  res.status(201).json(group);
};

const getGroup = async (req, res, next) => {
  const groupID = req.params.id;
  const group = await Group.findById(groupID);
  if (!group) {
    throw new CustomAPIError(`No group with id ${groupID}`, 404);
  }
  res.status(200).json(group);
};

const newExpense = async (req, res) => {
  const groupID = req.params.id;
  const newExpense = req.body;
  const group = await Group.findByIdAndUpdate(
    groupID,
    { $push: { expenses: newExpense } },
    { runValidators: true }
  );
  if (!group) {
    throw new CustomAPIError(`No group with id ${groupID}`, 404);
  }
  res.status(200).json(expense);
};

module.exports = {
  getAllGroups,
  createGroup,
  getGroup,
  newExpense,
};
