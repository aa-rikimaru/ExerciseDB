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
  let exerciseHeader = document.getElementById('currentExercise');
  exerciseHeader.innerHTML = exercise.name;
}
