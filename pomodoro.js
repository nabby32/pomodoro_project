$(document).ready(function () {

//Global Variables
var workTime = 150000;
var breakTime = 30000;
var currentTime = workTime;
var pomTime = currentTime;

//Set Page Load Timer Value
$("#timer-holder").text(centisecToMinString(workTime));

//Timer Setting Buttons
$("#min-up").click(function () {
	var currentMin = $("#min").text();
	if (currentMin < 60) {
		currentMin ++;
	}
	else {
		alert("We need to limit sessions to an hour to avoid stress on the engine.")
	}
	$("#min").text(currentMin);
	currentTime = minToCentiseconds(currentMin);
	$("#timer-holder").text(centisecToMinString(currentTime));
});

$("#min-down").click(function () {
	var currentMin = $("#min").text();
	if (currentMin > 5) {
		currentMin --;
	}
	else {
		alert("We need you to go out for at least one hot lap.")
	}
	$("#min").text(currentMin);
	currentTime = minToCentiseconds(currentMin);
	$("#timer-holder").text(centisecToMinString(currentTime));
});

$("#break-up").click(function () {
	var currentBreak = $("#sec").text();
	if (currentBreak < 15) {
		currentBreak ++;
	}
	else {
		alert("We need to get you back on track sooner.")
	}
	$("#sec").text(currentBreak);
	currentTime = minToCentiseconds(currentBreak);
});

$("#break-down").click(function () {
	var currentBreak = $("#sec").text();
	if (currentBreak > 1) {
		currentBreak --;
	}
	else {
		alert("You need to pit for more fuel and tires at least.")
	}
	$("#sec").text(currentBreak);
	currentTime = minToCentiseconds(currentBreak);
});

//Start and Stop Timer
$("#timer-go").click(function () {
	timerStart();
})

$("#timer-stop").click(function () {
	timerStop();
})



//Functions

//Leading zero
function place(n) {
	if (n < 10) {
		return "0" + parseInt(n);
	}

	else {
		return "" + parseInt(n);
	}
};

//Convert Centiseconds to Minutes
function centisecToMinString(centiseconds) {
	var min = centiseconds / 6000;
	var sec = (centiseconds - (min * 6000)) / 100;

	return place(min) + ":" + place(sec) + ":" + place(centiseconds - (min * 6000) - (sec * 100));
};

//Convert Minutes to Centiseconds
function minToCentiseconds(minutes) {
	return (minutes * 6000);
}


});