    // Sets  the computer choices
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Declares the tallies to 0, Guesses left
    var wins = 0;
    var losses = 0;
    var guesses = 11;

    // When the user presses a key, it records the keypress, then sets it to userguess
    document.onkeyup = function(event) {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      // Sets computer guess equal to random.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Comparing userGuess and computerGuess
      if (userGuess == computerGuess) {
        wins++;
        guesses--;
      }

      // Display losses if not a match
      else {
        guesses--;
      }

      // Taking the tallies and displaying them in HTML
      var html = "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guesses + "</p>";

      // PLacing the HTML into the main id
      document.querySelector('#main').innerHTML = html;

      // Display letters pressed by user
      var targetDiv = document.getElementById("guesstracker");

      // Use innerHTML to print to page
      targetDiv.innerHTML = "Your guesses so far: " + userGuess
    }


    // Display letters pressed by user
