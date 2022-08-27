const express = require('express');
const router = express.Router();

const {
  getAllGroups,
  createGroup,
  getGroup,
  newExpense,
} = require('../controllers/groups');

// /api/v1/groups
router.route('/').get(getAllGroups).post(createGroup);
router.route('/:id').get(getGroup).post(newExpense);

module.exports = router;
