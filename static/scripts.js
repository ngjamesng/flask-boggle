const $highScore = $("#high-score");
const $currentScore = $("#current-score");
const $playCount = $("#play-count");
const $timer = $("#timer");
const $wordForm = $("#word-form");
const $wordInput = $("#word-input");
const $messageContainer = $("#message-container");

let gameActive = true;
let score = 0;
let timeLeft = 6;
// get user input

// starts the timer for the game to be active
timerStart();

if (gameActive) {
	$wordForm.on("submit", async function(evt) {
		evt.preventDefault();
		let word = $wordInput.val();
		response = await axios.post("/", { "word-input": word });
		let result = response.data.result;
		let responseWord = response.data.word;
		showMessage(responseWord, result);
	});
}

function showMessage(word_input, result) {
	let msg;
	if (result == "ok") {
		msg = `added: ${word_input}`;
		score += word_input.length;
		displayScore(score);
	} else if (result === "not-on-board") {
		msg = `${word_input} is not a valid word on this board`;
	} else if (result === "not-word") {
		msg = `${word_input} is not a valid English word`;
	}

	let messageDiv = $(`<div>${msg}</div>`);
	$messageContainer.empty().append(messageDiv);
}

function displayScore(score) {
	$("#current-score").empty().text(score);
}


/* timer needs some work */
// function timerStart() {
// 		let intervalId = setInterval(() => {
//       timeLeft--; 
//       if( timer > 0){
//       } 
// 		}, 1000);
//     clearInterval(intervalId)
//     gameActive = false;
// }

// function updateTimer(){
//   $timer.empty().text(timeLeft);
// }