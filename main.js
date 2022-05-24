(()=>{"use strict";class r{constructor(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]],this.gameStatus=!0}addShip(r,t,e,a){if(t=parseInt(t),e=parseInt(e),"h"===a){let a=0;for(;a<r;){if(""!==this.boardArray[t][e+a])return"Error, cannot place here!";a+=1}for(a=0;a<r;)this.boardArray[t][e+a]="o",a+=1}if("v"===a){let a=0;for(;a<r;){if(""!==this.boardArray[t+a][e])return"Error, cannot place here!";a+=1}for(a=0;a<r;)this.boardArray[t+a][e]="o",a+=1}}fireAt(r,t){"o"===this.boardArray[r][t]?this.boardArray[r][t]="x":""===this.boardArray[r][t]&&(this.boardArray[r][t]="m"),this.checkWin()}checkWin(){for(const r of this.boardArray)for(const t of r)if("o"===t)return;this.gameStatus=!1}resetBoard(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]}}function t(r){let t=0,e=document.createElement("div");for(;t<6;){let a=document.createElement("div");a.setAttribute("class",`column${t}`),a.addEventListener("click",(()=>{let t=a.className.slice(-1),e=a.parentNode.className.slice(-1);r.addShipsP1(e,t,"v")})),e.appendChild(a),t+=1}return e}function e(r){let t=0,e=document.createElement("div");for(;t<6;){let a=document.createElement("div");a.setAttribute("class",`column${t}`),a.addEventListener("click",(()=>{let t=a.className.slice(-1),e=a.parentNode.className.slice(-1);r.addShipsP2(e,t,"v")})),e.appendChild(a),t+=1}return e}function a(r,a){let s=0;if("boardDisplay1"===a)for(;s<6;){let e=t(r);e.setAttribute("class",`row${s}`),document.querySelector(`#${a}`).appendChild(e),s+=1}if("boardDisplay2"===a)for(;s<6;){let t=e(r);t.setAttribute("class",`row${s}`),document.querySelector(`#${a}`).appendChild(t),s+=1}}const s=new class{constructor(){this.player1Board=new r,this.player2Board=new r,this.turn=0,this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1]}startGame(){this.turn=0,this.player1Board.gameStatus=!0,this.player2Board.gameStatus=!0,this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1]}addShipsP1(r,t,e){let a=0;for(;a<3;){if(""!==this.player1Board.boardArray[parseInt(r)][parseInt(t)+a])return;a+=1}!1===this.ship1[0]?(this.player1Board.addShip(3,r,t,e),this.ship1[0]=!0):!1===this.ship2[0]?(this.player1Board.addShip(4,r,t,e),this.ship2[0]=!0):!1===this.ship3[0]&&(this.player1Board.addShip(5,r,t,e),this.ship3[0]=!0),console.log("board1:"),console.log(this.player1Board.boardArray)}addShipsP2(r,t,e){let a=0;for(;a<3;){if(""!==this.player2Board.boardArray[parseInt(r)][parseInt(t)+a])return;a+=1}!1===this.ship1[1]?(this.player2Board.addShip(3,r,t,e),this.ship1[1]=!0):!1===this.ship2[1]?(this.player2Board.addShip(4,r,t,e),this.ship2[1]=!0):!1===this.ship3[1]&&(this.player2Board.addShip(5,r,t,e),this.ship3[1]=!0),console.log("board2:"),console.log(this.player2Board.boardArray)}playRound(r){let t,e;for(;!0===this.player1Board.gameStatus&&!0===this.player2Board.gameStatus;)return this.turn%2==0?(t=r("What is the row?"),e=r("What is a column?"),this.player1Board.fireAt(t,e),console.log(this.player1Board.boardArray)):(t=r("What is the row?"),e=r("What is a column?"),this.player2Board.fireAt(t,e),console.log(this.player2Board.boardArray)),this.turn+=1,"Round is played";return console.log("Game is Over"),"Game is Over"}resetGame(){this.player1Board.resetBoard(),this.player2Board.resetBoard()}};document.querySelector("#startGame").addEventListener("click",(()=>{s.startGame(prompt)})),a(s,"boardDisplay1"),a(s,"boardDisplay2"),document.querySelector("#fireAt").addEventListener("click",(()=>{s.playRound(prompt)}))})();