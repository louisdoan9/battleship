(()=>{"use strict";class r{constructor(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]],this.gameStatus=!0}addShip(r,e,t,a){if(e=parseInt(e),t=parseInt(t),"h"===a){let a=0;for(;a<r;){if(""!==this.boardArray[e][t+a])return"Error, cannot place here!";a+=1}for(a=0;a<r;)this.boardArray[e][t+a]="o",a+=1}if("v"===a){let a=0;for(;a<r;){if(""!==this.boardArray[e+a][t])return"Error, cannot place here!";a+=1}for(a=0;a<r;)this.boardArray[e+a][t]="o",a+=1}}fireAt(r,e){!0===this.gameStatus&&("o"===this.boardArray[r][e]?this.boardArray[r][e]="x":""===this.boardArray[r][e]&&(this.boardArray[r][e]="m"),this.checkWin())}checkWin(){for(const r of this.boardArray)for(const e of r)if("o"===e)return;console.log("Game Over!"),this.gameStatus=!1}resetBoard(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]}}function e(r,e){let a=0;if("boardDisplay1"===e)for(;a<6;){let o=t(r,0,r.player1Board.boardArray);o.setAttribute("class",`row${a}`),document.querySelector(`#${e}`).appendChild(o),a+=1}if("boardDisplay2"===e)for(;a<6;){let o=t(r,1,r.player2Board.boardArray);o.setAttribute("class",`row${a}`),document.querySelector(`#${e}`).appendChild(o),a+=1}}function t(r,e,t){let o=0,s=document.createElement("div");for(;o<6;){let i=document.createElement("div");i.setAttribute("class",`column${o}`),i.addEventListener("click",(()=>{if(!1===r.fireMode){let o=i.className.slice(-1),s=i.parentNode.className.slice(-1);r.addShips(s,o,"v",e),a(e,t)}})),s.appendChild(i),o+=1}return s}function a(r,e){let t=0,a=0;for(;t<6;){for(a=0;a<6;){let o=document.querySelectorAll(`#boardDisplay${r+1} .row${t} .column${a}`);for(const r of o)r.innerText=e[t][a];a+=1}t+=1}}let o=new class{constructor(){this.player1Board=new r,this.player2Board=new r,this.boards=[this.player1Board,this.player2Board],this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1}startGame(){this.player1Board.gameStatus=!0,this.player2Board.gameStatus=!0,this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1,this.player1Board.resetBoard(),this.player2Board.resetBoard()}addShips(r,e,t,a){let o;!1===this.ship1[a]?o=3:!1===this.ship2[a]?o=4:!1===this.ship3[a]&&(o=5),!1!==this.checkLegalMove(a,r,e,o)&&(!1===this.ship1[a]?(this.boards[a].addShip(o,r,e,t),this.ship1[a]=!0):!1===this.ship2[a]?(this.boards[a].addShip(o,r,e,t),this.ship2[a]=!0):!1===this.ship3[a]&&(this.boards[a].addShip(o,r,e,t),this.ship3[a]=!0),console.log(this.boards[a].boardArray))}checkLegalMove(r,e,t,a){let o=0;for(;o<a;){if(""!==this.boards[r].boardArray[parseInt(e)+o][parseInt(t)])return!1;o+=1}return!0}};document.querySelector("#startGame").addEventListener("click",(()=>{o.startGame(prompt),document.querySelector("#boardDisplay1 ").innerHTML="",document.querySelector("#boardDisplay2 ").innerHTML="",e(o,"boardDisplay1"),e(o,"boardDisplay2")})),document.querySelector("#fireAt").addEventListener("click",(()=>{!function(r){r.fireMode=!0;let e=0,t=0;for(;e<6;){for(t=0;t<6;){let o=document.querySelectorAll(`#boardDisplay1 .row${e} .column${t}`);for(const s of o){let o=e,i=t;s.addEventListener("click",(()=>{!0===r.player1Board.gameStatus&&!0===r.player2Board.gameStatus&&(r.player1Board.fireAt(o,i),a(0,r.player1Board.boardArray))}))}t+=1}e+=1}for(e=0,t=0;e<6;){for(t=0;t<6;){let o=document.querySelectorAll(`#boardDisplay2 .row${e} .column${t}`);for(const s of o){let o=e,i=t;s.addEventListener("click",(()=>{!0===r.player1Board.gameStatus&&!0===r.player2Board.gameStatus&&(r.player2Board.fireAt(o,i),a(1,r.player2Board.boardArray))}))}t+=1}e+=1}}(o)}))})();