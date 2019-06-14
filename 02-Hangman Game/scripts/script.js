var xhr = new XMLHttpRequest();
var getCategory = '';
xhr.onload = function() {

  var categories = document.querySelectorAll('.category');
  console.log(categories);

  categories.forEach(category => category.addEventListener('click', function(e){
    e.preventDefault();
    getCategory = this.children[0].innerText.toLowerCase();
    if(xhr.status === 200){
      document.querySelector('.page-wrap-home').innerHTML = xhr.responseText; // Update
      onCategoryChoosen();
    }

  }))

};

xhr.open("GET", 'game.html', true);
xhr.send(null);

var onCategoryChoosen = function() {
  var xhrJSON = new XMLHttpRequest();

  var lettersSection = document.getElementById('letters');
  var lettersGuess = document.getElementById('letters-guess')
  var word = "";
  var hangmanImageCounter = 1;
  var guessedLetters = 0;

  xhrJSON.onreadystatechange  = function(){
    if (this.readyState == 4 && this.status == 200) {
        console.log(getCategory);
        var myObj = JSON.parse(xhrJSON.responseText);
        if(getCategory === "countries"){
          var randomNumber = Math.floor(Math.random() * myObj.countries.length) + 0;
          word = myObj.countries[randomNumber];
          createWord();
        }
        else if(getCategory === "rivers in bulgaria"){
          var randomNumber = Math.floor(Math.random() * myObj.rivers.length) + 0;
          word = myObj.countries[randomNumber];
          createWord();
        }
    }
  }

  //create letters
  for (var i = 65; i <= 90; i++) {
    var createLetter = document.createElement('a');
    var createText = document.createTextNode(String.fromCharCode(i));
    createLetter.appendChild(createText);
    createLetter.classList.add('letter');
    lettersSection.appendChild(createLetter);
  }

  var allLeters = document.querySelectorAll('.letter');
  function createWord(){
    for (var i = 0; i < word.length; i++) {
      if (/ |'/g.test(word[i])) {
        var createUnderline = document.createElement('p');
        var createText = document.createTextNode(' ');
        createUnderline.appendChild(createText);
        createUnderline.classList.add('underline');
        lettersGuess.appendChild(createUnderline);
        continue;
      }
      var createUnderline = document.createElement('p');
      var createText = document.createTextNode('_');
      createUnderline.appendChild(createText);
      createUnderline.classList.add('underline');
      lettersGuess.appendChild(createUnderline);
    }
  }


  function checkForWin() {
    var checkWord = word.replace(/ |'/g, '');

    if (guessedLetters === checkWord.length) {
      alert("You Win");
      guessedLetters = 0;
      hangmanImageCounter = 1;
      location.reload();
    }

    if (hangmanImageCounter === 7) {
      alert(`You Lose. The Word was ${word}`);
      guessedLetters = 0;
      hangmanImageCounter = 1;
      location.reload();
    }

  }

  function drawHangman(letter) {
    var guesses = false;
    var underlineLetters = document.querySelectorAll('.underline')
    for (var i = 0; i < word.length; i++) {
      if (letter === word[i].toUpperCase()) {
        guesses = true;
        underlineLetters[i].innerHTML = letter;
        guessedLetters++;
      }
    }

    if (guesses === false) {
      document.getElementById("hangman-image").src = `images/err${hangmanImageCounter}.gif`;
      hangmanImageCounter++;
    }
    checkForWin();
  }

  //check if the pressed letter had been already pressed
  function checkLetter() {
    var currentLetter = this.innerHTML;
    var currentElement = this;
    if (currentElement.classList.contains('choosen')) {
      return;
    } else {
      currentElement.classList.add('choosen');
    }

    drawHangman(currentLetter)
  }

  allLeters.forEach(letter => letter.addEventListener('click', checkLetter));

  xhrJSON.open("GET", 'data.json', true);
  xhrJSON.send(null);
}
