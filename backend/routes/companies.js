const router = require('express').Router();
let Company = require('../models/company');

router.route('/').get((req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => {
  const { query } = req.query;
  Company.find({ name: { $regex: query, $options: 'i' } })
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
