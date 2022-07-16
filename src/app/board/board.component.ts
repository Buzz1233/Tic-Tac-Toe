import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public squares!: any[];
  public xIsNext!: boolean;
  public winner!: string;

  ngOnInit(): void {
    this.newGame();
  }

  public newGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
  }

  public get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  public makeMove(index: number): void {
    if (!this.squares[index] && this.calculateWinner() == null) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  public calculateWinner(): any {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] == this.squares[b] && this.squares[a] == this.squares[c]) {
        return this.squares[a] == 'X' ? 'Player X won the game' : 'Player O won the game';
      }
    }

    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i] == null) {
        return null
      }
    }
    return "DRAW";
  }

}
