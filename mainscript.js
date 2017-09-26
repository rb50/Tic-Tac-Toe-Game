window.onload = function() {

  // objects keep the status of the computer, player and the grid
  var playerStatus = {
    squares: [],
    name:'PLAYER'
  };
  var computerStatus = {
    squares: ["b2"],
    name: 'COMPUTER'
  };


  //initial event listeners for player team choice
  document.getElementById('X-choice').addEventListener('click', Xclick, false);
  document.getElementById('O-choice').addEventListener('click', Oclick, false);

  //grid dom object to be implemented once the player chooses their team
  var grid = "<table><tr><td id='a1' class='corner1'></td><td id='a2'></td><td id='a3' class='corner2'></td></tr><tr><td id='b1'></td><td id='b2'></td><td id='b3'></td></tr><tr><td id='c1' class='corner3'></td><td id='c2'></td><td id='c3' class='corner4'></td></tr></table>"

  //event handler when player chooses to be team X. sets status, display grid & starts gameplay
  function Xclick(e) {
    playerStatus.letter = 'X';
    computerStatus.letter = 'O';
    gridDisplay(grid);
    setTimeout(function () {gamePlay()}, 1000);

  }


  //event handler when player chooses to be team Y. sets status, displays grid & starts gameplay
  function Oclick(e) {
    playerStatus.letter = 'O';
    computerStatus.letter = 'X';
    gridDisplay(grid);
    setTimeout(function () {gamePlay()}, 1000);
  }

  //called by Xclick or Oclick. Displays grid.
  function gridDisplay(grid){
    document.getElementById("grid").innerHTML = grid;
    document.getElementById("computersturn").style.display ="inline-block";
    document.getElementById("grid").style.top ="-27px";
  }


  //starts gameplay.
  function gamePlay() {
    //put computer's letter in the middle of the board
    if(computerStatus.letter === 'X') {
      document.getElementById('b2').innerHTML = "<p class='turns'>X</p>";
    } else if (computerStatus.letter === 'O') {
      document.getElementById('b2').innerHTML = "<p class='turns'>O</p>";
    }


    //change narrative to Player's Turn at the top of the grid
    document.getElementById('computersturn').innerHTML = "Player's Turn"


    //keep track of available squares
    var squares = ["a1", "a2", "a3", "b1", "b3", "c1", "c2", "c3"]

    //Players Turn functionality
    function playersTurn(){

      //add event listeners for all available squares.
      function listeners() {
        for(let i = 0; i < squares.length; i++){
          if(squares[i]){
            document.getElementById(squares[i]).addEventListener('click', clicker, false)
          }
        }
      }

      //remove listeners at the end of the players turn & delete the available square
      function removeListeners(e){
        for(let i = 0; i < squares.length; i++){
          if(squares[i]){
            document.getElementById(squares[i]).removeEventListener('click', clicker, false)
          }
        }
        playerStatus.squares.push(squares[squares.indexOf(e.target.id)]);
        delete squares[squares.indexOf(e.target.id)];


      }

      //clicker function when player clicks, then remove listeners and move to Computer's Turn
      function clicker(e) {
        e.target.innerHTML = "<p class='turns'>"+playerStatus.letter+"</p>";

        removeListeners(e);
        checkForWin(playerStatus);
        if(!winner) {
          computersTurn();
        }

      }
      listeners();



    }

    playersTurn();



    function computersTurn(){
       var computerMove = "";
       for(let i = 0; i < squares.length; i++) {
          if(squares[i]) {
            computerMove = squares[i];
            computerStatus.squares.push(squares[i]);
            delete squares[i];
            break;
          }
        }
        document.getElementById(computerMove).innerHTML = "<p class='turns'>"+computerStatus.letter+"</p>"

        checkForWin(computerStatus);
        if(!winner){
          playersTurn();
        }


    }


    var winner;
    function checkForWin(who) {
        var winningStatus = {
          one: ["a1", "b1", "c1"],
          two: ["a2", "b2", "c2"],
          three: ["a3", "b3", "c3"],
          four: ["a1", "a2", "a3"],
          five: ["b1", "b2", "b3"],
          six: ["c1", "c2", "c3"],
          seven: ["a1", "b2", "c3"],
          eight: ["a3", "b2", "c1"]
        }

        for (var key in winningStatus) {
          let counter = 0;
          for(let i = 0; i < winningStatus[key].length; i++) {

            for(let j = 0; j < who.squares.length; j++) {
              if(who.squares[j] === winningStatus[key][i]) {
                counter++;
              }
            }
          }
          if (counter === 3){
            console.log(who);
            alert(who.name + 'WINS')
            winner = true;

            break;
          }

        }
  }









}

};
