// global variables for each input
var saveBtn = document.querySelectorAll(".saveBtn");
var eightInput = document.getElementById("input-field-8");
var nineInput = document.getElementById("input-field-9");
var tenInput = document.getElementById("input-field-10");
var elevenInput = document.getElementById("input-field-11");
var twelveInput = document.getElementById("input-field-12");
var oneInput = document.getElementById("input-field-13");
var twoInput = document.getElementById("input-field-14");
var threeInput = document.getElementById("input-field-15");
var fourInput = document.getElementById("input-field-16");
var fiveInput = document.getElementById("input-field-17");
var sixInput = document.getElementById("input-field-18");
var sevenInput = document.getElementById("input-field-19");

var inputData = [
  eightInput,
  nineInput,
  tenInput,
  elevenInput,
  twelveInput,
  oneInput,
  twoInput,
  threeInput,
  fourInput,
  fiveInput,
  sixInput,
  sevenInput,
];

// set today's date on the top of the scheduler
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

// set colors for time blocks depending on current time if/else statement
// green = .future
// red = .present
// grey = .past

function timeTracker() {
  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var sectionTime = parseInt($(this).children('.col-sm-10').children().attr("id").split('field-')[1]);
    console.log(sectionTime);
    if (sectionTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (sectionTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    });
}

timeTracker();
// save data buttons
$(".saveBtn").on("click", function () {
  var toDoListItem = $(this).parent().prev().children().attr("id");
  var toDoListDescription = $(this).parent().prev().children().val();
  console.log(toDoListDescription);
  localStorage.setItem(toDoListItem, toDoListDescription);
});

$("#input-field-8").val(localStorage.getItem('input-field-8'));
$("#input-field-9").val(localStorage.getItem('input-field-9'));
$("#input-field-10").val(localStorage.getItem('input-field-10'));
$("#input-field-11").val(localStorage.getItem('input-field-11'));
$("#input-field-12").val(localStorage.getItem('input-field-12'));
$("#input-field-13").val(localStorage.getItem('input-field-13'));
$("#input-field-14").val(localStorage.getItem('input-field-14'));
$("#input-field-15").val(localStorage.getItem('input-field-15'));
$("#input-field-16").val(localStorage.getItem('input-field-16'));
$("#input-field-17").val(localStorage.getItem('input-field-17'));
$("#input-field-18").val(localStorage.getItem('input-field-18'));
$("#input-field-19").val(localStorage.getItem('input-field-19'));
