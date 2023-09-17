const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ]
  function superbowlWin(record) {
    const winningGame = record.find(function(game) {
      return game.result === "W";
    });
    
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }
  