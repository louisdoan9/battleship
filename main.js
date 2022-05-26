(()=>{"use strict";class r{constructor(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]],this.gameStatus=!0}addShip(r,t,e,a){if(t=parseInt(t),e=parseInt(e),"h"===a&&this.checkMoveH(r,t,e))this.addShipH(r,t,e);else{if("v"!==a||!this.checkMoveV(r,t,e))throw"Error, cannot place here!";this.addShipV(r,t,e)}}addShipH(r,t,e){let a=0;for(;a<r;)this.boardArray[t][e+a]="o",a+=1}addShipV(r,t,e){let a=0;for(;a<r;)this.boardArray[t+a][e]="o",a+=1}checkMoveH(r,t,e){let a=0;for(;a<r;){if(""!==this.boardArray[t][e+a])return!1;a+=1}return!0}checkMoveV(r,t,e){let a=0;for(;a<r;){if(""!==this.boardArray[t+a][e])return!1;a+=1}return!0}fireAt(r,t){if(r>5||t>5||r<0||t<0)throw"Error, out of board";if(!0===this.gameStatus){if("o"===this.boardArray[r][t])this.boardArray[r][t]="x";else if(""===this.boardArray[r][t])this.boardArray[r][t]="m";else if("x"===this.boardArray[r][t]||"m"===this.boardArray[r][t])throw"You already shot here!";this.checkWin()}}checkWin(){for(const r of this.boardArray)for(const t of r)if("o"===t)return;console.log("Game Over!"),this.gameStatus=!1}resetBoard(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]}}function t(r){e(r,1,r.player2Board.boardArray),e(r,1,r.player2Board.boardArray),e(r,1,r.player2Board.boardArray)}function e(r,e,a){try{let t=function(){let r=Math.floor(2*Math.random());return 0===r?"v":1===r?"h":void 0}(),o=Math.floor(6*Math.random()),s=Math.floor(6*Math.random());r.addShips(s,o,t,e),i(e,a)}catch(e){t(r)}}function a(r){try{r.checkGameStatus()&&(Math.floor(9*Math.random())>5?function(r){let t=0;for(;t<6;){let e=0;for(;e<6;)if("o"!==r.player1Board.boardArray[t][e])e+=1;else{if("chosen"==(Math.floor(101*Math.random())<=5?"chosen":"not chosen"))return r.player1Board.fireAt(t,e),void i(0,r.player1Board.boardArray);e+=1}t+=1,6===t&&(t=0)}}(r):function(r){let t=Math.floor(6*Math.random()),e=Math.floor(6*Math.random());r.player1Board.fireAt(t,e),i(0,r.player1Board.boardArray)}(r))}catch(t){a(r)}}function o(r,t,e,a,o){if(!1===r.fireMode){let s=a.className.slice(-1),d=a.parentNode.className.slice(-1);r.addShips(d,s,o,t),i(t,e)}}function i(r,t,e=!1){let a=0,o=0;for(;a<6;){for(o=0;o<6;){let i=document.querySelectorAll(`#boardDisplay${r+1} .row${a} .column${o}`);for(const s of i)s.innerText="",0===r?(s.innerText=t[a][o],"x"===t[a][o]&&(s.style.backgroundColor="red")):1===r&&("o"!==t[a][o]&&(s.innerText=t[a][o]),!0===e&&(s.innerText=t[a][o]),"x"===t[a][o]&&(s.style.backgroundColor="green"));o+=1}a+=1}}function s(r,t,e,a,o,i){for(const s of r)s.addEventListener("click",(()=>{d(t,e,a,o,i)}))}function d(r,t,e,o,s){r.checkGameStatus()&&(t.fireAt(e,o),i(s,t.boardArray),a(r))}function n(r,t){let e=0;for(;e<6;){let a=h(r,t);a.setAttribute("class",`row${e}`),document.querySelector(`#${t}`).appendChild(a),e+=1}}function h(r,t){return"boardDisplay1"===t?l(r,0,r.player1Board.boardArray):"boardDisplay2"===t?l(r,1,r.player2Board.boardArray):void 0}function l(r,t,e){let a=0,o=document.createElement("div");for(;a<6;){let i=c(r,t,e,a);o.appendChild(i),a+=1}return o}function c(r,t,e,a){let i=document.createElement("div");return i.setAttribute("class",`column${a}`),i.addEventListener("click",(()=>{o(r,t,e,i,"v")})),i.addEventListener("contextmenu",(a=>{a.preventDefault(),o(r,t,e,i,"h")})),i}document.querySelector("#resetGame").addEventListener("click",(()=>{p(u)})),document.querySelector("#fireAt").addEventListener("click",(()=>{!function(r){let t;r.fireMode=!0;let e=0,a=0;for(;e<6;){for(a=0;a<6;)t=document.querySelectorAll(`#boardDisplay1 .row${e} .column${a}`),s(t,r,r.player1Board,e,a,0),t=document.querySelectorAll(`#boardDisplay2 .row${e} .column${a}`),s(t,r,r.player2Board,e,a,1),a+=1;e+=1}}(u)})),document.querySelector("#displayShipsAI").addEventListener("click",(()=>{i(1,u.player2Board.boardArray,!0)}));let u=new class{constructor(){this.player1Board=new r,this.player2Board=new r,this.boards=[this.player1Board,this.player2Board],this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1}startGame(){this.player1Board.gameStatus=!0,this.player2Board.gameStatus=!0,this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1,this.player1Board.resetBoard(),this.player2Board.resetBoard()}addShips(r,t,e,a){let o;return!1===this.ship1[a]?o=3:!1===this.ship2[a]?o=4:!1===this.ship3[a]&&(o=5),!1===this.ship1[a]?(this.boards[a].addShip(o,r,t,e),void(this.ship1[a]=!0)):!1===this.ship2[a]?(this.boards[a].addShip(o,r,t,e),void(this.ship2[a]=!0)):!1===this.ship3[a]?(this.boards[a].addShip(o,r,t,e),void(this.ship3[a]=!0)):void console.log(this.boards[a].boardArray)}checkGameStatus(){return!0===this.player1Board.gameStatus&&!0===this.player2Board.gameStatus}};function p(r){r.startGame(prompt),document.querySelector("#boardDisplay1 ").innerHTML="",document.querySelector("#boardDisplay2 ").innerHTML="",n(r,"boardDisplay1"),n(r,"boardDisplay2"),t(r)}p(u)})();