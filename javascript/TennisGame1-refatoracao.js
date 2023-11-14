class TennisGame1 {
  scorePlayer1 = 0;
  scorePlayer2 = 0;

  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName) {
    if (playerName === "player1") this.scorePlayer1 += 1;
    else this.scorePlayer2 += 1;
  }

  getScore() {
    let score;
    let currentScore = 0;
    const fourPoints = 4;

    if (this.scorePlayer1 === this.scorePlayer2) {

      switch (this.scorePlayer1) {
        case 0: // mudar para não ser variavé mágica
          score = "Love-All";
          break;
        case 1:
          score = "Fifteen-All";
          break;
        case 2:
          score = "Thirty-All";
          break;
        default:
          score = "Deuce";
          break;
      }

    } else if (this.scorePlayer1 >= fourPoints || this.scorePlayer2 >= fourPoints) {

      const pointsDifference = this.scorePlayer1 - this.scorePlayer2;

      if (pointsDifference === 1) score = `Advantage ${this.player1Name}`;
      else if (pointsDifference === -1) score = `Advantage ${this.player2Name}`;
      else if (pointsDifference >= 2) score = `Win for ${this.player1Name}`;
      else score = `Win for ${this.player2Name}`;

    } else{
    //   não consegui refatorar essa parte
      
    }

  }
}

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
