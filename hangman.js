window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected category
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'
  var boost = 0;           //extra lives from web purchases
  var level = 1;          //level in game

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("category");

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Category
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      showCategory.innerHTML = "The Category Is Film Titles";
    } else if (chosenCategory === categories[1]) {
      showCategory.innerHTML = "The Category Is Films";
    } else if (chosenCategory === categories[2]) {
      showCategory.innerHTML = "The Category Is Cities";
    }
  }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = " ";
        space = 2;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      //display the rocket
  
  var imgArray = new Array();
  var x=0;
  var livesLost=0;
  
  if (level==1)
  {
    for (let step =1; step<=14; step++) {
      imgArray[step-1]=new Image();
      imgArray[step-1].src='img_'+14-step+'.png'
    }
  }
  else
  {
    for (let step=1; step<=10; step++){
      imgArray[step-1]=new Image();
      imgArray[step-1].src='m_img_'+10-step+'.png';
    }
  }
  
   display = function(){
     context.clearRect(0,0,200,200);
     imgArray[lives];
    }
      


   // Hangman
  canvas =  function(){

    rocketShip = document.getElementById("rocket");
    context = rocketShip.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

    head = function(){
      rocketShip = document.getElementById("rocket");
      context = rocketShip.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}




  // OnClick Function
   check = function () {
    list.onclick = function () {
      if(!(showLives.innerHTML === "Game Over"||showLives.innerHTML === "You Win!")){
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
        this.innerHTML = "<span style='background: white;color: #2F4F4F;'></span>";
        indicator = document.getElementById("indicator");
        indicator.innerHTML = "<span style='background-color:red'></span>";
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        display();
      } else {
        comments();
      }
    }
  }
  }


  // Play
  play = function () {
    categories = [
        ["the-princess-bride", "footloose", "top-gun", "the-karate-kid", "the-terminator", "scarface", "beetlejuice", "dirty-dancing", "back-to-the-future", "die-hard", "the-shining", "ghostbusters", "the-breakfast-club", "sixteeen-candles", "pretty-in-pink", "labyrinth", "annie", "beverly-hills-cop"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 12+boost;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 1400, 700);
    play();
  }
}
