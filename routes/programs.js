const express = require('express');
const fs = require('fs');
const router = express.Router();

const programDataDir = './data/programs/';

/* Programs API */
router.get('/', (req, res) => {
  console.log('Fetching all programs');
  fs.readdir(programDataDir, (err, files) => {
    if (err) throw err;
    res.send(JSON.stringify(files));
  })
});

router.get('/single', (req, res) => {
  console.log('Fetching one program');
  let programName = req.query.programName;
  programName = programName.trim().replace(/\//g, "_");
  let filePath = `${programDataDir}${programName}.json`;
  console.log(filePath);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
})

router.post('/', (req, res) => {
  console.log('Persisting a program:\n', req.body);
  let program = req.body;
  let fileName = program.name.trim().replace(/\//g, "_") + '.json';
  let filePath = `${programDataDir}${fileName}`;

  let json = JSON.stringify(program, null, 4);
  fs.writeFile(filePath, json, (err) => {
    if (err) throw err;
    console.log('File saved...');
  });
});

module.exports = router;
