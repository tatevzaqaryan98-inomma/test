class Game {
  constructor() {
    this.colum = 3;
    this.rows = 3;
    this.board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.boardStr;
    this.player = "x";
  }
  createBoard() {
    for (let i = 0; i < this.colum; i++) {
      this.boardStr = this.board[i].join(" ");
      console.log(`${i} ${this.boardStr}`);
    }
  }
  playerQueue() {
    window.play = (row, column) => {
      this.board[row][column] = this.player;
      if (this.player === "x") {
        this.player = "0";
      } else {
        this.player = "x";
      }
      console.table(this.board);
    };
  }

  checkWinnerDecide() {
    for (let i = 0; i < this.column - 2; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (
          this.board[i][j] === this.player &&
          this.board[i + 1][j] === this.player &&
          this.board[i + 2][j] === this.player
        ) {
          return true;
        }
      }
    }

    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.rows - 2; j++) {
        if (
          this.board[i][j] === this.player &&
          this.board[i][j + 1] === this.player &&
          this.board[i][j + 2] === this.player
        ) {
          return true;
        }
      }
    }

    if (
      this.board[0][0] === this.player &&
      this.board[1][1] === this.player &&
      this.board[2][2] === this.player
    ) {
      return true;
    }
    if (
      this.board[0][2] === this.player &&
      this.board[1][1] === this.player &&
      this.board[2][0] === this.player
    ) {
      return true;
    }
  }

  winnerDecide() {
    const result = this.checkWinnerDecide();
    if (result) {
      console.log(`${this.player} winner game`);
    }
    console.log(this.board[0][0] === this.player);
  }
}

let game = new Game();
game.createBoard();
game.playerQueue();
game.winnerDecide();
