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
  res.send(JSON.stringify({
    title: 'Exercises Directory',
    exerciseToDisplay: exerciseMap[req.params.exerciseName]
  }));
})

router.get('/:id', (req, res) => {
  res.send('Fetches exercise', req.params.id);
});

router.post('/', (req, res) => {
  console.log('Creates an exercise:', req.body.name);
});

router.put('/', (req, res) => {
  console.log('Updates exercise:', req.body.name);
});

router.delete('/:id', (req, res) => {
  console.log('Deletes exercise:', exerciseMap[req.params.id].name);
});

module.exports = router;
