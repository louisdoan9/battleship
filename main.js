(()=>{"use strict";class r{constructor(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]],this.gameStatus=!0}addShip(r,t,a,o){if(t=parseInt(t),a=parseInt(a),"h"===o){let o=0;for(;o<r;){if(""!==this.boardArray[t][a+o])return"Error, cannot place here!";o+=1}for(o=0;o<r;)this.boardArray[t][a+o]="o",o+=1}if("v"===o){let o=0;for(;o<r;){if(""!==this.boardArray[t+o][a])return"Error, cannot place here!";o+=1}for(o=0;o<r;)this.boardArray[t+o][a]="o",o+=1}}fireAt(r,t){"o"===this.boardArray[r][t]?this.boardArray[r][t]="x":this.boardArray[r][t]="m",this.checkWin()}checkWin(){for(const r of this.boardArray)for(const t of r)if("o"===t)return;this.gameStatus=!1}resetBoard(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]}}(new class{constructor(){this.player1Board=new r,this.player2Board=new r,this.turn=0}startGame(){let r=0;for(this.turn=0;r<1;){let t=prompt("What is the row?"),a=prompt("What is a column?"),o=prompt("What is a orientation?");this.player1Board.addShip(r+3,t,a,o),r+=1}for(r=0;r<1;){let t=prompt("What is the row?"),a=prompt("What is a column?"),o=prompt("What is the orientation?");this.player2Board.addShip(r+3,t,a,o),r+=1}}playRound(){let r,t;for(;!0===this.player1Board.gameStatus&&!0===this.player2Board.gameStatus;)x%2==0?(r=prompt("What is the row?"),t=prompt("What is a column?"),this.player1Board.fireAt(r,t)):(r=prompt("What is the row?"),t=prompt("What is a column?"),this.player2Board.fireAt(r,t)),this.turn+=1;console.log(this.player1Board.boardArray),console.log("Game Over!")}resetGame(){this.player1Board.resetBoard(),this.player2Board.resetBoard()}}).startGame()})();