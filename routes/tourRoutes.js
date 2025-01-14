const express = require('express');
const fs = require('fs');
const {
  getAllTours,
  getTour,
  addNewTour,
  addNewTours,
  deleteTour,
  deleteAllTours
} = require('../controllers/tourController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log('Tour id is: ', val);
  next();
});

router
  .route('/')
  .get(getAllTours)
  .post(addNewTour)
  .post(addNewTours)
  .delete(deleteAllTours);
router
  .route('/:id')
  .delete(deleteTour)
  .get(getTour);

module.exports = router;
