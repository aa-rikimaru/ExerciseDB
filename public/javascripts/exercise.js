var exerciseMap = null;

function initializeData(data) {
  exerciseMap = data;
}

function dropDownMenu() {
  alert('Right Click Event Received');
}

function displayExercise() {
  console.log(exerciseMap);
}

function selectExercise(exerciseName) {
  $.ajax({
    url: "/exercises/display/" + exerciseName,
    type: "GET",
    success: function(data) {
      var exercise = JSON.parse(data).exerciseToDisplay;
      changeFocusTo(exercise);
    }
  });
}

function changeFocusTo(exercise) {
  console.log(exercise);

  let exerciseNameHeader = document.getElementById('currentExerciseHeader');
  let exerciseNameInput = document.getElementById('exerciseNameInput');
  let exerciseAuthorInput = document.getElementById('exerciseAuthorInput');
  let exerciseLevelSelector = document.getElementById('exerciseLevelSelector');
  let exerciseTypeSelector = document.getElementById('exerciseTypeSelector');
  let exerciseMuscleGroupMultiSelector = document.getElementById('exerciseMuscleGroupMultiSelector');
  let instructionsTextArea = document.getElementById('instructionsTextArea');
  let notesTextArea = document.getElementById('notesTextArea');

  let instructionText = '';
  exercise.instructions.forEach((step) => {
    instructionText = instructionText.concat(step + '\n');
  });

  let noteText = '';
  console.log(exercise.note);
  exercise.note.forEach((line) => {
    noteText = noteText.concat(line + '\n');
  });

  exerciseNameHeader.innerHTML = exercise.name;
  exerciseNameInput.value = exercise.name;
  exerciseAuthorInput.value = exercise.author;
  exerciseLevelSelector.value = exercise.level;
  exerciseTypeSelector.value = exercise.type;
  exerciseMuscleGroupMultiSelector.value = ['Chest', 'Shoulders', 'Arms'];
  instructionsTextArea.value = instructionText;
  notesTextArea.value = noteText;

}
