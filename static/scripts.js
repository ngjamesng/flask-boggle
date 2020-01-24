const $highScore = $('#high-score');
const $currentScore = $('#current-score');
const $playCount = $('#play-count');
const $timer = $('#timer')
const $wordForm = $('#word-form')
const $wordInput = $("#word-input")

// get user input

$wordForm.on('submit', async function (evt) {
  evt.preventDefault();
  let word = $wordInput.val();
  response = await axios.post('/', {'word-input': word});
});

