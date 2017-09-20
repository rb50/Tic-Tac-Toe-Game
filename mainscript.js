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

  }

  function Oclick(e) {
    playerStatus.letter = 'O';
    computerStatus.letter = 'X';
    computerStatus.turn = 'yes';
    playerStatus.turn = 'no';
    gridDisplay(grid);
  }

  function gridDisplay(grid){
    document.getElementById("grid").innerHTML = grid;
    document.getElementById("playersturn").style.display ="inline-block";
    document.getElementById("grid").style.top ="-27px";
  }

  for(key in gridStatus) {
    document.getElementById(prop).addEventListener('click')

  }







};
