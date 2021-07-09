// global variables for each input
var saveBtn = document.querySelector('.saveBtn');
var oneInput = document.getElementById('input-field-1')

// set today's date on the top of the scheduler
// moment not working
var todayDate = moment().format('dddd,MMM Do YYYY');
$("#currentDay").html(todayDate);

// set colors for time blocks depending on current time if/else statement
// green = .future
// red = .present
// grey = .past


// save data buttons 
saveBtn.addEventListener("click", saveData);

function saveData() {
    localStorage.setItem("input", oneInput.value);
}
 
// retrieve stored data

function retrieveData() {
    localStorage.getItem("input");
}

// $("oneInput .description").val(localStorage(get.item("oneInput")));