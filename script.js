// global variables for each input
var oneInput = document.getElementById('input-field-1')

// set today's date on the top of the scheduler
function todaysDate() {
var today = new Date();
var intDate = string(today.getDate());
var intDay = string(today.getDay());
var intMonth = string(today.getMonth());
var intYear = string(today.getYear());
var intHours = string(today.getHours());
var intMinutes = string(today.getMinutes());
var intSeconds = string(today.getSeconds());
var time = intDate + " " + intDay + " " + intMonth + " " + intYear + " " + intHours + " " + intMinutes + " " + intSeconds;
document.getElementById("currentDay").innerHTML = time;
console.log(time);
}

// set colors for time blocks depending on current time
// green = future
// red = present
// grey = past


// save data buttons 
function saveData() {
    localStorage.setItem("input", oneInput.value);
}

// retrieve stored data

function retrieveData() {

}