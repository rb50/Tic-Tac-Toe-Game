window.onload = function() {

  var playerStatus = {};
  var computerStatus = {};
  var gridStatus = {
    a1: 'zero',
    a2: 'zero',
    a3: 'zero',
    b1: 'zero',
    b2: 'zero',
    b3: 'zero',
    c1: 'zero',
    c2: 'zero',
    c3: 'zero'
  }

  document.getElementById('X-choice').addEventListener('click', Xclick, false);
  document.getElementById('O-choice').addEventListener('click', Oclick, false);

  var grid = "<table><tr><td id='a1' class='corner1'></td><td id='a2'></td><td id='a3' class='corner2'></td></tr><tr><td id='b1'></td><td id='b2'></td><td id='b3'></td></tr><tr><td id='c1' class='corner3'></td><td id='c2'></td><td id='c3' class='corner4'></td></tr></table>"


  function Xclick(e) {
    playerStatus.letter = 'X';
    computerStatus.letter = 'O';
    computerStatus.turn = 'yes';
    playerStatus.turn = 'no';
    gridDisplay(grid);
    setTimeout(function () {gamePlay()}, 3000);

  }

  function Oclick(e) {
    playerStatus.letter = 'O';
    computerStatus.letter = 'X';
    computerStatus.turn = 'yes';
    playerStatus.turn = 'no';
    gridDisplay(grid);
    setTimeout(function () {gamePlay()}, 3000);
  }

  function gridDisplay(grid){
    document.getElementById("grid").innerHTML = grid;
    document.getElementById("computersturn").style.display ="inline-block";
    document.getElementById("grid").style.top ="-27px";
  }

  function gamePlay() {
    if(computerStatus.letter === 'X') {
      document.getElementById('b2').innerHTML = "<p class='turns'>X</p>";
    } else if (computerStatus.letter === 'O') {
      document.getElementById('b2').innerHTML = "<p class='turns'>O</p>";
    }

    document.getElementById('computersturn').innerHTML = "Player's Turn"



    var squares = ["a1", "a2", "a3", "b1", "b3", "c1", "c2", "c3"]

    function playersTurn(){

      function listeners() {
        for(let i = 0; i < squares.length; i++){
          document.getElementById(squares[i]).addEventListener('click', clicker, false)
        }
      }

      function removeListeners(e){
        for(let i = 0; i < squares.length; i++){
          document.getElementById(squares[i]).removeEventListener('click', clicker, false)
        }
        delete squares[squares.indexOf(e.target.id)];

      }

      function clicker(e) {
        e.target.innerHTML = "<p class='turns'>"+playerStatus.letter+"</p>";

        removeListeners(e);
        

      }
      listeners();



    }

    playersTurn();
  }











};
