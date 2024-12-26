const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
  res.json({message: 'Hello binh tom'});
});

module.exports = router;
