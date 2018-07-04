var exerciseMap = null;
var selectedExercise = null;

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
      let exercise = JSON.parse(data).exerciseToDisplay;
      selectedExercise = exercise;
      changeFocusTo(exercise);
    }
  });
}

function saveExercise() {
  $.ajax({
    url: "/exercises",
    type: "PUT",
    data: selectedExercise,
    success: function(res) {
      console.log('POST Request:', res);
    }
  });
}

function deleteExercise() {
  $.ajax({
    url: "/exercises/" + selectedExercise.name,
    type: "DELETE",
    success: function(res) {
      console.log('DELETE Request:', res);
    }
  })
}

function changeFocusTo(exercise) {
  let exerciseNameHeader = document.getElementById('currentExerciseHeader');
  let exerciseNameInput = document.getElementById('exerciseNameInput');
  let exerciseAuthorInput = document.getElementById('exerciseAuthorInput');
  let exerciseLevelSelector = document.getElementById('exerciseLevelSelector');
  let exerciseTypeSelector = document.getElementById('exerciseTypeSelector');
  let instructionsTextArea = document.getElementById('instructionsTextArea');
  let notesTextArea = document.getElementById('notesTextArea');

  let muscleGroup = ["chest", "arms", "back"];
  muscleGroup.forEach((muscle) => {
    document.getElementById('option-' + muscle).selected = true;
  })

  let instructionText = '';
  exercise.instructions.forEach((step) => {
    instructionText = instructionText.concat(step + '\n');
  });

  let noteText = '';
  exercise.note.forEach((line) => {
    noteText = noteText.concat(line + '\n');
  });

  exerciseNameHeader.innerHTML = exercise.name;
  exerciseNameInput.value = exercise.name;
  exerciseAuthorInput.value = exercise.author;
  exerciseLevelSelector.value = exercise.level;
  exerciseTypeSelector.value = exercise.type;
  instructionsTextArea.value = instructionText;
  notesTextArea.value = noteText;

}
