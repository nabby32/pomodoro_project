$(document).ready(function () {

//Global Variables
var raceMode = true;
var workTime = 150000;
var breakTime = 30000;
var currentTime = workTime;
var currentBreak = breakTime;
var testPom = currentTime;
var interval = true;
var onDeck = "Pit";

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
	currentBreak = $("#sec").text();
	if (currentBreak < 15) {
		currentBreak ++;
	}
	else {
		alert("We need to get you back on track sooner.")
	}
	$("#sec").text(currentBreak);
	breakTime = minToCentiseconds(currentBreak);
});

$("#break-down").click(function () {
	currentBreak = $("#sec").text();
	if (currentBreak > 1) {
		currentBreak --;
	}
	else {
		alert("You need to pit for more fuel and tires at least.")
	}
	$("#sec").text(currentBreak);
	breakTime = minToCentiseconds(currentBreak);
});

//Start and Stop Timer
$("#timer-go").click(function () {
	testPom = currentTime;
	interval = setInterval(decrement, 20);
})

$("#timer-stop").click(function () {
	if (raceMode == false) {
		clearInterval(interval);
		$("#timer-holder").text(centisecToMinString(breakTime));
		alert("Copy. Box, box, box.");
		onDeck = "Track";
		testPom = breakTime;
		interval = setInterval(decrement, 20);
	}
	else if (raceMode = true) {
		alert("Stay out! Stay out!");
	}
	
})

//Toggle Race Mode
$("#toggle-holder").click(function () {
	switch (raceMode) {
		case true:
			$("#toggle-holder").css("font-size", "18px");
			$("#toggle-holder").text("Practice Mode");
			raceMode = false;
			break;
		case false:
			$("#toggle-holder").css("font-size", "20px");
			$("#toggle-holder").text("Race Mode");
			raceMode = true;
			break;
	}
});


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
	var min = Math.floor(centiseconds / 6000);
	var sec = Math.floor((centiseconds - (min * 6000)) / 100);

	return place(min) + ":" + place(sec) + ":" + place(centiseconds - (min * 6000) - (sec * 100));
};

//Convert Minutes to Centiseconds
function minToCentiseconds(minutes) {
	return (minutes * 6000);
}

//Start Timer
function decrement() {
	if (testPom == 0) {
		switch (onDeck) {
			case "Pit":
				testPom = breakTime;
				onDeck = "Track";
				break;
			case "Track":
				testPom = currentTime;
				onDeck = "Pit";
				break;
		}	
	}

	else	{	
		testPom -= 2;
		$("#timer-holder").text(centisecToMinString(testPom));
	}
}


});