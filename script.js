var countries = [
  { name: "Malaysia", flag: "flags/my.png" },
  { name: "Indonesia", flag: "flags/id.png" },
  { name: "Singapore", flag: "flags/sg.png" },
  { name: "Taiwan", flag: "flags/tw.png" },
  { name: "Thailand", flag: "flags/th.png" },
  // Add more countries here...
];

function checkGuess() {
  var userInput = document.getElementById("guessInput").value.trim().toLowerCase();
  var randomCountry = countries[Math.floor(Math.random() * countries.length)];

  var flagImage = document.getElementById("flagImage");
  flagImage.src = randomCountry.flag;

  var resultElement = document.getElementById("result");

  if (userInput === randomCountry.name.toLowerCase()) {
    resultElement.style.color = "green";
    resultElement.innerHTML = "Congratulations! You guessed the correct country!";
  } else {
    resultElement.style.color = "red";
    resultElement.innerHTML = "Oops! Try again.";
  }
}
