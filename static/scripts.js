const $highScore = $("#high-score");
const $currentScore = $("#current-score");
const $playCount = $("#play-count");
const $timer = $("#timer");
const $wordForm = $("#word-form");
const $wordInput = $("#word-input");
const $messageContainer = $("#message-container");

// get user input

$wordForm.on("submit", async function(evt) {
	evt.preventDefault();
	let word = $wordInput.val();
	response = await axios.post("/", { "word-input": word });
	// word_validity = await axios.get()
  console.log("message: ", response.data);
  let result = response.data.result;
  let responseWord = response.data.word
	showMessage(responseWord, result);
});

function showMessage(word_input, result) {
	let msg;
	if (result == "ok") {
		msg = `added: ${word_input}`;
	} else if (result === "not-on-board") {
		msg = `${word_input} is not a valid word on this board`;
	} else if (result === "not-word") {
		msg = `${word_input} is not a valid English word`;
	}

	let messageDiv = $(`<div>${msg}</div>`);
	$messageContainer.empty().append(messageDiv);
}
