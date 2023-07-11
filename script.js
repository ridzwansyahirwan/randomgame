var countries = [
  { name: "Afghanistan", flag: "flags/af.png" },
  { name: "Albania", flag: "flags/al.png" },
  { name: "Algeria", flag: "flags/dz.png" },
  { name: "Andorra", flag: "flags/ad.png" },
  { name: "Angola", flag: "flags/ao.png" },
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
