var exerciseMap = null;
var selectedExercise = null;

function initializeData(data) {
  exerciseMap = data;
}

function selectExercise(exerciseName) {
  $.ajax({
    url: "/exercises/display/" + exerciseName,
    type: "GET",
    success: function(data) {
      let exercise = JSON.parse(data).exerciseToDisplay;
      changeFocusTo(exercise);
    },
    error: function(err) {
      console.log(err)
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
    },
    error: function(err) {
      console.log(err)
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
  if (selectedExercise != null) {
      let oldExerciseCard = document.getElementById(selectedExercise.name.replace(" ", "-"));
      oldExerciseCard.className = oldExerciseCard.className.replace("active", ""); // Will remove any active
  }

  let newExerciseCard = document.getElementById(exercise.name.replace(" ", "-"));
  newExerciseCard.className += ' active';

  selectedExercise = exercise;

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
