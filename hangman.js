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
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var level = 0;           //extra lives from web purchases
  var health = 100;

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("category");
  var normalRocket = document.getElementById("normalRocket");
  var monkeyRocket = document.getElementById("monkeyRocket");
  //find level
  normalRocket.onclick = function () {
    level = 0;
  }

  monkeyRocket.onclick = function () {
    level = 4;
  }

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
      showCategory.innerHTML = "The Category Is 80's Movies";
    } else if (chosenCategory === categories[1]) {
      showCategory.innerHTML = "The Category Is 70's Bands";
    } else if (chosenCategory === categories[2]) {
      showCategory.innerHTML = "The Category Is Retro Video Games";
    } else if (chosenCategory === categories[3]) {
      showCategory.innerHTML = "The Category Is 70's TV Shows"
    } else if (chosenCategory === categories[4]) {
      showCategory.innerHTML = "The Category Is U.S. Presidents"
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
        space += 1;
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
      showLives.innerHTML = "Game Over. Due to damage your ship exploded!";
    }
    for (var i = 0; i < guesses.length; i++) {
      if ((counter + space === guesses.length) && (health >= 95)){
          showLives.innerHTML = "You Win! Your ship flew to Pluto and back setting a new record for achieving lightspeed travel!";
      } else if ((counter + space === guesses.length) && (health >= 86)) {
          showLives.innerHTML = "You Win! Your ship flew around Mars and back to Earth safely without any severe damage!";
      } else if ((counter + space === guesses.length) && (health >= 74)) {
          showLives.innerHTML = "You Win! Your ship made it to Mars and hobbled its way back to Earth safely!";
      } else if ((counter + space === guesses.length) && (health >= 62)) {
          showLives.innerHTML = "You Win! Your ship made it to Mars, but has crash landed. The crew is now forced to learn how to co-exist with the aliens!";
      } else if ((counter + space === guesses.length) && (health >= 50)) {
          showLives.innerHTML = "You Win! Your ship made it to the Moon and hobbled its way back to Earth safely!";
      } else if ((counter + space === guesses.length) && (health >= 38)) {
          showLives.innerHTML = "You Win! Your ship made it to the Moon but was unable to make it back to Earth. It is now in orbit of Earth with no way to get down!";
      } else if ((counter + space === guesses.length) && (health >= 27)) {
          showLives.innerHTML = "You Win! Your ship made it to the Moon, but crash landed and is unable to return to Earth!";
      }  else if ((counter + space === guesses.length) && (health >= 15)) {
          showLives.innerHTML = "You Win! Your ship was too damaged to reach space. You almost crashed into an airplane before you fell out of the sky!";
      }
    }
  }

      // Animate rocket
  var animate = function () {
    var drawMe = lives ;
    console.log(lives);
    drawArray[drawMe]();
  }

   // Rocket Hangman
  canvas =  function(){

    image = document.getElementById("rocket");
    console.log("change request");
    if(level === 0){
      imgStr = "img/img_";
      console.log("no monk");
    }
    if(level === 4){
      imgStr = "img/img_m_";
    }
  };

   pristene = function() {
     image.src = imgStr + "0.png";
   };

   smudged = function() {
     image.src = imgStr + "1.png";
   };

   dented = function() {
     image.src = imgStr + "2.png";
   };

   scratched = function() {
     image.src = imgStr + "3.png";
   };

   chipped = function() {
     image.src = imgStr + "4.png";
   };

   damaged = function() {
     image.src = imgStr + "5.png";
   };

   tarnished = function() {
     image.src = imgStr + "6.png";
   };

   ruined = function() {
     image.src = imgStr + "7.png";
   };

   explode = function() {
     image.src = imgStr + "8.png";
   };

   norm9 = function() {
     image.src = imgStr + "9.png";
   };

   norm10 = function() {
     image.src = imgStr + "10.png";
   };

   norm11 = function() {
     image.src = imgStr + "11.png";
   };

   normExplode = function() {
     image.src = imgStr + "12.png";
   };

  drawArray = [normExplode, norm11, norm10, norm9, explode, ruined, tarnished, damaged, chipped, scratched, dented, smudged, pristene, smudged];

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
          health = ((lives)/(12-level))*100;
          if(lives>0){
            healthbar.innerHTML = "<div id='indicator' style='width:"+health+"%;'></div>";
          }
          else{
            healthbar.innerHTML = "<div id='indicator' style='width:0%;transition: width 5s;'></div>";
        }
        this.innerHTML = "<span style='background: white;color: #2F4F4F;'></span>";
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
        health = ((lives)/(12-level))*100;
        if(lives>0){
          healthbar.innerHTML = "<div id='indicator' style='width:"+health+"%;'></div>";
        }
        else{
          healthbar.innerHTML = "<div id='indicator' style='width:0%;transition: width 2s;'></div>";
        }
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
        ["stevie-wonder", "led-zeppelin", "elton-john", "pink-floyd", "the-rolling-stones", "queen", "david-bowie", "black-sabbath", "fleetwood-mac", "marvin-gaye", "james-brown", "aretha-franklin", "bruce-springsteen", "lynyrd-skynyrd"],
        ["minesweeper", "pac-man", "space-invaders", "telstar", "odyssey", "stratego", "spaceware", "combat", "asteroids", "super-breakout", "circus-atari", "galaga", "donkey-kong", "frogger"],
        ["the-brady-bunch", "happy-days", "the-amazing-spiderman", "the-mary-tyler-moore-show", "the-new-dick-van-dyke-show", "good-times", "little-house-on-the-prairie"],
        ["ronald-reagan", "jimmy-carter", "gerald-ford", "richard-nixon", "lyndon-b-johnson", "dwight-d-eisenhower", "harry-s-truman", "franklin-d-roosevelt", "herbert-hoover", "calvin-coolidge", "theodore-roosevelt", "william-howard-taft", "woodrow-wilson", "george-bush", "bill-clinton"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 12-level;
    counter = 0;
    space = 0;
    health = lives;
    healthbar = document.getElementById('healthbar');
    healthbar.innerHTML = "<div id='indicator' style='width:100%'></div>";
    result();
    comments();
    selectCat();
    canvas();
    pristene();
  }

  play();

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    play();
  }
}
