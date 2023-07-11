function checkGuess() {
  var userInput = parseInt(document.getElementById("guessInput").value);
  var randomNumber = Math.floor(Math.random() * 100) + 1;

  var resultElement = document.getElementById("result");

  if (userInput === randomNumber) {
    resultElement.style.color = "green";
    resultElement.innerHTML = "Congratulations! You guessed the correct number!";
  } else if (userInput < randomNumber) {
    resultElement.style.color = "red";
    resultElement.innerHTML = "Too low! Try again.";
  } else {
    resultElement.style.color = "red";
    resultElement.innerHTML = "Too high! Try again.";
  }
}
