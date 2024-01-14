let wordList = {
  word1: {
    name: "orange",
    hint: "A fruit whose color is its name.",
  },
  word2: {
    name: "spiderman",
    hint: "A superhero that shoots webs.",
  },
  word3: {
    name: "nepal",
    hint: "Country with the highest mountains.",
  },
  word4: {
    name: "heat",
    hint: "A sensation of warmth",
  },
  word5: {
    name: "hungry",
    hint: "Feeling or showing a need for food.",
  },
  word6: {
    name: "chair",
    hint: "A thing that you sit on.",
  },
  word7: {
    name: "keyboard",
    hint: "An input device that you type on.",
  },
  word8: {
    name: "split",
    hint: "Break or cause to break forcibly into parts, especially into halves.",
  },
  word9: {
    name: "angry",
    hint: "Feeling or showing strong annoyance, displeasure, or hostility.",
  },
  word10: {
    name: "masculine",
    hint: "Having qualities traditionally associated with men or boys.",
  },
};

let words = Object.values(wordList); // converting object to array
let INCORRECT_GUESS = 0;
let index = Math.floor(Math.random() * 10);
let wordName = words[index].name;
let wordHint = words[index].hint;
let wordArray = wordName.split('');
let ul = document.getElementById("ul");
let incorrect = document.getElementById("incorrectGuess");

// Initialize an array to keep track of correct guesses
let correctGuesses = new Array(wordArray.length).fill(false);

ul.innerHTML = wordArray.map((index) => {
  return `<li key="${index}" id="li-${index}">__</li>`;
}).join('');

document.getElementById("hint").innerHTML = `${wordHint}`;
let userInputArray = [];
function checkLetter(letter) {
  if (wordName.includes(letter)){
    userInputArray[wordName.indexOf(letter)] = letter;
    for (let i = 0; i < wordName.length; i++) {
      if (wordName[i] === letter) {
        if (!correctGuesses[i]) {
          wordArray[i] = letter;
          correctGuesses[i] = true;
        }
      }
    }

    ul.innerHTML = wordArray.map((char, index) => {
      return `<li key="${index}" id="li-${index}">${correctGuesses[index] ? char.toUpperCase() : "__"}</li>`;
    }).join('');

  } else {
    incorrect.innerHTML = `${++INCORRECT_GUESS}`;
    document.getElementById("img").src = `./${INCORRECT_GUESS + 1}.png`;

    if (INCORRECT_GUESS === 6) {
      setTimeout(() => {
        alert('Game Over! You ran out of guesses. The correct word was: ' + wordName.toUpperCase());
        window.location.reload();
      }, 300)
    }
  }
  let userInputString = userInputArray.join('');
    if(userInputString === wordName){
      setTimeout(() => {
        alert("Congratulations! You guessed the word:)")
        window.location.reload();
      }, 300);
    }
}
