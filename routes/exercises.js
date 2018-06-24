const express = require('express');
const router = express.Router();

/* Exercises API */
router.get('/', (req, res) => {
  res.send('Fetches a list of exercises');
});

router.get('/:id', (req, res) => {
  res.send('Fetches exercise', req.params.id);
});

router.post('/', (req, res) => {
  res.send('Creates an exercise');
});

router.put('/:id', (req, res) => {
  res.send('Updates exercise', req.params.id);
});

router.delete('/:id', (req, res) => {
  res.send('Deletes exercise', req.params.id);
});

module.exports = router;
