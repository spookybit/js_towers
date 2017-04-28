const readline = require('readline');

class Game {
  constructor(){
    this.board = [[3,2,1],[],[]];
  }

  promptMove(callback) {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.print();
    reader.question('Make a move in the following format: From, To', input => {
      reader.close();
      let command = input.split(',').map(n => parseInt(n));
      callback(command);
    });
  }

  isValidMove(startTowerIdx, endTowerIdx){
    const startTower = this.board[startTowerIdx];
    const endTower = this.board[endTowerIdx];
    return (startTowerIdx >= 0 && startTowerIdx <=2 &&
      endTowerIdx >= 0 && endTowerIdx <= 2 && startTower.length !== 0) &&
     (endTower.length === 0 || startTower[startTower.length - 1] < endTower[endTower.length - 1]);

   }

   move(start, end){
     const startTower = this.board[start];
     const endTower = this.board[end];
     if(this.isValidMove(start, end)){
       const el = startTower.pop();
       endTower.push(el);
     }
   }

   print(){
     const str = this.board.map(tower => `[${tower.join(',')}]` ).join("\n");
     console.log(str);
   }

   isWon(){
     if(this.board.toString() === ",,3,2,1" ||
      this.board.toString() === ",3,2,1,") {
       return true;
     }
   }


}

//
Game.prototype.run = function(completionCallback){
  if(!this.isWon()){
    this.promptMove((command => {
      const start = command[0];
      const end = command[1];
      if(this.isValidMove(start, end)){
        this.move(start, end);
      }
      this.run();
    }));
  } else {
    this.print();
    console.log("You won.  Yay!!!");
  }
};

new Game().run();
