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
      this.checkWinnerDecide();
      console.table(this.board);
      if (this.player === "x") {
        this.player = "0";
      } else {
        this.player = "x";
      }
    };
  }

  checkWinnerDecide() {
    for (let i = 0; i < this.colum - 2; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (
          this.board[i][j] === this.board[i + 1][j] &&
          this.board[i + 1][j] === this.board[i + 2][j]
        ) {
          return console.log(`${this.player} winner game`);
        }
      }
    }

    //  test
    console.log(this.board);
    for (let i = 0; i < this.colum; i++) {
      for (let j = 0; j < this.rows - 2; j++) {
        if (
          this.board[i][j] === this.board[i][j + 1] &&
          this.board[i][j + 1] === this.board[i][j + 2]
        ) {
          return console.log(`${this.player} winner game`);
        }
      }
    }

    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      return console.log(`${this.player} winner game`);
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      return console.log(`${this.player} winner game`);
    }
  }
}

let game = new Game();
game.createBoard();
game.playerQueue();
