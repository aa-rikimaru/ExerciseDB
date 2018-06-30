const _ = require('lodash');
const express = require('express');
const router = express.Router();

const exercises = require('../data/exercises.json');
const exerciseMap = _.keyBy(exercises, 'name');

/* Exercises API */
router.get('/', (req, res) => {
  res.render('exercises-display',
  {
    title: 'Exercise Directory',
    exercises: exercises,
    exerciseMap: JSON.stringify(_.keyBy(exercises, 'name')),
    exerciseToDisplay: exercises[0],
  });
});

router.get('/display/:exerciseName', (req, res) => {
  res.render('exercises-display',
  {
    title: 'Exercises Directory',
    exercises: exercises,
    exerciseMap: JSON.stringify(_.keyBy(exercises, 'name')),
    exerciseToDisplay: exerciseMap[req.params.exerciseName]
  });
})

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
