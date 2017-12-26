// making the question "none" hides the div. With the button press for the game it hides start button and displays the question, not by changing to the status to show but erasing the "none" value. This will basicly show and start the timer, question and checkbox answers.

var y = document.getElementById("riddle").style.display = "none";
var z = document.getElementById("countdown").style.display = "none";
var end = document.getElementById("endScreen").style.display = "none";

function toMain() {
	var x = document.getElementById("start");
	x.style.display = "none";
	y = document.getElementById("riddle").style.display = "";
	z = document.getElementById("countdown").style.display = "";
	var seconds;
	var temp;

	function countdown() {
		seconds = document.getElementById('countdown').innerHTML;
		seconds = parseInt(seconds, 10);

		if (seconds == 1) {

			
			temp = document.getElementById('countdown');
			temp.innerHTML = "All Done, Precious!";
			document.getElementById("endScreen").style.display = "";
			y = document.getElementById("riddle").style.display = "none";
			return;
		}

		seconds--;
		temp = document.getElementById('countdown');
		temp.innerHTML = seconds;
		timeoutMyOswego = setTimeout(countdown, 1000);
	} 

	countdown();
}

// Every time a checkbox is clicked it should run a function to add to the correct total or the wrong total. When the time is up it will add the total number of wrong and righ answers, and minus it from the total number of questions, giving us the unanswed questions.

var isCorrect = 0;
var isFalse = 0;

// if (temp == 1){
	
// }


function correctFunction(){
	isCorrect++;
}
function falseFunction(){
	isFalse++;
}



var unansweredQuestions = 0;

var totalQuestions = 6;

unansweredQuestions = totalQuestions - (isFalse + isCorrect); 

