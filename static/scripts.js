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
  showMessage(response.data.result);

});

function showMessage(message) {
	let messageDiv = $(`<div>${message}</div>`);
	$messageContainer.empty().append(messageDiv);
}
