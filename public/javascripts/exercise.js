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

function selectExercise(e) {
  console.log(e);
}
