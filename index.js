$(document).ready(function() {
    var wins = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [3, 5, 7],
      [4, 5, 6],
      [7, 8, 9]
    ]
  
    var player_1 = [];
    var player_2 = [];
    var turn = true;
  
    $('.box.unselected').on('click', function() {
  
      if ($(this).hasClass('selected')) 
        return;
      
      if (game_ended) {
        $('#player-turn').html('Game has ended.');
        return;
      }
  
      let box_clicked = $(this).attr('id').substr($(this).attr('id').length - 1);
  
      if (turn) {
        $(this).html('X')
        player_1.push(parseInt(box_clicked));
        checkForWinners(wins, player_1, turn);
      }
      else {
        $(this).html('O')
        player_2.push(parseInt(box_clicked));
        checkForWinners(wins, player_2, turn);
      }
  
      if (game_ended) {
        $('#player-turn').html('Game ended.');
        return;
      }
  
      turn = !turn
  
      if (turn) $('#player-turn').html('Player one turn.');
      else if (!turn) $('#player-turn').html('Player two turn.');
  
      $(this).addClass('selected').removeClass('unselected');
    })
  });
  
  var game_ended = false;
  
  function checkForWinners(wc, pc, t) {
    let counter = 0;
    for (let i = 0; i < wc.length; i++) {
      counter = 0;
      for (let j = 0; j < wc[i].length; j++) {
        if (pc.indexOf(wc[i][j]) > -1) {
          counter++;
        }
      }
      if (counter === 3) {
        if (t == true)
          alert('Player one has won.')
        else 
          alert('Player two  has won')
        game_ended = true;
      }
    }
      if ($('.selected').length >= 8 && game_ended == false ) {
        alert("Game Is Draw");
        game_ended = true;
      }
  }
  