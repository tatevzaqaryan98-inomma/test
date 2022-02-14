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
  printBoard() {
    console.table(this.board);
  }
  playerQueue() {
    window.play = (row, column) => {
      if (this.board[row][column] != "-") {
        return console.log("this cell is not empty");
      } else {
        this.board[row][column] = this.player;
      }

      console.table(this.board);
      this.checkWinnerDecide();

      if (this.isNotFool()) {
        console.log("board is not full");
      } else {
        console.log("board is full");

        this.board = [
          ["-", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"],
        ];
        this.printBoard();
      }

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
          this.board[i + 1][j] === this.board[i + 2][j] &&
          this.board[i][j] != "-"
        ) {
          return console.log(`${this.player} winner game`);
        }
      }
    }

    for (let i = 0; i < this.colum; i++) {
      for (let j = 0; j < this.rows - 2; j++) {
        if (
          this.board[i][j] === this.board[i][j + 1] &&
          this.board[i][j + 1] === this.board[i][j + 2] &&
          this.board[i][j] != "-"
        ) {
          return console.log(`${this.player} winner game`);
        }
      }
    }

    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] != "-"
    ) {
      return console.log(`${this.player} winner game`);
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2] != "-"
    ) {
      return console.log(`${this.player} winner game`);
    }
    return false;
  }
  isNotFool() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === "-") {
          return true;
        }
      }
    }
    return false;
  }
}

let game = new Game();
game.printBoard();
game.playerQueue();
